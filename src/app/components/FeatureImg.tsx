// components/Feature.tsx

import React from "react";
import Image from "next/image";

interface ImgFeatureProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  text1: string;
  text2: string;
  imageLeft?: boolean; // Determines if the image should be on the left
}

const ImgFeature: React.FC<ImgFeatureProps> = ({
  title,
  imageSrc,
  imageAlt,
  text1,
  text2,
  imageLeft = false
}) => {
  return (
    <div className={`flex ${imageLeft ? "flex-row" : "flex-row-reverse"} gap-x-6 gap-y-[48px] items-center justify-center`}>
      <div className="flex-shrink-0 w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={496}
          height={408}
          className="rounded-[28px] opacity-100"
        />
      </div>
      <div className="sm:w-1/2 lg:py-[56px] flex flex-col">
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
          {title}
        </h1>
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          {text1}
        </p>
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          {text2}
        </p>
      </div>
    </div>
  );
};

export default ImgFeature;
