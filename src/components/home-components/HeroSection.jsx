import {motion} from 'framer-motion';
import heroImage from '../../assets/images/Subject.png';
import {Link} from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
          >
            <div className="mb-6">
              <motion.span
                className="inline-block px-3 py-1 text-sm font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-full mb-4"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
              >
                Technology Consultant & Community Leader
              </motion.span>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
              >
                Hi, I'm{' '}
                <span className="text-cyan-500">
                  Khalid <span className="text-white"> Ibrahim</span>
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
              >
                I build bridges between{' '}
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  technology
                </span>{' '}
                and{' '}
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  community impact
                </span>
                . Through strategic consulting and innovative digital solutions,
                I help organizations and individuals turn their vision into
                reality.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium rounded-lg transition-colors"
              >
                Let's Connect
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex flex-wrap gap-6"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6}}
            >
              {[
                {value: '5+', label: 'Years Experience'},
                {value: '30%', label: 'Efficiency Gains'},
                {value: '40%', label: 'Community Growth'},
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-cyan-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            className="relative"
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8}}
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-indigo-400/20 to-purple-400/20 rounded-2xl rotate-3"></div>

              {/* Profile image */}
              {/* <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl"> */}

              <div className="relative rounded-2xl overflow-hidden  border-white  shadow-xl">
                <img
                  src={heroImage}
                  alt="Khalid Ibrahim"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm text-white font-medium">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
