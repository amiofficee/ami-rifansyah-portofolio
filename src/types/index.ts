import { IconType } from "react-icons";
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin?: string;
  github?: string;
  cv?: string;
  image?: string;
}

export interface TechStack {
  category: string;
  technologies: {
    name: string;
    icon: IconType;
    color: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  role: string;
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
} 