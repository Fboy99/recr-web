// components/SectionBanner.tsx
import React from 'react';

interface SectionBannerProps {
  title: string;
  subtitle?: string;
  className?: string; // Add className as an optional prop
}

const SectionBanner: React.FC<SectionBannerProps> = ({ title, subtitle, className }) => {
  return (
    <div className=" w-full h-[204px] md:h-[164px] sm:h-[104px] xs:h-[64px] px-[96px] xs:px-[24px] sm:px-[24px] md:px-[28px] flex items-center justify-center opacity-100">
      <div className="text-center">
        <h1 className={`font-roboto text-[#181C20] xs:text-[22px] sm:text-[25px] xs:mt-14 sm:mt-16 md:text-[30px] lg:text-[36px] font-bold leading-[44px] ${className}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-gray-700 mb-10 mt-5 sm:text-[25px] xs:mb-46 sm:mb-76 ${className}`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default SectionBanner;