// "use client"; // Add this line at the top

// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import Button from './Button/Button'; // Corrected import

// const questions = [
//   {
//     id: 1,
//     text: 'question_1_text',
//     options: [
//       { id: 'A', text: 'option_1_a' },
//       { id: 'B', text: 'option_1_b' },
//       { id: 'C', text: 'option_1_c' },
//       { id: 'D', text: 'option_1_d' },
//     ],
//   },
//   {
//     id: 2,
//     text: 'question_2_text',
//     options: [
//       { id: 'A', text: 'option_2_a' },
//       { id: 'B', text: 'option_2_b' },
//       { id: 'C', text: 'option_2_c' },
//       { id: 'D', text: 'option_2_d' },
//     ],
//   },

//   {
//     id: 3,
//     text: 'question_3_text',
//     options: [
//       { id: 'A', text: 'option_3_a' },
//       { id: 'B', text: 'option_3_b' },
//       { id: 'C', text: 'option_3_c' },
//       { id: 'D', text: 'option_3_d' },
//     ],
//   },
//   // Add more questions as needed
// ];

// export default function Question() {
//   const { t } = useTranslation();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [responses, setResponses] = useState(Array(questions.length).fill(null));

//   const handleOptionChange = (optionId) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = optionId;
//     setResponses(newResponses);
//   };

//   const handleNext = () => {
//     if (responses[currentQuestion] !== null && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   // Calculate progress percentage
//   const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <div className="relative pt-1">
//         <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
//           <div
//             style={{ width: `${progressPercentage}%` }}
//             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//           ></div>
//         </div>
//       </div>
//       <h3 className="text-lg font-semibold mb-2">
//         {t('Question')} {currentQuestion + 1} {t('of')} {questions.length}
//       </h3>
//       <h2 className="text-xl font-bold mb-4">{t(questions[currentQuestion].text)}</h2>
//       {questions[currentQuestion].options.map((option) => (
//         <div key={option.id} className="mb-4">
//           <input
//             type="radio"
//             id={option.id}
//             name="question"
//             className="mr-2"
//             checked={responses[currentQuestion] === option.id}
//             onChange={() => handleOptionChange(option.id)}
//           />
//           <label htmlFor={option.id}>{t(option.text)}</label>
//         </div>
//       ))}
//       <div className="flex justify-between mt-6">
//         <Button text="Back" onClick={handleBack} className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800" />
//         <Button text="Next" onClick={handleNext} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={responses[currentQuestion] === null} />
//       </div>
//     </div>
//   );
// }

// // export default Question;

// // ******************************************************************
// // code 2 using the json file
// // ******************************************************************

// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import Button from './Button/Button';

// interface Option {
//   id: number;
//   text: string;
// }

// interface Question {
//   id: number;
//   text: string;
//   type: 'multiple-choice' | 'input' | 'dropdown' | 'yes-no';
//   options?: Option[];
//   placeholder?: string;
// }

// const fetchQuestions = async (): Promise<Question[]> => {
//   try {
//     const response = await fetch('/data/questions.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('Fetched data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching questions:', error);
//     return [];
//   }
// };

// export default function QuestionComponent() {
//   const { t } = useTranslation();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [responses, setResponses] = useState<(number | string | null)[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchQuestions().then((data) => {
//       console.log('Data inside useEffect:', data);
//       setQuestions(data);
//       setResponses(Array(data.length).fill(null));
//       setIsLoading(false);
//     });
//   }, []);

//   const handleOptionChange = (optionId: number) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = optionId;
//     setResponses(newResponses);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = event.target.value;
//     setResponses(newResponses);
//   };

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = event.target.value;
//     setResponses(newResponses);
//   };

//   const handleYesNoChange = (value: string) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = value;
//     setResponses(newResponses);
//   };

//   const handleNext = () => {
//     if (responses[currentQuestion] !== null && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

//   if (isLoading) return <div>Loading...</div>;

//   const currentQ = questions[currentQuestion];
//   console.log('Current Question:', currentQ);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full mx-4">
//         <div className="relative pt-1">
//           <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
//             <div
//               style={{ width: `${progressPercentage}%` }}
//               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//             ></div>
//           </div>
//         </div>
//         <h3 className="text-lg font-semibold mb-2">
//           {t('Question')} {currentQuestion + 1} {t('of')} {questions.length}
//         </h3>
//         <h2 className="text-xl font-bold mb-4">{t(currentQ.text)}</h2>
//         {currentQ.type === 'multiple-choice' &&
//           currentQ.options?.map((option) => (
//             <div key={option.id} className="mb-4">
//               <input
//                 type="radio"
//                 id={option.id.toString()}
//                 name="question"
//                 className="mr-2"
//                 checked={responses[currentQuestion] === option.id}
//                 onChange={() => handleOptionChange(option.id)}
//               />
//               <label htmlFor={option.id.toString()}>{t(option.text)}</label>
//             </div>
//           ))}
//         {currentQ.type === 'input' && (
//           <div className="mb-4">
//             <input
//               type="text"
//               className="border p-2 w-full"
//               placeholder={t(currentQ.placeholder || '')}
//               value={responses[currentQuestion] || ''}
//               onChange={handleInputChange}
//             />
//           </div>
//         )}
//         {currentQ.type === 'dropdown' && (
//           <div className="mb-4">
//             <select
//               className="border p-2 w-full"
//               value={responses[currentQuestion] || ''}
//               onChange={handleSelectChange}
//             >
//               <option value="" disabled>{t(currentQ.placeholder || 'Select an option')}</option>
//               {currentQ.options?.map((option) => (
//                 <option key={option.id} value={option.id}>
//                   {t(option.text)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {currentQ.type === 'yes-no' && (
//           <div className="mb-4">
//             <input
//               type="radio"
//               id={`yes-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'yes'}
//               onChange={() => handleYesNoChange('yes')}
//             />
//             <label htmlFor={`yes-${currentQuestion}`}>{t('Yes')}</label>
//             <input
//               type="radio"
//               id={`no-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'no'}
//               onChange={() => handleYesNoChange('no')}
//             />
//             <label htmlFor={`no-${currentQuestion}`}>{t('No')}</label>
//           </div>
//         )}
//         <div className="flex justify-between mt-6">
//           <Button
//             text="Back"
//             onClick={handleBack}
//             className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
//             disabled={currentQuestion === 0}
//           />
//           <Button
//             text="Next"
//             onClick={handleNext}
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             disabled={responses[currentQuestion] === null}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



// // ******************************************************************
// // code 3 
// // ******************************************************************

// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import Select from 'react-select';
// import Button from './Button/Button';

// interface Option {
//   id: number;
//   text: string;
// }

// interface Question {
//   id: number;
//   text: string;
//   type: 'multiple-choice' | 'input' | 'dropdown' | 'yes-no' | 'multiselect';
//   options?: Option[];
//   placeholder?: string;
// }

// const fetchQuestions = async (): Promise<Question[]> => {
//   try {
//     const response = await fetch('/data/questions.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('Fetched data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching questions:', error);
//     return [];
//   }
// };

// export default function QuestionComponent() {
//   const { t } = useTranslation();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [responses, setResponses] = useState<(number | string | null | number[])[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchQuestions().then((data) => {
//       console.log('Data inside useEffect:', data);
//       setQuestions(data);
//       setResponses(Array(data.length).fill(null));
//       setIsLoading(false);
//     });
//   }, []);

//   const handleOptionChange = (optionId: number) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = optionId;
//     setResponses(newResponses);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = event.target.value;
//     setResponses(newResponses);
//   };

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = event.target.value;
//     setResponses(newResponses);
//   };

//   const handleYesNoChange = (value: string) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = value;
//     setResponses(newResponses);
//   };

//   const handleMultiSelectChange = (selectedOptions: Option[]) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = selectedOptions.map(option => option.id);
//     setResponses(newResponses);
//   };

//   const handleNext = () => {
//     if (responses[currentQuestion] !== null && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

//   if (isLoading) return <div>Loading...</div>;

//   const currentQ = questions[currentQuestion];
//   console.log('Current Question:', currentQ);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full mx-4">
//         <div className="relative pt-1">
//           <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
//             <div
//               style={{ width: `${progressPercentage}%` }}
//               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//             ></div>
//           </div>
//         </div>
//         <h3 className="text-lg font-semibold mb-2">
//           {t('Question')} {currentQuestion + 1} {t('of')} {questions.length}
//         </h3>
//         <h2 className="text-xl font-bold mb-4">{t(currentQ.text)}</h2>
//         {currentQ.type === 'multiple-choice' &&
//           currentQ.options?.map((option) => (
//             <div key={option.id} className="mb-4">
//               <input
//                 type="radio"
//                 id={option.id.toString()}
//                 name="question"
//                 className="mr-2"
//                 checked={responses[currentQuestion] === option.id}
//                 onChange={() => handleOptionChange(option.id)}
//               />
//               <label htmlFor={option.id.toString()}>{t(option.text)}</label>
//             </div>
//           ))}
//         {currentQ.type === 'input' && (
//           <div className="mb-4">
//             <input
//               type="text"
//               className="border p-2 w-full"
//               placeholder={t(currentQ.placeholder || '')}
//               value={responses[currentQuestion] || ''}
//               onChange={handleInputChange}
//             />
//           </div>
//         )}
//         {currentQ.type === 'dropdown' && (
//           <div className="mb-4">
//             <select
//               className="border p-2 w-full"
//               value={responses[currentQuestion] || ''}
//               onChange={handleSelectChange}
//             >
//               <option value="" disabled>{t(currentQ.placeholder || 'Select an option')}</option>
//               {currentQ.options?.map((option) => (
//                 <option key={option.id} value={option.id}>
//                   {t(option.text)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {currentQ.type === 'yes-no' && (
//           <div className="mb-4">
//             <input
//               type="radio"
//               id={`yes-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'yes'}
//               onChange={() => handleYesNoChange('yes')}
//             />
//             <label htmlFor={`yes-${currentQuestion}`}>{t('Yes')}</label>
//             <input
//               type="radio"
//               id={`no-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'no'}
//               onChange={() => handleYesNoChange('no')}
//             />
//             <label htmlFor={`no-${currentQuestion}`}>{t('No')}</label>
//           </div>
//         )}
//         {currentQ.type === 'multiselect' && (
//           <div className="mb-4">
//             <Select
//               isMulti
//               options={currentQ.options?.map(option => ({ value: option.id, label: t(option.text) }))}
//               onChange={(selectedOptions) => handleMultiSelectChange(selectedOptions.map(option => option as Option))}
//               placeholder={t(currentQ.placeholder || 'Select options')}
//             />
//           </div>
//         )}
//         <div className="flex justify-between mt-6">
//           <Button
//             text="Back"
//             onClick={handleBack}
//             className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
//             disabled={currentQuestion === 0}
//           />
//           <Button
//             text="Next"
//             onClick={handleNext}
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             disabled={responses[currentQuestion] === null}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// // ******************************************************************
// // code4
// // ******************************************************************

// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import Button from './Button/Button';

// interface Option {
//   id: number;
//   text: string;
// }

// enum QuestionType {
//   MultipleChoice = 'multiple-choice',
//   Input = 'input',
//   Dropdown = 'dropdown',
//   YesNo = 'yes-no',
//   MultiSelect = 'multiselect',
// }

// interface Question {
//   id: number;
//   text: string;
//   type: QuestionType;
//   options?: Option[];
//   placeholder?: string;
// }

// const fetchQuestions = async (): Promise<Question[]> => {
//   try {
//     const response = await fetch('/data/questions.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching questions:', error);
//     return [];
//   }
// };

// export default function QuestionComponent() {
//   const { t } = useTranslation();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [responses, setResponses] = useState<(number | string | null | number[])[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchQuestions().then((data) => {
//       setQuestions(data);
//       setResponses(Array(data.length).fill(null));
//       setIsLoading(false);
//     });
//   }, []);

//   const updateResponse = (response: number | string | number[]) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = response;
//     setResponses(newResponses);
//   };

//   const handleOptionChange = (optionId: number) => updateResponse(optionId);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => updateResponse(event.target.value);

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => updateResponse(event.target.value);

//   const handleYesNoChange = (value: string) => updateResponse(value);

//   const handleMultiSelectChange = (optionId: number) => {
//     const currentResponse = (responses[currentQuestion] as number[]) || [];
//     updateResponse(
//       currentResponse.includes(optionId)
//         ? currentResponse.filter(id => id !== optionId)
//         : [...currentResponse, optionId]
//     );
//   };

//   const handleNext = () => {
//     if (responses[currentQuestion] !== null && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

//   if (isLoading) return <div>Loading...</div>;

//   const currentQ = questions[currentQuestion];

//   const renderQuestion = () => {
//     switch (currentQ.type) {
//       case QuestionType.MultipleChoice:
//         return currentQ.options?.map((option) => (
//           <div key={option.id} className="mb-4">
//             <input
//               type="radio"
//               id={`option-${option.id}`}
//               name={`question-${currentQ.id}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === option.id}
//               onChange={() => handleOptionChange(option.id)}
//             />
//             <label htmlFor={`option-${option.id}`}>{t(option.text)}</label>
//           </div>
//         ));
//       case QuestionType.Input:
//         return (
//           <div className="mb-4">
//             <input
//               type="text"
//               className="border p-2 w-full"
//               placeholder={t(currentQ.placeholder || '')}
//               value={responses[currentQuestion] || ''}
//               onChange={handleInputChange}
//             />
//           </div>
//         );
//       case QuestionType.Dropdown:
//         return (
//           <div className="mb-4">
//             <select
//               className="border p-2 w-full"
//               value={responses[currentQuestion] || ''}
//               onChange={handleSelectChange}
//             >
//               <option value="" disabled>
//                 {t(currentQ.placeholder || 'Select an option')}
//               </option>
//               {currentQ.options?.map((option) => (
//                 <option key={option.id} value={option.id}>
//                   {t(option.text)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       case QuestionType.YesNo:
//         return (
//           <div className="mb-4">
//             <input
//               type="radio"
//               id={`yes-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'yes'}
//               onChange={() => handleYesNoChange('yes')}
//             />
//             <label htmlFor={`yes-${currentQuestion}`}>{t('Yes')}</label>
//             <input
//               type="radio"
//               id={`no-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'no'}
//               onChange={() => handleYesNoChange('no')}
//             />
//             <label htmlFor={`no-${currentQuestion}`}>{t('No')}</label>
//           </div>
//         );
//       case QuestionType.MultiSelect:
//         return (
//           <div className="mb-4 flex flex-wrap">
//             {currentQ.options?.map((option) => (
//               <button
//                 key={option.id}
//                 onClick={() => handleMultiSelectChange(option.id)}
//                 className={`border rounded-full px-4 py-2 m-1 ${
//                   (responses[currentQuestion] as number[])?.includes(option.id)
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-white text-blue-500 border-blue-500'
//                 }`}
//               >
//                 {t(option.text)}
//               </button>
//             ))}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center my-auto">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-[90%] lg:max-w-[75%] mx-auto">
//         <div className="relative pt-1">
//         <h3 className="text-lg font-semibold mb-2">
//           {t('Question')} {currentQuestion + 1} {t('of')} {questions.length}
//         </h3>
//           <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
//             <div
//               style={{ width: `${progressPercentage}%` }}
//               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//             ></div>
//           </div>
//         </div>
//         <h2 className="text-xl font-bold mb-4">{t(currentQ.text)}</h2>
//         {renderQuestion()}
//         <div className="flex justify-between mt-6">
//           <Button
//             text={t('Back')}
//             onClick={handleBack}
//             className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
//             disabled={currentQuestion === 0}
//           />
//           <Button
//             text={currentQuestion === questions.length - 1 ? t('Submit') : t('Next')}
//             onClick={handleNext}
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             disabled={responses[currentQuestion] === null}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }  


// // ******************************************************************
// // code5
// // ******************************************************************

// import { useState, useEffect } from 'react';
// import Button from './Button/Button';

// interface Option {
//   id: number;
//   text: string;
// }

// enum QuestionType {
//   MultipleChoice = 'multiple-choice',
//   Input = 'input',
//   Dropdown = 'dropdown',
//   YesNo = 'yes-no',
//   MultiSelect = 'multiselect',
// }

// interface Question {
//   id: number;
//   text: string;
//   type: QuestionType;
//   options?: Option[];
//   placeholder?: string;
// }

// const fetchQuestions = async (): Promise<Question[]> => {
//   try {
//     const response = await fetch('/data/questions.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching questions:', error);
//     return [];
//   }
// };

// export default function QuestionComponent() {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [responses, setResponses] = useState<(number | string | null | number[])[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchQuestions().then((data) => {
//       setQuestions(data);
//       setResponses(Array(data.length).fill(null));
//       setIsLoading(false);
//     });
//   }, []);

//   const updateResponse = (response: number | string | number[]) => {
//     const newResponses = [...responses];
//     newResponses[currentQuestion] = response;
//     setResponses(newResponses);
//   };

//   const handleOptionChange = (optionId: number) => updateResponse(optionId);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => updateResponse(event.target.value);

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => updateResponse(event.target.value);

//   const handleYesNoChange = (value: string) => updateResponse(value);

//   const handleMultiSelectChange = (optionId: number) => {
//     const currentResponse = (responses[currentQuestion] as number[]) || [];
//     updateResponse(
//       currentResponse.includes(optionId)
//         ? currentResponse.filter(id => id !== optionId)
//         : [...currentResponse, optionId]
//     );
//   };

//   const handleNext = () => {
//     if (responses[currentQuestion] !== null && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

//   if (isLoading) return <div>Loading...</div>;

//   const currentQ = questions[currentQuestion];

//   const renderQuestion = () => {
//     switch (currentQ.type) {
//       case QuestionType.MultipleChoice:
//         return currentQ.options?.map((option) => (
//           <div key={option.id} className="mb-2">
//             <input
//               type="radio"
//               id={`option-${option.id}`}
//               name={`question-${currentQ.id}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === option.id}
//               onChange={() => handleOptionChange(option.id)}
//             />
//             <label htmlFor={`option-${option.id}`}>{option.text}</label>
//           </div>
//         ));
//       case QuestionType.Input:
//         return (
//           <div className="mb-2">
//             <input
//               type="text"
//               className="border p-2 w-full"
//               placeholder={currentQ.placeholder || ''}
//               value={responses[currentQuestion] || ''}
//               onChange={handleInputChange}
//             />
//           </div>
//         );
//       case QuestionType.Dropdown:
//         return (
//           <div className="mb-2">
//             <select
//               className="border p-2 w-full"
//               value={responses[currentQuestion] || ''}
//               onChange={handleSelectChange}
//             >
//               <option value="" disabled>
//                 {currentQ.placeholder || 'Select an option'}
//               </option>
//               {currentQ.options?.map((option) => (
//                 <option key={option.id} value={option.id}>
//                   {option.text}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       case QuestionType.YesNo:
//         return (
//           <div className="mb-2">
//             <input
//               type="radio"
//               id={`yes-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'yes'}
//               onChange={() => handleYesNoChange('yes')}
//             />
//             <label htmlFor={`yes-${currentQuestion}`}>Yes</label>
//             <input
//               type="radio"
//               id={`no-${currentQuestion}`}
//               name={`yesNo-${currentQuestion}`}
//               className="mr-2"
//               checked={responses[currentQuestion] === 'no'}
//               onChange={() => handleYesNoChange('no')}
//             />
//             <label htmlFor={`no-${currentQuestion}`}>No</label>
//           </div>
//         );
//       case QuestionType.MultiSelect:
//         return (
//           <div className="mb-2 flex flex-wrap">
//             {currentQ.options?.map((option) => (
//               <button
//                 key={option.id}
//                 onClick={() => handleMultiSelectChange(option.id)}
//                 className={`border rounded-full px-4 py-2 m-1 ${
//                   (responses[currentQuestion] as number[])?.includes(option.id)
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-white text-blue-500 border-blue-500'
//                 }`}
//               >
//                 {option.text}
//               </button>
//             ))}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center my-auto">
//       <div className="bg-white w-full max-w-[1040px] h-[720px] rounded-[28px] shadow-lg opacity-100 p-8 flex flex-col justify-between">      
//         <div>
//           <div className="relative pt-1">
//             <h3 className="text-lg font-semibold mb-2">
//               Question {currentQuestion + 1} of {questions.length}
//             </h3>

//             <h2 className="text-xl font-bold mb-4">{currentQ.text}</h2>

//             <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
//               <div
//                 style={{ width: `${progressPercentage}%` }}
//                 className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
//               ></div>
//             </div>
//           </div>
        
//           {renderQuestion()}
//         </div>
        
//         <div className="flex justify-between mt-6">
//           <Button
//             text="Back"
//             onClick={handleBack}
//             className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
//             disabled={currentQuestion === 0}
//           />
//           <Button
//             text={currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
//             onClick={handleNext}
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             disabled={responses[currentQuestion] === null}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



// // ******************************************************************
// // code6
// // ******************************************************************


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

  const renderQuestion = () => {
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
                ? responses[currentQuestion] as string
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
                ? responses[currentQuestion] as string
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
          <div className="relative pt-1">
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
          </div>

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
