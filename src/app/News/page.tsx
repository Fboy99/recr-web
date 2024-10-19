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



// 'use client';
// import React from 'react';
// import NewsCard from '../components/NewsCard';
// import newsData from '../data/newsData.json'; // Adjust the import path as needed
// import { useTranslation } from 'react-i18next';

// const News: React.FC = () => {
//   const {t}=useTranslation('common');
//   return (
//     <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <h1 className="mt-16 text-4xl font-bold text-center py-12">{t('news.title')}</h1>
//       <p className="mb-8 text-center text-black">{t('news.latest_opportunity')}</p>

//       <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
//         {newsData.map((newsItem, index) => (
//           <NewsCard
//             key={index}
//             itemKey={`newsCard.item${index + 1}`}
//             date={newsItem.date}
//             imageUrl={newsItem.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;


// ????????????????????????????????????????????????????????????????????????????

// 'use client';
// import React from 'react';
// import NewsCard from '../components/NewsCard';
// import { useTranslation } from 'react-i18next';
// import { gql, useQuery } from "@apollo/client";

// import img4 from "../../images/image4.jpeg";
// import img7 from "../../images/image7.jpeg";
// import img9 from "../../images/image9.jpeg";
// import img10 from "../../images/image10.jpeg";

// // Image mapping
// const imageMap = {
//   image4: img4,
//   image7: img7,
//   image9: img9,
//   image10: img10,
// };

// // Define GraphQL query for fetching articles
// const GET_ARTICLES = gql`
//   query GetArticles($limit: Int, $offset: Int) {
//     articles(limit: $limit, offset: $offset) {
//       id
//       title
//       description
//       imageUrls
//       createdAt
//       updatedAt
//     }
//   }
// `;

// // Define the types
// type NewsItem = {
//   id: string;
//   title: string;
//   createdAt: string;
//   description: string;
//   imageUrls: string; // Assuming this is a single URL; adjust if necessary
// };

// type NewsData = {
//   articles: NewsItem[];
// };

// const News: React.FC = () => {
//   const { t } = useTranslation('common');
//   // Use Apollo Client's useQuery to fetch articles
//   const { loading, error, data } = useQuery<NewsData>(GET_ARTICLES, {
//     variables: { limit: 10, offset: 0 }, // Adjust limit and offset as needed
//   });

//   console.log(data);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <h1 className="mt-16 text-4xl font-bold text-center py-12">{t('news.title')}</h1>
//       <p className="mb-8 text-center text-black">{t('news.latest_opportunity')}</p>

//       <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
//         {data.articles.map((newsItem: NewsItem) => (
//           <NewsCard
//             key={newsItem.id} // Use article ID as the key
//             itemKey={`newsCard.item${newsItem.id}`} // You can adjust this for localization if needed
//             date={new Date(newsItem.createdAt).toLocaleDateString()} // Format the date as needed

//             imageUrl={imageMap[newsItem.imageUrls] || newsItem.imageUrls} 

//             description={newsItem.description} // Pass description if needed
//           />

//           // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//           //Add button ALso
//           // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 'use client';
// import React from 'react';
// import NewsCard from '../components/NewsCard';
// import newsDataRaw from '../data/newsData.json'; // Adjust the import path as needed
// import { useTranslation } from 'react-i18next';

// import img4 from "../../images/image4.jpeg";
// import img7 from "../../images/image7.jpeg";
// import img9 from "../../images/image9.jpeg";
// import img10 from "../../images/image10.jpeg";




// const imageMap = {
//   image4: img4,
//   image7: img7,
//   image9: img9,
//   image10: img10,

// };
// // Define the types
// type NewsItem = {
//   title: string;
//   date: string;
//   description: string;
//   imageKey: keyof typeof imageMap; // Use the keys of imageMap
// };

// type NewsData = NewsItem[];

// const newsData: NewsData = newsDataRaw as NewsData; // Type assertion

// const News: React.FC = () => {
//   const { t } = useTranslation('common');

//   return (
//     <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <h1 className="mt-16 text-4xl font-bold text-center py-12">{t('news.title')}</h1>
//       <p className="mb-8 text-center text-black">{t('news.latest_opportunity')}</p>

//       <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
//         {newsData.map((newsItem: NewsItem, index: number) => (
//           <NewsCard
//             key={index}
//             itemKey={`newsCard.item${index + 1}`}
//             date={newsItem.date}
//             imageUrl={imageMap[newsItem.imageKey]} // Use the key to get the image
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 'use client';
// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import NewsCard from '../components/NewsCard';
// import { useTranslation } from 'react-i18next';

// import image from '../../images/image1.jpeg'

// import { StaticImageData } from 'next/image';

// import image4 from '../../images/image4.jpeg';
// import image7 from '../../images/image7.jpeg';
// import image9 from '../../images/image9.jpeg';
// import image10 from '../../images/image10.jpeg';

// // Map the article IDs or any other attribute to your local images
// const imageMap: { [key: string]: StaticImageData | string } = {
//   "1": image4,
//   "2": image7,
//   "3": image9,
//   "4": image10,
// };

// // Define the GraphQL query to fetch articles
// const GET_ARTICLES = gql`
//   query GetArticles($limit: Int, $offset: Int) {
//     articles(limit: $limit, offset: $offset) {
//       id
//       title
//       description
//       imageUrls
//       createAt
//     }
//   }
// `;

// // Define the types
// type Article = {
//   id: string;
//   title: string;
//   description: string;
//   imageUrls:string,
//   createAt: string;
// };

// const News: React.FC = () => {
//   const { t } = useTranslation('common');

//   const { loading, error, data } = useQuery(GET_ARTICLES, {
//     variables: { limit: 4, offset: 2}, 
//   });

//   // if (loading) return <p className='text-center'>Loading...</p>;
//   // if (error) return <p className='text-center'>Error fetching articles: {error.message}</p>;
//   console.log(data)

//   return (
//     <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <h1 className="mt-16 text-4xl font-bold text-center py-12">{t('news.title')}</h1>
//       <p className="mb-8 text-center text-black">{t('news.latest_opportunity')}</p>

//       <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
//         {data.articles.map((article: Article) => (
//           <NewsCard
//           key={article.id}
//           itemKey={`newsCard.item${article.id}`}
//           date={new Date(article.createAt).toDateString()}
//           // imageUrl={article.imageUrls}  
//           imageUrl={imageMap[article.id] || image4}  
//           title={article.title}
//           description={article.description}
//         />
//         ))}

//       </div>
//     </div>
//   );
// };

// export default News;


// ..................................................................................................................
// ...................................................................................................

// 'use client';
// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import NewsCard from '../components/NewsCard';
// import { useTranslation } from 'react-i18next';

// // Import images
// import image4 from '../../images/image4.jpeg';
// import image7 from '../../images/image7.jpeg';
// import image9 from '../../images/image9.jpeg';
// import image10 from '../../images/image10.jpeg';

// // Map image paths to article IDs using `src` to extract the string URL
// const imageMap: { [key: string]: string } = {
//   "1": image4.src, // Convert StaticImageData to string (URL)
//   "2": image7.src,
//   "3": image9.src,
//   "4": image10.src,
// };

// // GraphQL query to fetch articles
// const GET_ARTICLES = gql`
//   query GetArticles($limit: Int, $offset: Int) {
//     articles(limit: $limit, offset: $offset) {
//       id
//       title
//       description
//       createAt
//     }
//   }
// `;

// // Define the Article type
// type Article = {
//   id: string;
//   title: string;
//   description: string;
//   createAt: string;
// };

// const News: React.FC = () => {
//   const { t } = useTranslation('common');

//   // Fetch articles from the GraphQL API
//   const { loading, error, data } = useQuery(GET_ARTICLES, {
//     variables: { limit: 4, offset: 2 },
//   });

//   // Handle loading and error states
//   if (loading) return <p className='text-center'>Loading...</p>;
//   if (error) return <p className='text-center'>Error fetching articles: {error.message}</p>;

//   console.log(data);

//   return (
//     <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <h1 className="mt-16 text-4xl font-bold text-center py-12">{t('news.title')}</h1>
//       <p className="mb-8 text-center text-black">{t('news.latest_opportunity')}</p>

//       <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
//         {data.articles.map((article: Article) => (
//           <NewsCard
//             key={article.id}
//             itemKey={`newsCard.item${article.id}`}
//             date={new Date(article.createAt).toDateString()}
//             // Map the image based on article.id or other logic, using `src`
//             imageUrl={imageMap[article.id] || image4.src} 
//             title={article.title}
//             description={article.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;


// .......................................................................
// .......................................................................


'use client';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import NewsCard from '../components/NewsCard';
import { useTranslation } from 'react-i18next';
import { StaticImageData } from 'next/image';

// GraphQL query to fetch articles with image URLs
const GET_ARTICLES = gql`
  query GetArticles($limit: Int, $offset: Int) {
    articles(limit: $limit, offset: $offset) {
      id
      title
      description
      imageUrls  
      createAt
    }
  }
`;

// Define the Article type
type Article = {
  id: string;
  title: string;
  description: string;
  imageUrls: string; 
  createAt: string;
};

const News: React.FC = () => {
  const { t } = useTranslation('common');

  // Fetch articles from the GraphQL API
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: { limit: 4, offset: 2 },
  });

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center'>Error fetching articles: {error.message}</p>;

  console.log(data);

  return (
    <div className="mx-auto max-w-[1080px] sm:px-4 xs:px-4 md:mx-8 lg:px-16">
      <h1 className="mt-16 text-4xl font-bold text-center py-12">{t('news.title')}</h1>
      <p className="mb-8 text-center text-black">{t('news.latest_opportunity')}</p>

      <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
        {data.articles.map((article: Article) => (
          <NewsCard
            key={article.id}
            itemKey={`newsCard.item${article.id}`}
            date={new Date(article.createAt).toDateString()}
            imageUrl={article.imageUrls}  
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
