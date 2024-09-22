import React from 'react';

interface PageHeadSectionProps {
  text1: string;
  text2: string;
}

const PageHeadSection: React.FC<PageHeadSectionProps> = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col justify-center items-center lg:p-[40px_24px] md:p-[32px_16px] sm:p-[24px_12px] xs:p-[16px_8px] gap-3 
                    lg:w-[428px] md:w-[400px] sm:w-[360px] xs:w-[320px] 
                    lg:h-[164px] md:h-[150px] sm:h-[120px] xs:h-[100px] isolation-isolate">
      {/* Headline */}
      <h1 className="lg:w-[1040px] md:w-[960px] sm:w-[720px] xs:w-[600px] 
                     lg:h-[64px] md:h-[56px] sm:h-[48px] xs:h-[40px] 
                     font-roboto font-normal lg:text-[57px] lg:leading-[64px] 
                     md:text-[50px] md:leading-[56px] 
                     sm:text-[45px] sm:leading-[52px] 
                     xs:text-[36px] xs:leading-[40px] 
                     text-center text-[#181C20] flex items-center">
        {text1}
      </h1>

      {/* Subhead */}
      <h2 className="lg:w-[1040px] md:w-[960px] sm:w-[720px] xs:w-[600px] 
                     lg:h-[28px] md:h-[24px] sm:h-[20px] xs:h-[18px] 
                     font-roboto font-normal lg:text-[22px] lg:leading-[28px] 
                     md:text-[20px] md:leading-[24px] 
                     sm:text-[14px] sm:leading-[20px] 
                     xs:text-[12px] xs:leading-[16px] 
                     text-center text-[#42474E] flex items-center">
        {text2}
      </h2>
    </div>
  );
};

export default PageHeadSection;