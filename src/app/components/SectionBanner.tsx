// components/SectionBanner.tsx
import React from 'react';

interface SectionBannerProps {
  title: string;
  className?: string; // Add className as an optional prop
}

const SectionBanner: React.FC<SectionBannerProps> = ({ title, className }) => {
  return (
    <div className={`w-full h-[204px] md:h-[164px] sm:h-[124px] xs:h-[96px] px-[96px] xs:px-[24px] sm:px-[24px] md:px-[28px] py-[48px] sm:py-[40px] bg-[#f8f9fa] flex items-center justify-center opacity-100 ${className}`}>
      <p className="font-['Roboto'] text-[28px] xs:text-[24px] sm:text-[25px] md:text-[30px] lg:text-[36px] font-bold leading-[44px] text-center">
        {title}
      </p>
    </div>
  );
};

export default SectionBanner;