import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const userType = 'user'; // Change this to 'therapist' for therapist view

  return (
    <div>
      <Navbar userType={userType} />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
