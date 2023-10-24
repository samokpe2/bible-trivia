import React from 'react';

const ObjectiveQuestion = ({ question, options, onAnswer }) => {
  return (
    <div>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectiveQuestion;