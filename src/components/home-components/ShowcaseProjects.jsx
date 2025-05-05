import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import technoefxImg from '../../assets/images/showcase-techno.png';
import unityhorizonsImg from '../../assets/images/showcase-uhc.png';
import horumarImg from '../../assets/images/showcase-horumar.png';
import framerImg from '../../assets/images/showcase-framer.png';
import insightsImg from '../../assets/images/showcase-insights.jpg';

const ShowcaseProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const {ref: headerRef, inView: headerInView} = useInView({threshold: 0.1});

  useEffect(() => {
    // Touch device detection
    setIsTouchDevice(
      'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );

    // Mock data fetch
    const loadProjects = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        const mockData = [
          {
            id: 1,
            title: 'TechnoEFX',
            category: 'tech',
            description:
              'AI-driven automation platform reducing operational costs by 40% for SMEs.',
            thumbnail: technoefxImg,
            tags: ['Automation', 'AI'],
            link: '#',
          },
          {
            id: 2,
            title: 'Unity Horizons CIC',
            category: 'community',
            description:
              'Empowering youth through mentorship matching and community events with real-time insights.',
            thumbnail: unityhorizonsImg,
            tags: ['Social Impact', 'Education'],
            link: '#',
            gradient: 'from-gray-800 to-gray-700',
            textColor: 'text-white',
          },
          {
            id: 3,
            title: 'Horumar360 Community App',
            category: 'community',
            description:
              'Mobile-first social impact app connecting local champions and streamlining engagement.',
            thumbnail: horumarImg,
            tags: ['Mobile App', 'Community'],
            link: '#',
            gradient: 'from-blue-200 to-blue-100',
            textColor: 'text-gray-800',
          },
          {
            id: 4,
            title: 'Framer Templates Library',
            category: 'open-source',
            description:
              'A curated collection of interactive website templates built with Framer for freelancers and small businesses.',
            thumbnail: framerImg,
            tags: ['Design', 'Open Source'],
            link: '#',
            gradient: 'from-pink-200 to-pink-100',
            textColor: 'text-gray-800',
          },
          {
            id: 5,
            title: 'EDTech Platform',
            category: 'tech',
            description:
              'Interactive learning platform with AI-powered recommendations.',
            thumbnail: insightsImg,
            tags: ['Education', 'AI'],
            link: '#',
            gradient: 'from-purple-500 to-purple-400',
            textColor: 'text-white',
          },
        ];

        setProjects(mockData);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Responsive column count
  const getGridColumns = () => {
    if (typeof window === 'undefined') return 'md:grid-cols-2 lg:grid-cols-3';
    const width = window.innerWidth;
    if (width < 640) return 'grid-cols-1';
    if (width < 1024) return 'grid-cols-2';
    return 'grid-cols-3';
  };

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

        {/* Filter bar */}
        <motion.div
          className="flex justify-center gap-3 mb-12 sm:mb-16 flex-wrap"
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

        {/* Projects grid */}
        <div className={`grid ${getGridColumns()} gap-6 sm:gap-8`}>
          {isLoading ? (
            [...Array(6)].map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: i * 0.1}}
                className="h-80 w-full"
              >
                <div className="h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl animate-pulse overflow-hidden">
                  <div className="h-1/2 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="p-4">
                    <div className="h-6 w-3/4 bg-slate-300 dark:bg-slate-600 rounded mb-3"></div>
                    <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : filteredProjects.length > 0 ? (
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isTouchDevice={isTouchDevice}
                />
              ))}
            </AnimatePresence>
          ) : (
            <motion.div
              className="col-span-full text-center py-20"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
            >
              <div className="text-slate-400 dark:text-slate-500 mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-600 dark:text-slate-400 mb-2">
                No projects found
              </h3>
              <p className="text-slate-500 dark:text-slate-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({project, index, isTouchDevice}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, y: 20}}
      animate={inView ? {opacity: 1, y: 0} : {}}
      transition={{duration: 0.5, delay: index * 0.1}}
      className="h-80 w-full"
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-md transition-all duration-500 ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        } [transform-style:preserve-3d]`}
        onClick={() => isTouchDevice && setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <motion.div
          className={`absolute inset-0 overflow-hidden rounded-xl bg-white dark:bg-slate-800 ${
            !isTouchDevice ? 'cursor-pointer' : ''
          } [backface-visibility:hidden]`}
          whileHover={!isTouchDevice ? {y: -5} : {}}
        >
          <div className="relative h-1/2 w-full overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 flex flex-wrap gap-2 p-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-5 h-1/2 flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-auto">
              <button
                className="inline-flex items-center text-sm font-medium text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
              >
                View details
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back of Card */}
        <div className="absolute inset-0 rounded-xl bg-white dark:bg-slate-800 p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
          <button
            className="self-end mb-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
            aria-label="Close project details"
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

          <div className="flex-grow overflow-y-auto">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              {project.description}
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  Achievements
                </h4>
                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Reduced operational costs by 40%</li>
                  <li>Improved user engagement by 65%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <a
              href={project.link}
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm font-medium"
            >
              View Case Study
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
      </div>
    </motion.div>
  );
};

export default ShowcaseProjects;
