// import Image from 'next/image';
// import React from 'react';
// import img11 from '../../images/Expatrio.svg';
// import img10 from '../../images/Flag_map_of_Germany.svg';
// import img12 from '../../images/Expatrio.svg';

// interface RecommendationProps {
//   title: string;
//   description: string;
//   imageUrl: String;  // This will be used to determine which image to show
//   buttonLabel: string;
//   headerTitle: string;
// }

// const Recommendation: React.FC<RecommendationProps> = ({ title, description, imageUrl, buttonLabel, headerTitle }) => {
//   // Map imageUrl to imported images
//   const imageMap = {
//     img11: img11,
//     img12: img12,
//     img10: img10,
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="bg-white shadow-lg rounded-[20px] p-6 flex max-w-[1024px] sm:flex-col xs:flex-col">
//         <div className="w-1/5 lg:mr-6 md:mr-4 sm:w-full xs:w-full">
//           <Image 
//             src={imageMap[imageUrl]} // Use the mapped image based on imageUrl prop
//             alt={title} 
//             width={192} // Set appropriate width
//             height={192} // Set appropriate height
//             className="rounded-[20px] h-48 bg-gray-100 sm:w-full xs:w-full" 
//           />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-xl font-bold mb-2 pb-4">{title}</h3>
//           <p className="mb-6">{description}</p>
//           {buttonLabel && (
//             <button className="border border-zinc-800 text-sky-800 py-2 px-6 rounded-full mt-4">
//               {buttonLabel}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Recommendation;

import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface RecommendationProps {
  title: string;
  description: string;
  imageUrl: string | StaticImageData; 
  buttonLabel: string;
  headerTitle: string;
}

const Recommendation: React.FC<RecommendationProps> = ({ title, description, imageUrl, buttonLabel }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white shadow-lg rounded-[20px] p-6 flex w-full lg:max-w-[1024px] sm:flex-col xs:flex-col">
        <div className="w-1/5 lg:mr-6 md:mr-4 sm:w-full xs:w-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={192} 
            height={192}
            className="rounded-[20px] h-48 bg-gray-100 sm:w-full xs:w-full" 
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 pb-4">{title}</h3>
          <p className="mb-6">{description}</p>
          {buttonLabel && (
            <button className="border border-zinc-800 text-sky-800 py-2 px-6 rounded-full mt-4">
              {buttonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;