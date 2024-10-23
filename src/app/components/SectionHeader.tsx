import React from 'react';

interface SectionHeaderProps {
  title: string;
  paragraph: string;
  classAttribute?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, paragraph, classAttribute }) => {
  return (

    <div className={`${classAttribute}`}>
      <h1
        className="font-roboto text-[45px] font-[400] leading-[64px] tracking-[-0.25px] text-center text-[#181C20] mb-6 mt-8"
      >
        {title}
      </h1>
      <p
        className="font-roboto text-[22px] font-[400] leading-[28px] text-center text-[#42474E] mb-16"
      >
        {paragraph}
      </p>
    </div>
  );
};

export default SectionHeader;
