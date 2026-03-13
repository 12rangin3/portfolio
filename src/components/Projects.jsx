import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

function Projects() {

  const [projects] = useState([
    {
      id: 1,
      title: "Student Event Participation Dashboard",
      description:
        "Built a web-based dashboard to track student participation in academic and extracurricular events, providing event registration monitoring, participation statistics, and simple data visualization.",
      tech_stack: "HTML, Bootstrap, JavaScript",
      github_link:
        "https://github.com/12rangin3/Student-Event-Participation-Dashboard",
      live_link: "https://student-event-participation-dashboa.vercel.app/",
    },
    {
      id: 2,
      title: "Christmas Quiz Game",
      description:
        "Built a Christmas Quiz web app where users answer festive trivia questions and receive instant scores. The project focuses on interactive UI, quiz logic, and an engaging user experience.",
      tech_stack: "React, Vite, Bootstrap, JavaScript",
      github_link: "https://github.com/12rangin3/Christmas-Quiz",
      live_link: "https://christmas-quiz-brown.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Built a Weather Forecast web application that allows users to search for any city and view real-time weather details such as temperature, humidity, and weather conditions using an external API.",
      tech_stack: "React, Bootstrap, HTML",
      github_link: "https://github.com/12rangin3/Weather-App",
      live_link: "https://weather-app-seven-blush-24.vercel.app/",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => setSelectedProject(project);

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="text-center mb-5">
          My <span className="text-primary">Projects</span>
        </h2>

        <Row>
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id} className="mb-4">
              <Card
                className="shadow-sm h-100 project-card"
                onClick={() => handleShow(project)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>

                  <Card.Title className="fw-bold">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="project-desc text-muted">
                    {project.description}
                  </Card.Text>

                  <p className="mt-2">
                    <strong>Tech:</strong> {project.tech_stack}
                  </p>

                  <div className="d-flex gap-2">
                    {project.github_link && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.github_link}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </Button>
                    )}

                    {project.live_link && (
                      <Button
                        variant="outline-success"
                        size="sm"
                        href={project.live_link}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live
                      </Button>
                    )}
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for full project */}
        <Modal
          show={selectedProject !== null}
          onHide={handleClose}
          centered
          size="lg"
        >
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>

                <p>{selectedProject.description}</p>

                <p>
                  <strong>Tech Stack:</strong> {selectedProject.tech_stack}
                </p>

                <div className="d-flex gap-2">

                  {selectedProject.github_link && (
                    <Button
                      variant="primary"
                      href={selectedProject.github_link}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  )}

                  {selectedProject.live_link && (
                    <Button
                      variant="success"
                      href={selectedProject.live_link}
                      target="_blank"
                    >
                      Live Project
                    </Button>
                  )}

                </div>

              </Modal.Body>
            </>
          )}
        </Modal>
      </Container>

      {/* CSS */}
      <style>
        {`
        .project-desc{
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card{
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        `}
      </style>
    </section>
  );
}

export default Projects;