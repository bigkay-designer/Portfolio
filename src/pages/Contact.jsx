import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Header */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
          Get in <span className="text-cyan-500">Touch</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          The best way to reach me is directly via email or phone. I typically
          respond within 24 hours.
        </p>
      </motion.div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Card */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/50 mr-4">
              <svg
                className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Email Me
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            For project inquiries, collaborations, or speaking engagements.
          </p>
          <a
            href="mailto:kibrahim0199@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-cyan-600 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors"
          >
            <span className="text-slate-200">
              {' '}
              khalid.ibrahim@technoefx.com
            </span>{' '}
            <svg
              className="w-4 h-4 ml-2 text-slate-200"
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
          </a>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/50 mr-4">
              <svg
                className="w-6 h-6 text-cyan-600 dark:text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Call Me
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Available for calls during business hours (GMT).
          </p>
          <a
            href="tel:+447494498323"
            className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors"
          >
            <span className="text-slate-200"> +44 (0) 7307 132 828</span>
            <svg
              className="w-4 h-4 ml-2 text-slate-200"
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
          </a>
        </motion.div>

        {/* Social Card */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.6}}
          className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Connect Socially
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Follow me for insights on technology, community building, and
            digital innovation.
          </p>
          <div className="flex space-x-6">
            {[
              {
                name: 'GitHub',
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
                url: 'https://github.com/bigkay-de-signer',
              },
              {
                name: 'LinkedIn',
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ),
                url: 'https://linkedin.com/in/yourprofile',
              },
              {
                name: 'Portfolio',
                icon: (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
                url: 'https://kibrahim-portfolio.web.app/',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Location */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className="mt-16 text-center"
      >
        <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">
          Based in London, UK
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Available for local and remote collaborations
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
