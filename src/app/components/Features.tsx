// import Image from "next/image";
// import FeatureIcon from "./FeatureIcon";
// import SectionBanner from "./SectionBanner";
// import { useTranslation } from 'react-i18next';


// // import img2 from '../../images/image2.jpeg';
// import img6 from '../../images/image8.jpeg';
// import img4 from '../../images/image4.jpeg';

//   // const { t } = useTranslation('common');

// export function Features() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full bg-blue-950">
//       <SectionBanner title='opportunityCardTitle' />

//       {/* Feature Section 1 */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 lg:w-[1040px] lg:py-[32px]">
//         <div className="lg:w-1/2 flex flex-col sm:px-4 xs:px-3 md:px-8">
//           <h1 className="pt-[12px] text-2xl sm:text-left sm:px-2 xs:text-left xs:px-2 font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
//             What is opportunity card?
//           </h1>
//           <p className="py-[24px] text-[#36485C] lg:text-[18px] px-2">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam eos similique debitis mollitia quaerat rem nihil quas? Laboriosam est cumque repellendus eaque illum itaque eos velit reprehenderit consequuntur at.
//           </p>
//         </div>
//         <FeatureIcon />
//       </div>

//       {/* Feature Section 2 */}
//       <div className="flex flex-col sm:flex-col-reverse xs:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-6 lg:w-[1040px] lg:py-[32px]">
//         <Image
//           src={img6}
//           alt="Feature 10 image"
//           width={496}
//           height={408}
//           className="w-full max-w-[100%] h-auto md:max-w-[400px] lg:max-w-[496px] rounded-[28px] opacity-100"
//         />
//         <div className="lg:w-1/2 flex flex-col sm:px-4 xs:px-3 md:px-8">
//           <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
//             Working with the opportunity card in Germany
//           </h1>
//           <p className="py-[24px] text-[#36485C] lg:text-[18px]">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam incidunt in inventore eaque delectus perspiciatis tempore recusandae, nemo iure ipsum quaerat dicta. Maxime libero temporibus minus cupiditate modi voluptas sapiente!
//           </p>
//         </div>
//       </div>

//       {/* Feature Section 3 */}
//       <div className="flex flex-col sm:flex-col-reverse xs:flex-col-reverse md:flex-col-reverse lg:flex-row-reverse items-center justify-center gap-4 lg:gap-6 lg:w-[1040px] lg:py-[32px]">
//         <Image
//           src={img4}
//           alt="Feature 4 image"
//           width={496}
//           height={408}
//           className="w-full max-w-[100%] h-auto md:max-w-[400px] lg:max-w-[496px] rounded-[28px] opacity-100"
//         />
//         <div className="lg:w-1/2 flex flex-col sm:px-4 xs:px-3 md:px-8">
//           <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
//             Prerequisites for the Opportunity Card
//           </h1>
//           <p className="py-[24px] text-[#36485C] lg:text-[18px]">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio asperiores omnis expedita, est natus facilis! Eum, accusamus aspernatur cum dolorum adipisci praesentium, asperiores sint mollitia totam deleniti, quis odio pariatur!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import Image from "next/image";
import FeatureIcon from "./FeatureIcon";
import SectionBanner from "./SectionBanner";
import { useTranslation } from 'react-i18next';

import img6 from '../../images/image8.jpeg';
import img4 from '../../images/image4.jpeg';

export function Features() {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <SectionBanner title={t('opportunityCardTitle')} />

      {/* Feature Section 1 */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 lg:w-[1040px] lg:py-[32px]">
        <div className="lg:w-1/2 flex flex-col">
          {/* <h1 className="pt-[12px] text-2xl sm:text-left sm:px-2 xs:text-left xs:px-2 font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]"> */}
          <h1 className="pt-[12px] text-2xl sm:text-left sm:px xs:text-left xs:px font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">

            {t('whatIsOpportunityCard')}
          </h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px] ">
            {t('opportunityCardDescription')}
          </p>
        </div>
        <FeatureIcon />
      </div>

      {/* Feature Section 2 */}
      <div className="flex flex-col sm:flex-col-reverse xs:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-12 lg:w-[1040px] lg:py-[32px]">
        <Image
          src={img6}
          alt="Feature 10 Bild"
          width={496}
          height={408}
          className="w-full max-w-[100%] h-auto sm:max-w-[496px] md:max-w-[400px]  lg:max-w-[496px] rounded-[28px] opacity-100"
        />
        <div className="lg:w-1/2 flex flex-col sm:px-4 xs:px-3 md:px-8">
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
            {t('workingWithOpportunityCard')}
          </h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            {t('workingDescription')}
          </p>
        </div>
      </div>

      {/* Feature Section 3 */}
      <div className="flex flex-col sm:flex-col-reverse xs:flex-col-reverse md:flex-col-reverse lg:flex-row-reverse items-center justify-center gap-4 lg:gap-12 lg:w-[1040px] lg:py-[32px]">
        <Image
          src={img4}
          alt="Feature 4 Bild"
          width={496}
          height={408}
          className="w-full max-w-[100%] h-auto sm:max-w-[496px] md:max-w-[400px] lg:max-w-[496px] rounded-[28px] opacity-100"
        />
        <div className="lg:w-1/2 flex flex-col sm:px-4 xs:px-3 md:px-8">
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
            {t('prerequisitesTitle')}
          </h1>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            {t('prerequisitesDescription')}
          </p>
        </div>
      </div>
    </div>
  );
}

