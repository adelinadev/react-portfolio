import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiNodejsSmall,
  DiCss3
} from "react-icons/di";
import {
  
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 />
        <p className="text-lg">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall />
        <p className="text-lg">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="text-lg">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="text-lg">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="text-lg">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="text-lg">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="text-lg">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;