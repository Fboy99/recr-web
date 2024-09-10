// import Image from "next/image";

// interface InfoBlockWithTextProps {
//   imageSrc: string;
//   altText: string;
//   title: string;
//   content: string;
//   items?: string[];
// }

// const InfoBlockWithText: React.FC<InfoBlockWithTextProps> = ({ imageSrc, altText, title, content, items }) => {
//   return (
//     <div className="flex flex-col items-center md:flex-row md:items-start mb-8">
//       <div className="w-full md:w-1/3">
//         <Image src={imageSrc} alt={altText} width={500} height={300} className="rounded-lg" />
//       </div>
//       <div className="w-full md:w-2/3 md:pl-6">
//         <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//         <p className="mb-4">{content}</p>
//         {items && (
//           <ul className="list-disc list-inside">
//             {items.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InfoBlockWithText;

// components/InfoBlockWithText.tsx
import React from 'react';
import Image from 'next/image';

interface InfoBlockWithTextProps {
  imageSrc: string;
  altText: string;
  title: string;
  content: string;
  items?: string[];
}

const InfoBlockWithText: React.FC<InfoBlockWithTextProps> = ({ imageSrc, altText, title, content, items }) => {
  return (
    <div className="mb-8">
      <Image src={imageSrc} alt={altText} width={600} height={400} className="rounded-lg" />
      <h2 className="text-2xl font-semibold mt-4 mb-2">{title}</h2>
      <p className="mb-4">{content}</p>
      {items && (
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoBlockWithText;
