import React, {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import {Link as ScrollLink, scroller} from 'react-scroll'; // Add scroller to programmatically trigger scroll
import {
  Close,
  Menu,
  Home,
  People,
  ContactPhone,
  SettingsApplications,
  LocalOffer,
  LibraryBooks,
  BusinessCenter,
} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom'; // Add useLocation
import Logo from '../../assets/images/logo-alone.png';
import '../css/nav.css';
import LargeScreenNav from './LargeScreenNav';
import {Button} from '@material-ui/core';

const Nav = () => {
  const [openMenu, SetOpenMenu] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navRef = useRef();
  const location = useLocation(); // Get the current route

  // Determine if we are on the home page where the sections exist
  const isHomePage = location.pathname === '/';

  // Handle route change and scroll to a section if needed
  useEffect(() => {
    if (location.hash && isHomePage) {
      const section = location.hash.replace('#', '');
      scroller.scrollTo(section, {
        smooth: true,
        duration: 1000,
        offset: -150,
      });
    }
  }, [location, isHomePage]); // Trigger this whenever the route changes

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setIsNavVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav ref={navRef} className={`nav ${isNavVisible ? 'sticky' : ''}`}>
      <div className="container">
        <div className="logo">
          {isHomePage ? (
            <ScrollLink
              onClick={() => SetOpenMenu(false)}
              to="App"
              smooth="true"
              duration={1000}
              offset={-150}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                {/* <img src={Logo} className="h-10 md:h-12" alt="Company Logo" /> */}
                <span className="text-xl font-semibold uppercase font-heading text-white">
                  <span className="text-brand">Khalid</span> Ibrahim
                </span>
              </div>
            </ScrollLink>
          ) : (
            <Link onClick={() => SetOpenMenu(false)} to="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                {/* <img src={Logo} className="h-10 md:h-12" alt="TechnoEFX Logo" /> */}
                <span className="text-xl font-semibold uppercase font-heading text-white">
                  <span className="text-brand">Khalid</span> Ibrahim
                </span>
              </div>
            </Link>
          )}

          <div className="menu__icon">
            <Menu onClick={() => SetOpenMenu(true)} className="icon" />
          </div>
        </div>

        <div className="large-screen-menu-wrapper">
          <LargeScreenNav />
        </div>
        <motion.div
          className={`menu ${openMenu && 'showMenu'}`}
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{
            delay: 0.05,
            duration: 1,
            type: 'spring',
            stiffness: 120,
          }}
        >
          <div className="menu-container">
            <div className="modal-logo">
              {isHomePage ? (
                <ScrollLink
                  onClick={() => SetOpenMenu(false)}
                  to="App"
                  smooth="true"
                  duration={1000}
                  offset={-150}
                >
                  <div className="flex items-center space-x-2 cursor-pointer">
                    {/* <img
                      src={Logo}
                      className="h-10 md:h-12"
                      alt="Company Logo"
                    /> */}
                    <span className="text-xl font-semibold uppercase font-heading text-white">
                      <span className="text-brand">Khalid</span> Ibrahim
                    </span>
                  </div>
                </ScrollLink>
              ) : (
                <Link onClick={() => SetOpenMenu(false)} to="/">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    {/* <img
                      src={Logo}
                      className="h-10 md:h-12"
                      alt="TechnoEFX Logo"
                    /> */}
                    <span className="text-xl font-semibold uppercase font-heading text-white">
                      <span className="text-brand">Khalid</span> Ibrahim
                    </span>
                  </div>
                </Link>
              )}
              <div className="icon__div">
                <Close onClick={() => SetOpenMenu(false)} className="icon" />
              </div>
            </div>
            <ul className="main-menu-list">
              <li>
                {isHomePage ? (
                  <ScrollLink
                    onClick={() => SetOpenMenu(false)}
                    to="App"
                    smooth="true"
                    duration={1000}
                    offset={-150}
                  >
                    <Home className="ul__icon" />
                    <p>Home</p>
                  </ScrollLink>
                ) : (
                  <Link onClick={() => SetOpenMenu(false)} to="/">
                    <Home className="ul__icon" />
                    <p>Home</p>
                  </Link>
                )}
              </li>
              <li>
                <Link onClick={() => SetOpenMenu(false)} to="/about">
                  <People className="ul__icon" />
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link onClick={() => SetOpenMenu(false)} to="/experience">
                  <BusinessCenter className="ul__icon" />
                  <p>Experience</p>
                </Link>
              </li>
              <li>
                <Link onClick={() => SetOpenMenu(false)} to="/projects">
                  <SettingsApplications className="ul__icon" /> <p>Projects</p>
                </Link>
              </li>
              {/* <li>
                <Link onClick={() => SetOpenMenu(false)} to="/blog">
                  <LibraryBooks className="ul__icon" />
                  <p>Blog</p>
                </Link>
              </li> */}
              <li>
                <Link onClick={() => SetOpenMenu(false)} to="/contact">
                  <ContactPhone className="ul__icon" />
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            {/* <div className="nav-call-to-action-btn">
              <Link
                className="member-btn-link"
                onClick={() => SetOpenMenu(false)}
                to="/contact-us"
              >
                <Button>Get In Touch</Button>
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
