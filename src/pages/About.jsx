import {motion} from 'framer-motion';
import image from '../assets/images/kay.jpg';
import {useInView} from 'react-intersection-observer';

const About = () => {
  const {ref: headerRef, inView: headerInView} = useInView({threshold: 0.1});

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <motion.h1
            ref={headerRef}
            initial={{y: 20, opacity: 0}}
            animate={{y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0}}
            transition={{delay: 0.4}}
            className="text-3xl text-center sm:text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight"
          >
            <span className="relative inline-block">
              <span className="relative text-cyan-500 z-10">
                Khalid <span className="text-white">Ibrahim</span>
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
            <p className="text-xl my-4 text-cyan-500 font-medium">
              Technology Consultant & Solutions Architect
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Bridging technical innovation with social impact through
              human-centered design{' '}
            </p>
          </motion.h1>
        </motion.div>
      </section>

      {/* Modern Bio Section */}
      <section className="relative mb-28">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-0 w-64 h-64 bg-cyan-400/10 overflow-hidden rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Timeline-style layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left column - Headshot with floating effect */}
            <div className="lg:col-span-2 relative">
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                className="sticky top-24"
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-400/20 overflow-hidden to-indigo-500/20 rounded-2xl rotate-6"></div>
                  <img
                    src={image}
                    alt="Khalid Ibrahim"
                    className="relative rounded-2xl shadow-xl w-full h-1/2 object-cover border-4 border-white dark:border-slate-800"
                  />
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Years Experience
                  </div>
                  <div className="text-3xl font-bold text-cyan-500">5+</div>
                </div>
              </motion.div>
            </div>

            {/* Right column - Story */}
            <div className="mt-12 lg:col-span-3 space-y-8 ">
              <motion.div
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.6}}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                  Building <span className="text-cyan-500">bridges</span>{' '}
                  between tech and community
                </h2>

                {/* Story blocks with icons */}
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        From self-taught developer to solutions architect
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        My journey began with a BTEC in IT and evolved through
                        hands-on projects and relentless learning. Today, I
                        architect systems that boost efficiency by 30%+ for
                        organizations across sectors.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
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
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        Founder of TechnoEFX
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Through my consultancy, I empower underrepresented
                        groups with custom software and automation solutions.
                        We've helped changemakers streamline operations and
                        amplify their impact through strategic tech integration.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Workflow Automation
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Full-Stack Development
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        Director at Unity Horizons CIC
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Leading initiatives that have boosted youth engagement
                        by 40%, I bridge technology with social impact. We've
                        secured £30k+ in funding to create pathways for
                        underserved communities through mentorship and skills
                        development.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Youth Empowerment
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Community Building
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.6}}
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Purpose-Led Innovation',
                description:
                  'Technology should solve real problems and create meaningful opportunities, especially for underrepresented communities.',
              },
              {
                title: 'Human-Centered Design',
                description:
                  'Systems must be intuitive and accessible, designed with real users in mind from the start.',
              },
              {
                title: 'Community Empowerment',
                description:
                  'Sustainable change happens when we equip people with tools and knowledge to shape their own futures.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{y: -5}}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-cyan-500 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Back-End Development',
                skills: [
                  'Node.js',
                  'Express',
                  'Strapi',
                  'Microservices',
                  'Webhooks',
                  'Serverless Architecture',
                ],
              },
              {
                category: 'Front-End Development',
                skills: [
                  'React (Vite)',
                  'JSX',
                  'HTML/CSS',
                  'Tailwind CSS',
                  'JavaScript',
                ],
              },
              {
                category: 'Databases',
                skills: ['PostgreSQL', 'MongoDB', 'Firebase'],
              },
              {
                category: 'Cloud & DevOps',
                skills: ['AWS', 'DigitalOcean', 'Docker', 'CI/CD', 'SonarQube'],
              },
              {
                category: 'Integration & APIs',
                skills: [
                  'REST',
                  'GraphQL',
                  'Salesforce',
                  'Jira',
                  'Google APIs',
                ],
              },
              {
                category: 'Productivity Tools',
                skills: [
                  'ChatGPT',
                  'Notion',
                  'Make',
                  'Zapier',
                  'Airtable',
                  'Figma',
                ],
              },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Community Impact Section */}
      <section>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.6, delay: 1}}
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
            Community Leadership
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-cyan-500 mb-2">
                Unity Horizons CIC
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                As Director, I co-lead this movement dedicated to breaking
                barriers and creating opportunities for youth through career
                pathways, education, and mentorship.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                <li>
                  Designed and scaled initiatives boosting youth engagement by
                  40%
                </li>
                <li>
                  Secured collaborations with local authorities and businesses
                </li>
                <li>Raised £30,000 in funding for community programs</li>
                <li>
                  Built systems for long-term organizational sustainability
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
