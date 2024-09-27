'use client';

import { useState } from 'react';

interface Question {
  type: 'yes-no' | 'multiple-choice' | 'multiple-selection' | 'dropdown' | 'text-input';
  question: string[];
  options?: string[];
  answer?: string | string[];
  correctAnswer?:string|string[];
  points: number, 
  hasCorrectAnswer: boolean,
}

const Questionnaire: React.FC = () => {
  const [progress, setProgress] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([
    {
      type: 'yes-no',
      question: ['Are you currently employed?'],
      options: ['A. Yes', 'B. No'],
      answer: '',
      correctAnswer: 'A. Yes',
      points: 1, // No points assigned
      hasCorrectAnswer: true, // Has correct answer
    },
    {
      type: 'multiple-choice',
      question: ['Do you have a qualification that required at least 2 years to complete?'],
      options: [
        'A. Yes, I hold a professional qualification (vocational training)',
        'B. Yes, I have a university degree',
        'C. Yes, I have an appropriate qualification from a German Chamber of Commerce abroad',
        'D. No, I do not have any formal professional qualifications',
      ],
      answer: '',
      correctAnswer: 'B. Yes, I have a university degree',
      points: 2, // Assign points for correct answer
      hasCorrectAnswer: true, // Has correct answer
    },
    {
      type: 'multiple-selection',
      question: ['Which languages do you speak?'],
      options: ['English', 'German', 'French', 'Spanish'],
      answer: [], // User selected languages
      correctAnswer: [], // No specific correct answer
      points: 1, // 1 point per language
      hasCorrectAnswer: false, // No strict correct answer
    },
    {
      type: 'dropdown',
      question: ['What is your nationality?'],
      options: ['American', 'Canadian', 'French', 'German'],
      answer: '',
      correctAnswer: '',
      points: 0, // No points assigned
      hasCorrectAnswer: false, // No correct answer
    },
    
    {
      type: 'text-input',
      question: ['What is your first name?', 'What is your last name?'],
      answer: ['', ''], // where User will input their first and last names
      points: 0, // No points assigned
      hasCorrectAnswer: false,
    }
  ]);
  

    

  
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const threshold = 5;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [showError, setShowError] = useState<boolean>(false);

  const handleNext = () => {
    const currentQuestion = questions[progress - 1];

  //   // Create an array to collect all answers
  // const allAnswers = questions.map(q => q.answer);

  // // Log the array of all answers
  // console.log("All Answers:", allAnswers);

    
    // Validation logic
    let isAnswerProvided = false;
    
    if (currentQuestion.type === 'yes-no' || currentQuestion.type === 'multiple-choice') {
      isAnswerProvided = currentQuestion.answer ? true : false;
    } else if (currentQuestion.type === 'multiple-selection') {
      isAnswerProvided = (currentQuestion.answer as string[]).length > 0;
    } else if (currentQuestion.type === 'dropdown') {
      isAnswerProvided = currentQuestion.answer ? true : false;
    } else if (currentQuestion.type === 'text-input') {
      isAnswerProvided = (currentQuestion.answer as string[]).every((answer) => answer.trim() !== "");
    }
  
    if (isAnswerProvided) {
      setShowError(false); // Hide error message if an answer is provided
      if (progress < questions.length) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        calculatePoints();
        setIsSubmitted(true);
      }
    } else {
      setShowError(true); // Show error message if no answer is provided
    }
  };
  const handleBack = () => {
    if (progress > 1) {
      setProgress((prevProgress) => prevProgress - 1);
    }
  };

  // const handleAnswerChange = (answer: string, isMultipleSelection = false) => {
  //   const updatedQuestions = [...questions];
  
  //   if (isMultipleSelection) {
  //     const currentAnswers = updatedQuestions[progress - 1].answer as string[];
  //     if (currentAnswers.includes(answer)) {
  //       updatedQuestions[progress - 1].answer = currentAnswers.filter((ans) => ans !== answer);
  //     } else {
  //       updatedQuestions[progress - 1].answer = [...currentAnswers, answer];
  //     }
  //   } else {
  //     updatedQuestions[progress - 1].answer = answer;
  //   }
  
  //   setQuestions(updatedQuestions);
  // };
  
  const handleAnswerChange = (answer: string | string[], isMultipleSelection = false) => {
    const updatedQuestions = [...questions];
  
    if (isMultipleSelection) {
      const currentAnswers = updatedQuestions[progress - 1].answer as string[];
      if (currentAnswers.includes(answer as string)) {
        updatedQuestions[progress - 1].answer = currentAnswers.filter((ans) => ans !== answer);
      } else {
        updatedQuestions[progress - 1].answer = [...currentAnswers, answer as string];
      }
    } else {
      updatedQuestions[progress - 1].answer = answer;
    }
  
    setQuestions(updatedQuestions);
  };

  const calculatePoints = () => {
    let points = 0;
  
    questions.forEach((question) => {
      if (question.hasCorrectAnswer) {
        // Yes-No or Multiple-Choice: check if answer matches correct answer
        if (question.type === 'yes-no' || question.type === 'multiple-choice') {
          if (question.answer === question.correctAnswer) {
            points += question.points; // Add points for correct answers
          }
        }
      } 
      
      // Handle multiple-selection questions (like languages)
      if (question.type === 'multiple-selection') {
        const selectedLanguages = question.answer as string[];
        points += selectedLanguages.length * question.points; // 1 point per language selected
      }
      
      // Additional logic for other question types (e.g., dropdowns, text-input)
    });
  
    setTotalPoints(points);
  };
  
  
const renderResults = () => {
  const eligibleMessage = totalPoints >= threshold ? (
    <div className="flex flex-col p-6 bg-white h-auto">
      <h1 className="text-xl font-semibold text-green-600 mt-6 mb-4">Congratulations!</h1>
      <p className="mb-4">
        Dear John, based on your responses, you may be eligible for the Chancenkarte.
      </p>
      <p className="mb-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis maiores asperiores veniam nam, eos et amet laborum tempora tenetur dignissimos quibusdam placeat dicta. Cumque facilis repudiandae labore voluptates veritatis?
      </p>

      <div className="flex flex-row divide-x-2 divide-gray-300 border-2 rounded-lg xs:flex-col xs:divide-y-2 xs:divide-x-0 sm:flex-col sm:divide-y-2 sm:divide-x-0">
        <div className="p-4 w-1/2 sm:w-full xs:w-full">
          <h2 className="text-lg font-bold mb-4">Total Points: {totalPoints}</h2>
          <p className="mb-4">You meet the eligibility criteria for the German Opportunity Card.</p>
          <button className="w-[90px] h-[32px] rounded-full text-[#4dba1a] bg-[#FFDAD6]">Eligible</button>
        </div>

        <div className="p-4 w-1/2 sm:w-full xs:w-full">
          <ul className="list-none space-y-4">
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Age</span>
              <span className='font-bold'>1 point</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Education</span>
              <span className='font-bold'>2 points</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Work Experience</span>
              <span className='font-bold'>2 points</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Language Proficiency</span>
              <span className='font-bold'>1 point</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Other Factors</span>
              <span className='font-bold'>1 point</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col p-6 bg-white h-auto">
      <h1 className="text-xl font-semibold text-red-600 mt-6 mb-4">Unfortunately!</h1>
      <p className="mb-4">
        You do not meet the eligibility criteria for the German Opportunity Card.
      </p>
      <p className="mb-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis tempore minus magnam, quidem alias aliquid rerum nulla non magni voluptatum fuga odit facilis nihil laborum vel blanditiis enim molestias?
      </p>
    
      <div className="flex flex-row divide-x-2 divide-gray-300 border-2 rounded-lg xs:flex-col xs:divide-y-2 xs:divide-x-0 sm:flex-col sm:divide-y-2 sm:divide-x-0">
        <div className="p-4 w-1/2 sm:w-full xs:w-full">
          <h2 className="text-lg font-bold mb-4">Total Points: {totalPoints}</h2>
          <p className="mb-4">You do not meet the eligibility criteria for the German Opportunity Card.</p>
          <button className="w-[90px] h-[32px] rounded-full text-[#BA1A1A] bg-[#FFDAD6]">Ineligible</button>
        </div>

        <div className="p-4 w-1/2 sm:w-full xs:w-full">
          <ul className="list-none space-y-4">
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Age</span>
              <span className='font-bold'>1 point</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Education</span>
              <span className='font-bold'>3 points</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Work Experience</span>
              <span className='font-bold'>4 points</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Language Proficiency</span>
              <span className='font-bold'>2 points</span>
            </li>
            <li className="flex justify-between xs:flex-row sm:flex-row">
              <span>Other Factors</span>
              <span className='font-bold'>1 point</span>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="mt-16 bottom-8 mb-8 sm:mt-8 xs:mt-4 "> 
        <button className="w-auto h-auto px-6 py-2 sm:w-full xs:w-full rounded-full text-[#000000] bg-[#D4E4F6]"
          onClick={() => {
            window.location.href = '../TestPage/';
          }}
        >
          Retake test
        </button>
      </div>
    </div>
  );
  
    return (
      <div className="flex flex-col">
        {eligibleMessage}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[1040px] h-[720px] rounded-[28px] opacity-100 p-8 shadow-md overflow-y-auto relative">
          {renderResults()}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[progress - 1];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-100 rounded-lg w-full max-w-4xl p-8 shadow-md">
        <div className="mb-8">
          <div className="text-lg font-semibold mb-4">Question {progress} of {questions.length}</div>
          <div className="flex space-x-2">
            {[...Array(questions.length)].map((_, idx) => (
              <div
                key={idx}
                className={`h-[4px] rounded-full ${idx < progress ? 'bg-[#465D91]' : 'bg-[#D9E2FF]'} w-full`}
              ></div>
            ))}
          </div>
        </div>

        <div className="mb-12" style={{ minHeight: '420px' }}>
          <label className="block text-xl mb-4">
            {currentQuestion.question}
          </label>

          {currentQuestion.type === 'yes-no' && (
            <div className="flex space-x-4"> {/* Flexbox to display items side by side */}
              {currentQuestion.options?.map((option, idx) => (
                <label key={idx} className={`flex items-center p-4 bg-gray-100 border ${
                    idx === 0 ? 'rounded-l-full' : 'rounded-r-full'
                  } cursor-pointer hover:bg-gray-200 mr-0`}>
                  <input
                    type="radio"
                    name={`question-${progress}`}
                    value={option}
                    checked={currentQuestion.answer === option}
                    onChange={() => handleAnswerChange(option)}
                    className="w-6 h-6  mr-4 w-[20px ]h-[20px] bg-[#465D91] rounded-full border-8 border-gray-400 hover:bg-[#D4E4F6] "

                  />
                  {option}
                </label>
              ))}
            </div>
          )}

{currentQuestion.type === 'multiple-choice' && (
  <div className="space-y-4">
    {currentQuestion.options?.map((option, idx) => (
      <label 
        key={idx} 

      className={`flex items-center p-4 bg-gray-100 border cursor-pointer hover:bg-[#D4E4F6] 
        ${idx === 0 ? 'rounded-t-[15px]' : ''} 
        ${currentQuestion.options && idx === currentQuestion.options.length - 1 ? 'rounded-b-[15px]' : ''}`}      
      >
        <div className="relative">
          <input
            type="radio"
            name={`question-${progress}`}
            value={option}
            checked={currentQuestion.answer === option}
            onChange={() => handleAnswerChange(option)}
            className="absolute opacity-0 cursor-pointer"
          />
          <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center mr-4">
            {currentQuestion.answer === option && (
              <div className="w-4 h-4 bg-[#465D91] rounded-full" />
            )}
          </div>
        </div>
        {option}
      </label>
    ))}
            </div>
          )}

          {currentQuestion.type === 'multiple-selection' && (
            <div className="flex space-x-4 sm:flex-col">
              {currentQuestion.options?.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerChange(option, true)}
                  className={`block p-4 text-left rounded-full cursor-pointer border ${
                    (currentQuestion.answer as string[]).includes(option)
                      ? 'bg-[#D4E4F6] text-[#1A1B20]'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'dropdown' && (
            <select
              className="w-1/2 p-4 border border-gray-300 rounded"
              value={currentQuestion.answer as string}
              onChange={(e) => handleAnswerChange(e.target.value)}
            >
              <option value="" disabled>Nationality...</option>
              {currentQuestion.options?.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}

{currentQuestion.type === 'text-input' && (
  <div className="space-y-4">
    {currentQuestion.question.map((q, idx) => (
      <div key={idx}>
        <label className="block text-xl mb-2">
          {q}
        </label>
        <input
          type="text"
          className="w-1/2 p-4 border border-gray-300 rounded"
          value={Array.isArray(currentQuestion.answer) ? currentQuestion.answer[idx] || '' : ''} // Ensure it's an array
          onChange={(e) => {
            const updatedAnswers = Array.isArray(currentQuestion.answer) ? [...currentQuestion.answer] : []; // Ensure it's an array
            updatedAnswers[idx] = e.target.value; // Update the specific answer
            handleAnswerChange(updatedAnswers as string[]); // Use handleAnswerChange to update answers
          }}
          placeholder={`Enter your ${idx === 0 ? 'first name' : 'last name'}`} // Placeholder for first and last name
        />
      </div>
    ))}
  </div>
)}



        {showError && (
          <div className="text-red-500 my-4">Please provide an answer to the current question.</div>
        )}

        </div>

        <div className="flex justify-between">
          <button
            className="bg-[#FFFFFF] text-[#465D91] px-6 py-3 rounded-full"
            onClick={handleBack}
            disabled={progress === 1}
          >
            Back
          </button>
          <button
            className="bg-[#465D91] text-white px-6 py-3 rounded-full"
            onClick={handleNext}
            disabled={progress === questions.length && !currentQuestion.answer}
          >
            {progress === questions.length ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
