import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import ProjectCard from '../components/project-component/ProjectCard';
import ProjectModal from '../components/project-component/ProjectModal';

import {projects} from '../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeEra, setActiveEra] = useState('all');
  const {ref: headerRef, inView: headerInView} = useInView({threshold: 0.1});
  const [activeFilter, setActiveFilter] = useState('all');

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

  // Filter projects by era
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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

      {/* Filter bar */}
      <motion.div
        className="flex justify-center gap-3 mt-12 sm:mb-16 flex-wrap"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3}}
      >
        {['all', 'tech', 'community', 'open-source'].map((filter) => (
          <motion.button
            key={filter}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {filter === 'all' ? 'All' : filter.split('-').join(' ')}
          </motion.button>
        ))}
      </motion.div>
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
      {/* Project Modal  */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
