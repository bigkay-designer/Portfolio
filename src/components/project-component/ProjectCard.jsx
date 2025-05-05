import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({
  project,
  variant = 'default', // 'default' | 'compact' | 'featured'
  className = '',
  onClick = null,
}) => {
  // Handle click if provided, otherwise use Link
  const CardWrapper = ({children}) => {
    if (onClick) {
      return (
        <button onClick={() => onClick(project)} className="text-left w-full">
          {children}
        </button>
      );
    }
    return project.link !== '#' ? (
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        {children}
      </Link>
    ) : (
      <div className="w-full">{children}</div>
    );
  };

  // Variant configurations
  const variants = {
    default: {
      container: 'h-full flex flex-col',
      image: 'h-48',
      content: 'p-6 flex-1',
      title: 'text-xl font-bold',
      description: 'mt-2 text-sm line-clamp-2',
    },
    compact: {
      container: 'h-full flex flex-col',
      image: 'h-32',
      content: 'p-4 flex-1',
      title: 'text-lg font-semibold',
      description: 'mt-1 text-xs line-clamp-2',
    },
    featured: {
      container: 'h-full flex flex-col group',
      image: 'h-64',
      content: 'p-6 flex-1',
      title: 'text-2xl font-bold',
      description: 'mt-3 text-base line-clamp-3',
    },
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <motion.div
      whileHover={{y: -5}}
      transition={{type: 'spring', stiffness: 400, damping: 10}}
      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ${className}`}
    >
      <CardWrapper>
        <div className={currentVariant.container}>
          {/* Image with gradient overlay */}
          <div className={`relative ${currentVariant.image} overflow-hidden`}>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                project.gradient || 'from-gray-900 to-gray-800'
              }`}
            />
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3
                className={`${currentVariant.title} ${
                  project.textColor || 'text-white'
                }`}
              >
                {project.title}
              </h3>
              {variant !== 'compact' && (
                <p
                  className={`text-sm ${
                    project.textColor === 'text-gray-800'
                      ? 'text-gray-700'
                      : 'text-gray-300'
                  }`}
                >
                  {project.role} • {project.year}
                </p>
              )}
            </div>
          </div>

          {/* Content */}
          <div className={currentVariant.content}>
            <p
              className={`${currentVariant.description} text-slate-600 dark:text-slate-300`}
            >
              {project.description}
            </p>

            {/* Tags - only shown in default and featured variants */}
            {(variant === 'default' || variant === 'featured') && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Tech stack - only shown in featured variant */}
            {variant === 'featured' && project.tech && (
              <div className="mt-4">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer - only shown in default variant */}
          {variant === 'default' && (
            <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {project.period}
              </span>
              {project.link !== '#' && (
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline">
                  View Project
                </span>
              )}
            </div>
          )}
        </div>
      </CardWrapper>
    </motion.div>
  );
};

export default ProjectCard;
