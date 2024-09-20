// import React from 'react';

// interface RecommendationProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   buttonLabel?: string; // Optional prop for button label
// }

// const Recommendation: React.FC<RecommendationProps> = ({ title, description, imageUrl, buttonLabel }) => {
//   return (
//     <div className="flex justify-center">
//       <div className="bg-white shadow-lg rounded-[20px] p-6 flex max-w-[1024px] sm:flex sm:flex-col xs:flex xs:flex-col">
//         <div className="w-1/5 mr-6">
//           <img src={imageUrl} alt={title} className="rounded-[20px] h-48 object-cover sm:hidden xs:hidden" />
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

import React from 'react';
// import Image from 'next/image';

import  Image,{ StaticImageData } from 'next/image';
interface RecommendationProps {
  title: string;
  description: string;
  imageUrl: string|StaticImageData ;
  buttonLabel?: string; 
}

const Recommendation: React.FC<RecommendationProps> = ({ title, description, imageUrl, buttonLabel }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-lg rounded-[20px] p-6 flex max-w-[1024px] sm:flex sm:flex-col xs:flex xs:flex-col">
        <div className="w-1/5 mr-6">
        {typeof imageUrl === 'string' ? (
        // <img src={imageUrl} alt={title} className="rounded-[20px] h-48 object-cover sm:hidden xs:hidden"  />
      '') : (
        <Image src={imageUrl} alt={title} className="rounded-[20px] h-48 object-cover sm:hidden xs:hidden"  />
      )}
          {/* <Image src={imageUrl} alt={title} className="rounded-[20px] h-48 object-cover sm:hidden xs:hidden" /> */}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-xl sm:text-lg xs:text-base font-bold mb-2 pb-4">{title}</h3>
          <p className="text-lg md:text-base sm:text-sm xs:text-xs mb-6">{description}</p>
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