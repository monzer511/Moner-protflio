import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Interface for AI Studio window augmentation
declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const apiKey = process.env.API_KEY || ''; 

// We initialize the client inside the function to ensure we capture the key if it's set later
const getClient = () => {
  // Always create a new instance to ensure we use the potentially updated key from process.env
  // which might be injected by the environment after the user selects a key.
  const currentKey = process.env.API_KEY || apiKey;
  if (!currentKey) return null;
  return new GoogleGenAI({ apiKey: currentKey });
};

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  const ai = getClient();
  
  if (!ai) {
    return "I'm sorry, my brain (API Key) is missing! Please configure the API_KEY in the environment.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "I didn't catch that, could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};

export const generatePortfolioImage = async (
  prompt: string, 
  size: '1K' | '2K' | '4K'
): Promise<string | null> => {
  // 1. Check for API Key Selection (Required for gemini-3-pro-image-preview)
  if (window.aistudio) {
    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        // We assume the user selected a key if the dialog closes; proceed to generation.
      }
    } catch (e) {
      console.error("Error checking API key status:", e);
    }
  }

  // 2. Initialize Client with (potentially new) key
  const ai = getClient();
  if (!ai) {
    throw new Error("API Key is missing. Please select a paid API key to use this feature.");
  }

  try {
    // 3. Call generateContent with image-specific config
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          imageSize: size,
          aspectRatio: "16:9", // Landscape for portfolio look
        }
      }
    });

    // 4. Extract Image from Response
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    
    return null;

  } catch (error: any) {
    console.error("Image generation error:", error);
    
    // Handle "Requested entity was not found" which usually means the key isn't valid for this model
    // or the selection state is stale.
    if (error.message?.includes("Requested entity was not found") && window.aistudio) {
      try {
        await window.aistudio.openSelectKey();
        // Recursive retry or just let the user know to try again could be options. 
        // For now, throw specific error to UI.
        throw new Error("Please select a valid paid API key and try again.");
      } catch (e) { /* ignore */ }
    }
    
    throw error;
  }
};
