'use client';

import { useState } from 'react';

interface Question {
  type: 'yes-no' | 'multiple-choice' | 'multiple-selection' | 'dropdown' | 'text-input';
  question: string[];
  options?: string[];
  answer?: string | string[];
}

const Questionnaire: React.FC = () => {
  const [progress, setProgress] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([
    {
      type: 'yes-no',
      question: ['Are you currently employed?',],
      options: ['A. Yes', 'B. No'],
      answer: ''
    },
    {
      type: 'multiple-choice',
      question: ['Do you have a qualification that required at least 2 years to complete?',],
      options: [
        'A. Yes, I hold a professional qualification (vocational training)',
        'B. Yes, I have a university degree',
        'C. Yes, I have an appropriate qualification from a German Chamber of Commerce abroad',
        'D. No, I do not have any formal professional qualifications',
      ],
      answer: ''
    },
    {
      type: 'multiple-selection',
      question: ['Which languages do you speak?',],
      options: ['English', 'German', 'French', 'Spanish'],
      answer: []
    },
    {
      type: 'dropdown',
      question: ['What is your nationality?',],
      options: ['American', 'Canadian', 'French', 'German'],
      answer: ''
    },
    // {
    //   type: 'text-input',
    //   question: ['What is your first name?','What is your last name?'],
    //   answer: ['','']
    // },
    
  ]);
  
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const threshold = 5;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [showError, setShowError] = useState<boolean>(false);

  const handleNext = () => {
    const currentQuestion = questions[progress - 1];
    
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

  const handleAnswerChange = (answer: string, isMultipleSelection = false) => {
    const updatedQuestions = [...questions];

    if (isMultipleSelection) {
      const currentAnswers = updatedQuestions[progress - 1].answer as string[];
      if (currentAnswers.includes(answer)) {
        updatedQuestions[progress - 1].answer = currentAnswers.filter((ans) => ans !== answer);
      } else {
        updatedQuestions[progress - 1].answer = [...currentAnswers, answer];
      }
    } else {
      updatedQuestions[progress - 1].answer = answer;
    }

    setQuestions(updatedQuestions);
  };
  

  const calculatePoints = () => {
    let points = 0;
    questions.forEach((question) => {
      if (question.type === 'yes-no' && question.answer === 'A. Yes') {
        points += 1;
      }
      if (question.type === 'multiple-choice') {
        if (question.answer === 'A. Yes, I hold a professional qualification (vocational training)') {
          points += 1;
        } else if (question.answer === 'B. Yes, I have a university degree') {
          points += 2;
        }
      }
      if (question.type === 'multiple-selection') {
        const selectedLanguages = question.answer as string[];
        points += selectedLanguages.length > 0 ? 1 : 0; // Adjust points logic for multiple-selection
      }
    });
    setTotalPoints(points);
  };


  const renderResults = () => {
    const eligibleMessage = totalPoints >= threshold ? (
      <div className="my-16 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-green-600 mt-6 mb-4">Congratulations!</h1>
        <p className="mb-4">
          Dear John, based on your responses, you may be eligible for the Chancenkarte.
        </p>
        <p className="mb-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis maiores asperiores veniam nam, eos et amet laborum tempora tenetur dignissimos quibusdam placeat dicta. Cumque facilis repudiandae labore voluptates veritatis?
        </p>
        {/* <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 border border-gray-300 p-4 rounded-lg"> */}
        <div className='flex flex-row divide-x-2 divide-gray-300 border-2 rounded-lg'>
          {/* Left column with total points and status */}
          <div className="p-4 w-1/2  ">
          <h2 className="text-lg font-bold mb-4">Total Points: {totalPoints}</h2>
          {/* <p className="mb-4 text-red-600 font-semibold text-2xl">{totalPoints} Points</p> */}
            <p className="mb-4">
              You meet the eligibility criteria for the German Opportunity Card.
            </p>
            <button className="w-[90px] h-[32px] rounded-full text-[#4dba1a] bg-[#FFDAD6]">
              Eligible
            </button>
          </div>
          
          {/* Vertical Divider Line */}
        {/* <div className="border-l-2 border-gray-300"></div>  */}
  
          {/* Right column with reasons and points breakdown */}
          <div className="p-4 w-1/2 ">
          <div className="grid grid-cols-2 gap-2">
            <div>
              {/* <p className="font-bold mb-2">Criteria</p> */}
              <ul className="list-none space-y-2">
                <li>Age</li>
                <li>Education</li>
                <li>Work Experience</li>
                <li>Language Proficiency</li>
                <li>Other Factors</li>
              </ul>
            </div>
            <div>
              {/* <p className="font-bold mb-2 text-right">Points</p> */}
              <ul className="list-none space-y-2 text-right">
                <li>1 point</li>
                <li>2 points</li>
                <li>2 points</li>
                <li>1 point</li>
                <li>1 point</li>
              </ul>
            </div>
          </div>

          </div>

        </div>
      </div>
    ) : (
      <div className="p-6 bg-white ">
        <h1 className="text-xl font-semibold text-red-600 mt-6 mb-4">Unfortunately!</h1>
        <p className="mb-4">
          You do not meet the eligibility criteria for the German Opportunity Card.
        </p>
        <p className="mb-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis tempore minus magnam, quidem alias aliquid rerum nulla non magni voluptatum fuga odit facilis nihil laborum vel blanditiis enim molestias?
        </p>
  
        {/* <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 border border-gray-300 p-4 rounded-lg"> */}
          <div className='flex flex-row divide-x-2 divide-gray-300 border-2 rounded-lg'>
          {/* Left column with total points and status */}
          <div className="p-4 w-1/2 ">
            <h2 className="text-lg font-bold mb-4">Total Points: {totalPoints}</h2>
            {/* <p className="mb-4 text-red-600 font-semibold text-2xl">{totalPoints} Points</p> */}
            <p className="mb-4">
              You do not meet the eligibility criteria for the German Opportunity Card.
            </p>
            <button className="w-[90px] h-[32px] rounded-full text-[#BA1A1A] bg-[#FFDAD6]">
              Ineligible
            </button>
          </div>
  
          {/* Right column with reasons and points breakdown */}
          <div className="p-4 w-1/2 ">
          <div className="grid grid-cols-2 gap-2">
            <div>
              {/* <p className="font-bold mb-2">Criteria</p> */}
              <ul className="list-none space-y-2">
                <li>Age</li>
                <li>Education</li>
                <li>Work Experience</li>
                <li>Language Proficiency</li>
                <li>Other Factors</li>
              </ul>
            </div>
            <div>
              {/* <p className="font-bold mb-2 text-right">Points</p> */}
              <ul className="list-none space-y-2 text-right">
                <li>1 point</li>
                <li>2 points</li>
                <li>2 points</li>
                <li>1 point</li>
                <li>1 point</li>
              </ul>
            </div>
          </div>

          </div>

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
        <div className="bg-white w-[1040px] h-[720px] rounded-[28px] opacity-100 p-8 shadow-md overflow-y-auto">
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
                    className="mr-4 w-[20px ]h-[20px] bg-[#465D91] rounded-full border-8 border-black-500"

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
          ${idx === currentQuestion.options.length - 1 ? 'rounded-b-[15px]' : ''}`}
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

{/* {currentQuestion.type === 'text-input' && (
  <div className="space-y-4">
    {currentQuestion.question.map((q, idx) => (
      <div key={idx}>
        <label className="block text-xl mb-2">
          {q} 
        </label>
        <input
          type="text"
          className="w-1/2 p-4 border border-gray-300 rounded"
          value={currentQuestion.answer[idx] || ''} // Access the answer array
          onChange={(e) => {
            const updatedAnswers = [...currentQuestion.answer];
            updatedAnswers[idx] = e.target.value; // Update the specific answer
            setCurrentQuestion({
              ...currentQuestion,
              answer: updatedAnswers, // Update the answers in the question object
            });
          }}
          placeholder={`Enter your ${(q.split(' ')[3]+q.split(' ')[4]).toLowerCase()}`} // Only use the relevant part for the placeholder
        />
      </div>
    ))}
  </div>
)} */}



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
