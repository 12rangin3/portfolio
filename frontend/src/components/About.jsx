import { Container } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <p className="about-text">
I’m a Full Stack Developer focused on building modern, scalable web applications using React, Django, Node.js, and REST APIs. I enjoy crafting clean and responsive user interfaces, designing efficient backend architectures, and integrating databases like SQL and MongoDB for reliable data management.

Beyond core development, I have experience working with API integrations, authentication systems, and deployment-ready applications, ensuring performance and security best practices. I’m also exploring AI-driven solutions to create smarter, more interactive applications that enhance user experience and solve real-world problems. I believe in continuous learning, clean code, and building technology that delivers real value.        </p>
      </Container>
    </section>
  );
}

export default About;
