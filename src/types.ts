// types.ts
export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface Links {
  github?: string;
  demo?: string;
  other?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  gallery: MediaItem[];
  links: Links;
  keySkills?: string[];
}