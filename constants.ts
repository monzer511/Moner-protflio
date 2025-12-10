import { UserProfile } from './types';

// NOTE: Since I cannot access the live LinkedIn URL directly due to security restrictions,
// I have created this placeholder data structure. You should replace this content 
// with the actual details from Monzer Tagaldeen's profile.

export const PROFILE_DATA: UserProfile = {
  name: "Monzer Tagaldeen",
  title: "Senior Full Stack Engineer",
  location: "Khartoum, Sudan", // Assumed based on name origin, please update
  email: "monzer.tagaldeen@example.com",
  about: "I am a passionate software engineer with a strong background in building scalable web applications. I specialize in the JavaScript ecosystem (React, Node.js) and have a keen eye for UI/UX design. I love solving complex problems and delivering high-quality code.",
  skills: [
    "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", 
    "PostgreSQL", "GraphQL", "Docker", "AWS", "Git", "Agile"
  ],
  experience: [
    {
      id: "1",
      role: "Senior Software Engineer",
      company: "Tech Innovations Ltd",
      period: "2022 - Present",
      description: [
        "Led a team of 5 developers in rebuilding the core legacy platform using React and Node.js.",
        "Improved application performance by 40% through code optimization and caching strategies.",
        "Implemented CI/CD pipelines reducing deployment time by 60%."
      ]
    },
    {
      id: "2",
      role: "Software Developer",
      company: "Digital Solutions Corp",
      period: "2019 - 2022",
      description: [
        "Developed full-stack features for a high-traffic e-commerce platform.",
        "Collaborated with designers to implement responsive user interfaces.",
        "Integrated third-party payment gateways like Stripe and PayPal."
      ]
    }
  ],
  projects: [
    {
      id: "1",
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers to track sales and inventory in real-time.",
      techStack: ["React", "Recharts", "Firebase"],
      image: "https://picsum.photos/600/400?random=1"
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team workspace features.",
      techStack: ["Next.js", "Socket.io", "MongoDB"],
      image: "https://picsum.photos/600/400?random=2"
    },
    {
      id: "3",
      title: "AI Content Generator",
      description: "An application leveraging generative AI to help marketers create social media posts.",
      techStack: ["React", "OpenAI API", "Tailwind"],
      image: "https://picsum.photos/600/400?random=3"
    }
  ],
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/monzer-tagaldeen-17624b23a/",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/",
      icon: "github"
    },
    {
      platform: "Email",
      url: "mailto:monzer.tagaldeen@example.com",
      icon: "mail"
    }
  ]
};

export const INITIAL_CHAT_MESSAGE = `Hi! I'm Monzer's AI assistant. I have access to his professional background. Ask me anything about his skills, experience, or projects!`;

export const SYSTEM_INSTRUCTION = `
You are a helpful and professional AI assistant for Monzer Tagaldeen's portfolio website.
Your goal is to answer questions about Monzer based STRICTLY on the following context.
Do not invent information. If the answer is not in the context, say you don't have that information but can provide his contact details.
Keep answers concise, professional, and friendly.

CONTEXT:
Name: ${PROFILE_DATA.name}
Title: ${PROFILE_DATA.title}
Location: ${PROFILE_DATA.location}
About: ${PROFILE_DATA.about}
Skills: ${PROFILE_DATA.skills.join(', ')}
Experience: ${PROFILE_DATA.experience.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}
Projects: ${PROFILE_DATA.projects.map(p => `${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}
Contact: ${PROFILE_DATA.email}
LinkedIn: ${PROFILE_DATA.socials.find(s => s.platform === 'LinkedIn')?.url}
`;
