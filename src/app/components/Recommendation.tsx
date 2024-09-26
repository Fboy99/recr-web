// import Image from 'next/image';
// import React from 'react';
//  import img11 from'../assets/image6.jpeg'
//  import img12 from'../assets/image6.jpeg'
//  import img10 from'../assets/image6.jpeg'

//  interface RecommendationProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   buttonLabel: string;
//   headerTitle:string;
// }

// const Recommendation: React.FC<RecommendationProps> = ({title, description, imageUrl, buttonLabel,headerTitle }) => {
//   return (
//     <div className="flex justify-center">
//       <div className="bg-white shadow-lg rounded-[20px] p-6 flex max-w-[1024px] sm:flex sm:flex-col xs:flex xs:flex-col">
//         <div className="w-1/5 lg:mr-6 md:mr-4 sm:w-full xs:w-full">
//           <img src={imageUrl} alt={title} className="rounded-[20px] h-48 object-cover bg-red-900" />
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
import img11 from '../assets/Expatrio.svg';
import img10 from '../assets/Flag_map_of_Germany.svg';
import img12 from '../assets/Expatrio.svg';

interface RecommendationProps {
  title: string;
  description: string;
  imageUrl: string;  // This will be used to determine which image to show
  buttonLabel: string;
  headerTitle: string;
}

const Recommendation: React.FC<RecommendationProps> = ({ title, description, imageUrl, buttonLabel, headerTitle }) => {
  // Map imageUrl to imported images
  const imageMap = {
    img11: img11,
    img12: img12,
    img10: img10,
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-lg rounded-[20px] p-6 flex max-w-[1024px] sm:flex-col xs:flex-col">
        <div className="w-1/5 lg:mr-6 md:mr-4 sm:w-full xs:w-full">
          <Image 
            src={imageMap[imageUrl]} // Use the mapped image based on imageUrl prop
            alt={title} 
            width={192} // Set appropriate width
            height={192} // Set appropriate height
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

// import React from 'react';
// // import Image from 'next/image';

// import  Image,{ StaticImageData } from 'next/image';
// interface RecommendationProps {
//   title: string;
//   description: string;
//   imageUrl: string|StaticImageData ;
//   buttonLabel?: string; 
// }

// const Recommendation: React.FC<RecommendationProps> = ({ title, description, imageUrl, buttonLabel }) => {
//   return (
//     <div className="flex justify-center">
//       <div className="bg-white shadow-lg rounded-[20px] p-6 flex max-w-[1024px] sm:flex sm:flex-col xs:flex xs:flex-col">
//         <div className="w-1/5 mr-6">
//         {typeof imageUrl === 'string' ? (
//         <img src={imageUrl} alt={title} className="rounded-[20px] h-48 object-cover sm:hidden xs:hidden"  />
//       ) : (
//         <Image src={imageUrl} alt={title} className="rounded-[20px] h-48 object-cover "  />
//       )}
//         </div>
//         <div className="flex-1">
//           <h3 className="text-2xl md:text-xl sm:text-lg xs:text-base font-bold mb-2 pb-4">{title}</h3>
//           <p className="text-lg md:text-base sm:text-sm xs:text-xs mb-6">{description}</p>
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