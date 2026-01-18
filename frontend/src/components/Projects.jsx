import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

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
