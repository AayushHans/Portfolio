import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertCards from "./certcard";
import Particle from "../Particle";
import Supervised from "../../Assets/Projects/Supervised.png";
import RProgramming from "../../Assets/Projects/RProgramming.png";
import Data from "../../Assets/Projects/Data.png";

function Certs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I have completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertCards
              imgPath={Supervised}
              isBlog={false}
              title="Supervised Machine Learning"
              description="Completed a course on Supervised Machine Learning: Regression and Classification, gaining hands-on experience in predictive modeling."
              ghLink="https://example.comhttps://www.coursera.org/learn/machine-learning/home/week/1"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertCards
              imgPath={RProgramming}
              isBlog={false}
              title="R Programming"
              description="Learned the fundamentals of R programming, focusing on data analysis and visualization techniques."
              ghLink="https://exhttps://www.coursera.org/learn/r-programmingample.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertCards
              imgPath={Data}
              isBlog={false}
              title="Data Analysis with Tableau"
              description="Gained expertise in data visualization and analysis using Tableau, enhancing my ability to interpret complex datasets."
              ghLink="https://examplehttps://www.coursera.org/learn/data-analysis-with-tableau-public.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certs;