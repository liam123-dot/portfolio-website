'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';
import LinkSelector from '@/components/LinkSelector';
import { projects } from '@/projects';

const ProjectDetail: React.FC = () => {
  // Retrieve dynamic route parameters using the new hook.
  const { id } = useParams() as { id: string };
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto p-8">
        <p className="text-gray-900 dark:text-white">Project not found.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-blue-500 hover:underline">
          &larr; Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <p className="my-2 text-gray-700 dark:text-gray-300">
          {project.detailedDescription}
        </p>
        {project.technicalDescription && (
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Technical Description: </span>
            {project.technicalDescription}
          </p>
        )}
        {project.keySkills && project.keySkills.length > 0 && (
          <div className="mb-3">
            <h3 className="text-sm text-gray-700 dark:text-gray-300 mb-1">
              Key Skills:
            </h3>
            <div className="flex flex-wrap gap-1">
              {project.keySkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs font-normal px-1 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.links && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Links
            </h2>
            <div className="flex space-x-4">
              {/* GitHub Links */}
              {project.links?.github && project.links.github.length > 0 &&
                (project.links.github.length === 1 ? (
                  <Link
                    href={project.links.github[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* GitHub Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.483 2 12.02c0 4.424 2.865 8.17 6.839 9.504.5.092.682-.217.682-.483 
                          0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.163-1.11-1.474-1.11-1.474-.908-.62.069-.607.069-.607 
                          1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.95 
                          0-1.093.39-1.987 1.03-2.687-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 
                          1.705.115 2.504.337 1.91-1.297 2.75-1.026 2.75-1.026.547 1.376.203 2.393.1 2.646.64.7 
                          1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.308.679.917.679 1.85 
                          0 1.334-.012 2.411-.012 2.739 0 .268.18.58.688.481A10.025 10.025 0 0022 12.02C22 6.483 17.523 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                ) : (
                  <LinkSelector
                    links={project.links.github}
                    icon={
                      <svg
                        className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.483 2 12.02c0 4.424 2.865 8.17 6.839 9.504.5.092.682-.217.682-.483 
                            0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.163-1.11-1.474-1.11-1.474-.908-.62.069-.607.069-.607 
                            1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.112-4.555-4.95 
                            0-1.093.39-1.987 1.03-2.687-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 
                            1.705.115 2.504.337 1.91-1.297 2.75-1.026 2.75-1.026.547 1.376.203 2.393.1 2.646.64.7 
                            1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.308.679.917.679 1.85 
                            0 1.334-.012 2.411-.012 2.739 0 .268.18.58.688.481A10.025 10.025 0 0022 12.02C22 6.483 17.523 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  />
                ))
              }

              {/* Demo Links */}
              {project.links?.demo && project.links.demo.length > 0 &&
                (project.links.demo.length === 1 ? (
                  <Link
                    href={project.links.demo[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </Link>
                ) : (
                  <LinkSelector
                    links={project.links.demo}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    }
                  />
                ))
              }

              {/* Other Links */}
              {project.links?.other && project.links.other.length > 0 &&
                (project.links.other.length === 1 ? (
                  <Link
                    href={project.links.other[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 3H5a2 2 0 00-2 2v12a2 2 0 002 2h9a2 2 0 002-2v-3h-2v3H5V5h9v3h2V5a2 2 0 00-2-2z" />
                      <path d="M22 7h-8a2 2 0 00-2 2v7h2v-7h8v7h2v-7a2 2 0 00-2-2z" />
                    </svg>
                  </Link>
                ) : (
                  <LinkSelector
                    links={project.links.other}
                    icon={
                      <svg
                        className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 3H5a2 2 0 00-2 2v12a2 2 0 002 2h9a2 2 0 002-2v-3h-2v3H5V5h9v3h2V5a2 2 0 00-2-2z" />
                        <path d="M22 7h-8a2 2 0 00-2 2v7h2v-7h8v7h2v-7a2 2 0 00-2-2z" />
                      </svg>
                    }
                  />
                ))
              }
            </div>
          </section>
        )}
        {project.gallery && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Gallery
            </h2>
            <ProjectGallery media={project.gallery} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;