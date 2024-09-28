'use client';
import React from 'react';
import Image from 'next/image';
import InfoBlockWithIcons from '../components/InfoBlockWithIcons';
import { FaHome, FaMoneyBillWave, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import ImgFeature from '../components/FeatureImg';
import Faq from '../components/Faq';
import FeatureIcon from '../components/FeatureIcon';
import img10 from "../../images/image10.jpeg";
import img3 from "../../images/image3.jpeg";
import img5 from "../../images/image5.jpeg";
import { useTranslation } from 'react-i18next';

const Candidates: React.FC = () => {
  const { t } = useTranslation('common');

  const infoBlocks = [
    {
      icon: <FaHome size={48} />,
      title: t('homeTitle'),
      description: t('homeDescription')
    },
    {
      icon: <FaMoneyBillWave size={48} />,
      title: t('financeTitle'),
      description: t('financeDescription')
    },
    {
      icon: <FaCheckCircle size={48} />,
      title: t('checkTitle'),
      description: t('checkDescription')
    },
    {
      icon: <FaBriefcase size={48} />,
      title: t('jobTitle'),
      description: t('jobDescription')
    }
  ];

  return (
    <div className="my-16 mx-auto pb-10 sm:px-4 xs:px-4 md:mx-8">
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center my-8">{t('candidates.title')}</h1>
        <p className="text-center text-lg mb-16">{t('candidates.subtitle')}</p>

        <div className="flex justify-center mb-8">
          <Image
            src={img10}
            alt={t('candidates.aboutUsAlt')}
            width={1080}
            height={800}
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 sm:text-left">{t('candidates.advantagesTitle')}</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-8 mt-12">
            <div className="w-full lg:w-1/2">
              <p className="py-6 text-gray-600">{t('candidates.advantagesDescription')}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <FeatureIcon />
            </div>
          </div>
        </div>

        <div className="space-y-12 mt-12">
          <ImgFeature
            title={t('candidates.workingTitle')}
            imageSrc={img3.src}
            imageAlt={t('candidates.feature3Alt')}
            text1={t('candidates.workingText1')}
            text2={t('candidates.workingText2')}
            imageLeft={true}
          />
          <ImgFeature
            title={t('candidates.requirementsTitle')}
            imageSrc={img5.src}
            imageAlt={t('candidates.feature4Alt')}
            text1={t('candidates.requirementsText1')}
            text2={t('candidates.requirementsText2')}
            imageLeft={false}
          />
        </div>

        <div className="mx-auto">
          <h1 className="text-[36px] sm:text-[25px] xs:text-[23px] md:text-[28px] font-semibold text-center text-[#181C20] mb-6 mt-8">{t('candidates.keyAdvantagesTitle')}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 sm:gap-4 xs:gap-2 md:gap-8 mt-16">
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

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">{t('candidates.conclusionTitle')}</h2>
          <p className="pb-4">{t('candidates.conclusionText1')}</p>
          <p className="pb-4">{t('candidates.conclusionText2')}</p>
          <p className="pb-4">{t('candidates.conclusionText3')}</p>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Candidates;
