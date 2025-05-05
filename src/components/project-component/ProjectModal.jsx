import {useState} from 'react';

import {motion, AnimatePresence} from 'framer-motion';

function ProjectModal() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      {/* Enhanced Project Modal with 3D-like depth */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{scale: 0.95, y: 20, opacity: 0}}
              animate={{scale: 1, y: 0, opacity: 1}}
              exit={{scale: 0.95, y: 20, opacity: 0}}
              transition={{type: 'spring', damping: 25, stiffness: 300}}
              className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col"
            >
              {/* Modal header with glass effect */}
              <div className="sticky top-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-700 p-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Project Deep Dive
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5 text-slate-500 dark:text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal content with scrollable area */}
              <div className="overflow-y-auto flex-1">
                {/* Project hero with parallax effect */}
                <div className="relative h-72 w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                  <motion.img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    initial={{scale: 1.1}}
                    animate={{scale: 1}}
                    transition={{duration: 0.8}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                          {selectedProject.title}
                        </h3>
                        <p className="text-cyan-300 mt-1">
                          {selectedProject.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                          {selectedProject.period}
                        </span>
                        {selectedProject.link && (
                          <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-sm flex items-center gap-1 transition-colors"
                          >
                            Live Demo
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Project overview with animated underline */}
                  <div className="mb-10">
                    <motion.h4
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.1}}
                      className="text-2xl font-bold text-slate-800 dark:text-white mb-4 inline-block relative"
                    >
                      Project Overview
                      <motion.span
                        initial={{scaleX: 0}}
                        animate={{scaleX: 1}}
                        transition={{duration: 0.6, delay: 0.3}}
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
                      />
                    </motion.h4>
                    <motion.p
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{delay: 0.4}}
                      className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      {selectedProject.description}
                    </motion.p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Key achievements with animated list */}
                    <div>
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"
                      >
                        <div className="p-1.5 rounded-lg bg-cyan-500/10">
                          <svg
                            className="w-5 h-5 text-cyan-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        Key Achievements
                      </motion.h4>
                      <ul className="space-y-4">
                        {selectedProject.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{opacity: 0, x: -10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.3 + i * 0.1}}
                            className="flex items-start bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700"
                          >
                            <span className="flex-shrink-0 mt-1 mr-3">
                              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            </span>
                            <span className="text-slate-600 dark:text-slate-300">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack with animated bubbles */}
                    <div>
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"
                      >
                        <div className="p-1.5 rounded-lg bg-purple-500/10">
                          <svg
                            className="w-5 h-5 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        Technology Stack
                      </motion.h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.techStack.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: 0.4 + i * 0.05}}
                            whileHover={{y: -3}}
                            className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm flex items-center gap-2 shadow-sm border border-slate-200 dark:border-slate-600"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                            {tech}
                          </motion.div>
                        ))}
                      </div>

                      {/* Impact metrics with animated bars */}
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        className="text-xl font-bold text-slate-800 dark:text-white mt-8 mb-5 flex items-center gap-2"
                      >
                        <div className="p-1.5 rounded-lg bg-pink-500/10">
                          <svg
                            className="w-5 h-5 text-pink-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        </div>
                        Project Impact
                      </motion.h4>
                      <div className="space-y-4">
                        {selectedProject.impact.map((impact, i) => (
                          <motion.div
                            key={i}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6 + i * 0.1}}
                            className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                Impact #{i + 1}
                              </div>
                              <div className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 rounded-full">
                                +{Math.floor(Math.random() * 100)}%
                              </div>
                            </div>
                            <div className="font-medium text-slate-800 dark:text-white">
                              {impact}
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                              <motion.div
                                initial={{scaleX: 0}}
                                animate={{scaleX: 1}}
                                transition={{
                                  delay: 0.7 + i * 0.1,
                                  duration: 0.8,
                                }}
                                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
                                style={{width: `${70 + i * 10}%`}}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal footer with CTA */}
              {selectedProject.link && (
                <div className="sticky bottom-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Ready to explore this project?
                    </div>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                      View Live Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectModal;
