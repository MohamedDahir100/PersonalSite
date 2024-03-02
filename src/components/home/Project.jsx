import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron'; // Import Jumbotron if you haven't already
import ProjectCard from './ProjectCard';
import { experiences } from '/Users/mohameddahir/Documents/GitHub/Portfolio/src/editable-stuff/config.js'; // Make sure the path matches your file structure

const Project = () => {
  if (!experiences.show) {
    return null;
  }

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            {experiences.data.map((exp, index) => (
              <ProjectCard key={index} value={exp} />
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Project;
