export interface Project {
  title: string;
  description: string;
  aiUsed: string[];
  techStack: string[];
  demoUrl: string;
  codeUrl: string;
  result: string;
  icon: React.ReactElement;
  media?: {
    type: 'image' | 'video';
    url: string;
    alt: string;
  }[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

// FIX: Add Certification interface to resolve type error in CertificationCard.tsx
export interface Certification {
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  imageUrl: string;
  url?: string;
}
