import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const ProjectCard = ({
  project,
  variant = 'default', // 'default' | 'compact' | 'featured'
  className = '',
  onClick,
}) => {
  // Variant configurations
  const variants = {
    default: {
      container: 'h-full flex flex-col rounded-xl  dark:border-slate-700',
      image: 'h-48',
      content: 'p-6',
      title: 'text-xl font-bold',
      description: 'text-sm line-clamp-2',
      tagSize: 'text-xs',
      impactCount: 2,
    },
    compact: {
      container: 'h-full flex-col border-none',
      image: 'h-32',
      content: 'p-4',
      title: 'text-lg font-semibold',
      description: 'text-xs line-clamp-2',
      tagSize: 'text-[0.65rem]',
      impactCount: 1,
    },
    featured: {
      container:
        'h-full flex-col group border-2 border-slate-300 dark:border-slate-600',
      image: 'h-64',
      content: 'p-8',
      title: 'text-2xl font-bold',
      description: 'text-base line-clamp-3',
      tagSize: 'text-sm',
      impactCount: 3,
    },
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <motion.div
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${currentVariant.container} ${className}`}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.3}}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Image section */}
        <div className={`relative ${currentVariant.image} overflow-hidden`}>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full rounded-xl  object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

          {/* Tags */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`${currentVariant.tagSize} px-2 py-1 font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full backdrop-blur-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content section */}
        <div
          className={`${currentVariant.content} flex flex-col justify-between h-[calc(100%-var(--image-height))]`}
        >
          <div>
            <h3
              className={`${currentVariant.title} text-slate-800 dark:text-white mb-2`}
            >
              {project.title}
            </h3>
            <p
              className={`${currentVariant.description} text-slate-600 dark:text-slate-300`}
            >
              {project.description}
            </p>
          </div>

          {/* Impact metrics */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.impact
              .slice(0, currentVariant.impactCount)
              .map((impact, i) => (
                <span
                  key={i}
                  className={`${currentVariant.tagSize} px-2 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-full`}
                >
                  {impact}
                </span>
              ))}
            {project.impact.length > currentVariant.impactCount && (
              <span
                className={`${currentVariant.tagSize} px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full`}
              >
                +{project.impact.length - currentVariant.impactCount} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
