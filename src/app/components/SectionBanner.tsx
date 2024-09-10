// components/SectionBanner.tsx
import React from 'react';

interface SectionBannerProps {
  title: string;
  className?: string; // Add className as an optional prop
}


const SectionBanner: React.FC<SectionBannerProps> = ({ title }) => {
  return (
    <div className="w-[1040px] h-[256px] px-[96px] py-[48px] bg-[#f8f9fa] flex items-center justify-center opacity-100">
      <p className="font-['Roboto'] text-[36px] font-bold leading-[44px] text-center">
        {title}
      </p>
    </div>
  );
};

export default SectionBanner;


// import React from 'react';

// const SectionBanner: React.FC<SectionBannerProps> = ({ title, className }) => {
//   return (
//     <div className={`w-[1040px] h-[256px] px-[96px] py-[48px] bg-[#f8f9fa] flex items-center justify-center opacity-100 ${className}`}>
//       <p className="font-['Roboto'] text-[36px] font-bold leading-[44px] text-center">
//         {title}
//       </p>
//     </div>
//   );
// };

// export default SectionBanner;

