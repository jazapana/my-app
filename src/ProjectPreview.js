import React, { useState } from 'react';
import markPic from './assets/IMG_7800.jpg';
import lukePic from './assets/IMG_7802.jpg';
import johnPic from './assets/IMG_7801.jpg';

const ProjectPreview = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [showExplanation, setShowExplanation] = useState(false);
  
    const questions = [
        {
          text: 'According to Mark 4:10-12, why did Jesus speak in parables?',
          options: [
            'The use of simpler terms helped illustrate complex messages to the people.',
            'So that people outside his inner circle would not understand.',
            'So that people would engage and ask him questions for clarification.',
            'He was not able to speak plainly to the public.'
          ],
          correct: 'So that people outside his inner circle would not understand.',
          explanation: "When [Jesus] was alone, those who were around him along with the twelve asked him about the parables. And he said to them, “To you has been given the secret of the kingdom of God, but for those outside everything comes in parables, in order that ‘they may indeed look but not perceive, and may indeed hear but not understand; so that they may not turn again and be forgiven.’”\nMark 4:10-12 (NRSVUE)",
          image: markPic,
        },
        {
          text: 'According to the Gospel of John, what is the main message that Jesus preached?',
          options: [
            'To prepare the way of the Messiah.',
            'That the kingdom of God is coming and all should repent.',
            'He preached about himself and the need to believe in him.',
            'That only those with the secret knowledge about how the universe works can be saved.'
          ],
          correct: 'He preached about himself and the need to believe in him.',
          explanation: "Instead of speaking in parables and short sayings about the kingdom of God, Jesus speaks in long, difficult monologues about himself, his relation to God, and the need to believe in him (Attridge 1814).",
          image: johnPic,
        },
        {
          text: 'In Luke 18:9-14, Jesus tells a parable about two men who went up to the temple to pray. Based on the parable alone, how can somebody be justified?',
          options: [
            'To believe in Jesus.',
            'To keep the commandments.',
            'To have faith in the atonement of the sacrifice of Christ.',
            'To ask God for repentance.'
          ],
          correct: 'To ask God for repentance.',
          explanation: "He also told this parable to some who trusted in themselves that they were righteous and regarded others with contempt: “Two men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee, standing by himself, was praying thus, ‘God, I thank you that I am not like other people: thieves, rogues, adulterers, or even like this tax collector. I fast twice a week; I give a tenth of all my income.’ But the tax collector, standing far off, would not even lift up his eyes to heaven but was beating his breast and saying, ‘God, be merciful to me, a sinner!’ I tell you, this man went down to his home justified rather than the other, for all who exalt themselves will be humbled, but all who humble themselves will be exalted.”\nLuke 18:9-14 (NRSVUE)",
          image: lukePic,
        }
    ];
  
    const currentQuestion = questions[currentQuestionIndex];
  
    const handleSubmit = () => {
      if (selectedAnswer) {
        if (selectedAnswer === currentQuestion.correct) {
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
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };
  
    return (
      <div className="p-5 flex flex-col items-center">
        <div className="w-full mx-auto h-64 mb-10 flex items-center justify-center">
            <img src={currentQuestion.image} className="h-full w-full object-cover" />
        </div>
        <h1 className="text-xl font-bold mb-4 max-w-[600px]">{currentQuestion.text}</h1>
        <div className="flex-col">
        {currentQuestion.options.map((option) => (
          <div key={option} className="text-xl mb-2 text-left">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="mr-2"
            />
            <label onClick={() => setSelectedAnswer(option)} className="cursor-pointer">{option}</label>
          </div>
        ))}
        </div>
        {!showExplanation && (
          <button 
            onClick={handleSubmit} 
            className="text-xl block mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
        {showExplanation && (
          <div className="mt-4">
            <p className="text-xl font-bold mb-4">{feedback}</p>
            <p className ="text-xl max-w-[600px]">
              {currentQuestion.explanation.split('\n').map((line, index) => (
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