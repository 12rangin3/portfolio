import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";

function Projects() {
  // Static project data since backend is removed
  const [projects] = useState([
    {
      id: 1,
      title: "Student Event Participation Dashboard",
      description:
        "Built a web-based dashboard to track student participation in academic and extracurricular events, providing event registration monitoring, participation statistics, and simple data visualization.",
      tech_stack: "Html, Bootstrap,Javascript",
      github_link:
        "https://github.com/12rangin3/Student-Event-Participation-Dashboard",
      live_link: "https://student-event-participation-dashboa.vercel.app/",
    },
    {
      id: 2,
      title: "Christmas Quiz Game",
      description:
        "Built a Christmas Quiz web app where users answer festive trivia questions and receive instant scores. The project focuses on interactive UI, quiz logic, and an engaging user experience..",
      tech_stack: "React, vite, bootstrap, javascript",
      github_link: "https://github.com/12rangin3/Christmas-Quiz",
      live_link: "https://christmas-quiz-brown.vercel.app/",
    },
    {
      id: 3,
      title: "Weather app",
      description:
        "Built a Weather Forecast web application that allows users to search for any city and view real-time weather details such as temperature, humidity, and conditions using an external API.",
      tech_stack: "React, Bootstrap, Html",
      github_link: "https://github.com/12rangin3/Weather-App",
      live_link: "https://weather-app-seven-blush-24.vercel.app/",
    },
  ]);

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title text-center mb-5">
          My <span>Projects</span>
        </h2>

        <Row>
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>

                  <Card.Text className="project-desc">
                    {project.description}
                  </Card.Text>

                  <p className="project-tech">
                    <strong>Tech:</strong> {project.tech_stack}
                  </p>

                  <div className="d-flex gap-2">
                    {project.github_link && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.github_link}
                        target="_blank"
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
      </Container>
    </section>
  );
}

export default Projects;
