// "use client";

// import * as Accordion from "@radix-ui/react-accordion";
// import Plus from '../../images/Plus.svg';
// import Image from "next/image";
// import { useState } from "react";
// import ToggleButton from "./Button/ToggleButton";
// import faqData from "../data/faqs.json";  // Ensure this path is correct
// import { useTranslation } from "react-i18next";

// // Define the structure of each FAQ item
// type FaqItem = {
//   category: string;
//   question: string;
//   answer: string;
// };


// export default function Faq() {
//   const { t } = useTranslation('common');

//   const [selectedTab, setSelectedTab] = useState("Candidates");
//   const [visibleCount, setVisibleCount] = useState({ Candidates: 8, Employers: 8 });

//   const items: FaqItem[] = faqData.filter(item => item.category === selectedTab);

//   const handleViewMore = () => {
//     setVisibleCount(prevCount => ({ ...prevCount, [selectedTab]: prevCount[selectedTab] + 10 }));
//   };

//   const handleShowLess = () => {
//     setVisibleCount(prevCount => ({
//       ...prevCount,
//       [selectedTab]: Math.max(prevCount[selectedTab] - 10, 8),
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center pt-4 sm:px-4 md:px-8">
//       <h1 className="text-[#181C20] text-[36px] sm:text-[25px] xs:text-[23px] md:text-[28px] font-medium text-center">
//         {t('Frequently Asked Questions')}
//       </h1>
//       <div className="flex my-4 ">
//         <ToggleButton
//           active={selectedTab === "Candidates"}
//           onClick={() => {
//             setSelectedTab("Candidates");
//             setVisibleCount(prev => ({ ...prev, Candidates: 8 }));
//           }}
//           label={t("Candidates")}
//           isLeft={true}
//         />
//         <ToggleButton
//           active={selectedTab === "Employers"}
//           onClick={() => {
//             setSelectedTab("Employers");
//             setVisibleCount(prev => ({ ...prev, Employers: 8 }));
//           }}
//           label={t("Employers")}
//           isLeft={false}
//         />
//       </div>

//       <div className="w-full max-w-[1040px]">
//         <Accordion.Root
//           type="single"
//           defaultValue="item-1"
//           collapsible
//           className="flex flex-col gap-y-4"
//         >
//           {items.slice(0, visibleCount[selectedTab]).map((item, index) => (
//             <div key={index}>
//               <Accordion.Item
//                 value={`item-${index + 1}`}
//                 className="bg-[#F1F4F9] p-[16px] rounded-[8px]"
//               >
//                 <Accordion.Header>
//                   <Accordion.Trigger className="flex w-full items-center justify-between">
//                     <p className="text-left font-medium text-[#1A1B20] lg:text-[16px] font-roboto">
//                       {item.question}
//                     </p>
//                     <span>
//                       <Image
//                         src={Plus}
//                         alt="See more"
//                         className="w-6 h-6"
//                       />
//                     </span>
//                   </Accordion.Trigger>
//                 </Accordion.Header>

//                 <Accordion.Content>
//                   <p className="pt-2 text-[#36485C]">{item.answer}</p>
//                 </Accordion.Content>
//               </Accordion.Item>
//             </div>
//           ))}
//         </Accordion.Root>

//         <div className="flex justify-center mt-4">
//           {visibleCount[selectedTab] < items.length && (
//             <button
//               className="bg-[#DBE2F9] text-[#141B2C] text-[14px] py-2 px-6 rounded-full flex flex-row mb-4 mr-2 font-roboto"
//               onClick={handleViewMore}
//             >
//               {t('View More' )}
//               <span>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M11.4752 14.475L7.8502 10.85C7.8002 10.8 7.7627 10.7458 7.7377 10.6875C7.7127 10.6292 7.7002 10.5667 7.7002 10.5C7.7002 10.3667 7.74603 10.25 7.8377 10.15C7.92936 10.05 8.0502 10 8.2002 10H15.8002C15.9502 10 16.071 10.05 16.1627 10.15C16.2544 10.25 16.3002 10.3667 16.3002 10.5C16.3002 10.5333 16.2502 10.65 16.1502 10.85L12.5252 14.475C12.4419 14.5583 12.3585 14.6167 12.2752 14.65C12.1919 14.6833 12.1002 14.7 12.0002 14.7C11.9002 14.7 11.8085 14.6833 11.7252 14.65C11.6419 14.6167 11.5585 14.5583 11.4752 14.475Z" fill="#42474E"/>
//                 </svg>
//               </span>
//             </button>
//           )}
//           {visibleCount[selectedTab] > 8 && (
//             <button
//               className="bg-[#DBE2F9] text-[#141B2C] text-[14px] py-2 px-6 rounded-full flex flex-row mb-4"
//               onClick={handleShowLess}
//             >
//               {t('Show Less' )}
//               <span>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M11.4752 9.525L7.8502 13.15C7.8002 13.2 7.7627 13.2542 7.7377 13.3125C7.7127 13.3708 7.7002 13.4333 7.7002 13.5C7.7002 13.6333 7.74603 13.75 7.8377 13.85C7.92936 13.95 8.0502 14 8.2002 14H15.8002C15.9502 14 16.071 13.95 16.1627 13.85C16.2544 13.75 16.3002 13.6333 16.3002 13.5C16.3002 13.4667 16.2502 13.35 16.1502 13.15L12.5252 9.525C12.4419 9.44167 12.3585 9.38333 12.2752 9.35C12.1919 9.31667 12.1002 9.3 12.0002 9.3C11.9002 9.3 11.8085 9.31667 11.7252 9.35C11.6419 9.38333 11.5585 9.44167 11.4752 9.525Z" fill="#42474E"/>
//                 </svg>
//               </span>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from '../../images/Plus.svg';
import Image from "next/image";
import { useState } from "react";
import ToggleButton from "./Button/ToggleButton";
import faqData from "../data/faqs.json";  // Ensure this path is correct
import { useTranslation } from "react-i18next";

// Define the structure of each FAQ item
type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

// Define the types for the categories
type Category = "Candidates" | "Employers";

export default function Faq() {
  const { t } = useTranslation('common');

  const [selectedTab, setSelectedTab] = useState<Category>("Candidates");
  const [visibleCount, setVisibleCount] = useState<{ [key in Category]: number }>({
    Candidates: 8,
    Employers: 8,
  });

  const items: FaqItem[] = faqData.filter(item => item.category === selectedTab);

  const handleViewMore = () => {
    setVisibleCount(prevCount => ({
      ...prevCount,
      [selectedTab]: prevCount[selectedTab] + 10,
    }));
  };

  const handleShowLess = () => {
    setVisibleCount(prevCount => ({
      ...prevCount,
      [selectedTab]: Math.max(prevCount[selectedTab] - 10, 8),
    }));
  };

  return (
    <div className="flex flex-col items-center pt-4 sm:px-4 md:px-8">
      <h1 className="text-[#181C20] text-[36px] sm:text-[25px] xs:text-[23px] md:text-[28px] font-medium text-center">
        {t('Frequently Asked Questions')}
      </h1>
      <div className="flex my-4 ">
        <ToggleButton
          active={selectedTab === "Candidates"}
          onClick={() => {
            setSelectedTab("Candidates");
            setVisibleCount(prev => ({ ...prev, Candidates: 8 }));
          }}
          label={t("Candidates")}
          isLeft={true}
        />
        <ToggleButton
          active={selectedTab === "Employers"}
          onClick={() => {
            setSelectedTab("Employers");
            setVisibleCount(prev => ({ ...prev, Employers: 8 }));
          }}
          label={t("Employers")}
          isLeft={false}
        />
      </div>

      <div className="w-full max-w-[1040px]">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.slice(0, visibleCount[selectedTab]).map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#F1F4F9] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#1A1B20] lg:text-[16px] font-roboto">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="w-6 h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>

        <div className="flex justify-center mt-4">
          {visibleCount[selectedTab] < items.length && (
            <button
              className="bg-[#DBE2F9] text-[#141B2C] text-[14px] py-2 px-6 rounded-full flex flex-row mb-4 mr-2 font-roboto"
              onClick={handleViewMore}
            >
              {t('View More')}
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4752 14.475L7.8502 10.85C7.8002 10.8 7.7627 10.7458 7.7377 10.6875C7.7127 10.6292 7.7002 10.5667 7.7002 10.5C7.7002 10.3667 7.74603 10.25 7.8377 10.15C7.92936 10.05 8.0502 10 8.2002 10H15.8002C15.9502 10 16.071 10.05 16.1627 10.15C16.2544 10.25 16.3002 10.3667 16.3002 10.5C16.3002 10.5333 16.2502 10.65 16.1502 10.85L12.5252 14.475C12.4419 14.5583 12.3585 14.6167 12.2752 14.65C12.1919 14.6833 12.1002 14.7 12.0002 14.7C11.9002 14.7 11.8085 14.6833 11.7252 14.65C11.6419 14.6167 11.5585 14.5583 11.4752 14.475Z" fill="#42474E"/>
                </svg>
              </span>
            </button>
          )}
          {visibleCount[selectedTab] > 8 && (
            <button
              className="bg-[#DBE2F9] text-[#141B2C] text-[14px] py-2 px-6 rounded-full flex flex-row mb-4"
              onClick={handleShowLess}
            >
              {t('Show Less')}
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4752 9.525L7.8502 13.15C7.8002 13.2 7.7627 13.2542 7.7377 13.3125C7.7127 13.3708 7.7002 13.4333 7.7002 13.5C7.7002 13.6333 7.74603 13.75 7.8377 13.85C7.92936 13.95 8.0502 14 8.2002 14H15.8002C15.9502 14 16.071 13.95 16.1627 13.85C16.2544 13.75 16.3002 13.6333 16.3002 13.5C16.3002 13.4667 16.2502 13.35 16.1502 13.15L12.5252 9.525C12.4419 9.44167 12.3585 9.38333 12.2752 9.35C12.1919 9.31667 12.1002 9.3 12.0002 9.3C11.9002 9.3 11.8085 9.31667 11.7252 9.35C11.6419 9.38333 11.5585 9.44167 11.4752 9.525Z" fill="#42474E"/>
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}