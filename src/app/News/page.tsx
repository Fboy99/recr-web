// import React from 'react';
// import NewsCard from '../components/NewsCard';

// import  Footer  from '../components/Footer';

// import { Navbar } from '../components/Navbar';
// import img10 from "../assets/image10.jpeg"

// interface NewsItem {
//   title: string;
//   date: string;
//   description: string;
//   imageUrl: string;
// }

// const newsData: NewsItem[] = [
//   {
//     title: 'Declaration of commitment for the Chancenkarte',
//     date: '13 June, 2024',
//     description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
//     imageUrl: '../assets/image5.jpeg'
//   },
//   {
//     title: 'How to Write a Winning Motivational Letter for Your Chancenkarte Application',
//     date: '21 May, 2024',
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
//     imageUrl: '../assets/image4.jpeg'
//   },
//   {
//     title: 'How to secure your German Blocked Account for your German visa',
//     date: '17 April, 2024',
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
//     imageUrl: '../assets/image7.jpeg'
//   },
//   {
//     title: 'How to apply for an Opportunity Card Extension',
//     date: '5 November, 2023',
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis repudiandae esse voluptatibus explicabo totam, vero excepturi ipsam optio rerum ipsa maiores voluptates? Nulla animi tenetur sint illum minus eius!",
//     imageUrl: '../assets/image9.jpeg'
//   },
// ];

// const News: React.FC = () => {
//   return (
//     <div>
//         <Navbar />
//       <div className="container mx-auto px-6 lg:px-16">
//         <h1 className="text-4xl font-bold text-center mb-2 py-12">News</h1>
//         <p className="text-center text-black mb-12">Learn all the latest about the opportunity card</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-56">
//         {newsData.map((newsItem, index) => (
//           <NewsCard
//             key={index}
//             title={newsItem.title}
//             date={newsItem.date}
//             description={newsItem.description}
//             imageUrl={newsItem.imageUrl}
//           />
//         ))}
//       </div>


//     </div>
//     <Footer/>

//     </div>

//   );
// };

// export default News;


// import React from 'react';
// import { StaticImageData } from 'next/image';
// // import Image from 'next/image';

// // import img11 from '../assets/image11.jpeg';
// import img4 from '../assets/image4.jpeg';
// import img7 from '../assets/image7.jpeg';
// import img9 from '../assets/image9.jpeg';
// import NewsCard from '../components/NewsCard';

// interface NewsItem {
//   title: string;
//   date: string;
//   description: string;
//   imageUrl: StaticImageData|string; // Updated type for static images
// }

// const newsData: NewsItem[] = [
//   {
//     title: 'Declaration of commitment for the Chancenkarte',
//     date: '13 June, 2024',
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
//     imageUrl: img4, // Use imported image
//   },
//   {
//     title: 'How to Write a Winning Motivational Letter for Your Chancenkarte Application',
//     date: '21 May, 2024',
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
//     imageUrl: img7, // Use imported image
//   },
//   {
//     title: 'How to secure your German Blocked Account for your German visa',
//     date: '17 April, 2024',
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
//     imageUrl: img4, // Use imported image
//   },
//   {
//     title: 'How to apply for an Opportunity Card Extension',
//     date: '5 November, 2023',
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis repudiandae esse voluptatibus explicabo totam, vero excepturi ipsam optio rerum ipsa maiores voluptates? Nulla animi tenetur sint illum minus eius!",
//     imageUrl: img9, // Use imported image
//   },
// ];


// const News: React.FC = () => {
//   return (
//       <div className=" mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//         <h1 className="mt-16 text-4xl font-bold text-center py-12">News</h1>
//         <p className="mb-8 text-center text-black ">Learn all the latest about the opportunity card</p>
//         {/* <div className="w-full mb-8 flex justify-center">
//             <Image
//               src={img11}
//               alt="About us"
//               width={1080}
//               height={800}
//               className="rounded-[20px]"
//             />
//           </div> */}
        
//         <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
//           {newsData.map((newsItem, index) => (
//             <NewsCard
//               key={index}
//               title={newsItem.title}
//               date={newsItem.date}
//               description={newsItem.description}
//               imageUrl={newsItem.imageUrl}
//             />
//           ))}
//         </div>
//       </div>
//   );
// };

// export default News;



// import React from 'react';
// import NewsCard from '../components/NewsCard';
// import newsDataJson from '../data/newsData.json';
// import { StaticImageData } from 'next/image';

// interface NewsItem {
//   title: string;
//   date: string;
//   description: string;
//   imageUrl: string|StaticImageData; // Type for image URLs
// }

// const News: React.FC = () => {
//   const newsData: NewsItem[] = newsDataJson;

//   return (
//     <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <h1 className="mt-16 text-4xl font-bold text-center py-12">News</h1>
//       <p className="mb-8 text-center text-black">Learn all the latest about the opportunity card</p>
      
//       <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
//         {newsData.map((newsItem, index) => (
//           <NewsCard
//             key={index}
//             title={newsItem.title}
//             date={newsItem.date}
//             description={newsItem.description}
//             imageUrl={newsItem.imageUrl} // Pass the imageUrl directly
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;



'use client';
import React from 'react';
import NewsCard from '../components/NewsCard';
import newsData from '../data/newsData.json'; // Adjust the import path as needed
import { useTranslation } from 'react-i18next';

const News: React.FC = () => {
  const {t}=useTranslation('common');
  return (
    <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
      <h1 className="mt-16 text-4xl font-bold text-center py-12">{t('news.title')}</h1>
      <p className="mb-8 text-center text-black">{t('news.latest_opportunity')}</p>

      <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
        {newsData.map((newsItem, index) => (
          <NewsCard
            key={index}
            itemKey={`newsCard.item${index + 1}`}
            date={newsItem.date}
            imageUrl={newsItem.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default News;