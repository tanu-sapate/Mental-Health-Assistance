import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ForumPage from './components/ForumPage';
import CreateForum from './components/CreateForum';
import ChatPage from './components/ChatPage'; // Import ChatPage
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resources from './components/Resources';

const App = () => {
  const userType = 'user'; // Change this to 'therapist' for therapist view

  return (
    <Router>
      <div>
        <Navbar userType={userType} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/forums" element={<ForumPage />} />
          <Route path="/create-forum" element={<CreateForum />} />
          <Route path="/chat/:forumId" element={<ChatPage />} /> {/* Add ChatPage */}
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
