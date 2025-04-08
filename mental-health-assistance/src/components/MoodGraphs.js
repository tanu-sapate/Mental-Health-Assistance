// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import labels from '../data/labels';
// import { Container, Card, Row, Col, Button } from 'react-bootstrap';
// import { Chart, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import Navbar from './Navbar';

// // Register required components
// Chart.register(CategoryScale, LinearScale, LineElement, PointElement);

// const MoodGraphs = ({ answers }) => {
//   const navigate = useNavigate(); // Hook for navigation
//   const chartRef1 = useRef(null);
//   const chartRef2 = useRef(null);

//   useEffect(() => {
//     return () => {
//       // Cleanup charts on unmount
//       if (chartRef1.current) {
//         chartRef1.current.destroy();
//       }
//       if (chartRef2.current) {
//         chartRef2.current.destroy();
//       }
//     };
//   }, []);

//   // Generate sample data for past 7 days
//   const past7Days = Array.from({ length: 7 }, (_, i) => 
//     Math.floor(Math.random() * 5) + 1
//   );

//   const data = {
//     labels: ['Day 7', 'Day 6', 'Day 5', 'Day 4', 'Day 3', 'Day 2', 'Yesterday', 'Today'],
//     datasets: [
//       {
//         label: 'Mood Score',
//         data: [...past7Days, answers.reduce((a, b) => a + b, 0) / answers.length],
//         borderColor: 'rgba(75,192,192,1)',
//         fill: false,
//       }
//     ]
//   };

//   return (
//     <>
//       <Navbar />
//       <Container className="mood-graphs mt-5">
//         <h2 className="text-center mb-4">Your Mood Analysis</h2>
//         <Row>
//           <Col md={6}>
//             <Card className="mb-4">
//               <Card.Body>
//                 <h5>Past Few Days Mood</h5>
//                 <div style={{ height: '300px' }}>
//                   <Line 
//                     data={data}
//                     ref={chartRef1}
//                     options={{
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       scales: {
//                         x: { type: 'category' },
//                         y: { type: 'linear', beginAtZero: true }
//                       }
//                     }}
//                   />
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={6}>
//             <Card>
//               <Card.Body>
//                 <h5>Today's Mood Breakdown</h5>
//                 <div style={{ height: '300px' }}>
//                   <Line 
//                     ref={chartRef2}
//                     data={{
//                       labels: labels,
//                       datasets: [{
//                         label: 'Score',
//                         data: answers,
//                         borderColor: 'rgba(153,102,255,1)',
//                         fill: false,
//                       }]
//                     }}
//                     options={{
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       scales: {
//                         x: { type: 'category' },
//                         y: { type: 'linear', beginAtZero: true, max: 5 }
//                       }
//                     }}
//                   />
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Back Button */}
//         <div className="text-center mt-4">
//           <Button variant="secondary" onClick={() => navigate('/mood-tracker')}>
//             Back to Mood Tracker
//           </Button>
//         </div>

//       </Container>
//     </>
//   );
// };

// export default MoodGraphs;
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import Navbar from './Navbar';
import labels from '../data/labels';

// ✅ Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const MoodGraphs = ({ answers, onBack }) => {
  const past7Days = Array.from({ length: 7 }, () => Math.floor(Math.random() * 5) + 1);

  const moodTrendData = {
    labels: ['Day 7', 'Day 6', 'Day 5', 'Day 4', 'Day 3', 'Day 2', 'Yesterday', 'Today'],
    datasets: [
      {
        label: 'Mood Score',
        data: [...past7Days, answers.reduce((a, b) => a + b, 0) / answers.length],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      }
    ]
  };

  const todayMoodData = {
    labels: labels,
    datasets: [{
      label: 'Score',
      data: answers,
      borderColor: 'rgba(153,102,255,1)',
      backgroundColor: 'rgba(153,102,255,0.2)',
      fill: true,
    }]
  };

  return (
    <>
      <Navbar />
      <Container className="mood-graphs mt-5">
        <h2 className="text-center mb-4">Your Mood Analysis</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <h5>Past Few Days Mood</h5>
                <div style={{ height: '300px' }}>
                  <Line data={moodTrendData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>Today's Mood Breakdown</h5>
                <div style={{ height: '300px' }}>
                  <Line data={todayMoodData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button variant="primary" onClick={onBack}>
            🔄 Back to Mood Tracking
          </Button>
        </div>
      </Container>
    </>
  );
};

export default MoodGraphs;
