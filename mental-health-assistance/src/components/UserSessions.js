import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, Toast, ToastContainer } from 'react-bootstrap';

const UserSessions = () => {
  const [showModal, setShowModal] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Simulated appointment data
  const appointment = {
    doctorName: "Dr. John Doe",
    scheduledDate: "March 10, 2025",
    scheduledTime: "3:00 PM",
    status: "Scheduled", // Change to "Pending" to simulate an unconfirmed appointment
  };

  // Open and Close Modal Handlers
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle Send Request
  const handleSendRequest = () => {
    console.log(`Request sent for new date: ${preferredDate} and time: ${preferredTime}`);
    setShowModal(false);
    setShowToast(true); // Show success notification
  };

  // Get today's date in YYYY-MM-DD format (to disable past dates in the calendar)
  const today = new Date().toISOString().split("T")[0];

  return (
    <Container className="mt-4 main-content">
      <h2 className="mb-4 text-primary">Your Upcoming Appointment</h2>
      <Table striped bordered hover className="shadow-sm">
        <thead className="table-info text-center">
          <tr>
            <th>Doctor's Name</th>
            <th>Scheduled Date</th>
            <th>Scheduled Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>{appointment.doctorName}</td>
            <td>{appointment.status === "Scheduled" ? appointment.scheduledDate : "-"}</td>
            <td>{appointment.status === "Scheduled" ? appointment.scheduledTime : "-"}</td>
            <td>
              <span className={`badge ${appointment.status === "Scheduled" ? "bg-success" : "bg-warning text-dark"}`}>
                {appointment.status}
              </span>
            </td>
            <td>
              <Button variant="warning" onClick={handleShow} disabled={appointment.status === "Pending"}>
                Request Edit
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Edit Request Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Request a New Appointment Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control 
                type="date" 
                min={today} // Disables past dates
                onChange={(e) => setPreferredDate(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control type="time" onChange={(e) => setPreferredTime(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSendRequest} disabled={!preferredDate || !preferredTime}>
            Send Request
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto text-white">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Request to change appointment sent successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default UserSessions;
