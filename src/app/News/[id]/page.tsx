// // app/News/[id]/page.tsx

// 'use client';
// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import { useParams } from 'next/navigation';

// const GET_ARTICLE_BY_ID = gql`
//   query GetArticleById($id: ID!) {
//     articleById(id: $id) {
//       id
//       title
//       description
//       imageUrls
//       createAt
//     }
//   }
// `;

// const ArticleDetail: React.FC = () => {
//   const { id } = useParams();
//   console.log("Article ID from route params:", id); // Log the article id from params

//   const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
//     variables: { id }, 
//   });

//   console.log("GraphQL loading state for article:", loading); // Log loading state
//   console.log("GraphQL error for article:", error); // Log any errors
//   console.log("GraphQL data for article:", data); // Log the fetched article data

//   if (loading) return <p className='text-center'>Loading...</p>;
//   if (error) return <p className='text-center'>Error fetching article: {error.message}</p>;
  
//   if (!data || !data.articleById) {
//     return <p className='text-center'>Article not found.</p>;
//   }

//   const article = data.articleById;

//   return (
//     <div className="mx-auto max-w-[1080px] sm:px-4 md:mx-8 lg:px-16">
//       <h1 className="mt-16 text-4xl font-bold text-center">{article.title}</h1>
//       <img src={article.imageUrls} alt={article.title} className="w-full h-auto" />
//       <p className="mt-4 text-center">{new Date(article.createAt).toDateString()}</p>
//       <p className="mt-4">{article.description}</p>
//     </div>
//   );
// };

// export default ArticleDetail;

// 'use client';
// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import { useParams } from 'next/navigation';

// const GET_ARTICLE_BY_ID = gql`
//   query GetArticleById($id: ID!) {
//     articleById(id: $id) {
//       id
//       title
//       description
//       imageUrls
//       createAt
//     }
//   }
// `;

// const ArticleDetail: React.FC = () => {
//   const { id } = useParams();
//   console.log("Params:", useParams()); // Log all params
//   console.log("Article ID from route params:", id);

//   const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
//     variables: { id:`${id}` },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching article: {error.message}</p>;

//   if (!data || !data.articleById) {
//     return <p>Article not found.</p>;
//   }

//   const article = data.articleById;

//   return (
//     <div>
//       <h1>{article.title}</h1>
//       <img src={article.imageUrls} alt={article.title} />
//       <p>{new Date(article.createAt).toDateString()}</p>
//       <p>{article.description}</p>
//     </div>
//   );
// };

// export default ArticleDetail;




// 'use client';

// import React from 'react';
// import { useQuery, gql } from '@apollo/client';
// import { useRouter } from 'next/router';

// const GET_ARTICLE_BY_ID = gql`
//   query GetArticleById($id: ID!) {
//     articleById(id: $id) {
//       id
//       title
//       description
//       imageUrls
//       createAt
//     }
//   }
// `;

// const ArticleDetail: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query; // Extract 'id' from dynamic route
//   console.log('id',id);

//   const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
//     variables: { id: `${id}` },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching article: {error.message}</p>;

//   if (!data || !data.articleById) {
//     return <p>Article not found.</p>;
//   }

//   const article = data.articleById;

//   return (
//     <div>
//       <h1>{article.title}</h1>
//       <img src={article.imageUrls} alt={article.title} />
//       <p>{new Date(article.createAt).toDateString()}</p>
//       <p>{article.description}</p>
//     </div>
//   );
// };

// export default ArticleDetail;


import { useRouter } from 'next/router';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>; // To handle the initial undefined state of `id`
  }

  return (
    <div>
      <h1>Article {id}</h1>
      <p>This is the content of article {id}.</p>
    </div>
  );
};

export default ArticlePage;
