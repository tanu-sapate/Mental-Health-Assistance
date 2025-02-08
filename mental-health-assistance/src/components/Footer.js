import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              MindCare is dedicated to providing accessible mental health support
              through innovative technology and professional care.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>
                <FaMapMarker className="me-2" />
                123 Wellness Street, MindCity
              </li>
              <li>
                <FaEnvelope className="me-2" />
                support@mindcare.com
              </li>
              <li>
                <FaPhone className="me-2" />
                +1 (234) 567-8900
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </Col>
        </Row>
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
