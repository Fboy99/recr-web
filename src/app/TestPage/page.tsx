"use client"
import { useTranslation } from "next-i18next";
import Questionnaire from "../components/Questioner";
import Recommendation from '../components/Recommendation';
import recommendations from '../data/recommendations.json';

export default function TestPage(){
  const { t } = useTranslation('common'); 

    return (
   <div className="bg-white w-full max-w-[1440px] h-auto  pt-[96px] pb-0 gap-10 opacity-100  mb-10 mx-auto items-center sm:px-4 xs:px-4 md:mx-8 lg:px-16">
    <div className=" w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] items-center">
      <h1 className="text-4xl  font-bold text-center mb-2">
      {t('applicationAssistant')}
      </h1>
      <p className="text-center text-gray-700 ">
        The best place to start your application at the German Chancenkarte
      </p>
    </div>
    <Questionnaire/>
    <div className=" ">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="mx-auto max-w-[1024px] ">
              <h1 className="text-2xl text-gray-500 font-bold py-8 px-2">{recommendation.headerTitle}</h1>
              <Recommendation
                title={recommendation.title}
                description={recommendation.description}
                imageUrl={recommendation.imageUrl}
                buttonLabel={recommendation.buttonLabel} headerTitle={recommendation.headerTitle}              />
            </div>
          ))}
        </div>
   </div>
);
}