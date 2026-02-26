/**
 * Shared TypeScript types and interfaces
 * Export all common types used across client and server
 */

// Example type structure for your portfolio
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

// Add more types as needed
