import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { submitContactForm } from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // EmailJS configuration - Values from .env file
  // IMPORTANT: Update .env file with your EmailJS credentials from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

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
    setLoading(true);

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY ||
        EMAILJS_SERVICE_ID === 'your_service_id' ||
        EMAILJS_TEMPLATE_ID === 'your_template_id' ||
        EMAILJS_PUBLIC_KEY === 'your_public_key') {
      setError("EmailJS not configured. Please check EMAILJS_SETUP.md for setup instructions.");
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Swagat Kumar Edla", // Your name
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Also store locally for admin dashboard
      await submitContactForm(formData);

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);

    } catch (err) {
      console.error("Contact form error:", err);
      const errorMessage = err?.text || err?.message || "Failed to send message. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
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
                <Row className="mb-3">
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
                  className="contact-input mb-3"
                  required
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    className="btn-glow px-5"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
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