import React, { useState } from 'react';
import questionPic from './assets/IMG_7794.jpg';

const ProjectPreview = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showExplanation, setShowExplanation] = useState(false);
  
    const question = {
      text: 'According to Mark 4:10-12, why did Jesus speak in parables?',
      options: [
        'The use of simpler terms helped illustrate complex messages to the people.',
        'So that people outside his inner circle would not understand.',
        'So that people would engage and ask him questions for clarification.',
        'He was not able to speak plainly to the public.'
      ],
      correct: 'So that people outside his inner circle would not understand.',
      explanation: "When [Jesus] was alone, those who were around him along with the twelve asked him about the parables. And he said to them, “To you has been given the secret of the kingdom of God, but for those outside everything comes in parables, in order that ‘they may indeed look but not perceive, and may indeed hear but not understand; so that they may not turn again and be forgiven.’”\nMark 4:10-12 (NRSVUE)",
    };
  
    const handleSubmit = () => {
      if (selectedAnswer) {
        if (selectedAnswer === question.correct) {
          setFeedback('Correct!');
        } else {
          setFeedback('Incorrect.');
        }
        setShowExplanation(true);
      }
    };
  
    const handleNext = () => {
      setSelectedAnswer('');
      setFeedback('');
      setShowExplanation(false);
    };
  
    return (
      <div className="p-5 flex flex-col items-center">
        <div className="w-full mx-auto h-64 mb-10 flex items-center justify-center">
            <img src={questionPic} className="h-full w-full object-cover" />
        </div>
        <h1 className="text-xl font-bold mb-4">{question.text}</h1>
        <div className="flex-col">
        {question.options.map((option) => (
          <div key={option} className="text-xl mb-2 text-left">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="mr-2"
            />
            <label>{option}</label>
          </div>
        ))}
        </div>
        <button 
          onClick={handleSubmit} 
          className="text-xl block mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
        {showExplanation && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-4">{feedback}</p>
            <p className ="text-xl max-w-[600px]">
              {question.explanation.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <button 
              onClick={handleNext} 
              className="text-xl mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  };

export default ProjectPreview;