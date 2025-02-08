import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ForumPage = () => {
  const navigate = useNavigate();
  const [forums, setForums] = useState([
    { id: 1, title: 'Mental Health Tips', description: 'Share your daily tips for mental health improvement!', likes: 12 },
    { id: 2, title: 'Anxiety Support', description: 'Discuss and find support for anxiety management.', likes: 8 },
    { id: 3, title: 'Motivational Stories', description: 'Share and read inspiring stories!', likes: 15 },
  ]);

  const handleLike = (id) => {
    setForums(forums.map(forum => 
      forum.id === id ? { ...forum, likes: forum.likes + 1 } : forum
    ));
  };

  const handleCreateForum = () => {
    navigate('/create-forum'); // Navigate to CreateForum page
  };

  const handleChat = (id) => {
    navigate(`/chat/${id}`); // Navigate to ChatPage for the selected forum
  };

  return (
    <div className="forum-page container mt-4">
      <h2 className="text-center mb-4">Community Forums</h2>
      <div className="text-right mb-3">
        <button className="btn btn-primary" onClick={handleCreateForum}>
          Create New Forum
        </button>
      </div>
      <div className="forum-list">
        {forums.map(forum => (
          <div key={forum.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{forum.title}</h5>
              <p className="card-text">{forum.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button 
                  className="btn btn-light" 
                  onClick={() => handleLike(forum.id)}
                >
                  <FaThumbsUp /> {forum.likes}
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => handleChat(forum.id)}
                >
                  Chat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
