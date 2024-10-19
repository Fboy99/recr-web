// "use client"
// import { useTranslation } from "next-i18next";
// import Questionnaire from "../components/Questioner";
// import Recommendation from '../components/Recommendation';
// import recommendations from '../data/recommendations.json';

// import expatrio from'../../images/expatrio.svg';
// import gerFlag from'../../images/Flag_map_of_Germany.svg';

// const imageMap = {
//   img1: expatrio,
//   img2: gerFlag,
//   img3: expatrio

// };

// export default function TestPage(){
//   const { t } = useTranslation('common'); 

//     return (
//    <div className="bg-white w-full max-w-[1440px] h-auto  pt-[96px] pb-0 gap-10 opacity-100  mb-10 mx-auto items-center sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//     <div className=" w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] items-center">
//       <h1 className="text-4xl  font-bold text-center mb-2">
//       {t('applicationAssistant.title')}
//       </h1>
//       <p className="text-center text-gray-700 ">
//         {t('applicationAssistant.subtitle')}
//       </p>
//     </div>
//     <Questionnaire/>
//     <div className=" ">
//           {recommendations.map((recommendation, index) => (
//             <div key={index} className="mx-auto max-w-[1024px] ">
//               <h1 className="text-2xl text-gray-500 font-bold py-8 px-2">{recommendation.headerTitle}</h1>
//               <Recommendation
//                 title={recommendation.title}
//                 description={recommendation.description}
//                 imageUrl={recommendation.imageUrl}
//                 buttonLabel={recommendation.buttonLabel} headerTitle={recommendation.headerTitle}              />
//             </div>
//           ))}
//         </div>
//    </div>
// );
// }

// "use client";
// import { useTranslation } from "next-i18next";
// import Questionnaire from "../components/Questioner";
// import Recommendation from '../components/Recommendation';
// import recommendations from '../data/recommendations.json';

// import img1 from '../../images/Flag_map_of_Germany.svg';
// import img2 from '../../images/Flag_map_of_Germany.svg';

// // Define a type for the image map keys
// type ImageMapKeys = 'expatrio1' | 'gerFlag'| 'expatrio2';

// const imageMap: Record<ImageMapKeys, string> = {
//   expatrio1: img1,
//   gerFlag: img2,
//   expatrio2: img1,
// };

// export default function TestPage() {
//   const { t } = useTranslation('common');

//   return (
//     <div className="bg-white w-full max-w-[1440px] h-auto pt-[96px] pb-0 gap-10 opacity-100 mb-10 mx-auto items-center sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <div className="w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] items-center">
//         <h1 className="text-4xl font-bold text-center mb-2">
//           {t('applicationAssistant.title')}
//         </h1>
//         <p className="text-center text-gray-700 ">
//           {t('applicationAssistant.subtitle')}
//         </p>
//       </div>
//       <Questionnaire />
//       <div>
//         {recommendations.map((recommendation, index) => (
//           <div key={index} className="mx-auto max-w-[1024px] ">
//             <h1 className="text-2xl text-gray-500 font-bold py-8 px-2">{recommendation.headerTitle}</h1>
//             <Recommendation
//               title={recommendation.title}
//               description={recommendation.description}
//               imageUrl={imageMap[recommendation.imageKey as ImageMapKeys]} // Type assertion
//               buttonLabel={recommendation.buttonLabel} headerTitle={recommendation.headerTitle}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Questionnaire from "../components/Questioner";
import Recommendation from "../components/Recommendation";
import recommendations from "../data/recommendations.json";

import img1 from "../../images/Flag_map_of_Germany.svg";
import img2 from "../../images/Flag_map_of_Germany.svg";

type ImageMapKeys = "expatrio1" | "gerFlag" | "expatrio2";

const imageMap: Record<ImageMapKeys, string> = {
  expatrio1: img1,
  gerFlag: img2,
  expatrio2: img1,
};

export default function TestPage() {
  const { t } = useTranslation("common");
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const handleEligibility = (eligible: boolean) => {
    setIsEligible(eligible);
  };

  return (
    <div className="bg-white w-full max-w-[1440px] h-auto pt-[96px] pb-0 gap-10 opacity-100 mb-10 mx-auto items-center sm:px-4 xs:px-4 md:mx-8 lg:px-16">
      <div className="w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] items-center">
        <h1 className="text-4xl font-bold text-center mb-2">
          {t("applicationAssistant.title")}
        </h1>
        <p className="text-center text-gray-700 ">
          {t("applicationAssistant.subtitle")}
        </p>
      </div>
      <Questionnaire onEligibility={handleEligibility} />
      {isEligible !== null && (
        <div>
          {isEligible ? (
            <div>
              {recommendations.map((recommendation, index) => (
                <div key={index} className="mx-auto max-w-[1024px] ">
                  <h1 className="text-2xl text-gray-500 font-bold py-8 px-2">
                    {recommendation.headerTitle}
                  </h1>
                  <Recommendation
                    title={recommendation.title}
                    description={recommendation.description}
                    imageUrl={imageMap[recommendation.imageKey as ImageMapKeys]} // Type assertion
                    buttonLabel={recommendation.buttonLabel}
                    headerTitle={recommendation.headerTitle}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-red-600 mt-6">No recommendations.</p>
          )}
        </div>
      )}
    </div>
  );
}