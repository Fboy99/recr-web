// import Image from "next/image";
// import Check from "../assets//check.svg";
// import Button from "./Button/Button";
// import SectionBanner from "./SectionBanner";
// import img1 from "../assets/image1.jpeg"
// import img8 from "../assets/image8.jpeg"

// export function Advantages() {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-y-6">
//       <SectionBanner title="Advantages of the Opportunity Card" />

//       <div className="flex flex-col lg:flex-row w-full gap-y-6 lg:gap-y-0 items-center lg:items-start">

//         {/* Candidate Card */}
//         <div className="w-full max-w-[496px] h-auto  rounded-[28px] shadow-md flex flex-col justify-between mx-auto">

//           <Image
//             src={img1}
//             alt="feature 1 image"
//             width={496}
//             height={360}
//             className="rounded-t-[28px] object-cover lg:h-[300px]"
//           />
//           <div className="p-8">
//             <h2 className="pt-6 text-2xl font-semibold lg:text-[32px]">
//               The Opportunity Card for candidates
//             </h2>
//             <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
//               You come from a non-EU country and would like to work in Germany? Take advantage of the Opportunity Card Germany...
//             </p>

//             <h3 className="font-medium text-[#000000] text-[18px] lg:text-xl pt-6">
//               The advantages of The Opportunity Card at a glance
//             </h3>

//             <ul className="flex flex-col gap-y-3 pt-4 text-[#5F7896]">
//               {[
//                 "New and easier way to enter Germany",
//                 "12-month stay in Germany possible, prospect of permanent residence permit",
//                 "More than 1000 euros income per month possible",
//                 "Work permit for employment up to 20 hours per week",
//                 "Chance to find a qualified part-time/full-time job",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-center gap-x-3">
//                   <Image src={Check} alt="included" width={20} height={20} />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <Button
//             text="Learn More"
//             className="text-[#141B2C] bg-[#DBE2F9]  hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 m-8 sm:mx-[24px] sm:my-[10px]"
//           />
//         </div>

//         {/* Employer Card */}
//         <div className="w-full max-w-[496px] h-auto rounded-[28px] shadow-md flex flex-col justify-between mx-auto">

//           <Image
//             src={img8}
//             alt="feature 2 image"
//             width={496}
//             height={300}
//             className="rounded-t-[28px] object-cover lg:h-[300px]"
//           />
//           <div className="p-8">
//             <h2 className="pt-6 text-2xl font-semibold lg:text-[32px]">
//               The Opportunity Card for employers
//             </h2>
//             <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
//               Have you been looking for qualified support for a long time and would like to take on a foreign skilled worker in your company?...
//             </p>

//             <h3 className="font-medium text-[#000000] text-[18px] lg:text-xl pt-6">
//               The advantages of The Opportunity Card at a glance
//             </h3>

//             <ul className="flex flex-col gap-y-3 pt-4 text-[#5F7896]">
//               {[
//                 "New, larger applicant pool through qualified foreign professionals",
//                 "New legal framework to simplify entry into Germany",
//                 "No approval procedure necessary by the Federal Employment Agency",
//                 "Simplified approval procedures for fast-track entry to employment",
//                 "Conclusion of contracts for simple jobs",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-center gap-x-3">
//                   <Image src={Check} alt="included" width={20} height={20} />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <Button
//             text="Learn More"
//             className="text-[#141B2C] bg-[#DBE2F9] p-8 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-[#8A66FF] font-medium rounded-full text-sm px-5 py-2.5 m-8 transition-colors"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Check from "../assets/check.svg";
import Button from "./Button/Button";
import SectionBanner from "./SectionBanner";
import img1 from "../assets/image1.jpeg";
import img8 from "../assets/image8.jpeg";
import { useTranslation } from 'next-i18next';

export function Advantages() {
  const { t } = useTranslation('common');

  // Retrieve candidate and employer lists
  const candidateList = t("advantages.candidateList", { returnObjects: true }) as string[] || [];
  const employerList = t("advantages.employerList", { returnObjects: true }) as string[] || [];
  
  // Debugging logs
  console.log("Candidate List:", candidateList);
  console.log("Employer List:", employerList);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-y-6">
      <SectionBanner title={t("advantages.title")} />
      <div className="flex flex-col lg:flex-row w-full gap-y-6 lg:gap-y-0 items-center lg:items-start">
        
        {/* Candidate Card */}
        <div className="w-full max-w-[496px] h-auto rounded-[28px] shadow-md flex flex-col justify-between mx-auto">
          <Image
            src={img1}
            alt={t("advantages.candidateAlt")}
            width={496}
            height={360}
            className="rounded-t-[28px] object-cover lg:h-[300px]"
          />
          <div className="p-8">
            <h2 className="pt-6 text-2xl font-semibold lg:text-[32px]">
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
            className="text-[#141B2C] bg-[#DBE2F9] hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 m-8 sm:mx-[24px] sm:my-[10px]"
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
            <h2 className="pt-6 text-2xl font-semibold lg:text-[32px]">
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
            className="text-[#141B2C] bg-[#DBE2F9] hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-[#8A66FF] font-medium rounded-full text-sm px-5 py-2.5 m-8 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}