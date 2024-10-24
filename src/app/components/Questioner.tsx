// import React, { useState, useEffect } from 'react';
// import { useQuery, gql } from '@apollo/client';
// import { useTranslation } from 'react-i18next';

// const GET_ASSISTANT_BY_LANGUAGE_AND_TARGET = gql`
//   query GetAssistantByLanguageAndTarget($language: Language!, $target: UserTarget!) {
//     AssistantByLanguageAndTarget(language: $language, target: $target) {
//       id
//       type
//       question
//       description
//       answers {
//         point
//         answer
//       }
//       createAt
//       updateAt
//       language
//       target
//       caregorie
//     }
//   }
// `;

// interface Answer {
//   point: number;
//   answer: string;
// }

// interface Question {
//   id: string;
//   type: 'yes-no' | 'multiple-choice' | 'multiple-selection' | 'dropdown' | 'text-input';
//   question: string;
//   description: string;
//   answers: Answer[];
//   createAt: string;
//   updateAt: string;
//   language: string;
//   target: string;
//   caregorie:string;
//   userAnswer?: string | string[];
//   points?: number;
// }


// interface QuestionnaireProps {
//   onEligibility: (eligible: boolean) => void;
//   language: string; 
//   target: 'EMPLOYER' | 'JOBSEEKER';  }


// const Questionnaire: React.FC<QuestionnaireProps> = ({ onEligibility, language, target }) => {
//   const { t } = useTranslation("common");

//   console.log("Current language:", language.toUpperCase(),);
//   console.log("Current target:", target,);


//   // Use the target and language in the GraphQL query
//   const { loading, error, data } = useQuery(GET_ASSISTANT_BY_LANGUAGE_AND_TARGET, {
//     variables: {
//       language: (() => {
//         switch (language.toUpperCase()) {
//           case 'EN':
//             return 'AN';
//           case 'FR':
//             return 'FR';
//           case 'DE':
//             return 'GR';
//           default:
//             return language; 
//         }
//       })(),
//       target,
//     },
//   });


  
//   const [progress, setProgress] = useState<number>(1);
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [totalPoints, setTotalPoints] = useState<number>(0);
//   const threshold = 5;
//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
//   const [showError, setShowError] = useState<boolean>(false);

//   useEffect(() => {
//     if (data) {
//       const fetchedQuestions: Question[] = data.AssistantByLanguageAndTarget.map((item: any) => {
//         const question: Question = {
//           id: item.id,
//           type: item.type,
//           question: item.question,
//           description: item.description,
//           answers: item.answers,
//           createAt: item.createAt,
//           updateAt: item.updateAt,
//           language: item.language,
//           caregorie:item.caregorie,
//           target: item.target,
//           userAnswer: item.type === 'multiple-selection' ? [] : '',
//           points: item.answers.reduce((acc: number, ans: any) => acc + ans.point, 0),

//         };
//         return question;
//       });
//       setQuestions(fetchedQuestions);
//     }
//   }, [data]);

import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const GET_ASSISTANT_BY_LANGUAGE_AND_TARGET = gql`
  query GetAssistantByLanguageAndTarget($language: Language!, $target: UserTarget!) {
    AssistantByLanguageAndTarget(language: $language, target: $target) {
      id
      type
      question
      description
      answers {
        point
        answer
      }
      createAt
      updateAt
      language
      target
      caregorie
    }
  }
`;

interface Answer {
  point: number;
  answer: string;
}

interface Question {
  id: string;
  type: 'yes-no' | 'multiple-choice' | 'multiple-selection' | 'dropdown' | 'text-input';
  question: string;
  description: string;
  answers: Answer[];
  createAt: string;
  updateAt: string;
  language: string;
  target: string;
  caregorie: string;
  userAnswer?: string | string[];
  points?: number;
}

interface QueryResponse {
  AssistantByLanguageAndTarget: Question[];
}

interface QuestionnaireProps {
  onEligibility: (eligible: boolean) => void;
  language: string; 
  target: 'EMPLOYER' | 'JOBSEEKER';  
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onEligibility, language, target }) => {
  const { t } = useTranslation("common");

  console.log("Current language:", language.toUpperCase());
  console.log("Current target:", target);

  const { loading, error, data } = useQuery<QueryResponse>(GET_ASSISTANT_BY_LANGUAGE_AND_TARGET, {
    variables: {
      language: (() => {
        switch (language.toUpperCase()) {
          case 'EN':
            return 'AN';
          case 'FR':
            return 'FR';
          case 'DE':
            return 'GR';
          default:
            return language; 
        }
      })(),
      target,
    },
  });

  const [progress, setProgress] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const threshold = 5;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const fetchedQuestions: Question[] = data.AssistantByLanguageAndTarget.map((item) => {
        const question: Question = {
          id: item.id,
          type: item.type,
          question: item.question,
          description: item.description,
          answers: item.answers,
          createAt: item.createAt,
          updateAt: item.updateAt,
          language: item.language,
          caregorie: item.caregorie,
          target: item.target,
          userAnswer: item.type === 'multiple-selection' ? [] : '',
          points: item.answers.reduce((acc: number, ans: Answer) => acc + ans.point, 0),
        };
        return question;
      });
      setQuestions(fetchedQuestions);
    }
  }, [data]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center'>Error: {error.message}</p>;
  if (questions.length === 0) return <p className='text-center'>No questions available.</p>;

  
  const handleNext = () => {
    const currentQuestion = questions[progress - 1];

    let isAnswerProvided = false;

    if (currentQuestion.type === 'yes-no' || currentQuestion.type === 'multiple-choice') {
      isAnswerProvided = currentQuestion.userAnswer ? true : false;
    } else if (currentQuestion.type === 'multiple-selection') {
      isAnswerProvided = (currentQuestion.userAnswer as string[]).length > 0;
    } else if (currentQuestion.type === 'dropdown') {
      isAnswerProvided = currentQuestion.userAnswer ? true : false;
    } else if (currentQuestion.type === 'text-input') {
      const inputs = currentQuestion.userAnswer as string[];
      isAnswerProvided = inputs && inputs.every(input => input.trim() !== "");
      console.log('isAnswerProvided:',isAnswerProvided);
    }

      if (isAnswerProvided) {
      setShowError(false);
      if (progress < questions.length) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        calculatePoints();
        setIsSubmitted(true);
      }
    } else {
      setShowError(true);
    }
  };

  const handleBack = () => {
    if (progress > 1) {
      setProgress((prevProgress) => prevProgress - 1);
      setShowError(false);

    }
  };

  const handleAnswerChange = (answer: string | string[], isMultipleSelection = false) => {
    const updatedQuestions = [...questions];

    if (isMultipleSelection) {
      const currentAnswers = updatedQuestions[progress - 1].userAnswer as string[];
      if (currentAnswers.includes(answer as string)) {
        updatedQuestions[progress - 1].userAnswer = currentAnswers.filter((ans) => ans !== answer);
      } else {
        updatedQuestions[progress - 1].userAnswer = [...currentAnswers, answer as string];
      }
    } else {
      updatedQuestions[progress - 1].userAnswer = answer;
    }

    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    let calculatedPoints = 0;

    questions.forEach((question) => {
      if (Array.isArray(question.userAnswer)) {
        question.userAnswer.forEach((userAns) => {
          const answer = question.answers.find((ans) => ans.answer === userAns);
          if (answer) {
            calculatedPoints += answer.point;
          }
        });
      } else {
        const answer = question.answers.find((ans) => ans.answer === question.userAnswer);
        if (answer) {
          calculatedPoints += answer.point;
        }
      }
    });

    setTotalPoints(calculatedPoints);
    setIsSubmitted(true);
    onEligibility(calculatedPoints >= threshold);
  };

  const calculatePoints = () => {
    let points = 0;
  
    questions.forEach((question) => {
      if (question.type === 'yes-no' || question.type === 'multiple-choice') {
        // Find the matching answer and add its points to the total
        const selectedAnswer = question.answers.find(answer => answer.answer === question.userAnswer);
        if (selectedAnswer) {
          points += selectedAnswer.point;
        }
      } 
      else if (question.type === 'multiple-selection') {
        const selectedAnswers = question.userAnswer as string[];
        // Sum points for all selected answers
        points += selectedAnswers.reduce((total, userAns) => {
          const matchingAnswer = question.answers.find(answer => answer.answer === userAns);
          if (matchingAnswer) {
            return total + matchingAnswer.point;
          }
          return total;
        }, 0);
      } 
      else if (question.type === 'dropdown') {
        // Handle dropdown: find the selected answer and add its point
        const selectedAnswer = question.answers.find(answer => answer.answer === question.userAnswer);
        if (selectedAnswer) {
          points += selectedAnswer.point;
        }
      } 
      else if (question.type === 'text-input') {
        // Handle text-input: sum points based on both first name and last name or other criteria
        const userInputs = question.userAnswer as string[]; // Assuming two fields (e.g., first name, last name)
        points += userInputs.reduce((total, input) => {
          const matchingAnswer = question.answers.find(answer => answer.answer === input);
          if (matchingAnswer) {
            return total + matchingAnswer.point;
          }
          return total;
        }, 0);
      }
    });
  
    setTotalPoints(points);
  };
  


  const renderResults = () => {
    const questionsByCategory: Record<string, Question[]> = questions.reduce((acc: Record<string, Question[]>, question) => {
      if (!acc[question.caregorie]) {
        acc[question.caregorie] = [];
      }
      acc[question.caregorie].push(question);
      return acc;
    }, {});
  
    const eligibleMessage = totalPoints >= threshold ? (
      <div className="flex flex-col p-6 bg-white h-auto">
        <h1 className="text-xl font-semibold text-green-600 mt-6 mb-4">Congratulations!</h1>
        <p className="mb-4">Based on your responses, you may be eligible for the Chancenkarte.</p>
        <div className="flex flex-row divide-x-2 divide-gray-300 border-2 rounded-lg">
          <div className="p-4 w-1/2">
            <h2 className="text-lg font-bold mb-4">Total Points: {totalPoints}</h2>
            <p className="mb-4">You meet the eligibility criteria for the German Opportunity Card.</p>
            <button className="w-[90px] h-[32px] rounded-full text-[#4dba1a] bg-[#FFDAD6]">Eligible</button>
          </div>
          <div className="p-4 w-1/2">
            <ul className="list-none space-y-4">
              {Object.entries(questionsByCategory).map(([category, categoryQuestions], index) => {
                const categoryPoints = categoryQuestions.reduce((sum, question) => {
                  return sum + question.answers.reduce((total, answer) => {
                    if (Array.isArray(question.userAnswer) && question.userAnswer.includes(answer.answer)) {
                      return total + answer.point;
                    } else if (question.userAnswer === answer.answer) {
                      return total + answer.point;
                    }
                    return total;
                  }, 0);
                }, 0);
  
                return (
                  <li key={index} className="mb-4">
                    <h3 className="font-bold mb-2">{category} (Total Points: {categoryPoints})</h3>
                    <ul>
                      {categoryQuestions.map((question, idx) => {
                        const userAnswer = Array.isArray(question.userAnswer)
                          ? question.userAnswer.join(', ')
                          : question.userAnswer;
  
                        const answerPoints = question.answers.reduce((total, answer) => {
                          if (
                            (Array.isArray(question.userAnswer) && question.userAnswer.includes(answer.answer)) ||
                            question.userAnswer === answer.answer
                          ) {
                            return total + answer.point;
                          }
                          return total;
                        }, 0);
  
                        return (
                          <li key={idx} className="flex justify-between">
                            {/* <span>{question.question}</span> */}
                            <span className="font-bold">{userAnswer} ({answerPoints} points)</span>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col p-6 bg-white h-auto">
        <h1 className="text-xl font-semibold text-red-600 mt-6 mb-4">Unfortunately!</h1>
        <p className="mb-4">You do not meet the eligibility criteria for the German Opportunity Card.</p>
        <div className="flex flex-row divide-x-2 divide-gray-300 border-2 rounded-lg">
          <div className="p-4 w-1/2">
            <h2 className="text-lg font-bold mb-4">Total Points: {totalPoints}</h2>
            <p className="mb-4">You do not meet the eligibility criteria for the German Opportunity Card.</p>
            <button className="w-[90px] h-[32px] rounded-full text-[#BA1A1A] bg-[#FFDAD6]">Ineligible</button>
          </div>
          <div className="p-4 w-1/2">
            <ul className="list-none space-y-4">
              {Object.entries(questionsByCategory).map(([category, categoryQuestions], index) => {
                const categoryPoints = categoryQuestions.reduce((sum, question) => {
                  return sum + question.answers.reduce((total, answer) => {
                    if (Array.isArray(question.userAnswer) && question.userAnswer.includes(answer.answer)) {
                      return total + answer.point;
                    } else if (question.userAnswer === answer.answer) {
                      return total + answer.point;
                    }
                    return total;
                  }, 0);
                }, 0);
  
                return (
                  <li key={index} className="mb-4">
                    <h3 className="font-bold mb-2">{category} (Total Points: {categoryPoints})</h3>
                    <ul>
                      {categoryQuestions.map((question, idx) => {
                        const userAnswer = Array.isArray(question.userAnswer)
                          ? question.userAnswer.join(', ')
                          : question.userAnswer;
  
                        const answerPoints = question.answers.reduce((total, answer) => {
                          if (
                            (Array.isArray(question.userAnswer) && question.userAnswer.includes(answer.answer)) ||
                            question.userAnswer === answer.answer
                          ) {
                            return total + answer.point;
                          }
                          return total;
                        }, 0);
  
                        return (
                          <li key={idx} className="flex justify-between">
                            {/* <span>{question.question}</span> */}
                            <span className="font-bold">{userAnswer} ({answerPoints} points)</span>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-16">
          <button
            className="w-auto h-auto px-6 py-2 rounded-full text-[#000000] bg-[#D4E4F6]"
            onClick={() => {
              window.location.href = '../Application-Assistant';
            }}
          >
            Retake test
          </button>
        </div>
      </div>
    );
  
    return <div className="flex flex-col">{eligibleMessage}</div>;
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
    <div className="flex flex-col justify-center items-center ">
      <div className="rounded-[28px] w-full max-w-4xl p-8 shadow-md bg-[#F1F4F9]">
        <div className="mb-8">
          <div className="text-lg font-roboto mb-4 text-[#42474E]">{t('applicationAssistant.question')} {progress} of {questions.length}</div>

        </div>

        <div className="mb-12" style={{ minHeight: '420px' }}>
          <label className="block text-xl mb-8 mt-8">
            {currentQuestion.question}
          </label>

          <div className="flex space-x-1 ">
            {[...Array(questions.length)].map((_, idx) => (
              <div
                key={idx}
                className={`h-[4px] rounded-full mb-10 ${idx < progress ? 'bg-[#465D91]' : 'bg-[#D9E2FF]'} w-full`}
              ></div>
            ))}
          </div>

           {['yes-no'].includes(currentQuestion.type) && (
          <div className="flex flex-row items-center"> 
            {currentQuestion.answers.map((option, idx) => (
              <label key={idx} className={`flex items-center p-4 bg-white border ${
                idx === 0 ? 'rounded-l-full' : 'rounded-r-full'
              } cursor-pointer hover:bg-gray-100 w-1/6 h-16`}>
                <input
                  type="radio"
                  name={`question-${progress}`}
                  value={option.answer}
                  checked={currentQuestion.userAnswer === option.answer}
                  onChange={() => handleAnswerChange(option.answer)}
                  className="w-6 h-6 mr-4 bg-[#465D91] rounded-full border-8 border-gray-400 hover:bg-[#D4E4F6]"
        />

                {option.answer}
              </label>
            ))}
          </div>
        )} 

{/* {['yes-no'].includes(currentQuestion.type) && (
  <div className="flex flex-row items-center">
    {currentQuestion.answers.map((option, idx) => (
      <label
        key={idx}
        className={`flex items-center p-4 border cursor-pointer w-1/6 h-16 
          ${currentQuestion.userAnswer === option.answer ? 'bg-green-500' : 'bg-gray-100'} 
          ${idx === 0 ? 'rounded-l-full' : 'rounded-r-full'} 
          hover:bg-white`}
      >
        <input
          type="radio"
          name={`question-${progress}`}
          value={option.answer}
          checked={currentQuestion.userAnswer === option.answer}
          onChange={() => handleAnswerChange(option.answer)}
          className="hidden" // Hide the default radio button
        />
        <span className={`w-6 h-6 mr-4 inline-block rounded-full border-2 
          ${currentQuestion.userAnswer === option.answer ? 'bg-green-500 border-green-500' : 'bg-gray-100 border-gray-400'}`}></span>
        {option.answer}
      </label>
    ))}
  </div>
)} */}



          

          {['multiple-choice'].includes(currentQuestion.type) && (
            <div className="space-y-4">
              {currentQuestion.answers.map((option, idx) => (
                <label key={idx} className="flex items-center p-4 rounded-[16px] bg-white border cursor-pointer hover:bg-gray-200">
                  <input
                    type="radio"
                    name={`question-${progress}`}
                    value={option.answer}
                    checked={currentQuestion.userAnswer === option.answer}
                    onChange={() => handleAnswerChange(option.answer)}
                    className="w-6 h-6 mr-4 bg-[#465D91] text-green-800"

                  />
                  {option.answer}
                </label>
              ))}
            </div>
          )}


{currentQuestion.type === 'multiple-selection' && (
  <div className="flex flex-wrap space-x-2">
    {currentQuestion.answers.map((option, idx) => {
      const isSelected = (currentQuestion.userAnswer as string[]).includes(option.answer);
      return (
        <label
          key={idx}
          className={`flex items-center justify-center px-5 py-4 border rounded-full cursor-pointer transition duration-200
            ${isSelected ?  'bg-[#D4E4F6] text-[#1A1B20]' : 'bg-gray-100 text-[#181C20] hover:bg-gray-200'}
          `}
          onClick={() => handleAnswerChange(option.answer, !isSelected)} // Toggle selection on click
        >
          <span className="text-sm">{option.answer}</span> 
        </label>
      );
    })}
  </div>
)}


{currentQuestion.type === 'dropdown' && (
  <select
    className="w-1/2 p-4 border border-gray-300 bg-white rounded"
    value={currentQuestion.userAnswer as string}
    onChange={(e) => handleAnswerChange(e.target.value)}
  >
    <option value="" disabled>Select an option...</option>
    {currentQuestion.answers.map((option, idx) => (
      <option key={idx} value={option.answer}>
        {option.answer}
      </option>
    ))}
  </select>
)}



{currentQuestion.type === 'text-input' && (
  <div className="space-y-4">
    {currentQuestion.answers.map((answer, idx) => (
      <div key={idx}>
        <label className="block text-xl mb-2">{answer.answer}</label>
        <input
          type="text"
          className="w-1/2 p-4 border border-gray-300 rounded"
          value={Array.isArray(currentQuestion.userAnswer) ? currentQuestion.userAnswer[idx] || '' : ''}
          onChange={(e) => {
            const updatedAnswers = Array.isArray(currentQuestion.userAnswer) ? [...currentQuestion.userAnswer] : [];
            updatedAnswers[idx] = e.target.value;
            handleAnswerChange(updatedAnswers);
          }
        
        }
          // placeholder={`Enter your ${idx === 0 ? 'first name' : 'last name'}`}
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
            className="bg-[#FFFFFF] text-[#465D91] border-[#757780] border-[1px] px-6 py-3 rounded-full"
            onClick={handleBack}
            disabled={progress === 1}
          >
            Back
          </button>
          <button
            className="bg-[#465D91] text-white px-6 py-3 rounded-full"
            onClick={progress === questions.length ? handleSubmit:handleNext}
          >
            {progress === questions.length ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
      {target=='EMPLOYER'?
      <div className='rounded-lg w-full max-w-4xl pt-12 shadow-m'>
        <p className="text-[#42474E] font-roboto text-base font-normal leading-6 tracking-wide text-left">Chancenkarte.com is an independent information portal. We aim to help you come to Germany, find a job and stay here. We are not government-funded and want to stay that way – fast and agile to serve your needs. We would like to accompany you on your way and provide you with necessary and useful tips and tools so that we can welcome you to Germany soon.</p>
      </div>:''
      }
    </div>
  );
};

export default Questionnaire;