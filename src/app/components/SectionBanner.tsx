// components/SectionBanner.tsx
import React from 'react';

interface SectionBannerProps {
  title: string;
  subtitle?:string;
  className?: string; // Add className as an optional prop
}

const SectionBanner: React.FC<SectionBannerProps> = ({ title,subtitle, className }) => {
  return (
    <div className="w-full h-[136px] md:h-[116px] sm:h-[96px] xs:h-[64px] px-[96px] xs:px-[24px] sm:px-[24px] md:px-[28px]   items-center justify-center opacity-100 flex flex-col">
      <h1 className={`"font-roboto text-[#181C20] xs:text-[22px] sm:text-[25px] md:text-[30px] lg:text-[36px] font-bold leading-[44px] text-center " ${className}`}>{title}</h1>
      <p className={`text-center text-gray-700 mb-28 mt-5 ${className}`}>{subtitle}</p>
    </div>
  );
};

export default SectionBanner;