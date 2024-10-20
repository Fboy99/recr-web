// app/News/[id]/page.tsx
'use client';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'next/navigation'; // Import useParams

// GraphQL query to fetch an article by ID
const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($id: ID!) {
    articleById(id: $id) {
      id
      title
      description
      imageUrls
      createAt
    }
  }
`;

const ArticleDetail: React.FC = () => {
  const { id } = useParams(); // Get the article ID from route params
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id }, 
  });

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center'>Error fetching article: {error.message}</p>;

  const article = data.articleById; // Access the article directly

  return (
    <div className="mx-auto max-w-[1080px] sm:px-4 md:mx-8 lg:px-16">
      <h1 className="mt-16 text-4xl font-bold text-center">{article.title}</h1>
      <img src={article.imageUrls} alt={article.title} className="w-full h-auto" />
      <p className="mt-4 text-center">{new Date(article.createAt).toDateString()}</p>
      <p className="mt-4">{article.description}</p>
    </div>
  );
};

export default ArticleDetail;