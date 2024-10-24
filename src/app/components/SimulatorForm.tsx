// "use client";

// import React, { useState } from "react";
// import Question from "./Questions"; // Corrected import
// import { useTranslation } from "react-i18next";
// import Questionnaire from "./Questioner";
// import SimulatorQuestion from "./SimulatorQuestion";
// import SectionBanner from "./SectionBanner";

// const SimulatorForm: React.FC = () => {

//   const { t } = useTranslation("common");
//   // const [language, setLanguage] = useState('en'); 
//   const [language, setLanguage] =useState<'en' | 'de' | 'fr'>('en'); 

//   // const [target, setTarget] = useState<'EMPLOYER' | 'JOBSEEKER'>('JOBSEEKER');  

//   const [target, setTarget] = useState<'EMPLOYER' | 'JOBSEEKER'>('EMPLOYER');  
//   const [isEligible, setIsEligible] = useState<boolean | null>(null);

//   const handleLanguageChange = (newLanguage: string) => {
//     setLanguage(newLanguage); 
//   };

//   // const handleTargetChange = (newTarget: 'EMPLOYER' | 'JOBSEEKER') => {
//   //   setTarget(newTarget); 
//   // };

//   // const handleEligibility = (eligible: boolean) => {
//   //   setIsEligible(eligible);
//   // };

//   return (
//     // <div className="bg-gray-50 w-full max-w-[1440px] h-auto sm:px-4 md:px-8 pt-[96px] pb-0 gap-10 opacity-100 mb-10 mx-auto flex flex-col items-center">
//     //   <div className="w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] flex flex-col items-center">
//     <div className="bg-[#F1F4F9] w-full  sm:px-4 md:px-8 pt-[64px]gap-10 opacity-100 mb-10 mx-auto pb-8">
//       {/* <div> */}

//         {/* <h1 className="text-4xl font-bold text-center mb-2">
//           {t('SimulatorForm.title')}
//         </h1>
//         <p className="text-center text-gray-700 mb-8">
//           {t('SimulatorForm.description')}
//         </p> */}
//       <SectionBanner title={t("SimulatorForm.title")} subtitle= {t('SimulatorForm.subtitle')}/>


//       {/* </div> */}
//       { target === 'EMPLOYER' && (
//           <SimulatorQuestion language={language} target={target} />
//         )}    
        
//         </div>
//           );
//         };

// export default SimulatorForm;


import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext"; // Use the language context
import SimulatorQuestion from "./SimulatorQuestion";
import SectionBanner from "./SectionBanner";

const SimulatorForm: React.FC = () => {
  const { language } = useLanguage(); // Access language from context
  const { t } = useTranslation("common");

  const [target, setTarget] = useState<"EMPLOYER" | "JOBSEEKER">("EMPLOYER");
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  return (
    <div className="bg-[#F1F4F9] w-full sm:px-4 md:px-8 pt-[64px] gap-10 opacity-100 mb-10 mx-auto pb-8">
      <SectionBanner title={t("SimulatorForm.title")} subtitle={t("SimulatorForm.subtitle")} />

      {target === "EMPLOYER" && <SimulatorQuestion language={language} target={target} />}
    </div>
  );
};

export default SimulatorForm;
