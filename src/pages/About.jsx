import {motion} from 'framer-motion';
import image from '../assets/images/kay.jpg';
import {useInView} from 'react-intersection-observer';
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaAws,
  FaGoogle,
  FaDocker,
  FaFigma,
  FaJira,
  FaDigitalOcean,
} from 'react-icons/fa';
import {
  SiExpress,
  SiStrapi,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiSalesforce,
  SiNotion,
  SiZapier,
  SiAirtable,
  SiVite,
  SiSonarqube,
} from 'react-icons/si';
import {
  RiServerLine,
  RiComputerLine,
  RiCloudLine,
  RiExchangeLine,
  RiToolsLine,
} from 'react-icons/ri';
import {
  RiTeamLine,
  RiUserVoiceLine,
  RiUserStarLine,
  RiLightbulbFlashLine,
  RiCommunityLine,
  RiGitRepositoryLine,
  RiOpenSourceLine,
} from 'react-icons/ri';
import {RiHeartPulseLine} from 'react-icons/ri';

import {Link} from 'react-router-dom';
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
              Technology Consultant <span className="text-white">|</span>{' '}
              Community Advocate <span className="text-white">|</span> Mentor &
              Educator
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Hi, I’m Khalid Ibrahim. I lead TechnoEFX, where I build bespoke
              digital platforms and automations for SMEs and nonprofits, and I
              direct community tech programs at Unity Horizons CIC, empowering
              youth through mentorship and skills development. As a
              multidisciplinary technology consultant and solutions architect, I
              leverage React, Node.js, AWS, and human-centered design to
              streamline workflows and deliver measurable impact. I’m passionate
              about mentoring the next generation and using technology to create
              equitable opportunities and lasting social change.
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
                    Years of Experience
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
                        From Self-Taught Developer to Solutions Architect
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        I began my journey with a BTEC Diploma in IT, diving
                        into hands on coding projects and freelance work that
                        sharpened my skills across the full stack. Through
                        independent learning and real world client experience, I
                        developed a strong foundation in building scalable,
                        user-focused systems. Today, I lead digital
                        transformation at TechnoEFX, delivering custom platforms
                        and automation solutions. I also drive community
                        innovation as Director at Unity Horizons CIC, where I
                        merge technology with social impact.
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
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        Founder at TechnoEFX
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        I founded TechnoEFX to help freelancers, SMEs, and
                        nonprofits harness the power of digital tools—without
                        the complexity. From building full-stack platforms to
                        automating repetitive workflows, I focus on practical,
                        scalable solutions that make real operational impact.
                        Whether it's a portfolio site, a custom dashboard, or a
                        seamless integration, TechnoEFX bridges tech with
                        purpose.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Workflow Automation
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Full-Stack Development
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          System Integration
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Technical Consulting
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Platform Design
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M7 10a2 2 0 11-4 0 2 2 0 014 0"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        Director at Unity Horizons CIC
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        As Director at Unity Horizons CIC, I lead tech-enabled
                        community programs focused on youth empowerment, digital
                        skills, and inclusive opportunity. My work spans from
                        building operational systems and data tools to securing
                        partnerships and funding. We've launched initiatives
                        that support employment, education, and
                        well-being—putting marginalised voices at the heart of
                        long-term community change.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Youth Empowerment
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Community Building
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Digital Inclusion
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Program Development
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full">
                          Funding & Partnerships
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
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-slate-800 dark:text-white mb-4"
              initial={{y: -20}}
              animate={{y: 0}}
              transition={{duration: 0.5}}
            >
              Core Values
            </motion.h2>
            <motion.p
              className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.3}}
            >
              The principles that guide my work and shape every solution I
              create
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Purpose-Led Innovation',
                description: `I use technology to solve real-world problems, expand opportunity, and deliver impact where it's needed most.`,
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                color: 'from-cyan-500 to-blue-500',
                delay: 0.2,
              },
              {
                title: 'Human-Centered Design',
                description:
                  'Every solution I build starts with people. I focus on simplicity, empathy, and usability to make technology feel effortless.',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                color: 'from-purple-500 to-pink-500',
                delay: 0.4,
              },
              {
                title: 'Community Empowerment',
                description:
                  'True progress comes from within communities. I build tools and systems that equip individuals to lead, grow, and thrive.',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                color: 'from-orange-500 to-amber-500',
                delay: 0.6,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                  delay: value.delay,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{y: -10, scale: 1.02}}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-100 group-hover:duration-200" />
                <div
                  className={`relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg h-full flex flex-col`}
                >
                  <div
                    className={`mb-4 w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center text-white`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                    {value.description}
                  </p>
                </div>
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
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
              <RiComputerLine className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Back-End Development',
                icon: <RiServerLine className="w-5 h-5" />,
                skills: [
                  {name: 'Node.js', icon: <FaNodeJs className="w-4 h-4" />},
                  {name: 'Express', icon: <SiExpress className="w-4 h-4" />},
                  {name: 'Strapi', icon: <SiStrapi className="w-4 h-4" />},
                  {
                    name: 'Microservices',
                    icon: <RiServerLine className="w-4 h-4" />,
                  },
                  {
                    name: 'Webhooks',
                    icon: <RiExchangeLine className="w-4 h-4" />,
                  },
                  {
                    name: 'Serverless',
                    icon: <RiCloudLine className="w-4 h-4" />,
                  },
                ],
                color: 'bg-blue-100 dark:bg-blue-900/30',
                text: 'text-blue-600 dark:text-blue-400',
              },
              {
                category: 'Front-End Development',
                icon: <RiComputerLine className="w-5 h-5" />,
                skills: [
                  {name: 'React (Vite)', icon: <FaReact className="w-4 h-4" />},
                  {name: 'JSX', icon: <SiJavascript className="w-4 h-4" />},
                  {
                    name: 'HTML/CSS',
                    icon: (
                      <div className="flex gap-1">
                        <SiHtml5 className="w-4 h-4" />
                        <SiCss3 className="w-4 h-4" />
                      </div>
                    ),
                  },
                  {
                    name: 'Tailwind CSS',
                    icon: <SiTailwindcss className="w-4 h-4" />,
                  },
                  {
                    name: 'JavaScript',
                    icon: <SiJavascript className="w-4 h-4" />,
                  },
                ],
                color: 'bg-purple-100 dark:bg-purple-900/30',
                text: 'text-purple-600 dark:text-purple-400',
              },
              {
                category: 'Databases',
                icon: <FaDatabase className="w-5 h-5" />,
                skills: [
                  {
                    name: 'PostgreSQL',
                    icon: <SiPostgresql className="w-4 h-4" />,
                  },
                  {name: 'MongoDB', icon: <SiMongodb className="w-4 h-4" />},
                  {name: 'Firebase', icon: <SiFirebase className="w-4 h-4" />},
                ],
                color: 'bg-green-100 dark:bg-green-900/30',
                text: 'text-green-600 dark:text-green-400',
              },
              {
                category: 'Cloud & DevOps',
                icon: <RiCloudLine className="w-5 h-5" />,
                skills: [
                  {name: 'AWS', icon: <FaAws className="w-4 h-4" />},
                  {
                    name: 'DigitalOcean',
                    icon: <FaDigitalOcean className="w-4 h-4" />,
                  },
                  {name: 'Docker', icon: <FaDocker className="w-4 h-4" />},
                  {name: 'CI/CD', icon: <RiExchangeLine className="w-4 h-4" />},
                  {
                    name: 'SonarQube',
                    icon: <SiSonarqube className="w-4 h-4" />,
                  },
                ],
                color: 'bg-orange-100 dark:bg-orange-900/30',
                text: 'text-orange-600 dark:text-orange-400',
              },
              {
                category: 'Integration & APIs',
                icon: <RiExchangeLine className="w-5 h-5" />,
                skills: [
                  {name: 'REST', icon: <RiExchangeLine className="w-4 h-4" />},
                  {name: 'GraphQL', icon: <SiGraphql className="w-4 h-4" />},
                  {
                    name: 'Salesforce',
                    icon: <SiSalesforce className="w-4 h-4" />,
                  },
                  {name: 'Jira', icon: <FaJira className="w-4 h-4" />},
                  {name: 'Google APIs', icon: <FaGoogle className="w-4 h-4" />},
                ],
                color: 'bg-cyan-100 dark:bg-cyan-900/30',
                text: 'text-cyan-600 dark:text-cyan-400',
              },
              {
                category: 'Productivity Tools',
                icon: <RiToolsLine className="w-5 h-5" />,
                skills: [
                  {name: 'Notion', icon: <SiNotion className="w-4 h-4" />},
                  {name: 'Make', icon: <RiToolsLine className="w-4 h-4" />},
                  {name: 'Zapier', icon: <SiZapier className="w-4 h-4" />},
                  {name: 'Airtable', icon: <SiAirtable className="w-4 h-4" />},
                  {name: 'Figma', icon: <FaFigma className="w-4 h-4" />},
                ],
                color: 'bg-pink-100 dark:bg-pink-900/30',
                text: 'text-pink-600 dark:text-pink-400',
              },
            ].map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: index * 0.1}}
                className={`${skillGroup.color} p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${skillGroup.color} ${skillGroup.text}`}
                  >
                    {skillGroup.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${skillGroup.text}`}>
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{y: -2}}
                      className={`px-3 py-1.5 text-sm ${skillGroup.color} ${skillGroup.text} rounded-lg flex items-center gap-2 border border-slate-200 dark:border-slate-700`}
                    >
                      <span className="flex-shrink-0">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-4">
              <RiTeamLine className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                Giving Back
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Community Impact
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Beyond technology, I'm committed to creating opportunities and
              empowering communities through education and mentorship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mentorship Program */}
            <motion.div
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 0.2, duration: 0.6}}
              viewport={{once: true}}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <RiUserVoiceLine className="w-16 h-16 text-white opacity-90" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <RiUserStarLine className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Tech Mentorship
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Guided 50+ aspiring developers through career transitions with
                  personalized mentorship and technical training.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                    50+ Mentees
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                    95% Success Rate
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Workshop Initiative */}
            <motion.div
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 0.4, duration: 0.6}}
              viewport={{once: true}}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <RiLightbulbFlashLine className="w-16 h-16 text-white opacity-90" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                    <RiCommunityLine className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Free Workshops
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Organized 12+ free coding workshops reaching 300+
                  underrepresented individuals in tech communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full">
                    300+ Attendees
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full">
                    12 Workshops
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Open Source Contribution */}
            <motion.div
              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              viewport={{once: true}}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <RiTeamLine className="w-16 h-16 text-white opacity-90" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                    <RiHeartPulseLine className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Active Youth Initiative
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Designed and delivered sports programs helping 120+ children
                  aged 8+ discover the joy of physical activity through
                  football, basketball, and athletics, promoting lifelong
                  healthy habits.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">
                    120+ Participants
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">
                    6 Sports Offered
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">
                    85% Activity Increase
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.8, duration: 0.6}}
            viewport={{once: true}}
            className="text-center mt-16"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Want to collaborate on community initiatives?
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl">
              <Link to="/contact">Get in Touch</Link>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
