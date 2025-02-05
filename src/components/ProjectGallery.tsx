// components/ProjectGallery.tsx
import React from 'react';
import { MediaItem } from '../types';

interface ProjectGalleryProps {
  media: MediaItem[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ media }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {media.map((item, index) => (
        <div key={index} className="rounded overflow-hidden shadow-lg">
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={item.alt || `Media ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          ) : item.type === 'video' ? (
            <video controls className="w-full h-auto">
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;