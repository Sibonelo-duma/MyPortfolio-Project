import React from 'react';
// FIX: Import Certification type to be used in the new CERTIFICATIONS constant.
import type { Project, SkillCategory, Certification } from './types';
import { ChatIcon, SentimentIcon, CarIcon, BookIcon } from './components/Icons';

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
    url: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EfdJzrORE4JJlTDQuWdBZeMBmCXTRTPbgIsK9h19MHYkOg?e=5TAa9N',
  },
  {
    title: 'Artificial Intelligence Essentials v2',
    subtitle: 'Foundational AI Concepts',
    issuer: 'Cisco',
    date: 'Issued May 2024',
    imageUrl: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUykUsFSZvBJvB5sX_nBo1YBjEOfvEPl4lMA5leGbBW3hA?e=yCR5LX',
    url: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUykUsFSZvBJvB5sX_nBo1YBjEOfvEPl4lMA5leGbBW3hA?e=yCR5LX',
  },
  {
    title: 'Python for Data Science and AI',
    subtitle: 'Programming for AI Applications',
    issuer: 'Coursera',
    date: 'Issued May 2024',
    imageUrl: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Efj0wUW_jDhFoF5SKtUiPCUBfUC-p68PMV3EI9Fgt8lEeA?e=EnzAYy',
    url: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/Efj0wUW_jDhFoF5SKtUiPCUBfUC-p68PMV3EI9Fgt8lEeA?e=EnzAYy',
  },
    {
    title: 'Professional Development',
    subtitle: 'Work Readiness Program',
    issuer: 'Uvu Africa',
    date: 'Issued Jan 2024',
    imageUrl: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUK4usH0u59FvtckPro8d14BLdX7cq166p-3aj5fpardUg?e=J8shKa',
    url: 'https://capeitinitiative.sharepoint.com/:i:/s/AdvancedDigitalSkills4/EUK4usH0u59FvtckPro8d14BLdX7cq166p-3aj5fpardUg?e=J8shKa',
  },
];