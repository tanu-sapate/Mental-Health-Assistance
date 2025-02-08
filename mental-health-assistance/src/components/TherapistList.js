import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col, Modal } from 'react-bootstrap';

// Sample therapists data
const therapists = [
  {
    id: 1,
    name: 'Dr. Anish V',
    specialization: 'Clinical Psychology',
    experience: 10,
    availability: 'Mon-Fri, 9am-5pm',
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063015.png"
  },
  {
    id: 2,
    name: 'Dr. Harsh J',
    specialization: 'Cognitive Behavioral Therapy',
    experience: 8,
    availability: 'Tue-Sat, 10am-6pm',
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063015.png"
  },
  {
    id: 3,
    name: 'Dr. Vardhan N',
    specialization: 'Human Behaviour',
    experience: 12,
    availability: 'Mon-Thu, 8am-4pm',
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063015.png"
  }
];

const TherapistList = () => {
  // State for managing subscription status and modal visibility
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  // Fetch the subscription status from backend
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        // Simulate fetching subscription status (replace with actual API call)
        const response = await fetch('/api/get-subscription-status'); // Replace with your backend API
        const data = await response.json();
        setIsSubscribed(data.isSubscribed);
      } catch (error) {
        console.error("Error fetching subscription status", error);
      }
    };

    fetchSubscriptionStatus();
  }, []);

  // Handle button click
  const handleButtonClick = (therapist) => {
    if (!isSubscribed) {
      setSelectedTherapist(therapist);
      setShowModal(true);
    } else {
      alert(`Session request sent to ${therapist.name}`);
    }
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedTherapist(null);
  };

  // Handle subscription redirection
  const handleSubscribe = () => {
    alert('Redirecting to subscription page...');
    closeModal();
  };

  return (
    <Container className="therapist-list mt-5">
      <h2 className="text-center mb-4">Available Therapists</h2>
      <Row>
        {therapists.map(therapist => (
          <Col key={therapist.id} md={4} className="mb-4">
            <Card>
              {/* Smaller image size with inline styles */}
              <Card.Img 
                variant="top" 
                src={therapist.image}
                alt={therapist.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Adjusted image size
              />
              <Card.Body>
                <Card.Title>{therapist.name}</Card.Title>
                <Card.Text>
                  <strong>Specialization:</strong> {therapist.specialization}<br />
                  <strong>Experience:</strong> {therapist.experience} years<br />
                  <strong>Availability:</strong> {therapist.availability}
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="w-100"
                  onClick={() => handleButtonClick(therapist)}
                  disabled={!isSubscribed}
                >
                  {isSubscribed ? "Request Session" : "Subscribe to Request"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for unsubscribed users */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Oops! Subscription Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>It looks like you're not subscribed yet. You need to subscribe to book a session with {selectedTherapist?.name}. It’s easy and quick!</p>
          <p>Click below to unlock access to personalized therapy sessions and more benefits.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubscribe}>
            Go to Subscription
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TherapistList;
