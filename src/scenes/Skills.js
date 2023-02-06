import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";


function Skills() {
  return (
    <Container fluid className="about-section" id="skills">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
          </Col>
          <Col
            md={5}
            style={{  paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>
        <h1 className="project-heading text-center mb-8">
          Professional <strong className="purple">Skills</strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;