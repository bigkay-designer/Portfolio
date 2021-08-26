import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import {Link} from 'react-router-dom'
import { Menu, Close, Home, Person, LibraryBooks } from '@material-ui/icons';
import Showcase from './Showcase';
import MyTech from './MyTech';

import './css/nav.css';
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  // const CloseFormHandler = () => {
  //     setOpenForm(false)
  // }
  // const openFormHandler = () => {
  //     setOpenForm(true)
  //     setOpenMenu(false)
  // }
  useEffect(() => {
    const scroll = () => setNavScroll(true);
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  const scrollPositionHandler = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setNavScroll(false);
      }
    });
  };
  scrollPositionHandler();

  return (
    <>
      <div
        className={`nav ${navScroll && 'nav__scroll'} ${
          window.location.pathname !== '/' && 'nav__bg__color'
        }`}
        id="nav"
      >
        <div
          onClick={() => setOpenForm(false)}
          className={`${openForm && 'overlay'}`}
        ></div>

        <div
          onClick={() => setOpenMenu(false)}
          className={`${openMenu && 'nav__overlay'}`}
        ></div>
        <div
          onClick={() => setOpenMenu(true)}
          className={`nav__small ${openMenu && 'hideMenu'}`}
        >
          <Menu className={`menu__icon ${navScroll && 'scroll__color'}`} />
        </div>
        <div className={`nav__container `}>
          <div className="nav__logo">
            <Link to="subhead" smooth={true} offset={-150} duration={1000}>
              <h2 className={`${navScroll && 'scroll__color'}`}>
                Khalid ibrahim
              </h2>
            </Link>
          </div>
          <nav className={`nav__links ${openMenu && 'display__nav'} `}>
            <div onClick={() => setOpenMenu(false)} className="nav__close">
              <Close className="nav__icon" />
            </div>
            <div className="links">
              <ul className={`${navScroll && 'scroll__color'}`}>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="subhead"
                  smooth={true}
                  duration={1000}
                  offset={-150}
                >
                  <div className="ul__div ">
                    {' '}
                    <Home className="ul__icon" /> <li>home </li>{' '}
                  </div>{' '}
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="about"
                  smooth={true}
                  duration={1000}
                  offset={-150}
                >
                  <div className="ul__div ">
                    {' '}
                    <Person className="ul__icon" />
                    <li>about</li>{' '}
                  </div>{' '}
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="projects"
                  smooth={true}
                  duration={1000}
                  offset={-120}
                >
                  <div className="ul__div ">
                    {' '}
                    <LibraryBooks className="ul__icon" />
                    <li>Projects </li>{' '}
                  </div>{' '}
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="subhead" id="subhead">
        <div className="subhead__container">
          <div className="nav__header__Sec" id="nav">
            <Showcase />
          </div>
          <div className="mytech">
            <MyTech />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
