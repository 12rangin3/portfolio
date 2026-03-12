import { Container, Row, Col, Button } from "react-bootstrap";
import profile from "../assets/WhatsApp Image 2025-06-10 at 10.51.40 AM.jpeg";
import resume from "../assets/SWAGAT KUMAR EDLA-RESUME.pdf";   // 👈 import resume

function Hero() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Swagat_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          
          <Col md={6} className="hero-left">
            <h5 className="text-light fade-up delay-1">Hello, I am</h5>

            <h1 className="hero-name fade-up delay-2">
              Swagat Kumar
            </h1>

            <h2 className="hero-role fade-up delay-3">
              I'm a <span>Full Stack Developer</span>
            </h2>

            <p className="hero-desc fade-up delay-4">
              Building bridges between Front-End and Back-End,
              transforming ideas into web reality.
            </p>

            <div className="hero-buttons fade-up delay-5">
              <Button 
                className="btn-glow me-3"
                onClick={handleDownload}   // 👈 download function
              >
                Download Resume
              </Button>

              <Button 
                className="btn-outline-glow"
                href="#contact"
              >
                Let's Connect
              </Button>
            </div>
          </Col>

          <Col md={6} className="d-flex justify-content-center fade-zoom delay-3">
            <div className="profile-circle">
              <span className="loader-ring"></span>
              <img src={profile} alt="profile" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;
