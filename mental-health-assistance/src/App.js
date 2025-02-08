import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ForumPage from './components/ForumPage';
import CreateForum from './components/CreateForum';
import ChatPage from './components/ChatPage';
import Resources from './components/Resources';
import Login from './components/Login';
import Register from './components/Register';
import TherapistProfile from './components/TherapistProfile';
import UserProfile from './components/UserProfile';
import TherapistList from './components/TherapistList';
import MoodTracker from './components/MoodTracker';
import TherapistHomepage from './components/TherapistHomepage';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const userType = 'user'; // Change this to 'therapist' for therapist view

  const AppContent = () => {
    const location = useLocation();
    // Hide Navbar on Landing Page, Login, Registration Pages, and Therapist Pages
    const noNavbarPaths = ['/', '/login', '/register', '/TherapistHomepage', '/profile', '/mood-tracker'];
    const showNavbar = !noNavbarPaths.includes(location.pathname);

    return (
      <>
        {showNavbar && <Navbar userType={userType} />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/forums" element={<ForumPage />} />
          <Route path="/create-forum" element={<CreateForum />} />
          <Route path="/chat/:forumId" element={<ChatPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/TherapistHomepage" element={<TherapistHomepage />} />
          <Route path="/profile" element={userType === 'therapist' ? <TherapistProfile /> : <UserProfile />} />
          <Route path="/therapists" element={<TherapistList />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
