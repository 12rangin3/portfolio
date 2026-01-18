import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try later.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-card">
              <h2 className="section-title text-center mb-3">
                Contact <span>Me</span>
              </h2>

              <p className="contact-subtitle text-center mb-4">
                Feel free to reach out for collaborations or just a friendly hello 👋
              </p>

              {success && (
                <Alert variant="success">
                  Message sent successfully 🚀
                </Alert>
              )}

              {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                      required
                    />
                  </Col>
                </Row>

                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input"
                  required
                />

                <div className="text-center">
                  <Button type="submit" className="btn-glow px-5">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
