import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../assets/images/rob-profile.jpg";
//import Back from "../../assets/images/background.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
      <Container>
        <Row className="justify-content-center mb-2 mr-2">
          {/* Profile Pic */}
          <Col xs={12} md={6}>
            <Row>
              <Image
                className="profile justify-content-end"
                alt="profile"
                src={Profile}
                thumbnail
                fluid
              />
            </Row>
          </Col>
          {/* About me description */}
          <Col xs={12} md={6}>
            <Row className="align-items-start p-2 my-details rounded">
              Hi there! &nbsp; I am <strong>&nbsp;Rob Polisena</strong>
              <br />I am a Full Stack Web Developer with previous experience as
              a software sales professional.
              <br />
              <br />
              Having always enjoyed technology and coding as a hobby, I jumped
              at the opportunity to pursue my dream career as a full-time web
              developer.
              <br />
              <br />
              Passionate about problem-solving and working on challenging
              projects with my clients, has always driven me towards providing
              amazing experiences and striving to exceed their expectations.
              <br />
              <br />I love learning about new technologies, what problems are
              they solving and how can I use them to build better and scalable
              solutions.
              <br />
              <br />
              {/* Buttons */}
              <Col className="d-flex justify-content-center flex-wrap">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1pJdqeXQGIsEpW-O7nqrjFODOfNkqNPyu/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/robpolisena?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/rob-polisena/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
