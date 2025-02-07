export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface LinkItem {
  url: string;
  label: string;
}

export interface Links {
  github?: LinkItem[];
  demo?: LinkItem[];
  other?: LinkItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  gallery?: MediaItem[];
  links?: Links;
  keySkills: string[];
}