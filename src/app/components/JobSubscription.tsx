// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import ToggleButton from "./Button/ToggleButton";
// import img9 from "../assets/image9.jpeg"

// const JobSubscription = () => {
//   const [selectedTab, setSelectedTab] = useState("Candidates");

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="flex flex-col max-w-[1040px] h-[620px] lg:flex-row p-12 rounded-[55px] shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
//         <div className="flex flex-col lg:w-1/2 space-y-8">
//           <h1 className="text-2xl font-bold text-[#1F2937]">Chancenkarte Jobs</h1>
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse magnam laborum optio adipisci sint consequatur pariatur, odio beatae et minus voluptates dolores quia. Aliquid vel optio quas fugiat ab quos.
//           </p>

//           <div className="flex">
//             <ToggleButton
//               active={selectedTab === "Candidates"}
//               onClick={() => setSelectedTab("Candidates")}
//               label="Candidates"
//               isLeft={true}
//             />
//             <ToggleButton
//               active={selectedTab === "Employers"}
//               onClick={() => setSelectedTab("Employers")}
//               label="Employers"
//               isLeft={false}
//             />
//           </div>

//           <form className="flex flex-col space-y-8">
//             <input
//               type="text"
//               placeholder="First name"
//               className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               placeholder="Email address"
//               className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//             >
//               Subscribe now
//             </button>
//           </form>
//         </div>

//         <div className="lg:w-1/2 flex items-center ">
//           <Image
//             src={img9}
//             alt="Job preview image"
//             width={500}
//             height={300}
//             className="rounded-lg w-full h-full object-cover sm:hidden md:hidden xs:hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSubscription;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import ToggleButton from "./Button/ToggleButton";
// import img9 from "../assets/image9.jpeg";

// const JobSubscription = () => {
//   const [selectedTab, setSelectedTab] = useState("Candidates");

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="flex flex-col max-w-[1040px] h-[620px] lg:flex-row p-12 rounded-[55px] shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
//         <div className="flex flex-col lg:w-1/2 space-y-8">
//           <h1 className="text-2xl font-bold text-[#1F2937]">Chancenkarte Jobs</h1>
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse magnam laborum optio adipisci sint consequatur pariatur, odio beatae et minus voluptates dolores quia. Aliquid vel optio quas fugiat ab quos.
//           </p>

//           <div className="flex">
//             <ToggleButton
//               active={selectedTab === "Candidates"}
//               onClick={() => setSelectedTab("Candidates")}
//               label="Candidates"
//               isLeft={true}
//             />
//             <ToggleButton
//               active={selectedTab === "Employers"}
//               onClick={() => setSelectedTab("Employers")}
//               label="Employers"
//               isLeft={false}
//             />
//           </div>

//           <form className="flex flex-col space-y-4">
//             <input
//               type="text"
//               placeholder="First name"
//               className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
//             />
//             <input
//               type="email"
//               placeholder="Email address"
//               className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 w-full"
//             >
//               Subscribe now
//             </button>
//           </form>
//         </div>

//         <div className="lg:w-1/2 flex items-center">
//           <Image
//             src={img9}
//             alt="Job preview image"
//             width={500}
//             height={300}
//             className="rounded-lg w-full h-full object-cover sm:hidden xs:hidden md:hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSubscription;


"use client";

import React, { useState } from "react";
import Image from "next/image";
import ToggleButton from "./Button/ToggleButton";
import img9 from "../assets/image9.jpeg";

const JobSubscription = () => {
  const [selectedTab, setSelectedTab] = useState("Candidates");

  return (
    <div className="flex items-center justify-center  bg-[#00000]">
      <div className="flex flex-col   bg-[#F1F4F9] max-w-[1040px] h-auto lg:flex-row p-12 sm:p-6 xs:p-4 md:p-10 rounded-[48px] shadow-lg space-y-6 lg:space-y-0 lg:gap-x-8">
        <div className="flex flex-col lg:w-1/2 space-y-6 ">
          <h1 className="text-xl font-bold text-[#1F2937]">Chancenkarte Jobs</h1>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse magnam laborum optio adipisci sint consequatur pariatur, odio beatae et minus voluptates dolores quia. Aliquid vel optio quas fugiat ab quos.
          </p>

          <div className="flex flex-wrap">
            <ToggleButton
              active={selectedTab === "Candidates"}
              onClick={() => setSelectedTab("Candidates")}
              label="Candidates"
              isLeft={true}
            />
            <ToggleButton
              active={selectedTab === "Employers"}
              onClick={() => setSelectedTab("Employers")}
              label="Employers"
              isLeft={false}
            />
          </div>

          <form className="flex flex-col space-y-6 ">
            <input
              type="text"
              placeholder="First name"
              className="px-4 py-2 h-[56px] sm:h-[48px] xs:h-[46px] border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="px-4 py-2 h-[56px] sm:h-[48px] xs:h-[46px] border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
            />
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 h-[56px] sm:h-[48px] xs:h-[46px] border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#465D91] text-white rounded-full hover:bg-[#2b4788] w-full"
            >
              Subscribe now
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 flex items-center">
          <Image
            src={img9}
            alt="Job preview image"
            width={500}
            height={300}
            className="rounded-lg w-full h-full object-cover xs:hidden sm:hidden md:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default JobSubscription;