// 'use client';
// import Image from 'next/image';
// import InfoBlockWithIcons from '../components/InfoBlockWithIcons';
// import { FaHome, FaMoneyBillWave, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
// import Faq from '../components/Faq';
// import AssistForm from '../components/AssistForm';
// import img5 from "../../images/image5.jpeg";
// import infoBlocksData from '../data/infoBlocks.json';
// import { useTranslation } from 'react-i18next';

// const iconMap = {
//   FaHome,
//   FaMoneyBillWave,
//   FaCheckCircle,
//   FaBriefcase
// };


// const Employers: React.FC = () => {
//   const infoBlocks = infoBlocksData.infoBlocks.map(block => ({
//     ...block,
//     icon: iconMap[block.icon as keyof typeof iconMap]({ size: 36 })
//   }));
//   const { t } = useTranslation('common');

//   return (
//     <div className="my-16 bg-white text-black pb-12 sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <div className="mx-auto py-12 max-w-[1080px]">
//         <div className="w-full max-w-screen-lg mx-auto">
//           <h1 className="text-4xl font-bold text-center mb-2">{t('employers.title')}</h1>
//           <p className="text-center text-black mb-12">Why we care about the opportunity card</p>
//           <div className="flex flex-col items-center">
//             <div className="w-full mb-8 flex justify-center">
//               <Image
//                 src={img5}
//                 alt="About us"
//                 width={1080}
//                 height={800}
//                 className="rounded-[20px]"
//               />
//             </div>
//             <div className="w-full text-center space-y-8">
//               {/* <Features /> */}
//             </div>
//             <div className="mx-auto">
//               <h1 className="text-[36px] sm:text-[25px] xs:text-[23px] md:text-[28px] font-semibold text-center text-[#181C20] mb-6 mt-8">
//                 Key advantages of the Opportunity Card
//               </h1>
//               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
//                 {infoBlocks.map((block, index) => (
//                   <InfoBlockWithIcons
//                     key={index}
//                     icon={block.icon}
//                     title={block.title}
//                     description={block.description}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className='sm:mx-2 xs:mx-2 md:mx-8'>
//           <Faq/>
//           <AssistForm/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Employers;

'use client';
import Image from 'next/image';
import InfoBlockWithIcons from '../components/InfoBlockWithIcons';
import { FaHome, FaMoneyBillWave, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import Faq from '../components/Faq';
import AssistForm from '../components/AssistForm';
import img5 from "../../images/image5.jpeg";
import infoBlocksData from '../data/infoBlocks.json';
import { useTranslation } from 'react-i18next';

const iconMap = {
  FaHome,
  FaMoneyBillWave,
  FaCheckCircle,
  FaBriefcase
};

const Employers: React.FC = () => {
  const infoBlocks = infoBlocksData.infoBlocks.map(block => ({
    ...block,
    icon: iconMap[block.icon as keyof typeof iconMap]({ size: 36 })
  }));
  const { t } = useTranslation('common');

  return (
    <div className="my-16 bg-white text-black pb-12 sm:px-4 xs:px-4 md:mx-8 lg:px-16">
      <div className="mx-auto py-12 max-w-[1080px]">
        <div className="w-full max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">{t('employers.title')}</h1>
          <p className="text-center text-black mb-12">{t('employers.opportunity_card')}</p>
          <div className="flex flex-col items-center">
            <div className="w-full mb-8 flex justify-center">
              <Image
                src={img5}
                alt="About us"
                width={1080}
                height={800}
                className="rounded-[20px]"
              />
            </div>
            <div className="w-full text-center space-y-8">
              {/* <Features /> */}
            </div>
            <div className="mx-auto">
              <h1 className="text-[36px] sm:text-[25px] xs:text-[23px] md:text-[28px] font-semibold text-center text-[#181C20] mb-6 mt-8">
                {t('employers.key_advantages')}
              </h1>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
                {infoBlocks.map((block, index) => (
                  <InfoBlockWithIcons
                    key={index}
                    icon={block.icon}
                    title={block.title}
                    description={block.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='sm:mx-2 xs:mx-2 md:mx-8'>
          <Faq/>
          <AssistForm/>
        </div>
      </div>
    </div>
  );
};

export default Employers;