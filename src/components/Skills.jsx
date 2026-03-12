import { Container, Row, Col } from "react-bootstrap";

const skills = [
  { name: "HTML", icon: "🟧" },
  { name: "CSS", icon: "🟦" },
  { name: "Bootstrap", icon: "🟪" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React JS", icon: "⚛️" },
  { name: "Node JS", icon: "🟩" },
  { name: "Express JS", icon: "⚪" },
  { name: "SQL", icon: "🛢️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🚀" },
  
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <Row className="justify-content-center">
          {skills.map((skill, i) => (
            <Col md={2} sm={4} xs={6} key={i} className="mb-4">
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
