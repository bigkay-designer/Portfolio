import {AnimatePresence, motion} from 'framer-motion';
import {
  FiExternalLink,
  FiGithub,
  FiClock,
  FiUsers,
  FiLayers,
} from 'react-icons/fi';

const ProjectModal = ({selectedProject, onClose}) => {
  if (!selectedProject) return null;

  return (
    <AnimatePresence>
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
          className={`bg-white dark:bg-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col ${selectedProject.textColor}`}
        >
          {/* Modal Header */}
          <div
            className={`sticky top-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md z-10 border-b border-slate-200 dark:border-slate-700 p-5 flex justify-between items-center ${selectedProject.textColor}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <h3 className="text-xl font-bold">Project Deep Dive</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
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

          {/* Modal Content */}
          <div className="overflow-y-auto flex-1">
            {/* Project Hero */}
            <div
              className={`relative h-72 w-full bg-gradient-to-br ${selectedProject.gradient} overflow-hidden`}
            >
              <motion.img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-50"
                initial={{scale: 1.1}}
                animate={{scale: 1}}
                transition={{duration: 0.8}}
              />
              <div className="absolute  inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-cyan-300 mt-1">{selectedProject.role}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 lg:flex-nowrap lg:justify-start justify-center">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm flex items-center gap-1">
                      <FiClock className="inline" /> {selectedProject.period}
                    </span>
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-sm flex items-center gap-1 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo <FiExternalLink className="inline" />
                      </a>
                    )}
                    {selectedProject.repo && (
                      <a
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-800 text-white rounded-full text-sm flex items-center gap-1 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code <FiGithub className="inline" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 px-4">
              {selectedProject.impact.map((impact, i) => (
                <span
                  key={i}
                  className={` px-2 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-full`}
                >
                  {impact}
                </span>
              ))}
            </div>
            <div className="p-6 sm:p-8">
              {/* Project Metadata */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <FiClock /> <span className="text-sm">Duration</span>
                  </div>
                  <div className="font-medium text-slate-800 dark:text-white mt-1">
                    {selectedProject.period}
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <FiUsers /> <span className="text-sm">Team Size</span>
                  </div>
                  <div className="font-medium text-slate-800 dark:text-white mt-1">
                    {selectedProject.teamSize}{' '}
                    {selectedProject.teamSize === 1 ? 'person' : 'people'}
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <FiLayers /> <span className="text-sm">Category</span>
                  </div>
                  <div className="font-medium text-slate-800 dark:text-white mt-1 capitalize">
                    {selectedProject.category.replace('-', ' ')}
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-sm">Status</span>
                  </div>
                  <div className="font-medium text-slate-800 dark:text-white mt-1">
                    {selectedProject.era === 'current' ? 'Active' : 'Completed'}
                  </div>
                </div>
              </div>

              {/* Project Overview */}
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
                {/* Left Column */}
                <div className="space-y-10">
                  {/* Key Achievements */}
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
                      Key Highlights
                    </motion.h4>
                    <ul className="space-y-4">
                      {selectedProject.highlights?.map((highlight, i) => (
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

                  {/* Challenges & Solutions */}
                  {selectedProject.challenges && selectedProject.solutions && (
                    <div>
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"
                      >
                        <div className="p-1.5 rounded-lg bg-orange-500/10">
                          <svg
                            className="w-5 h-5 text-orange-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        Challenges & Solutions
                      </motion.h4>
                      <div className="space-y-4">
                        {selectedProject.challenges.map((challenge, i) => (
                          <motion.div
                            key={i}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5 + i * 0.1}}
                            className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700"
                          >
                            <div className="font-medium text-slate-800 dark:text-white">
                              {challenge}
                            </div>
                            {selectedProject.solutions[i] && (
                              <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                                <span className="font-medium text-cyan-600 dark:text-cyan-400">
                                  Solution:
                                </span>{' '}
                                {selectedProject.solutions[i]}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deliverables */}
                  {selectedProject.deliverables && (
                    <div>
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.6}}
                        className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"
                      >
                        <div className="p-1.5 rounded-lg bg-green-500/10">
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        Key Deliverables
                      </motion.h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.deliverables.map((deliverable, i) => (
                          <motion.div
                            key={i}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: 0.7 + i * 0.05}}
                            className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm shadow-sm border border-slate-200 dark:border-slate-600"
                          >
                            {deliverable}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-10">
                  {/* Tech Stack */}
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
                      {selectedProject.tech?.map((tech, i) => (
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
                  </div>

                  {/* Project Metrics */}
                  {selectedProject.metrics && (
                    <div>
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"
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
                        Key Metrics
                      </motion.h4>
                      <div className="space-y-4">
                        {selectedProject.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6 + i * 0.1}}
                            className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                {metric.name}
                              </div>
                              {metric.improvement && (
                                <div className="text-xs px-2 py-1 bg-green-500/10 text-green-500 dark:text-green-400 rounded-full">
                                  Improved
                                </div>
                              )}
                            </div>
                            <div className="font-medium text-slate-800 dark:text-white">
                              {metric.value}
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
                  )}

                  {/* Project Impact */}
                  {selectedProject.impact && (
                    <div>
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.7}}
                        className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"
                      >
                        <div className="p-1.5 rounded-lg bg-blue-500/10">
                          <svg
                            className="w-5 h-5 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        Project Impact
                      </motion.h4>
                      <ul className="space-y-3">
                        {selectedProject.impact.map((impact, i) => (
                          <motion.li
                            key={i}
                            initial={{opacity: 0, x: 10}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 0.8 + i * 0.1}}
                            className="flex items-start"
                          >
                            <span className="flex-shrink-0 mt-1 mr-3">
                              <svg
                                className="w-5 h-5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="text-slate-600 dark:text-slate-300">
                              {impact}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Testimonials */}
                  {selectedProject.testimonial && (
                    <div>
                      <motion.h4
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.9}}
                        className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"
                      >
                        <div className="p-1.5 rounded-lg bg-yellow-500/10">
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                        Client Feedback
                      </motion.h4>
                      <div className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-600 dark:text-slate-300 italic mb-3">
                          "{selectedProject.testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600 overflow-hidden">
                            {selectedProject.testimonial.avatar && (
                              <img
                                src={selectedProject.testimonial.avatar}
                                alt={selectedProject.testimonial.author}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-slate-800 dark:text-white">
                              {selectedProject.testimonial.author}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {selectedProject.testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {selectedProject.client && (
                  <span>Client: {selectedProject.client}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-3 lg:flex-nowrap lg:justify-start justify-center">
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-colors font-medium"
                >
                  Close
                </button>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg transition-all font-medium flex items-center justify-center gap-2"
                  >
                    View Live <FiExternalLink />
                  </a>
                )}
                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-all font-medium flex items-center justify-center gap-2"
                  >
                    View Code <FiGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
