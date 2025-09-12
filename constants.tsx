import React from 'react';
// FIX: Import Certification type to be used in the new CERTIFICATIONS constant.
import type { Project, SkillCategory, Certification } from './types';

const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.455.09-.934.09-1.425v-2.134c0-2.614.223-5.04.64-7.221a9.026 9.026 0 0 1 8.84-6.332c4.97 0 9 3.694 9 8.25Z" />
  </svg>
);

const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 2.25 12v-1.5a3.375 3.375 0 0 0 3.375-3.375H15M2.25 12h3.375m13.5 0h3.375m-3.375 0a3.375 3.375 0 0 1-3.375-3.375V7.5c0-1.864 1.51-3.375 3.375-3.375h1.5c1.865 0 3.375 1.511 3.375 3.375v1.5c0 1.864-1.51 3.375-3.375 3.375H19.5Z" />
  </svg>
);

const BookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

const FutureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const PROJECTS: Project[] = [
  {
    title: "AI ALERT RIDER",
    description: "AlertRider. An innovative mobile application that uses AI and computer vision to enhance motorcycle rider safety. It analyzes the phone's camera feed in real-time to detect potential road hazards, monitor blind spots, and provide audible alerts to the rider.",
    aiUsed: ["Computer Vision", "Real-time Object Detection", "Hazard Recognition", "Audible Alert Generation"],
    techStack: ["Python", "OpenCV", "TensorFlow Lite", "React Native", "Node.js"],
    demoUrl: "https://alerttriderapp.onrender.com/",
    codeUrl: "#",
    result: "Developed a prototype that identifies common road hazards with over 90% accuracy in simulated environments, showcasing the potential to significantly reduce rider accidents.",
    icon: <CarIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
    media: [
      { type: 'image', url: 'https://picsum.photos/seed/motorcycle/800/450', alt: 'A view from the rider\'s perspective on a road.' },
      { type: 'image', url: 'https://picsum.photos/seed/roadhazard/800/450', alt: 'Example of hazard detection overlay.' }
    ]
  },
  {
    title: "Sentiment Analysis System - Text Tone Analyzer",
    description: "A web-based tool that analyzes user-provided text to determine its emotional tone. The system classifies text as positive, negative, or neutral, providing valuable insights for businesses monitoring brand perception, customer feedback, and social media engagement.",
    aiUsed: ["Natural Language Processing (NLP)", "Sentiment Classification", "Text Preprocessing", "Machine Learning Modeling"],
    techStack: ["Python", "Flask", "NLTK", "Scikit-learn", "React", "Tailwind CSS"],
    demoUrl: "https://b27twzkhwqor.trickle.host/",
    codeUrl: "#",
    result: "Achieved a classification accuracy of 92% on a benchmark dataset of customer reviews, providing a reliable tool for automated sentiment analysis.",
    icon: <BookIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
    media: [
      { type: 'image', url: 'https://picsum.photos/seed/sentiment/800/450', alt: 'Dashboard showing sentiment analysis results.' },
      { type: 'image', url: 'https://picsum.photos/seed/textanalysis/800/450', alt: 'Example of text being analyzed for tone.' }
    ]
  },
  {
    title: "AI-Powered Customer Support Chatbot",
    description: "A sophisticated chatbot designed to handle customer inquiries, process orders, and provide support. It leverages Natural Language Understanding (NLU) to interpret user intent and deliver accurate, context-aware responses.",
    aiUsed: ["Natural Language Processing (NLP)", "Intent Recognition", "Sentiment Analysis", "Dialog Management"],
    techStack: ["React", "Node.js", "FastAPI", "Python", "Google Gemini"],
    demoUrl: "#",
    codeUrl: "#",
    result: "Reduced customer support response time by 60% and increased user satisfaction by improving the availability and consistency of support.",
    icon: <ChatIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
    media: [
      { type: 'image', url: 'https://picsum.photos/seed/chatbot/800/450', alt: 'Chatbot interface showing a conversation.' },
      { type: 'image', url: 'https://picsum.photos/seed/chatbot2/800/450', alt: 'Analytics dashboard for the chatbot.' }
    ]
  },
  {
    title: "This AI-Assisted Portfolio Website",
    description: "A personal portfolio website built from the ground up with the assistance of Google's Gemini. I directed the AI to generate React components, structure the project, and apply styling with Tailwind CSS, showcasing effective human-AI collaboration.",
    aiUsed: ["Code Generation", "Component Scaffolding", "Content Suggestions", "Debugging Assistance"],
    // FIX: Changed "Gemini Pro" to "Google Gemini" to adhere to guidelines.
    techStack: ["React", "TypeScript", "Tailwind CSS", "Google Gemini"],
    demoUrl: "#",
    codeUrl: "#",
    result: "Rapidly developed a fully responsive, modern portfolio website, demonstrating the power of AI as a productivity multiplier in software development.",
    icon: <FutureIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />
  }
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        name: "AI / Machine Learning",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLP", "Computer Vision"]
    },
    {
        name: "Programming Languages",
        skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL"]
    },
    {
        name: "Web & Backend",
        skills: ["React", "Node.js", "FastAPI", "HTML/CSS", "Tailwind CSS", "REST APIs"]
    },
    {
        name: "Tools & Platforms",
        skills: ["Git", "GitHub", "Docker", "Google Cloud Platform", "Vercel", "Jupyter Notebook"]
    }
];

// FIX: Add CERTIFICATIONS constant to resolve import error in components/Certifications.tsx
export const CERTIFICATIONS: Certification[] = [
  {
    title: "Diploma in Information Technology",
    subtitle: "Specialization in Communication Networks",
    issuer: "Mangosuthu University of Technology",
    date: "2023",
    imageUrl: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/sibonelo_duma_capaciti_org_za/ERxLQdV1P91JqamugAqn_g8BxRpCojdOCbGmvKTq7PDjcA?e=BDciZh",
    url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/sibonelo_duma_capaciti_org_za/ERxLQdV1P91JqamugAqn_g8BxRpCojdOCbGmvKTq7PDjcA?e=BDciZh&download=1"
  },
  {
    title: "Artificial Intelligence (AI) Bootcamp",
    subtitle: "Intensive training on AI concepts and applications",
    issuer: "Capaciti",
    date: "2025",
    imageUrl: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EfdJzrORE4JJlTDQuWdBZeMBmCXTRTPbgIsK9h19MHYkOg?e=YG53n3",
    url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EfdJzrORE4JJlTDQuWdBZeMBmCXTRTPbgIsK9h19MHYkOg?e=YG53n3&download=1"
  },
  {
    title: "Artificial Intelligence Essentials v2",
    subtitle: "Certification on AI Fundamentals",
    issuer: "Certiport",
    date: "2025",
    imageUrl: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUykUsFSZvBJvB5sX_nBo1YBjEOfvEPl4lMA5leGbBW3hA?e=apQv9Q",
    url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUykUsFSZvBJvB5sX_nBo1YBjEOfvEPl4lMA5leGbBW3hA?e=apQv9Q&download=1"
  },
  {
    title: "Python for Data Science and AI",
    subtitle: "Foundational Python skills for AI development",
    issuer: "Coursera",
    date: "2025",
    imageUrl: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Efj0wUW_jDhFoF5SKtUiPCUBfUC-p68PMV3EI9Fgt8lEeA?e=v7fI2r",
    url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Efj0wUW_jDhFoF5SKtUiPCUBfUC-p68PMV3EI9Fgt8lEeA?e=v7fI2r&download=1"
  },
  {
    title: "Professional Development",
    subtitle: "Soft skills for the modern workplace",
    issuer: "Capaciti",
    date: "2025",
    imageUrl: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUK4usH0u59FvtckPro8d14BLdX7cq166p-3aj5fpardUg?e=2AoEKX",
    url: "https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUK4usH0u59FvtckPro8d14BLdX7cq166p-3aj5fpardUg?e=2AoEKX&download=1"
  }
];