import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useEffect, useState } from 'react';
import profileApi from '../api/profile';

export const Footer = () => {
  // profileApi import
  const [profile, setProfile] = useState([]);
  const [copyright, setCopyright] = useState();

  useEffect(() => {
    profileApi.getProfile().then((data) => {
      return setProfile(data);
    });
    setCopyright(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            {profile.map((data) => {
              return (
                <h1>
                  {data.firstName} {data.lastName}
                </h1>
              );
            })}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright &copy;{copyright}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
