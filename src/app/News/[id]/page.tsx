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
// import { useRouter } from 'next/navigation';

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
//   const { id } = router.xxx; // Extract 'id' from dynamic route
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


'use client';

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'next/navigation';
import SectionHeader from '@/app/components/SectionHeader';

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
  const params = useParams();  // Use useParams to get dynamic route parameters
  const { id } = params;  // Extract 'id' from params

  console.log('id', id);

  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id: id ? String(id) : '' },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data || !data.articleById) return (
    <div className="my-16 bg-white text-[#181C20] pb-12 sm:px-4 xs:px-4 md:mx-8 lg:px-16">
      <div className="mx-auto py-12 max-w-[1080px] text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-lg text-gray-500 mb-8">It seems this article doesn't exist.</p>
      </div>
    </div>
  );

  const article = data.articleById;

  return (
    <div className="my-16 bg-white text-[#181C20] pb-12 sm:px-4 xs:px-4 md:mx-8 lg:px-16">
      <div className="mx-auto py-12 max-w-[1080px]">

        <SectionHeader title={article.title} paragraph={new Date(article.createAt).toDateString()} classAttribute=''></SectionHeader>

        <div className="flex flex-col items-center max-w-5xl">
          {/* Conditionally render the image or a small placeholder if the image URL is missing */}
          <div className="w-full mb-8 flex justify-center">
            {article.imageUrls ? (
              <img
                src={article.imageUrls}
                // alt={article.title}
                width={1040}
                height={720}
                className="rounded-[20px] text-center"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500"></span>
              </div>
            )}
          </div>

          <div className="w-full max-w-screen-md space-y-8">
            <div>
              <p className="text-[#181C20]-400 leading-relaxed pb-16 text-center">{article.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
