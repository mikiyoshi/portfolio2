import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';
import { useEffect, useState } from 'react';
import profileApi from '../api/profile';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // profileApi import
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    profileApi.getProfile().then((data) => {
      return setProfile(data);
    });
  }, []);

  // Object の index が key によって変わる時は、'' と undefined の時があるので注意

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Me</h2>
              <div className="row">
                <div className="mb-5">
                  {profile.map((data) => {
                    return data.aboutMe !== '' && data.aboutMe !== undefined ? (
                      <div>
                        <span>{data.aboutMe}</span>
                      </div>
                    ) : (
                      ''
                    );
                  })}
                </div>
              </div>
              <h2>Skills</h2>
              <div className="row">
                <div className="col-md-6">
                  <h3>Web Development</h3>
                  {profile.map((data) => {
                    return data.webDeveloper !== '' &&
                      data.webDeveloper !== undefined ? (
                      <p>{data.webDeveloper}</p>
                    ) : (
                      ''
                    );
                  })}
                </div>

                <div className="col-md-6">
                  <h3>UI/UX Design</h3>
                  {profile.map((data) => {
                    return data.uiUxDesign !== '' &&
                      data.uiUxDesign !== undefined ? (
                      <p>{data.uiUxDesign}</p>
                    ) : (
                      ''
                    );
                  })}
                </div>

                <div className="col-md-6">
                  <h3>Web Marketing</h3>
                  {profile.map((data) => {
                    return data.webMarketing !== '' &&
                      data.webMarketing !== undefined ? (
                      <p>{data.webMarketing}</p>
                    ) : (
                      ''
                    );
                  })}
                </div>

                <div className="col-md-6">
                  <h3>Extensive Experience</h3>
                  {profile.map((data) => {
                    return data.extensiveExperience !== '' &&
                      data.extensiveExperience !== undefined ? (
                      <p>{data.extensiveExperience}</p>
                    ) : (
                      ''
                    );
                  })}
                </div>
              </div>

              <h3 className="mb-3">Frameworks</h3>
              <div className="container text-center mb-5">
                <div className="row">
                  {profile.map((data) => {
                    return data.frameworks !== '' &&
                      data.frameworks !== undefined ? (
                      <div className="col-md-3 col-sm-4">{data.frameworks}</div>
                    ) : (
                      ''
                    );
                  })}
                </div>
              </div>
              <h3 className="mb-3">Languages</h3>
              <div className="container text-center mb-5">
                <div className="row">
                  {profile.map((data) => {
                    return data.languages !== '' &&
                      data.languages !== undefined ? (
                      <div className="col-md-3 col-sm-4">{data.languages}</div>
                    ) : (
                      ''
                    );
                  })}
                </div>
              </div>
              <h3 className="mb-3">Systems And Databases</h3>
              <div className="container text-center mb-5">
                <div className="row">
                  {profile.map((data) => {
                    return data.systemsAndDatabases !== '' &&
                      data.systemsAndDatabases !== undefined ? (
                      <div className="col-md-3 col-sm-4">
                        {data.systemsAndDatabases}
                      </div>
                    ) : (
                      ''
                    );
                  })}
                </div>
              </div>
              <h3 className="mb-3">Testing</h3>
              <div className="container text-center mb-5">
                <div className="row">
                  {profile.map((data) => {
                    return data.testing !== '' && data.testing !== undefined ? (
                      <div className="col-md-3 col-sm-4">{data.testing}</div>
                    ) : (
                      ''
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
