import React, { useState } from 'react';
import { Container, Card, Button, ProgressBar } from 'react-bootstrap';
import MoodGraphs from './MoodGraphs';
import Navbar from './Navbar';
import questions from '../data/moodQuestions';

const MoodTracker = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(0));
  const [showGraphs, setShowGraphs] = useState(false);

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowGraphs(true);
    }
  };

  if (showGraphs) {
    return <MoodGraphs answers={answers} />;
  }

  return (
    <>
    <Navbar/>
    <Container className="mood-tracker mt-5">
     
      <Card className="text-center">
        <Card.Body>
          <h3>Mood Tracker</h3>
          <ProgressBar 
            now={(currentQuestion + 1) * 10} 
            label={`${currentQuestion + 1}/${questions.length}`}
            className="mb-3"
          />
          <h5>{questions[currentQuestion]}</h5>
          <div className="rating-buttons mt-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <Button 
                key={value}
                variant="outline-primary" 
                className="m-2"
                onClick={() => handleAnswer(value)}
              >
                {value}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default MoodTracker;
