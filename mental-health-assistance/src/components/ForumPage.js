import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ForumPage = () => {
  const navigate = useNavigate();
  const [forums, setForums] = useState([
    {
      id: 1,
      title: 'Mental Health Tips',
      description: 'Share your daily tips for mental health improvement!',
      likes: 12,
      created_at: '2024-12-22T14:30:00Z', // Example ISO timestamp
    },
    {
      id: 2,
      title: 'Anxiety Support',
      description: 'Discuss and find support for anxiety management.',
      likes: 8,
      created_at: '2024-12-21T10:15:00Z',
    },
    {
      id: 3,
      title: 'Motivational Stories',
      description: 'Share and read inspiring stories!',
      likes: 15,
      created_at: '2024-12-20T18:45:00Z',
    },
  ]);

  const handleLike = (id) => {
    setForums(forums.map(forum =>
      forum.id === id ? { ...forum, likes: forum.likes + 1 } : forum
    ));
  };

  const handleCreateForum = () => {
    navigate('/create-forum');
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
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
                <small>Posted by: Anonymous | {formatDate(forum.created_at)}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;


// while backend is connected 

// import React, { useEffect, useState } from 'react';
// import { FaThumbsUp } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const ForumPage = () => {
//   const navigate = useNavigate();
//   const [forums, setForums] = useState([]);

//   useEffect(() => {
//     const fetchForums = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/forums');
//         if (response.ok) {
//           const data = await response.json();
//           setForums(data);
//         } else {
//           console.error('Failed to fetch forums');
//         }
//       } catch (error) {
//         console.error('Error fetching forums:', error);
//       }
//     };

//     fetchForums();
//   }, []);

//   const handleLike = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/forums/${id}/like`, {
//         method: 'POST',
//       });
//       if (response.ok) {
//         setForums(forums.map(forum =>
//           forum.id === id ? { ...forum, likes: forum.likes + 1 } : forum
//         ));
//       } else {
//         console.error('Failed to like the forum');
//       }
//     } catch (error) {
//       console.error('Error liking the forum:', error);
//     }
//   };

//   const handleCreateForum = () => {
//     navigate('/create-forum');
//   };

//   return (
//     <div className="forum-page container mt-4">
//       <h2 className="text-center mb-4">Community Forums</h2>
//       <div className="text-right mb-3">
//         <button className="btn btn-primary" onClick={handleCreateForum}>
//           Create New Forum
//         </button>
//       </div>
//       <div className="forum-list">
//         {forums.map(forum => (
//           <div key={forum.id} className="card mb-3">
//             <div className="card-body">
//               <h5 className="card-title">{forum.title}</h5>
//               <p className="card-text">{forum.description}</p>
//               <div className="d-flex justify-content-between align-items-center">
//                 <button 
//                   className="btn btn-light" 
//                   onClick={() => handleLike(forum.id)}
//                 >
//                   <FaThumbsUp /> {forum.likes}
//                 </button>
//                 <small>Posted by: {forum.created_by}</small>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ForumPage;
