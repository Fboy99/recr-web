import { useState, useEffect } from 'react';
import Button from './Button/Button';

interface Option {
  id: number;
  text: string;
}

enum QuestionType {
  MultipleChoice = 'multiple-choice',
  Input = 'input',
  Dropdown = 'dropdown',
  YesNo = 'yes-no',
  MultiSelect = 'multiselect',
}

interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: Option[];
  placeholder?: string;
}

const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch('/data/questions.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

export default function QuestionComponent() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [responses, setResponses] = useState<(number | string | null | number[])[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchQuestions().then((data) => {
      setQuestions(data);
      setResponses(Array(data.length).fill(null));
      setIsLoading(false);
    });
  }, []);

  const updateResponse = (response: number | string | number[] | null) => {
    const newResponses = [...responses];
    newResponses[currentQuestion] = response;
    setResponses(newResponses);
  };

  const handleOptionChange = (optionId: number) => updateResponse(optionId);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateResponse(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateResponse(event.target.value);
  };

  const handleYesNoChange = (value: string) => updateResponse(value);

  const handleMultiSelectChange = (optionId: number) => {
    const currentResponse: number[] = Array.isArray(responses[currentQuestion])
      ? (responses[currentQuestion] as number[])
      : [];

    updateResponse(
      currentResponse.includes(optionId)
        ? currentResponse.filter(id => id !== optionId)
        : [...currentResponse, optionId]
    );
  };

  const handleNext = () => {
    if (responses[currentQuestion] !== null && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (isLoading) return <div>Loading...</div>;

  const currentQ = questions[currentQuestion];

  // const renderQuestion = () => {
  //   switch (currentQ.type) {
  //     case QuestionType.MultipleChoice:
  //       return currentQ.options?.map((option) => (
  //         <div key={option.id} className="mb-2">
  //           <input
  //             type="radio"
  //             id={`option-${option.id}`}
  //             name={`question-${currentQ.id}`}
  //             className="mr-2"
  //             checked={responses[currentQuestion] === option.id}
  //             onChange={() => handleOptionChange(option.id)}
  //           />
  //           <label htmlFor={`option-${option.id}`}>{option.text}</label>
  //         </div>
  //       ));
  //     case QuestionType.Input:
  //       return (
  //         <div className="mb-2">
  //           <input
  //             type="text"
  //             placeholder={currentQ.placeholder || ''}
  //             value={typeof responses[currentQuestion] === 'string'
  //               ? responses[currentQuestion] as string
  //               : ''}
  //             onChange={handleInputChange}
  //           />
  //         </div>
  //       );
  //     case QuestionType.Dropdown:
  //       return (
  //         <div className="mb-2">
  //           <select
  //             value={typeof responses[currentQuestion] === 'string'
  //               ? responses[currentQuestion] as string
  //               : ''}
  //             onChange={handleSelectChange}
  //           >
  //             <option value="" disabled>
  //               {currentQ.placeholder || 'Select an option'}
  //             </option>
  //             {currentQ.options?.map((option) => (
  //               <option key={option.id} value={option.id}>
  //                 {option.text}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       );
  //     case QuestionType.YesNo:
  //       return (
  //         <div className="mb-2">
  //           <input
  //             type="radio"
  //             id={`yes-${currentQuestion}`}
  //             name={`yesNo-${currentQuestion}`}
  //             className="mr-2"
  //             checked={responses[currentQuestion] === 'yes'}
  //             onChange={() => handleYesNoChange('yes')}
  //           />
  //           <label htmlFor={`yes-${currentQuestion}`}>Yes</label>
  //           <input
  //             type="radio"
  //             id={`no-${currentQuestion}`}
  //             name={`yesNo-${currentQuestion}`}
  //             className="mr-2"
  //             checked={responses[currentQuestion] === 'no'}
  //             onChange={() => handleYesNoChange('no')}
  //           />
  //           <label htmlFor={`no-${currentQuestion}`}>No</label>
  //         </div>
  //       );
  //     case QuestionType.MultiSelect:
  //       return (
  //         <div className="mb-2 flex flex-wrap">
  //           {currentQ.options?.map((option) => (
  //             <button
  //               key={option.id}
  //               onClick={() => handleMultiSelectChange(option.id)}
  //               className={`border rounded-full px-4 py-2 m-1 ${
  //                 (responses[currentQuestion] as number[])?.includes(option.id)
  //                   ? 'bg-blue-500 text-white'
  //                   : 'bg-white text-blue-500 border-blue-500'
  //               }`}
  //             >
  //               {option.text}
  //             </button>
  //           ))}
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  const renderQuestion = () => {
    if (!currentQ) {
      return null; // Return null or some fallback content if currentQ is undefined.
    }
  
    switch (currentQ.type) {
      case QuestionType.MultipleChoice:
        return currentQ.options?.map((option) => (
          <div key={option.id} className="mb-2">
            <input
              type="radio"
              id={`option-${option.id}`}
              name={`question-${currentQ.id}`}
              className="mr-2"
              checked={responses[currentQuestion] === option.id}
              onChange={() => handleOptionChange(option.id)}
            />
            <label htmlFor={`option-${option.id}`}>{option.text}</label>
          </div>
        ));
      case QuestionType.Input:
        return (
          <div className="mb-2">
            <input
              type="text"
              placeholder={currentQ.placeholder || ''}
              value={typeof responses[currentQuestion] === 'string'
                ? (responses[currentQuestion] as string)
                : ''}
              onChange={handleInputChange}
            />
          </div>
        );
      case QuestionType.Dropdown:
        return (
          <div className="mb-2">
            <select
              value={typeof responses[currentQuestion] === 'string'
                ? (responses[currentQuestion] as string)
                : ''}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                {currentQ.placeholder || 'Select an option'}
              </option>
              {currentQ.options?.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        );
      case QuestionType.YesNo:
        return (
          <div className="mb-2">
            <input
              type="radio"
              id={`yes-${currentQuestion}`}
              name={`yesNo-${currentQuestion}`}
              className="mr-2"
              checked={responses[currentQuestion] === 'yes'}
              onChange={() => handleYesNoChange('yes')}
            />
            <label htmlFor={`yes-${currentQuestion}`}>Yes</label>
            <input
              type="radio"
              id={`no-${currentQuestion}`}
              name={`yesNo-${currentQuestion}`}
              className="mr-2"
              checked={responses[currentQuestion] === 'no'}
              onChange={() => handleYesNoChange('no')}
            />
            <label htmlFor={`no-${currentQuestion}`}>No</label>
          </div>
        );
      case QuestionType.MultiSelect:
        return (
          <div className="mb-2 flex flex-wrap">
            {currentQ.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleMultiSelectChange(option.id)}
                className={`border rounded-full px-4 py-2 m-1 ${
                  (responses[currentQuestion] as number[])?.includes(option.id)
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500 border-blue-500'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  

  return (
    <div className="min-h-screen w-full flex items-center justify-center my-auto">
      <div className="bg-white w-full max-w-[1040px] h-[720px] rounded-[28px] shadow-lg opacity-100 p-8 flex flex-col justify-between">
        <div>
          {/* <div className="relative pt-1">
            <h3 className="text-lg font-semibold mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </h3>

            <h2 className="text-xl font-bold mb-4">{currentQ.text}</h2>

            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div> */}

{!isLoading && currentQ ? (
  <>
    <h3 className="text-lg font-semibold mb-2">
      Question {currentQuestion + 1} of {questions.length}
    </h3>

    <h2 className="text-xl font-bold mb-4">{currentQ.text}</h2>

    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
      ></div>
    </div>

    {renderQuestion()}
  </>
) : (
  <div>Loading...</div>
)}


          {renderQuestion()}
        </div>

        <div className="flex justify-between mt-6">
          <Button
            text="Back"
            onClick={handleBack}
            className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
            disabled={currentQuestion === 0}
          />
          <Button
            text={currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
            onClick={handleNext}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={responses[currentQuestion] === null}
          />
        </div>
      </div>
    </div>
  );
}
