import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import technoefxImg from '../assets/images/showcase-techno.png';
import unityhorizonsImg from '../assets/images/showcase-uhc.png';
import horumarImg from '../assets/images/showcase-horumar.png';
import framerImg from '../assets/images/showcase-framer.png';
import insightsImg from '../assets/images/showcase-insights.jpg';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'TechnoEFX',
      description:
        'AI-driven automation platform reducing operational costs by 40% for SMEs.',
      category: 'tech',
      year: '2023',
      role: 'Technology Solutions Consultant',
      tech: ['React', 'Node.js', 'AWS', 'Strapi', 'Automation'],
      thumbnail: technoefxImg,
      link: 'https://technoefx.com',
      highlights: [
        'Designed digital solutions for freelancers, SMEs, and community organizations',
        'Streamlined operations through automation and system integration',
        'Developed personal/business websites enhancing online presence',
      ],
      impact: [
        '30% efficiency gains',
        '40% cost reduction',
        'Full-stack solutions',
      ],
      period: 'Nov 2023 - Present',
    },
    {
      id: 2,
      title: 'Unity Horizons CIC',
      description: 'Empowering youth through mentorship and community programs',
      category: 'community',
      year: '2024',
      role: 'Director',
      tech: ['Community Building', 'Program Development', 'Partnerships'],
      thumbnail: unityhorizonsImg,
      link: 'https://unityhorizons.com',
      highlights: [
        'Co-led vision and operations for social mobility initiatives',
        'Scaled skills training and mentorship programs',
        'Established collaborations with local authorities',
      ],
      impact: [
        '40% engagement boost',
        '£30k funding secured',
        '500+ youth impacted',
      ],
      period: 'Feb 2024 - Present',
    },
    {
      id: 3,
      title: 'Horumar360',
      description: 'Mobile-first social impact app for community engagement',
      category: 'community',
      year: '2022',
      role: 'Lead Developer',
      tech: ['Mobile Development', 'Scalable Systems', 'Community APIs'],
      thumbnail: horumarImg,
      link: '#',
      highlights: [
        'Implemented mobile-first community platform',
        'Developed scalable architecture solutions',
        'Integrated with community services',
      ],
      impact: ['Scalable architecture', 'API integrations', 'User base growth'],
      period: '2022 - 2023',
    },
    {
      id: 4,
      title: 'Framer Templates Library',
      description:
        'Interactive website templates for freelancers and small businesses',
      category: 'open-source',
      year: '2023',
      role: 'Creator',
      tech: ['Framer', 'React', 'Design Systems'],
      thumbnail: framerImg,
      link: '#',
      highlights: [
        'Created reusable templates saving developers hundreds of hours',
        'Developed modular design system for consistency',
        'Exploring affiliate marketing opportunities',
      ],
      impact: [
        '1000+ downloads',
        'Modular design system',
        'Affiliate opportunities',
      ],
      period: '2023 - Present',
    },
    {
      id: 5,
      title: 'EDTech Platform',
      description:
        'Interactive learning platform with AI-powered recommendations',
      category: 'tech',
      year: '2023',
      role: 'Lead Developer',
      tech: ['AI/ML', 'React', 'Node.js', 'Personalization'],
      thumbnail: insightsImg,
      link: '#',
      highlights: [
        'Implemented AI-driven content recommendations',
        'Increased user engagement by 65%',
        'Developed personalized learning pathways',
      ],
      impact: [
        'AI-curated content',
        '65% engagement increase',
        'Personalized learning',
      ],
      period: '2023 - Present',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const categories = [
    {id: 'all', name: 'All Projects'},
    {id: 'web', name: 'Web Development'},
    {id: 'mobile', name: 'Mobile Apps'},
    {id: 'data', name: 'Data Visualization'},
    {id: 'ai', name: 'AI/ML'},
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="text-cyan-200">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              A curated collection of my professional work and creative
              endeavors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
            {/* Category Filters */}
            <motion.div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* View Toggle */}
          </div>

          {/* Projects Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.4}}
                  whileHover={{y: -5}}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-cyan-300 text-sm">{project.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.4}}
                  whileHover={{x: 5}}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-cyan-500 text-sm mb-2">
                          {project.role} • {project.year}
                        </p>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 dark:text-slate-400 hover:text-cyan-500"
                          onClick={(e) => e.stopPropagation()}
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="mx-auto w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                We couldn't find any projects matching your selected filters.
                Try adjusting your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{scale: 0.95, y: 20}}
              animate={{scale: 1, y: 0}}
              exit={{scale: 0.95, y: 20}}
              className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-slate-800 z-10 border-b border-slate-200 dark:border-slate-700 p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Project Details
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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

              {/* Modal Content */}
              <div className="overflow-y-auto">
                <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-700">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {selectedProject.title}
                      </h3>
                      <p className="text-cyan-400">
                        {selectedProject.role} • {selectedProject.year}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                        Project Overview
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="flex-shrink-0 mt-1 mr-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                          </span>
                          <span className="text-slate-600 dark:text-slate-300">
                            Feature description about this important aspect of
                            the project goes here
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.link && (
                    <div className="flex justify-center">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium flex items-center"
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
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
