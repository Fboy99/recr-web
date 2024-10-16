// import React from 'react';
// import Button from "./Button/Button"
// import Image, { StaticImageData } from 'next/image';

// interface NewsCardProps {
//   title: string;
//   date: string;
//   description: string;
//   imageUrl: string|StaticImageData;
// }

// const NewsCard: React.FC<NewsCardProps> = ({ title, date, description, imageUrl }) => {
//   return (
//     <div className="bg-white shadow-md rounded-[20px] max-width-24">
//       {typeof imageUrl === 'string' ? (
//         <Image src={imageUrl} alt={title} width={500} height={500} className="rounded-t-[20px] w-full h-80 object-cover" />
//       ) : (
//         <Image src={imageUrl} alt={title} className="rounded-t-[20px] w-full h-80 object-cover" />
//       )}

//       {/* <Image src={imageUrl} alt={title} className="rounded-t-[20px] w-full h-80 object-cover" /> */}
//       <div className="p-4">
//       <p className="text-gray-600 mb-2">{date}</p>
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-gray-800 mb-4">{description}</p>
//         {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Learn more
//         </button> */}
//         {/* <Button text='Learn More' className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'/> */}
//         <Button text='Learn More' className="bg-[#E3F1FF] xs:w-full text-black py-2 px-6 rounded-full"/>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


// import React from 'react';
// import Button from "./Button/Button";
// // import Image, { StaticImageData } from 'next/image';
// import { useTranslation } from 'react-i18next';
// import { StaticImageData } from 'next/image';

// interface NewsCardProps {
//   itemKey: string; // Key for accessing translation
//   date: string;
//   imageUrl: string | StaticImageData;
//   title: string; 
//   description: string;

// }

// const NewsCard: React.FC<NewsCardProps> = ({ itemKey, date, imageUrl }) => {
//   // const NewsCard: React.FC<NewsCardProps> = ({ itemKey, date }) => {

//   const { t } = useTranslation('common'); // Use the default namespace

//   return (
//     <div className="bg-white shadow-md rounded-[20px] max-width-24">
//       {/* <Image src={imageUrl} alt={t(`${itemKey}.title`)} width={500} height={500} className="rounded-t-[20px] w-full h-80 object-cover" /> */}

//       <div className="p-4">
//         {/* <p className="text-gray-600 mb-2">{date}</p> */}
//         <h3 className="text-lg font-semibold mb-2">{t(`${itemKey}.title`)}</h3>
//         <p className="text-gray-800 mb-4">{t(`${itemKey}.description`)}</p>
//         <Button text={t('newsCard.learnMore')} className="bg-[#E3F1FF] xs:w-full text-black py-2 px-6 rounded-full" />
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


// import React from 'react';
// import Button from './Button/Button';
// import { useTranslation } from 'react-i18next';
// import { StaticImageData } from 'next/image';

// interface NewsCardProps {
//   itemKey: string;
//   date: string;
//   imageUrl: string;
//   title: string;
//   description: string;
// }

// const NewsCard: React.FC<NewsCardProps> = ({ itemKey, date, imageUrl }) => {
//   const { t } = useTranslation('common');

//   return (
//     <div className="bg-white shadow-md rounded-[20px] max-width-24">
//       <img src={imageUrl} alt={t(`${itemKey}.title`)} className="rounded-t-[20px] w-full h-80 object-cover" />
//       <div className="p-4">
//         <p className="text-gray-600 mb-2">{date}</p>
//         <h3 className="text-lg font-semibold mb-2">{t(`${itemKey}.title`)}</h3>
//         <p className="text-gray-800 mb-4">{t(`${itemKey}.description`)}</p>
//         <Button text={t('newsCard.learnMore')} className="bg-[#E3F1FF] xs:w-full text-black py-2 px-6 rounded-full" />
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


import React from 'react';
import Button from './Button/Button';
import { useTranslation } from 'react-i18next';

interface NewsCardProps {
  itemKey: string;
  date: string;
  imageUrl: string;
  title: string;      // Use title directly from props
  description: string;  // Use description directly from props
}

const NewsCard: React.FC<NewsCardProps> = ({ itemKey, date, imageUrl, title, description }) => {
  const { t } = useTranslation('common');  // Only use translation for static text like button

  return (
    <div className="bg-white shadow-md rounded-[20px] max-width-24">
      <img src={imageUrl} alt={title} className="rounded-t-[20px] w-full h-80 object-cover" />
      <div className="p-4">
        <p className="text-gray-600 mb-2">{date}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>  {/* Use title from props */}
        <p className="text-gray-800 mb-4">{description}</p>  {/* Use description from props */}
        <Button text={t('newsCard.learnMore')} className="bg-[#E3F1FF] xs:w-full text-black py-2 px-6 rounded-full" />
      </div>
    </div>
  );
};

export default NewsCard;
