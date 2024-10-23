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
        answer
      }
      createAt
      updateAt
      language
      target
    }
  }
`;

interface Question {
  id: string;
  type: 'yes-no' | 'multiple-choice' | 'multiple-selection' | 'dropdown' | 'text-input';
  question: string;
  description: string;
  answers: { answer: string }[];
  createAt: string;
  updateAt: string;
  language: string;
  target: string;
  userAnswer?: string | string[];
}

interface SimulatorQuestionProps {
  language: string; 
  target: 'EMPLOYER' | 'JOBSEEKER';  
}

const SimulatorQuestion: React.FC<SimulatorQuestionProps> = ({ language, target }) => {
  const { t } = useTranslation();

  const { loading, error, data } = useQuery(GET_ASSISTANT_BY_LANGUAGE_AND_TARGET, {
    variables: {
      language: (() => {
        switch (language.toUpperCase()) {
            case 'EN':
            case 'en':
              return 'AN';
            case 'FR':
            case 'fr':
              return 'FR';
            case 'DE':
            case 'de':
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
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const fetchedQuestions: Question[] = data.AssistantByLanguageAndTarget.map((item: any) => ({
        id: item.id,
        type: item.type,
        question: item.question,
        description: item.description,
        answers: item.answers,
        createAt: item.createAt,
        updateAt: item.updateAt,
        language: item.language,
        target: item.target,
        userAnswer: item.type === 'multiple-selection' ? [] : '',
      }));
      setQuestions(fetchedQuestions);
    }
  }, [data]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center'>Error: {error.message}</p>;
  if (questions.length === 0) return <p className='text-center'>No questions available.</p>;

  const handleNext = () => {
    const currentQuestion = questions[progress - 1];
    const isAnswerProvided = currentQuestion.userAnswer ? true : false;

    if (isAnswerProvided) {
      setShowError(false);
      if (progress < questions.length) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
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
    updatedQuestions[progress - 1].userAnswer = isMultipleSelection 
      ? (updatedQuestions[progress - 1].userAnswer as string[]).includes(answer as string)
        ? (updatedQuestions[progress - 1].userAnswer as string[]).filter(ans => ans !== answer)
        : [...(updatedQuestions[progress - 1].userAnswer as string[]), answer as string]
      : answer;

    setQuestions(updatedQuestions);
  };

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-[1040px] flex flex-col items-center justify-center h-[720px] rounded-[28px] opacity-100 p-8 shadow-md overflow-y-auto relative">
          <h1 className="text-[32px] text-center font-semibold text-green-600 mt-6 mb-4">Thank you!</h1>
          <p className='text-center py-8'>As soon as you can find suitable skilled workers with us, we will send you an e-mail.</p>
          <p className='text-center'>We are currently working on the Chancenkarte Jobs! platform, where you will be able to find skilled workers with the Opportunity Card yourself in the future. You can find out more about this in the last step.</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[progress - 1];

  return (
    <div className="flex flex-col justify-center items-center bg-[#F1F4F9]">
      <div className="bg-white rounded-lg w-full max-w-4xl p-8 shadow-md">
        <div className="mb-8">
          <div className="text-lg font-semibold mb-4">{t('SimulatorForm.question')} {progress} of {questions.length}</div>
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
          <label className="block text-xl mb-4">{currentQuestion.question}</label>
          {['yes-no', 'multiple-choice', 'multiple-selection', 'dropdown', 'text-input'].includes(currentQuestion.type) && (
            <div>
              {currentQuestion.type === 'yes-no' && currentQuestion.answers.map((option, idx) => (
                <label key={idx} className="flex items-center p-4 bg-gray-100 border cursor-pointer hover:bg-gray-200">
                  <input
                    type="radio"
                    name={`question-${progress}`}
                    value={option.answer}
                    checked={currentQuestion.userAnswer === option.answer}
                    onChange={() => handleAnswerChange(option.answer)}
                    className="w-6 h-6 mr-4"
                  />
                  {option.answer}
                </label>
              ))}
              {currentQuestion.type === 'multiple-choice' && currentQuestion.answers.map((option, idx) => (
                <label key={idx} className="flex items-center p-4 bg-gray-100 border cursor-pointer hover:bg-gray-200">
                  <input
                    type="radio"
                    name={`question-${progress}`}
                    value={option.answer}
                    checked={currentQuestion.userAnswer === option.answer}
                    onChange={() => handleAnswerChange(option.answer)}
                    className="w-6 h-6 mr-4"
                  />
                  {option.answer}
                </label>
              ))}
              {currentQuestion.type === 'multiple-selection' && currentQuestion.answers.map((option, idx) => (
                <label key={idx} className="flex items-center justify-center px-5 py-4 border rounded-full cursor-pointer transition duration-200">
                  <input
                    type="checkbox"
                    checked={(currentQuestion.userAnswer as string[]).includes(option.answer)}
                    onChange={() => handleAnswerChange(option.answer, true)}
                    className="hidden"
                  />
                  <span className="text-sm">{option.answer}</span>
                </label>
              ))}
              {currentQuestion.type === 'dropdown' && (
                <select
                  className="w-1/2 p-4 border border-gray-300 rounded"
                  value={currentQuestion.userAnswer as string}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                >
                  <option value="" disabled>Select an option...</option>
                  {currentQuestion.answers.map((option, idx) => (
                    <option key={idx} value={option.answer}>{option.answer}</option>
                  ))}
                </select>
              )}
              {currentQuestion.type === 'text-input' && (
                <input
                  type="text"
                  className="w-1/2 p-4 border border-gray-300 rounded"
                  value={currentQuestion.userAnswer as string}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                />
              )}
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
            onClick={progress === questions.length ? handleNext : handleNext}
          >
            {progress === questions.length ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimulatorQuestion;