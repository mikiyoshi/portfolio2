import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import profileApi from '../api/profile';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  // profileApi import
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    profileApi.getProfile().then((data) => {
      return setProfile(data);
    });
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={logo} alt="Logo" /> */}

            {profile.map((data) => {
              return data.firstName !== '' &&
                data.lastName !== '' &&
                data.firstName !== undefined &&
                data.lastName !== undefined ? (
                <h1>
                  {data.firstName} {data.lastName}
                </h1>
              ) : (
                ''
              );
            })}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#skills"
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === 'project'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('project')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#history"
                className={
                  activeLink === 'history'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('history')}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#education"
                className={
                  activeLink === 'education'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('education')}
              >
                Education
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/mikiyoshi">
                  <i className="fa-brands fa-github white"></i>
                </a>
                <a href="https://www.linkedin.com/in/mikiyoshikokura">
                  <i class="fa-brands fa-linkedin-in white"></i>
                </a>
                <a href="https://resume.creddle.io/resume/ckjsdv7ewrh">
                  <i class="fa-solid fa-file-arrow-down white"></i>
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
