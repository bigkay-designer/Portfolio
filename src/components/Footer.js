import React from 'react';
import {
  LinkedIn,
  GitHub,
  MailOutline,
  Description,
  Email,
  Phone,
} from '@material-ui/icons';
import './css/footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="nav__socials">
          <div className="nav__socials__icons">
            <a
              href={'https://www.linkedin.com/in/khalid-ibrahim-3b2b71201'}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {' '}
                <LinkedIn className="icons li" />{' '}
              </span>{' '}
              <span className="nav__icons__title">LinkedIn</span>{' '}
            </a>
            <a
              href={'https://github.com/bigkay-designer/'}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {' '}
                <GitHub className="icons gh" />{' '}
              </span>{' '}
              <span className="nav__icons__title">GitHub</span>{' '}
            </a>
            <a
              href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {' '}
                <MailOutline className="icons em" />{' '}
              </span>{' '}
              <span className="nav__icons__title">Email</span>
            </a>
            <a
              href={
                'https://drive.google.com/file/d/11cz5QiN3gxxnQfxzTReGNWZGSV8T-gAV/view?usp=sharing'
              }
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {' '}
                <Description className="icons desc" />{' '}
              </span>{' '}
              <span className="nav__icons__title">Resume</span>{' '}
            </a>
          </div>
        </div>
        <div className="footer__body">
          <footer className="footer__body__container">
            <h2>Any questions don't hesitate to contact me</h2>
            <div className="contact__info">
              <div className="contact__info__div">
                <Email className="icons" />{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kibrahim0199@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>kibrahim0199@gmail.com</p>
                </a>{' '}
              </div>
              <div className="contact__info__div">
                <Phone className="icons" />
                <p>
                  {' '}
                  <a href="tel:+447494498323">07494498323</a>
                </p>{' '}
              </div>
            </div>
            <div className="copyright">
              <p> © 2023 Khalid Ibrahim. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
