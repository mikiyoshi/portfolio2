import React from 'react';
import { useEffect, useState } from 'react';
import profileApi from '../api/profile';

export const Education = () => {
  // profileApi import
  const [education, setEducation] = useState([]);
  useEffect(() => {
    profileApi.getEducation().then((data) => {
      return setEducation(data);
    });
  }, []);
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Academic Background</h2>
            {education.map((data) => {
              return (
                <div className="mb-5">
                  <h3>{data.school}</h3>
                  <p>{data.term}</p>
                  <blockquote>{data.course}</blockquote>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
