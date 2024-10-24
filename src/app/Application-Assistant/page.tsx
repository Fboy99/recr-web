"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Questionnaire from "../components/Questioner";
import Recommendation from "../components/Recommendation";
import recommendations from "../data/recommendations.json";

import img1 from "../../images/Flag_map_of_Germany.svg";
import img2 from "../../images/Flag_map_of_Germany.svg";
import SectionHeader from "../components/SectionHeader";
import { useLanguage } from "../contexts/LanguageContext"; // Use the language context


type ImageMapKeys = "expatrio1" | "gerFlag" | "expatrio2";

const imageMap: Record<ImageMapKeys, string> = {
  expatrio1: img1,
  gerFlag: img2,
  expatrio2: img1,
};



export default function AssistantApp() {
  const { t } = useTranslation("common");
  // const [language, setLanguage] = useState('en'); 
  // const [language, setLanguage] =useState<'en' | 'de' | 'fr'>('en'); 

  // const [target, setTarget] = useState<'EMPLOYER' | 'JOBSEEKER'>('JOBSEEKER');  

  const [target, setTarget] = useState<'JOBSEEKER' | 'EMPLOYER'>('JOBSEEKER');  
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleLanguageChange = (newLanguage: string) => {
    // setLanguage(newLanguage); // Update the language when the user switches it
  };

  const handleTargetChange = (newTarget: 'EMPLOYER' | 'JOBSEEKER') => {
    setTarget(newTarget); 
  };

  const handleEligibility = (eligible: boolean) => {
    setIsEligible(eligible);
  };

  const { language } = useLanguage(); // Access language from context


  return (
    <div className="bg-white w-full max-w-[1440px] h-auto pt-[96px] pb-0 gap-10 opacity-100 mb-10 mx-auto items-center sm:px-4 xs:px-4 md:mx-8 lg:px-16">
        <SectionHeader title={t("applicationAssistant.title")} paragraph={t("applicationAssistant.subtitle")} classAttribute="w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] items-center pt-6"></SectionHeader>
      {/* </div> */}

      { target === 'JOBSEEKER' && (
  <Questionnaire onEligibility={handleEligibility} language={language} target={target} />
)}      


      {isEligible !== null && (
        <div>
          {isEligible ? (
            <div>
              {recommendations.map((recommendation, index) => (
                <div key={index} className="mx-auto max-w-[1024px] ">
                  <h1 className="text-2xl text-gray-500 font-bold py-8 px-2">
                  {t("recommendations.headerTitle")} 
                  </h1>
                  <Recommendation

                  title={t("recommendations.title")} 
                  description={t("recommendations.description")} 
                  imageUrl={imageMap[recommendation.imageKey as ImageMapKeys]} 
                  buttonLabel={t("recommendations.buttonLabel")}
                  headerTitle={t("recommendations.headerTitle")}
                  />
                </div>
              ))}
            </div>
          ) : 

                    
          
          <div>
          {recommendations.map((recommendation, index) => (
            <div key={index} className="mx-auto max-w-[1024px] ">
              <h1 className="text-2xl text-gray-500 font-bold py-8 px-2">
              {t("recommendations.headerTitle")} 
              </h1>
              <Recommendation

              title={t("recommendations.title")} 
              description={t("recommendations.description")} 
              imageUrl={imageMap[recommendation.imageKey as ImageMapKeys]} 
              buttonLabel={t("recommendations.buttonLabel")}
              headerTitle={t("recommendations.headerTitle")}
              />
            </div>
          ))}
        </div>

          
          }
        </div>
      )}
    </div>
  );
}
