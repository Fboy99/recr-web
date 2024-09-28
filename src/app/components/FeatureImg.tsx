// import React from "react";
// import Image, { StaticImageData } from "next/image";

// interface ImgFeatureProps {
//   title: string;
//   imageSrc: string | StaticImageData;
//   imageAlt: string;
//   text1: string;
//   text2: string;
//   imageLeft?: boolean; 
// }

// const ImgFeature: React.FC<ImgFeatureProps> = ({
//   title,
//   imageSrc,
//   imageAlt,
//   text1,
//   text2,
//   imageLeft = false,
// }) => {
//   return (
//     <div
//       className={`flex flex-col lg:${
//         imageLeft ? "flex-row" : "flex-row-reverse"
//       } gap-x-6  items-center justify-center `}
//     >
  
//       <div className="w-full lg:w-1/2  flex flex-col items-center">
//         <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
//           {title}
//         </h1>
//         <p className="py-[24px] text-[#36485C] lg:text-[18px] ">
//           {text1}
//         </p>
//         <p className="py-[24px] text-[#36485C] lg:text-[18px] ">
//           {text2}
//         </p>
//       </div>

//       <div className="w-full lg:w-1/2 flex-shrink-0 flex justify-center">
//         <Image
//           src={imageSrc}
//           alt={imageAlt}
//           width={496}
//           height={408}
//           className="rounded-[28px] opacity-100 sm:block"
//         />
//       </div>
      
//     </div>
//   );
// };

// export default ImgFeature;

// import React from 'react';
// import Image from 'next/image';

// const ImgFeature = ({ title, imageSrc, imageAlt, text1, text2, imageLeft }) => {
//   return (
//     <div className={`flex ${imageLeft ? 'flex-row' : 'flex-row-reverse'} gap-8 items-start`}>
//       <div className="w-full lg:w-1/2 flex flex-col">
//         <h3 className="text-2xl font-bold mb-4">{title}</h3>
//         <p className="py-6 text-gray-600">{text1}</p>
//         <p className="py-6 text-gray-600">{text2}</p>
//       </div>
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <Image
//           src={imageSrc}
//           alt={imageAlt}
//           width={500}
//           height={400}
//           className="rounded-lg max-w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImgFeature;

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImgFeatureProps {
  title: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  text1: string;
  text2: string;
  imageLeft?: boolean; 
}

const ImgFeature: React.FC<ImgFeatureProps> = ({
  title,
  imageSrc,
  imageAlt,
  text1,
  text2,
  imageLeft = false,
}) => {
  return (
    <div className={`flex flex-col-reverse lg:flex-row ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>
      <div className="w-full lg:w-1/2 flex flex-col">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="py-6 text-gray-600">{text1}</p>
        <p className="py-6 text-gray-600">{text2}</p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={400}
          className="rounded-[28px] max-w-full"
        />
      </div>
    </div>
  );
};

export default ImgFeature;