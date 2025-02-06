'use client';
import React from 'react';
import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Combine all available links into one array.
  const allLinks: { url: string; label: string }[] = [];
  if (project.links?.github) allLinks.push(...project.links.github);
  if (project.links?.demo) allLinks.push(...project.links.demo);
  if (project.links?.other) allLinks.push(...project.links.other);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition transform duration-200 hover:shadow-xl hover:scale-105">
      <div className="p-6">
        {/* Only the title is wrapped in a Link to navigate to the project page */}
        <Link href={`/projects/${project.id}`} className="inline-block hover:underline">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h2>
        </Link>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

        {/* Key Skills Section */}
        {project.keySkills && project.keySkills.length > 0 && (
          <div className="mb-3">
            <h3 className="text-sm text-gray-700 dark:text-gray-300 mb-1">Key Skills:</h3>
            <div className="flex flex-wrap gap-1">
              {project.keySkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-normal px-1 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links Section */}

        {allLinks && allLinks.length > 0 && (

          <div className="mt-4 text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">Links:</p>
            <ul className="flex flex-wrap gap-2">
              {allLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        )}
      </div>
    </div>
  );
};

export default ProjectCard;