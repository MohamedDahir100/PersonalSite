import React from 'react';
import { Col, Card } from 'react-bootstrap';

const ProjectCard = ({ value }) => {
  const { role, company, companylogo, date, info } = value;

  return (
    <Col lg="6">
      <div className="flip-card">
        <div className="flip-card-inner">
          
          {/* Front of the card */}
          <div className="flip-card-front text-center">
            <Card className="bg-white h-100">
              <img className="company-logo bg-white mb-3" src={companylogo} alt={`${company} Logo`} />
              <Card.Body>
                <Card.Title><strong>{company}</strong></Card.Title>
                <Card.Subtitle>{role}</Card.Subtitle>
                <Card.Text>{date}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          
          {/* Back of the card */}
          <div className="flip-card-back">
            <Card className="bg-white h-100 text-center">
              <Card.Body>
                {/* Here you can place the additional information like bullet points */}
                <Card.Title>Details</Card.Title>
                {info.split(';').map((point, index) => (
                  <Card.Text key={index}>{point}</Card.Text>
                ))}
              </Card.Body>
            </Card>
          </div>
          
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
