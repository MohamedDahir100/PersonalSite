import React from "react";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons"; // You can import other FA icons as needed

function SkillItem({ icon, name }) {
  return (
    <div className="text-center">
      <FontAwesomeIcon icon={icon} size="3x" />
      <p>{name}</p>
    </div>
  );
}

function SkillsSection({ skills }) {
  return (
    <div className="d-flex overflow-x-scroll">
      {skills.map((skill, index) => (
        <div key={`${skill.name}-${index}`} className="px-3">
          <SkillItem icon={skill.icon || faCode} name={skill.name} />
        </div>
      ))}
    </div>
  );
}

function SkillsTab({ skills }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection skills={skills} />
      </Col>
    </>
  );
}

export default SkillsTab;
