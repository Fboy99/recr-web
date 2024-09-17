// "use client"; 

// import React from "react";
// import Question from "./Questions"; // Corrected import

// const AssistForm: React.FC = () => {

//   return (
//     <div className="bg-gray-50 w-full max-w-[1440px] h-[1192px]  sm:px-4 md:px-8 pt-[96px] pb-0 gap-10 opacity-100 mt-10 mb-10 mx-auto flex flex-col items-center">
//       <div className="w-full max-w-[1440px] h-auto py-0 px-[200px] gap-[16px] flex flex-col items-center">
//         <h1 className="text-4xl font-bold text-center mb-2">
//           Application Assistant
//         </h1>
//         <p className="text-center text-gray-700 mb-8">
//           The best place to start your application at the German Chancenkarte
//         </p>
//       </div>
//       {/* <div
//         className="bg-white w-full max-w-[1040px] h-[720px] rounded-[28px] shadow-lg opacity-100 p-8"
//       > */}
//         <Question />
//       {/* </div> */}
//     </div>
//   );
// };

// export default AssistForm;



"use client"; 

import React from "react";
import Question from "./Questions"; // Corrected import

const AssistForm: React.FC = () => {
  return (
    <div className="bg-gray-50 w-full max-w-[1440px] h-auto sm:px-4 md:px-8 pt-[96px] pb-0 gap-10 opacity-100 mt-10 mb-10 mx-auto flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-2">
          Application Assistant
        </h1>
        <p className="text-center text-gray-700 mb-8">
          The best place to start your application at the German Chancenkarte
        </p>
      </div>
      <Question />
    </div>
  );
};

export default AssistForm;