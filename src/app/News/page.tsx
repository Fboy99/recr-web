import React from 'react';
import NewsCard from '../components/NewsCard';

import  Footer  from '../components/Footer';

import { Navbar } from '../components/Navbar';

interface NewsItem {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const newsData: NewsItem[] = [
  {
    title: 'Declaration of commitment for the Chancenkarte',
    date: '13 June, 2024',
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
    imageUrl: '../assets/image5.jpeg'
  },
  {
    title: 'How to Write a Winning Motivational Letter for Your Chancenkarte Application',
    date: '21 May, 2024',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
    imageUrl: '../assets/image4.jpeg'
  },
  {
    title: 'How to secure your German Blocked Account for your German visa',
    date: '17 April, 2024',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,",
    imageUrl: '../assets/image7.jpeg'
  },
  {
    title: 'How to apply for an Opportunity Card Extension',
    date: '5 November, 2023',
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus modi perferendis quos aperiam quae sint ducimus veritatis! Qui nobis, iure excepturi quam ut alias sit, sint delectus aut, quisquam quod.,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reiciendis repudiandae esse voluptatibus explicabo totam, vero excepturi ipsam optio rerum ipsa maiores voluptates? Nulla animi tenetur sint illum minus eius!",
    imageUrl: '../assets/image9.jpeg'
  },
];

const News: React.FC = () => {
  return (
    <div>
        <Navbar />
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-center mb-2 py-12">News</h1>
        <p className="text-center text-black mb-12">Learn all the latest about the opportunity card</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-56">
        {newsData.map((newsItem, index) => (
          <NewsCard
            key={index}
            title={newsItem.title}
            date={newsItem.date}
            description={newsItem.description}
            imageUrl={newsItem.imageUrl}
          />
        ))}
      </div>


    </div>
    <Footer/>

    </div>

  );
};

export default News;
