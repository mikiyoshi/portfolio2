import { Col } from 'react-bootstrap';

export const ProjectCard = ({
  occupation,
  company,
  projectURL,
  description,
  imgURL,
}) => {
  return (
    <Col size={12} sm={6} md={4} className="mb-4">
      <div className="card">
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{company}</h5>
          <p className="card-text">{description}</p>
          <a
            href={projectURL}
            className="btn btn-primary"
            data-bs-dismiss="offcanvas"
          >
            {company}
          </a>
        </div>
      </div>
    </Col>
  );
};
