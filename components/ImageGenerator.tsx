import React, { useState } from 'react';
import { Image as ImageIcon, Wand2, Loader2, Download, AlertCircle } from 'lucide-react';
import { generatePortfolioImage } from '../services/geminiService';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageBase64 = await generatePortfolioImage(prompt, size);
      if (imageBase64) {
        setGeneratedImage(imageBase64);
      } else {
        setError("No image was generated. Please try a different prompt.");
      }
    } catch (err: any) {
      setError(err.message || "Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-studio" className="py-16 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">AI Studio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Generate Ideas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            Experience the power of Gemini 3 Pro. Describe a concept and watch it come to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-slate-300 mb-2">
                  Image Prompt
                </label>
                <textarea
                  id="prompt"
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="E.g., A futuristic workspace with holographic displays and plants, cyberpunk style..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Resolution
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['1K', '2K', '4K'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        size === s
                          ? 'bg-primary text-white shadow-lg shadow-primary/25'
                          : 'bg-slate-900 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="-ml-1 mr-2 h-5 w-5" />
                    Generate Image
                  </>
                )}
              </button>
              
              <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                <p className="text-xs text-slate-400 flex items-start gap-2">
                   <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                   <span>This feature uses <strong>gemini-3-pro-image-preview</strong> and requires a paid API key. You will be prompted to select one.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="relative group">
            <div className={`aspect-video w-full rounded-2xl overflow-hidden border-2 ${generatedImage ? 'border-primary/50' : 'border-slate-700 border-dashed'} bg-slate-800/50 flex items-center justify-center relative transition-all`}>
              
              {generatedImage ? (
                <>
                  <img
                    src={generatedImage}
                    alt="AI Generated"
                    className="w-full h-full object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <a
                      href={generatedImage}
                      download={`monzer-ai-${Date.now()}.png`}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <Download className="-ml-1 mr-2 h-5 w-5" />
                      Download Image
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center p-6">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-slate-800 border border-slate-700 mb-4">
                    <ImageIcon className="h-8 w-8 text-slate-500" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-300">No image generated yet</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Enter a prompt and hit generate to see the magic.
                  </p>
                </div>
              )}
              
              {isLoading && (
                 <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                    <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                    <p className="text-primary font-medium animate-pulse">Creating your masterpiece...</p>
                 </div>
              )}
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-900/20 border border-red-900/50 rounded-lg flex items-center gap-3 text-red-200">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;
