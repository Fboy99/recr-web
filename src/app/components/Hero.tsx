// import Image from "next/image";
// import heroImage from "../../images/hero.jpeg";

// export function Hero() {
//   return (
//     <div
//       className="top-0 bg-cover bg-center flex flex-col"
//       style={{ backgroundImage: `url(${heroImage.src})`, width: '100%' }}
//     >
//       <div className="flex flex-col items-center justify-center text-center w-full h-[538px] sm:h-[500px] sm:px-12 md:h-[600px] md:px-16 lg:h-[900px] px-4 lg:px-20">
//         <h1 className="lg:text-[45px] lg:leading-[52px] font-bold text-center">
//           Working in <span className="bg-gradient-to-r from-[#000000] via-[#DD0000] to-[#FFCE00] bg-clip-text text-transparent gap-[4px]">Germany</span> with the Opportunity Card
//         </h1>
//         <p className="text-[#000000] lg:text-[22px] lg:leading-[28px] font-normal text-center pt-6">
//           Use your professional training to immigrate to Germany
//         </p>
//         <div className="flex w-full pt-8 justify-center gap-x-3">
//           <button className="bg-gradient-to-b from-[#000000] via-[#DD0000] to-[#FFCE00] text-white px-8 py-2 rounded-full flex items-center justify-center gap-x-2 text-[14px] font-medium leading-[20px] tracking-[0.1px] shadow-md">
//             Get started
//             <span>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M16.175 13H5C4.71667 13 4.47917 12.9042 4.2875 12.7125C4.09583 12.5208 4 12.2833 4 12C4 11.7167 4.09583 11.4792 4.2875 11.2875C4.47917 11.0958 4.71667 11 5 11H16.175L11.275 6.09999C11.075 5.89999 10.9792 5.66665 10.9875 5.39999C10.9958 5.13332 11.1 4.89999 11.3 4.69999C11.5 4.51665 11.7333 4.42082 12 4.41249C12.2667 4.40415 12.5 4.49999 12.7 4.69999L19.3 11.3C19.4 11.4 19.4708 11.5083 19.5125 11.625C19.5542 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5542 12.2583 19.5125 12.375C19.4708 12.4917 19.4 12.6 19.3 12.7L12.7 19.3C12.5167 19.4833 12.2875 19.575 12.0125 19.575C11.7375 19.575 11.5 19.4833 11.3 19.3C11.1 19.1 11 18.8625 11 18.5875C11 18.3125 11.1 18.075 11.3 17.875L16.175 13Z" fill="#42474E"/>
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

import { useTranslation } from 'react-i18next';
import heroImage from "../../images/hero.jpeg";
import '../../i18n/i18n';

export function Hero() {
  const { t } = useTranslation('common');

  return (
    <div
      className="top-0 bg-cover bg-center flex flex-col relative"
      style={{ backgroundImage: `url(${heroImage.src})`, width: '100%' }}
    >
      <div className="flex flex-col items-center justify-center text-center w-full h-[538px] sm:h-[500px] sm:px-12 md:h-[600px] md:px-16 lg:h-[900px] px-4 lg:px-20 relative">
        <h1 className="lg:text-[45px] lg:leading-[52px] font-bold text-center absolute top-[20%]">
          {t('workingIn')} <span className="bg-gradient-to-r from-[#000000] via-[#DD0000] to-[#FFCE00] bg-clip-text text-transparent gap-[4px]">{t('germany')}</span> {t('withOpportunityCard')}
        </h1>
        <h1></h1>
        <p className="text-[#000000] lg:text-[22px] lg:leading-[28px] font-normal text-center absolute top-[30%]">
          {t('useYourProfessionalTraining')}
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-3 absolute top-[40%]">
          <button className="bg-gradient-to-b from-[#000000] via-[#DD0000] to-[#FFCE00] text-white px-8 py-2 rounded-full flex items-center justify-center gap-x-2 text-[14px] font-medium leading-[20px] tracking-[0.1px] shadow-md">
            {t('getStarted')}
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.175 13H5C4.71667 13 4.47917 12.9042 4.2875 12.7125C4.09583 12.5208 4 12.2833 4 12C4 11.7167 4.09583 11.4792 4.2875 11.2875C4.47917 11.0958 4.71667 11 5 11H16.175L11.275 6.09999C11.075 5.89999 10.9792 5.66665 10.9875 5.39999C10.9958 5.13332 11.1 4.89999 11.3 4.69999C11.5 4.51665 11.7333 4.42082 12 4.41249C12.2667 4.40415 12.5 4.49999 12.7 4.69999L19.3 11.3C19.4 11.4 19.4708 11.5083 19.5125 11.625C19.5542 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5542 12.2583 19.5125 12.375C19.4708 12.4917 19.4 12.6 19.3 12.7L12.7 19.3C12.5167 19.4833 12.2875 19.575 12.0125 19.575C11.7375 19.575 11.5 19.4833 11.3 19.3C11.1 19.1 11 18.8625 11 18.5875C11 18.3125 11.1 18.075 11.3 17.875L16.175 13Z" fill="#42474E"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
