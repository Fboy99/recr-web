// import Image from "next/image";
// import { Navbar } from "./Navbar";
// // import BlurArrow from "../../public/assets/blue-button.svg";

// export function Hero() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex flex-col"
//       style={{ backgroundImage: 'url(/assets/hero.jpeg)', width: '1440px', height: '828px' }} 
//     >
//       {/* <Navbar /> */}
//       <div className="flex flex-col items-center justify-center text-center w-full h-full px-4 lg:px-20">
//         <h1 className="text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[48px] lg:leading-[62px]">
//           Working in <span className="text-[#ff3700]">G</span><span className="text-[#ff7300]">e</span><span className="text-[#ff4000]">r</span><span className="text-[#FFB400]">m</span><span className="text-[#FFB400]">a</span><span className="text-[#e94c17]">n</span><span className="text-[#ed0707]">y</span> with the Opportunity Card
//         </h1>
//         <p className="text-[#36485C] pt-6 lg:text-[18px] lg:leading-7">
//           Use your professional training to immigrate to Germany
//         </p>
//         <div className="flex w-full pt-8 justify-center gap-x-3">
//           <button className="bg-gradient-to-r from-[#d72828] to-[#bd510a] text-white px-8 py-2 rounded-full flex items-center justify-center gap-x-2 text-lg font-medium shadow-md">
//             Get started
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/app/components/Hero.tsx

import Image from "next/image";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: 'url(/assets/hero.jpeg)', width: '100%', height: '828px' }}
    >
      {/* Navbar included here */}
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center w-full h-full px-4 lg:px-20">
        <h1 className="text-[45px] leading-[52px] font-bold text-center ">
          Working in <span className="bg-gradient-to-r from-[#000000] via-[#DD0000] to-[#FFCE00] bg-clip-text text-transparent">Germany</span> with the Opportunity Card
        </h1>
        <p className="text-[#36485C] text-[22px] leading-[28px] font-normal text-center pt-6">
          Use your professional training to immigrate to Germany
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-3">
          <button className="bg-gradient-to-r from-[#d72828] to-[#bd510a] text-white px-8 py-2 rounded-full flex items-center justify-center gap-x-2 text-[14px] font-medium leading-[20px] tracking-[0.1px] shadow-md">
            Get started
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
