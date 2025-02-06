'use client';
import React, { useState } from 'react';
import { LinkItem } from '@/types';

export interface LinkSelectorProps {
  links: LinkItem[];
  icon: React.ReactNode;
}

const LinkSelector: React.FC<LinkSelectorProps> = ({ links, icon }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="relative inline-block"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        onClick={toggleOpen}
        onMouseDown={(e) => e.stopPropagation()}
        className="focus:outline-none"
      >
        {icon}
      </button>
      {open && (
        <div
          className="absolute z-10 mt-2 w-40 bg-white rounded shadow-lg"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(false);
                // Optionally, open the link in a new window manually:
                window.open(link.url, '_blank');
              }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkSelector;