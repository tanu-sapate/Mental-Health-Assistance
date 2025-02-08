import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const contactInfo = {
    address: '123 Wellness Street, MindCity',
    email: 'support@mindcare.com',
    phone: '+1 (234) 567-8900',
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="text-center text-md-start">
          {/* About Section */}
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              MindCare is dedicated to providing accessible mental health support
              through innovative technology and professional care.
            </p>
          </Col>

          {/* Contact Info Section */}
          <Col md={4} className="mb-4">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>
                <FaMapMarker className="me-2" aria-label="Location" />
                {contactInfo.address}
              </li>
              <li>
                <FaEnvelope className="me-2" aria-label="Email" />
                <a href={`mailto:${contactInfo.email}`} className="text-decoration-none">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <FaPhone className="me-2" aria-label="Phone" />
                <a href={`tel:${contactInfo.phone}`} className="text-decoration-none">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-decoration-none">Services</Link></li>
              <li><Link to="/privacy" className="text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-decoration-none">Terms of Service</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MindCare. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
