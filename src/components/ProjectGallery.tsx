// components/ProjectGallery.tsx
'use client'
import React from 'react';
import { MediaItem } from '../types';
import Image from 'next/image';
import ReactPlayer from 'react-player';

interface ProjectGalleryProps {
  media?: MediaItem[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ media }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {media && media.map((item, index) => (
        <div key={index} className="rounded overflow-hidden shadow-lg">
          {item.type === 'image' ? (
            <Image
              src={item.src}
              alt={item.alt || `Media ${index + 1}`}
              width={'10000'}
              height={'10000'}
              className="w-full h-auto object-cover"
            />
          ) : item.type === 'video' ? (
            // <Suspense fallback={<>Loading</>}>
              <ReactPlayer
                url={item.src}
                width={item.width}
                height={item.height}
                fallback={<>Loading</>}
                controls
              />
            // </Suspense>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;