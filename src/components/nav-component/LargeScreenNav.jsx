import React, {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import {Link as ScrollLink, scroller} from 'react-scroll'; // Add scroller to programmatically trigger scroll
import {Link, useLocation} from 'react-router-dom'; // Add useLocation
import {
  Home,
  People,
  ContactPhone,
  SettingsApplications,
  LocalOffer,
  LibraryBooks,
  BlurLinear,
  BusinessCenter,
} from '@material-ui/icons';

import '../css/LargeScreenNav.css';

const LargeScreenNav = () => {
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
    <motion.div className="large-screen-menu">
      <div className="menu-container">
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
      </div>
    </motion.div>
  );
};

export default LargeScreenNav;
