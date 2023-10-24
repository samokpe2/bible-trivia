import './App.css';
import React, { useState, useEffect } from 'react';
import ObjectiveQuestion from './components/ObjectiveQuestion';
import TheoryQuestion from './components/TheoryQuestion';

const questions = [
  // Add your questions here
  {
    type: 'objective',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris'],
    correctAnswer: 'Paris',
  },
  {
    type: 'objective',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris'],
    correctAnswer: 'Paris',
  },
  {
    type: 'theory',
    question: 'Explain the concept of gravity.',
    correctAnswer: 'Gravity is a force that attracts two objects with mass toward each other.',
  },
  // Add more questions
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);

  const handleAnswer = (answer) => {
    // Handle user's answer, e.g., check if it's correct and save it.
    setUserAnswers([...userAnswers, answer]);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(15);
    } else {
      // Quiz is finished, handle end of the quiz.
      // You can show the user's score or take other actions.
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Time's up, handle it (e.g., move to the next question).
      nextQuestion();
    }
  }, [timeLeft]);

  return (
    <div>
      <h1>Trivia Quiz</h1>
      <p>Time Left: {timeLeft} seconds</p>
      {questions[currentQuestionIndex].type === 'objective' ? (
        <ObjectiveQuestion
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <TheoryQuestion
          question={questions[currentQuestionIndex].question}
          onAnswer={handleAnswer}
          onNext={nextQuestion}
        />
      )}
    </div>
  );
}

export default App;
