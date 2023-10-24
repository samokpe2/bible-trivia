import React, { useState } from 'react';

const TheoryQuestion = ({ question, onAnswer, onNext }) => {
  const [answer, setAnswer] = useState('');

  const handleAnswer = () => {
    onAnswer(answer);
    onNext(); // Move to the next question
  };

  return (
    <div>
      <p>{question}</p>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer..."
      />
      <button onClick={handleAnswer}>Answer</button>
    </div>
  );
};

export default TheoryQuestion;