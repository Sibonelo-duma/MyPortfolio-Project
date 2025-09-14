import React from 'react';
// FIX: Import Certification type to be used in the new CERTIFICATIONS constant.
import type { Project, SkillCategory, Certification } from './types';

const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
  </svg>
);

const SentimentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 9.75h.008v.008H9V9.75Zm6 0h.008v.008H15V9.75Z" />
  </svg>
);

const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 2.25 12v-1.5a3.375 3.375 0 0 0 3.375-3.375H15M2.25 12h3.375m13.5 0h3.375m-3.375 0a3.375 3.375 0 0 1-3.375-3.375V7.5c0-1.864 1.51-3.375 3.375-3.375h1.5c1.865 0 3.375 1.511 3.375 3.375v1.5c0 1.864-1.51 3.375-3.375 3.375H19.5Z" />
  </svg>
);

const BookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 18 18.25v-14.25c-1.052-.332-2.062-.512-3-.512-3.18 0-5.714 2.503-6 5.802Z" />
  </svg>
);

export const PROJECTS: Project[] = [
    {
        title: 'AI Chatbot for Customer Support',
        description: 'A conversational AI agent built to handle customer queries, provide instant support for FAQs, troubleshoot common issues, and intelligently escalate complex cases to human agents, improving user experience and operational efficiency.',
        aiUsed: ['Natural Language Understanding (NLU)', 'Dialog Management', 'Intent Recognition', 'Google Gemini'],
        techStack: ['Python', 'Google Gemini API', 'Flask', 'React', 'WebSocket', 'PostgreSQL'],
        demoUrl: 'https://www.chatbase.co/chatbot-iframe/M_GGtJb9MHRjkaraH10Ov',
        codeUrl: '#',
        result: 'Decreased customer support ticket volume by 40% and improved average response time from 5 minutes to instantaneous for common queries.',
        icon: <ChatIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
        media: [
          { type: 'image', url: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'A user interacting with a customer support chatbot on a laptop screen.' },
          { type: 'image', url: 'https://images.unsplash.com/photo-1620712943543-26fc76357457?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'Abstract visualization of AI communication and data processing.' },
        ],
    },
    {
        title: 'Sentiment Analysis Engine',
        description: 'A powerful tool designed to analyze customer feedback from various sources (reviews, social media, surveys) to determine sentiment (positive, negative, neutral). It provides businesses with actionable insights into customer satisfaction and brand perception.',
        aiUsed: ['Natural Language Processing (NLP)', 'Sentiment Classification', 'Feature Extraction', 'Machine Learning Models'],
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'NLTK', 'Flask', 'React'],
        demoUrl: 'https://b27twzkhwqor.trickle.host/',
        codeUrl: '#',
        result: 'Provided a 90% accuracy in classifying sentiment, enabling a client to improve their product strategy by addressing key areas of negative feedback.',
        icon: <SentimentIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
        media: [
          { type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'Dashboard displaying sentiment analysis results with charts and graphs.' },
          { type: 'image', url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'Collage of social media icons representing sources of customer feedback.' },
        ],
    },
    {
        title: 'Autonomous Vehicle Simulation',
        description: 'Developed a simulation environment for training and testing self-driving car algorithms. The system uses reinforcement learning to teach an agent to navigate complex urban environments, avoiding obstacles and obeying traffic laws.',
        aiUsed: ['Reinforcement Learning (RL)', 'Computer Vision', 'Pathfinding Algorithms', 'Sensor Fusion'],
        techStack: ['C++', 'Python', 'Unreal Engine', 'ROS', 'PyTorch'],
        demoUrl: 'https://alerttriderapp.onrender.com/',
        codeUrl: '#',
        result: 'Achieved a 95% success rate in simulated driving tests, significantly reducing the need for expensive and time-consuming real-world testing.',
        icon: <CarIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
        media: [
           { type: 'image', url: 'https://images.unsplash.com/photo-1616400311496-7a8d712c1b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'A computer screen showing lines of code for an autonomous vehicle system.' },
           { type: 'image', url: 'https://images.unsplash.com/photo-1503793405333-a8a2512a2e4f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'Close-up of a sensor on a self-driving car.' },
        ],
    },
    {
        title: 'Intelligent Document Summarizer',
        description: 'An AI-powered tool that automatically generates concise and coherent summaries of long documents, such as research papers, legal contracts, and news articles. It utilizes advanced NLP models to understand context and extract key information.',
        aiUsed: ['Text Summarization (Extractive & Abstractive)', 'Transformer Models (BERT)', 'Topic Modeling'],
        techStack: ['Python', 'Hugging Face', 'Flask', 'Docker', 'Next.js'],
        demoUrl: '#',
        codeUrl: '#',
        result: 'Reduced document review time for users by an average of 70%, enabling faster decision-making and improved productivity.',
        icon: <BookIcon className="w-8 h-8 text-indigo-400 flex-shrink-0" />,
        media: [
          { type: 'image', url: 'https://images.unsplash.com/photo-1583341612448-5223c25b3e6c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'A user interacting with the document summarizer interface on a tablet.' },
          { type: 'image', url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3', alt: 'A collection of books and a laptop, symbolizing research and document analysis.' },
        ],
    },
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'HTML/CSS'],
    },
    {
        name: 'AI/ML Frameworks',
        skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'Keras', 'Pandas', 'NumPy'],
    },
    {
        name: 'Web Technologies',
        skills: ['React', 'Node.js', 'Next.js', 'Flask', 'REST APIs', 'Docker', 'PostgreSQL'],
    },
    {
        name: 'Developer Tools',
        skills: ['Git & GitHub', 'VS Code', 'Jupyter', 'Linux/Unix', 'CI/CD', 'Agile/Scrum'],
    },
];

// FIX: New constant for certifications, using the new Certification type
export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Diploma in Information Technology',
    subtitle: 'Communication Networks',
    issuer: 'Mangosuthu University of Technology',
    date: 'Issued May 2023',
    imageUrl: 'https://capeitinitiative-my.sharepoint.com/:b:/g/personal/sibonelo_duma_capaciti_org_za/ET3wv4wVpPdLhidbN-R-W5gBsF91eCdmKyVnOdBUCFtvUw?e=kf4omR',
    url: 'https://capeitinitiative-my.sharepoint.com/:b:/g/personal/sibonelo_duma_capaciti_org_za/ET3wv4wVpPdLhidbN-R-W5gBsF91eCdmKyVnOdBUCFtvUw?e=kf4omR',
  },
  {
    title: 'Artificial Intelligence (AI) Bootcamp',
    subtitle: 'Comprehensive AI Training',
    issuer: 'Uvu Africa',
    date: 'Issued Jun 2024',
    imageUrl: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EfdJzrORE4JJlTDQuWdBZeMBmCXTRTPbgIsK9h19MHYkOg?e=5TAa9N',
    url: 'https://drive.google.com/file/d/19hFikBM3VVESKXo1j8Y94hVbXQCMU48M/view?usp=drive_link',
  },
  {
    title: 'Artificial Intelligence Essentials v2',
    subtitle: 'Foundational AI Concepts',
    issuer: 'Cisco',
    date: 'Issued May 2024',
    imageUrl: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUykUsFSZvBJvB5sX_nBo1YBjEOfvEPl4lMA5leGbBW3hA?e=yCR5LX',
    url: 'https://drive.google.com/file/d/1P1OI5xcZy70TzrjFE1b1Izv_UZ-whCYA/view?usp=drive_link',
  },
  {
    title: 'Python for Data Science and AI',
    subtitle: 'Programming for AI Applications',
    issuer: 'Coursera',
    date: 'Issued May 2024',
    imageUrl: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Efj0wUW_jDhFoF5SKtUiPCUBfUC-p68PMV3EI9Fgt8lEeA?e=EnzAYy',
    url: 'https://drive.google.com/file/d/1y2nwGmaVxI6drG0w11eTgiJDmz6xy20v/view?usp=drive_link',
  },
    {
    title: 'Professional Development',
    subtitle: 'Work Readiness Program',
    issuer: 'Uvu Africa',
    date: 'Issued Jan 2024',
    imageUrl: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUK4usH0u59FvtckPro8d14BLdX7cq166p-3aj5fpardUg?e=J8shKa',
    url: 'https://drive.google.com/file/d/1Yi4DQ3avfnsqTo7Z_Y7I3EwiyWTXnNPx/view?usp=drive_link',
  },
];
