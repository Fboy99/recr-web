
// "use client";
// import Image from "next/image";
// import Check from "../../images/check.svg";
// import Button from "./Button/Button";
// import SectionBanner from "./SectionBanner";
// import img1 from "../../images/candidates_img.jpeg";
// import img8 from "../../images/image8.jpeg";
// import { useTranslation } from 'next-i18next';

// export function Advantages() {
//   const { t } = useTranslation('common');

//   // Retrieve candidate and employer lists
//   const candidateList = t("advantages.candidateList", { returnObjects: true }) as string[] || [];
//   const employerList = t("advantages.employerList", { returnObjects: true }) as string[] || [];
  

//   return (
//      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center ">
//       <SectionBanner title={t("advantages.title")} />
//       <div className="flex flex-col lg:flex-row gap-x-24  gap-y-6 lg:gap-y-0 items-center lg:items-start">
        
//         {/* Candidate Card */}
//         <div className="max-w-[496px] h-auto rounded-[28px] shadow-md flex flex-col justify-between mx-auto">
//           <Image
//             src={img1}
//             alt={t("advantages.candidateAlt")}
//             width={496}
//             height={360}
//             className="rounded-t-[28px] object-cover lg:h-[300px]"
//           />
//           <div className="p-8">
//             <h2 className="pt-6 text-2xl font-semibold lg:text-[24px]">
//               {t("advantages.candidateTitle")}
//             </h2>
//             <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
//               {t("advantages.candidateDescription")}
//             </p>
//             <h3 className="font-medium text-[#000000] text-[18px] lg:text-xl pt-6">
//               {t("advantages.candidateSubtitle")}
//             </h3>
//             <ul className="flex flex-col gap-y-3 pt-4 text-[#5F7896]">
//               {candidateList.map((item, index) => (
//                 <li key={index} className="flex items-center gap-x-3">
//                   <Image src={Check} alt="included" width={20} height={20} />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <Button
//             text={t("advantages.learnMore")}
//             className="text-[#141B2C] bg-[#DBE2F9] hover:bg-[#1E3A6D] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 m-8 sm:mx-[24px] sm:my-[10px]"
//           />
//         </div>

//         {/* Employer Card */}
//         <div className="w-full max-w-[496px] h-auto rounded-[28px] shadow-md flex flex-col justify-between mx-auto">
//           <Image
//             src={img8}
//             alt={t("advantages.employerAlt")}
//             width={496}
//             height={300}
//             className="rounded-t-[28px] object-cover lg:h-[300px]"
//           />
//           <div className="p-8">
//             <h2 className="pt-6 text-2xl font-semibold lg:text-[24px]">
//               {t("advantages.employerTitle")}
//             </h2>
//             <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
//               {t("advantages.employerDescription")}
//             </p>
//             <h3 className="font-medium text-[#000000] text-[18px] lg:text-xl pt-6">
//               {t("advantages.employerSubtitle")}
//             </h3>
//             <ul className="flex flex-col gap-y-3 pt-4 text-[#5F7896]">
//               {employerList.map((item, index) => (
//                 <li key={index} className="flex items-center gap-x-3">
//                   <Image src={Check} alt="included" width={20} height={20} />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <Button
//             text={t("advantages.learnMore")}
//             className="text-[#141B2C] bg-[#DBE2F9] hover:bg-[#1E3A6D] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 m-8 sm:mx-[24px] sm:my-[10px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Check from "../../images/check.svg";
import Button from "./Button/Button";
import SectionBanner from "./SectionBanner";
import img1 from "../../images/candidates_img.jpeg";
import img8 from "../../images/image8.jpeg";
import { useTranslation } from 'next-i18next';

export function Advantages() {
  const { t } = useTranslation('common');
  const router = useRouter();  // Initialize useRouter

  // Retrieve candidate and employer lists
  const candidateList = t("advantages.candidateList", { returnObjects: true }) as string[] || [];
  const employerList = t("advantages.employerList", { returnObjects: true }) as string[] || [];
  
  // Handlers for navigation
  const handleCandidateClick = () => {
    router.push("../Candidates"); // Navigate to candidates page
  };

  const handleEmployerClick = () => {
    router.push("../Employers"); // Navigate to employers page
  };

  return (
     <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center ">
      <SectionBanner title={t("advantages.title")} />
      <div className="flex flex-col lg:flex-row gap-x-24  gap-y-6 lg:gap-y-0 items-center lg:items-start">
        
        {/* Candidate Card */}
        <div className="max-w-[496px] h-auto rounded-[28px] shadow-md flex flex-col justify-between mx-auto">
          <Image
            src={img1}
            alt={t("advantages.candidateAlt")}
            width={496}
            height={360}
            className="rounded-t-[28px] object-cover lg:h-[300px]"
          />
          <div className="p-8">
            <h2 className="pt-6 text-2xl font-semibold lg:text-[24px]">
              {t("advantages.candidateTitle")}
            </h2>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              {t("advantages.candidateDescription")}
            </p>
            <h3 className="font-medium text-[#000000] text-[18px] lg:text-xl pt-6">
              {t("advantages.candidateSubtitle")}
            </h3>
            <ul className="flex flex-col gap-y-3 pt-4 text-[#5F7896]">
              {candidateList.map((item, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  <Image src={Check} alt="included" width={20} height={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button
            text={t("advantages.learnMore")}
            className="text-[#141B2C] bg-[#DBE2F9] hover:bg-[#1E3A6D] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 m-8 sm:mx-[24px] sm:my-[10px]"
            onClick={handleCandidateClick}  // Navigate to Candidates page
          />
        </div>

        {/* Employer Card */}
        <div className="w-full max-w-[496px] h-auto rounded-[28px] shadow-md flex flex-col justify-between mx-auto">
          <Image
            src={img8}
            alt={t("advantages.employerAlt")}
            width={496}
            height={300}
            className="rounded-t-[28px] object-cover lg:h-[300px]"
          />
          <div className="p-8">
            <h2 className="pt-6 text-2xl font-semibold lg:text-[24px]">
              {t("advantages.employerTitle")}
            </h2>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              {t("advantages.employerDescription")}
            </p>
            <h3 className="font-medium text-[#000000] text-[18px] lg:text-xl pt-6">
              {t("advantages.employerSubtitle")}
            </h3>
            <ul className="flex flex-col gap-y-3 pt-4 text-[#5F7896]">
              {employerList.map((item, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  <Image src={Check} alt="included" width={20} height={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button
            text={t("advantages.learnMore")}
            className="text-[#141B2C] bg-[#DBE2F9] hover:bg-[#1E3A6D] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 m-8 sm:mx-[24px] sm:my-[10px]"
            onClick={handleEmployerClick}  // Navigate to Employers page
          />
        </div>
      </div>
    </div>
  );
}
