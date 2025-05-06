import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import ProjectCard from '../project-component/ProjectCard';
import ProjectModal from '../project-component/ProjectModal';
import {projects} from '../../data/projectsData';
import {Link} from 'react-router-dom';

const ShowcaseProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const {ref: headerRef, inView: headerInView} = useInView({threshold: 0.1});

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}

        <motion.h1
          ref={headerRef}
          initial={{y: 20, opacity: 0}}
          animate={{y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0}}
          transition={{delay: 0.4}}
          className="text-3xl text-center sm:text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight"
        >
          <span className="relative inline-block">
            <span className="relative z-10">
              Featured <span className="text-cyan-500">Projects</span>
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
          <p className="text-lg mt-4 sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore my portfolio of impactful digital solutions
          </p>
        </motion.h1>

        <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {projects.slice(0, 3).map((project) => (
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
        <motion.div
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          className="flex justify-center items-center w-full"
        >
          <Link
            to="/projects"
            className="px-6 w-full py-3 text-center bg-accent text-white rounded-full font-subheading"
          >
            View All Projects
          </Link>
        </motion.div>
        {/* Project Modal  */}
        <ProjectModal
          selectedProject={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default ShowcaseProjects;
