import React from 'react';
import Recommendation from '../components/Recommendation';
import recommendations from '../data/recommendations.json';
import AssistForm from "../components/AssistForm";
import  Footer  from '../components/Footer';
import { Navbar } from '../components/Navbar';

const AssistantApp: React.FC = () => {
  return (
    <>
                         {/* <Navbar /> */}
      <AssistForm />

      <div className="mx-auto py-8 lg:px-20 md:px-16 sm:px-2">
        <div className="mx-auto max-w-[1024px]">
          <h2 className="text-3xl font-bold mb-6">Recommendations</h2>
        </div>
        
        <div className="space-y-16">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="mx-auto max-w-[1024px]">
              <h1 className="text-2xl text-gray-500 font-bold py-8 ">{recommendation.title}</h1>
              <Recommendation
                title={recommendation.title}
                description={recommendation.description}
                imageUrl={recommendation.imageUrl}
                buttonLabel='view jobs'
              />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default AssistantApp;


// import React from 'react';
// import Recommendation from '../components/Recommendation';
// import recommendations from '../data/recommendations.json';
// import AssistForm from "../components/AssistForm";
// import Footer from '../components/Footer';
// import { Navbar } from '../components/Navbar';

// const AssistantApp: React.FC = () => {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <AssistForm />
//       <div className="mx-auto py-8 px-4 sm:px-6 lg:px-20">
//         <div className="mx-auto max-w-[1024px]">
//           <h2 className="text-3xl font-bold mb-6">Recommendations</h2>
//         </div>
        
//         <div className="space-y-16">
//           {recommendations.map((recommendation, index) => (
//             <div key={index} className="mx-auto max-w-[1024px]">
//               <h1 className="text-2xl text-gray-500 font-bold py-8">{recommendation.title}</h1>
//               <Recommendation
//                 title={recommendation.title}
//                 description={recommendation.description}
//                 imageUrl={recommendation.imageUrl}
//                 buttonLabel='view jobs'
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <Footer></Footer> */}
//     </>
//   );
// };

// export default AssistantApp;
