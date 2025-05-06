import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {projects} from '../data/projectsData';

import technoefxImg from '../assets/images/showcase-techno.png';
import unityhorizonsImg from '../assets/images/showcase-uhc.png';
import horumarImg from '../assets/images/showcase-horumar.png';
import framerImg from '../assets/images/showcase-framer.png';
import insightsImg from '../assets/images/showcase-insights.jpg';
import ProjectModal from '../components/project-component/ProjectModal';
import ProjectCard from '../components/project-component/ProjectCard';
import {Link} from 'react-router-dom';

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeEra, setActiveEra] = useState('all');
  const {ref: headerRef, inView: headerInView} = useInView({threshold: 0.1});

  const eras = [
    {
      key: 'past',
      title: 'Community Foundations',
      period: '2022-2023',
      description: 'Building core community engagement platforms and systems',
      themeColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      key: 'current',
      title: 'Tech & Community Expansion',
      period: '2023-Present',
      description:
        'Developing advanced solutions combining technology and social impact',
      themeColor: 'bg-green-100 dark:bg-green-900',
    },
  ];

  const metrics = [
    {value: '40%', label: 'Operational Efficiency', category: 'tech'},
    {value: '500+', label: 'Youth Impacted', category: 'community'},
    {value: '£30K', label: 'Funding Secured', category: 'community'},
    {value: '1000+', label: 'Template Downloads', category: 'open-source'},
    {value: '65%', label: 'Engagement Increase', category: 'tech'},
  ];

  // Filter projects by era
  const filteredProjects =
    activeEra === 'all'
      ? projects
      : projects.filter((project) => project.era === activeEra);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <motion.header
        ref={headerRef}
        initial={{opacity: 0}}
        animate={{opacity: headerInView ? 1 : 0}}
        transition={{duration: 0.8}}
        className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 0.1}}
            transition={{delay: 0.3, duration: 1.2}}
            className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
          />
          <motion.div
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 0.1}}
            transition={{delay: 0.5, duration: 1.2}}
            className="absolute bottom-1/3 -left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: headerInView ? 0 : -20, opacity: headerInView ? 1 : 0}}
            transition={{delay: 0.2}}
            className="inline-block px-4 py-2 mb-6 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium"
          >
            Technology Consultant & Community Leader
          </motion.div>

          <motion.h1
            initial={{y: 20, opacity: 0}}
            animate={{y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0}}
            transition={{delay: 0.4}}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-slate-800 dark:text-white mb-6 leading-tight"
          >
            <span className="relative inline-block">
              <span className="relative z-10">
                Building <span className="text-cyan-500">Digital Bridges</span>
              </span>
              <motion.span
                initial={{width: 0}}
                animate={{width: headerInView ? '100%' : 0}}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-0 h-3 bg-cyan-400/40 -rotate-1 z-0"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{y: 20, opacity: 0}}
            animate={{y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0}}
            transition={{delay: 0.6}}
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10"
          >
            I transform complex technology into{' '}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              human-centered solutions
            </span>{' '}
            that drive measurable impact for businesses and communities
          </motion.p>

          <motion.div
            initial={{y: 20, opacity: 0}}
            animate={{y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0}}
            transition={{delay: 0.8}}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/projects"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              See My Work in Action
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium rounded-lg transition-all"
            >
              Let's Create Impact Together
            </Link>
          </motion.div>

          {/* Trust indicators */}
          {/* <motion.div
            initial={{opacity: 0}}
            animate={{opacity: headerInView ? 1 : 0}}
            transition={{delay: 1}}
            className="mt-16 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`/clients/client-${i}.jpg`}
                    alt="Client"
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800"
                  />
                ))}
              </div>
              <span>Trusted by 30+ organizations</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 from client reviews</span>
            </div>
          </motion.div> */}
        </div>
      </motion.header>

      {/* Impact Metrics */}
      <section className="pb-16 pt-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
            >
              <div
                className={`text-2xl md:text-3xl font-bold mb-1 ${
                  metric.category === 'tech'
                    ? 'text-cyan-500'
                    : metric.category === 'community'
                    ? 'text-green-500'
                    : 'text-purple-500'
                }`}
              >
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Era Navigation */}
      <nav className="sticky top-0 bg-white dark:bg-slate-800 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2">
            <button
              onClick={() => setActiveEra('all')}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeEra === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              All Projects
            </button>
            {eras.map((era) => (
              <button
                key={era.key}
                onClick={() => setActiveEra(era.key)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeEra === era.key
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {era.period}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Project Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 text-center">
            {activeEra === 'all'
              ? 'Complete Portfolio'
              : eras.find((e) => e.key === activeEra)?.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modern Career Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-purple-500" />
              <span className="text-sm font-medium text-cyan-500">
                PROFESSIONAL JOURNEY
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-cyan-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-5">
              Career{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Milestones
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Key experiences that shaped my growth as a professional and
              innovator
            </p>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            {/* Vertical line with gradient animation */}
            <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 overflow-hidden">
              <motion.div
                initial={{height: 0}}
                whileInView={{height: '100%'}}
                viewport={{once: true}}
                transition={{duration: 1.5, ease: [0.65, 0, 0.35, 1]}}
                className="w-full h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
              />
            </div>

            {/* Timeline items */}
            <div className="space-y-24">
              {eras.map((era, index) => {
                const eraProjects = projects.filter((p) => p.era === era.key);
                return (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true, margin: '-100px'}}
                    className="relative pl-12 sm:pl-0 grid grid-cols-1 sm:grid-cols-10 gap-8 items-start group"
                  >
                    {/* Date marker with animated dot */}
                    <div className="sm:col-span-3 sm:text-right relative">
                      <motion.div
                        whileHover={{scale: 1.1}}
                        className="absolute left-0 sm:left-auto sm:right-0 -ml-4 sm:ml-0 -mt-1 sm:mt-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg z-10"
                      >
                        <motion.div
                          animate={{scale: [1, 1.2, 1]}}
                          transition={{duration: 2, repeat: Infinity}}
                          className="w-2 h-2 rounded-full bg-white"
                        />
                      </motion.div>
                      <div className="sm:pr-8 pt-6 sm:pt-0">
                        <div className="text-lg font-bold text-slate-800 dark:text-white">
                          {era.period}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {eraProjects.length} significant initiatives
                        </div>
                      </div>
                    </div>

                    {/* Content card with glass morphism effect */}
                    <div className="sm:col-span-7">
                      <motion.div
                        whileHover={{
                          y: -8,
                          boxShadow:
                            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        }}
                        className={`p-8 rounded-3xl backdrop-blur-sm bg-white/70 dark:bg-slate-800/70 shadow-xl border border-white/20 dark:border-slate-700/50 transition-all relative overflow-hidden ${
                          index % 2 === 0
                            ? 'sm:before:bg-cyan-500/5'
                            : 'sm:before:bg-purple-500/5'
                        } sm:before:absolute sm:before:inset-0 sm:before:-z-10`}
                      >
                        {/* Era title with gradient text */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                              {era.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">
                              {era.description}
                            </p>
                          </div>
                          <span
                            className={`px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm ${
                              era.key === 'current'
                                ? 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20'
                                : 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20'
                            }`}
                          >
                            {era.key === 'current'
                              ? 'Current Chapter'
                              : 'Past Experience'}
                          </span>
                        </div>

                        {/* Projects grid with hover effects */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {eraProjects.slice(0, 2).map((project) => (
                            <motion.div
                              key={project.id}
                              whileHover={{scale: 1.02}}
                              transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <ProjectCard
                                project={project}
                                onClick={() => setSelectedProject(project)}
                                variant="compact"
                              />
                            </motion.div>
                          ))}
                        </div>

                        {eraProjects.length > 2 && (
                          <button
                            onClick={() => setActiveEra(era.key)}
                            className="mt-6 flex items-center text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm font-medium group"
                          >
                            Discover all {eraProjects.length} projects from this
                            period
                            <svg
                              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal  */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Reflection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-slate-600 dark:text-slate-300 mb-8">
            "True innovation happens when technology meets human need. Every
            line of code should tell a story of empowerment."
          </blockquote>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              My Full Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
