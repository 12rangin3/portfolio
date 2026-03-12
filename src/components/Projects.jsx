import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";

function Projects() {
  // Static project data since backend is removed
  const [projects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Bootstrap, showcasing projects and skills.",
      tech_stack: "React, Bootstrap, Vite",
      github_link: "https://github.com/yourusername/portfolio",
      live_link: "https://yourportfolio.com"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, and payment integration.",
      tech_stack: "React, Node.js, MongoDB, Stripe",
      github_link: "https://github.com/yourusername/ecommerce",
      live_link: null
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      tech_stack: "React, Firebase, Material-UI",
      github_link: "https://github.com/yourusername/taskmanager",
      live_link: "https://taskmanager-demo.com"
    }
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
