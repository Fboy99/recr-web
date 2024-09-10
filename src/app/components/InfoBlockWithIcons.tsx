// // components/InfoBlock.tsx

// import React from 'react';

// interface InfoBlockWithIconsProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// const InfoBlockWithIcons: React.FC<InfoBlockWithIconsProps> = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex items-center mb-4">
//         <div className="mr-2">{icon}</div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   );
// };

// export default InfoBlockWithIcons;

// components/InfoBlockWithIcons.tsx
import React from 'react';

interface InfoBlockWithIconsProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const InfoBlockWithIcons: React.FC<InfoBlockWithIconsProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 border rounded-[20px] shadow-md">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default InfoBlockWithIcons;
