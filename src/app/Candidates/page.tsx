// import React from 'react';
// import Image from 'next/image';
// import InfoBlockWithIcons from '../components/InfoBlockWithIcons';
// import { FaHome, FaMoneyBillWave, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
// import ImgFeature from '../components/FeatureImg';
// import Faq from '../components/Faq';
// import Footer from '../components/Footer'
// import SectionBanner from '../components/SectionBanner';
// import FeatureIcon from '../components/FeatureIcon';
// import { Navbar } from '../components/Navbar';
// import img10 from "../assets/image10.jpeg"
// // import Footer from '../components/Footer';



// const Candidates: React.FC = () => {
//   const infoBlocks = [
//     {
//       icon: <FaHome size={24} />,
//       title: 'Lorem ipsum dolor sit amet',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit. Donec euismod, nisl eget ultricies tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa.'
//     },
//     {
//       icon: <FaMoneyBillWave size={24} />,
//       title: 'Consectetur adipiscing elit',
//       description: 'Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit. Donec euismod, nisl eget ultricies tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa.'
//     },
//     {
//       icon: <FaCheckCircle size={24} />,
//       title: 'Sed pretium, ligula in aliquam',
//       description: 'Tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit. Donec euismod, nisl eget ultricies tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa.'
//     },
//     {
//       icon: <FaBriefcase size={24} />,
//       title: 'Donec euismod, nisl eget ultricies',
//       description: 'Tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa. Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit.'
//     }
//   ];

//   return (
//     <>
//     {/* <Navbar /> */}
//     <div className="my-16 mx-auto  pb-10">
                        
//       <div className="max-w-[1080px] mx-auto py-12">
//         <h1 className="text-4xl font-bold text-center mb-8">Candidates</h1>
//         <p className="text-center text-lg mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

//         <div className="w-full mb-8 flex justify-center ">
//           <Image
//             src={img10}
//             alt="About us"
//             width={1080}
//             height={800}
//             className="rounded-[20px] max-w-[1080px]"
//           />
//         </div>

//         <div>
//           <h2 className="text-2xl font-bold mb-6">Advantages for Candidates</h2>
//           <FeatureIcon />

//         </div>

//         {/* <SectionBanner
//         title="Opportunity Card Germany"
//         className="w-[1040px] h-[256px] px-[96px] py-[48px]"
//       /> */}

//       {/* Existing Content */}
//       <div className="flex flex-col gap-x-6 sm:flex-row-reverse gap-y-[48px] items-center justify-center">
//         <div className="sm:w-1/2 lg:py-[32px] lg:pr-[32px] flex flex-col">
//           <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[24px] lg:leading-[36px]">
//           Advantages for applicants from non-EU countries
//           </h1>
//           <p className="py-[24px] text-[#36485C] lg:text-[18px]">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam eos similique debitis mollitia quaerat rem nihil quas? Laboriosam est cumque repellendus eaque illum itaque eos velit reprehenderit consequuntur at.
//             Quis vitae quibusdam explicabo,
//           </p>
//         </div>
//       </div>
        
//         {/* <Features /> */}
//       <div className="space-y-12">
//         <div className=''>
//       <ImgFeature
//         title="Working with the opportunity card in Germany"
//         imageSrc="/assets/image3.jpeg"
//         imageAlt="Feature 3 image"
//         text1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quasi quae eligendi, quis a vitae rerum, amet atque illo ut repellat dicta voluptatem officiis enim qui laudantium aliquam sequi ad?"
//         text2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quasi quae eligendi, quis a vitae rerum, amet atque illo ut repellat dicta voluptatem officiis enim qui laudantium aliquam sequi ad?"
//         imageLeft={true} // Image on the left, text on the right
//       />
//       </div>

//       <div className=''>

//       <ImgFeature
//         title="You must meet these basic requirements"
//         imageSrc="/assets/image9.jpeg"
//         imageAlt="Feature 4 image"
//         text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat architecto, unde nemo asperiores laboriosam voluptates ducimus maiores vel dolor beatae repudiandae neque ut, corrupti magnam deleniti exercitationem, aut vitae!"
//         text2="Lorem adipisicing elit. Voluptatem repellat architecto, unde nemo asperiores laboriosam voluptates ducimus maiores vel dolor beatae repudiandae neque ut, corrupti magnam deleniti exercitationem, aut vitae!"
//         imageLeft={false} // Image on the right, text on the left
//       />

              
// </div>
//     </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
//           {infoBlocks.map((block, index) => (
//             <InfoBlockWithIcons
//               key={index}
//               icon={block.icon}
//               title={block.title}
//               description={block.description}
//             />
//           ))}
//         </div>

//         <div className='grid grid-col-1 '>
//         <h2 className="text-2xl font-semibold mt-16 mb-4 ">Conclusion</h2>
//         <p className="pb-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat architecto, unde nemo asperiores laboriosam voluptates ducimus maiores vel dolor beatae repudiandae neque ut, corrupti magnam deleniti exercitationem, aut vitae!
//           Minima possimus nostrum cum, corporis dolores nisi rerum suscipit laudantium recusandae facilis labore optio repellat accusamus facere omnis rem nemo laborum delectus hic quidem commodi! Provident alias distinctio ullam sapiente.
            
//         </p>

//         <p className="pb-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat architecto, unde nemo asperiores laboriosam voluptates ducimus maiores vel dolor beatae repudiandae neque ut, corrupti magnam deleniti exercitationem, aut vitae!
//           Minima possimus nostrum cum, corporis dolores nisi rerum suscipit laudantium recusandae facilis labore optio repellat accusamus facere omnis rem nemo laborum delectus hic quidem commodi! Provident alias distinctio ullam sapiente.
            
//         </p>

//         <p className="pb-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat architecto, unde nemo asperiores laboriosam voluptates ducimus maiores vel dolor beatae repudiandae neque ut, corrupti magnam deleniti exercitationem, aut vitae!
//           Voluptate commodi possimus blanditiis ducimus magni vitae doloribus sint sunt, illum, temporibus enim, quia nisi non ipsam labore! Eum nesciunt laudantium dolorem fuga alias maxime dolore voluptatibus omnis exercitationem recusandae!
            
//         </p>

//         {/* <p className="pb-4">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat architecto, unde nemo asperiores laboriosam voluptates ducimus maiores vel dolor beatae repudiandae neque ut, corrupti magnam deleniti exercitationem, aut vitae!
//           Minima possimus nostrum cum, corporis dolores nisi rerum suscipit laudantium recusandae facilis labore optio repellat accusamus facere omnis rem nemo laborum delectus hic quidem commodi! Provident alias distinctio ullam sapiente.
//           Voluptate commodi possimus blanditiis ducimus magni vitae doloribus sint sunt, illum, temporibus enim, quia nisi non ipsam labore! Eum nesciunt laudantium dolorem fuga alias maxime dolore voluptatibus omnis exercitationem recusandae!
            
//         </p> */}

//         </div>

//         <div className='px-[20px] lg:container lg:px-20 mx-auto'>
//         </div>

//       </div>
//     </div>
//     <Faq/>

//     {/* <Footer/> */}
//     </>
//   );
// };

// export default Candidates;

import React from 'react';
import Image from 'next/image';
import InfoBlockWithIcons from '../components/InfoBlockWithIcons';
import { FaHome, FaMoneyBillWave, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import ImgFeature from '../components/FeatureImg';
import Faq from '../components/Faq';
// import Footer from '../components/Footer';
import FeatureIcon from '../components/FeatureIcon';
// import { Navbar } from '../components/Navbar';
import img10 from "../assets/image10.jpeg";
import img3 from "../assets/image3.jpeg";
import img5 from "../assets/image5.jpeg";

const Candidates: React.FC = () => {
  const infoBlocks = [
    {
      icon: <FaHome size={48} />,
      title: 'Lorem ipsum dolor sit amet',
      description: 'Are you looking urgently for a qualified skilled worker but can’t find one? With the Opportunity Card, this can change quickly as the applicant pool is significantly expanded through the new residence permit for persons from non-EU countries. Lengthy approval procedures are greatly simplified so that applicants can look for meaningful employment from day one.'
    },
    {
      icon: <FaMoneyBillWave size={48} />,
      title: 'Consectetur adipiscing elit',
      description: 'Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa.'
    },
    {
      icon: <FaCheckCircle size={48} />,
      title: 'Sed pretium, ligula in aliquam',
      description: 'Tincidunt, nisl nisl aliquam massa, eu sollicitudin felis.'
    },
    {
      icon: <FaBriefcase size={48} />,
      title: 'Donec euismod, nisl eget ultricies',
      description: 'Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa.'
    }
  ];

  return (
      <div className="my-16 mx-auto pb-10 sm:px-4 xs:px-8 md:mx-8">
        <div className="max-w-5xl mx-auto py-12">
         <h1 className="text-4xl font-bold text-center my-8">Candidates</h1> 
          <p className="text-center text-lg mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 


          <div className="flex justify-center mb-8">
            <Image
              src={img10}
              alt="About us"
              width={1080}
              height={800}
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          

          <div className=" mt-12 ">

          <h2 className="text-2xl font-bold mb-6 sm:text-left">Advantages for Candidates</h2>
          <div className="flex flex-col lg:flex-row-reverse gap-8 mt-12">
  <div className="w-full lg:w-1/2">
    {/* <h1 className="pt-2 text-2xl font-medium text-gray-800">
      Advantages for applicants from non-EU countries
    </h1> */}
    <p className="py-6 text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam eos similique debitis mollitia quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusamus dignissimos aspernatur illum dolore quis delectus ab eligendi iste molestias tempora porro numquam mollitia, suscipit repudiandae nemo, error quaerat iusto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam soluta distinctio illum, quidem nemo sed dicta saepe, ad veritatis tenetur eveniet obcaecati! Consequatur voluptatem totam iure cupiditate, autem quos aliquid.
    </p>
    </div>
    <div className="w-full lg:w-1/2">
    <FeatureIcon />
    </div>
  
</div>

</div>


          <div className="space-y-12 mt-12 ">
            <ImgFeature
              title="Working with the opportunity card in Germany"
              imageSrc={img3.src}
              imageAlt="Feature 3 image"
              text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum eveniet maxime, inventore temporibus sed repellendus ducimus laudantium fugiat placeat. Velit, cupiditate delectus iusto deserunt iure reiciendis doloribus animi voluptatibus?"
              text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum eveniet maxime, inventore temporibus sed repellendus ducimus laudantium fugiat placeat. Velit, cupiditate delectus iusto deserunt iure reiciendis doloribus animi voluptatibus?"
              imageLeft={true}
            />
            <ImgFeature
              title="You must meet these basic requirements"
              imageSrc={img5.src}
              imageAlt="Feature 4 image"
              text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum eveniet maxime, inventore temporibus sed repellendus ducimus laudantium fugiat placeat. Velit, cupiditate delectus iusto deserunt iure reiciendis doloribus animi voluptatibus?"
              text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum eveniet maxime, inventore temporibus sed repellendus ducimus laudantium fugiat placeat. Velit, cupiditate delectus iusto deserunt iure reiciendis doloribus animi voluptatibus?"
              imageLeft={false}
            />
          </div>

          <div className="mx-auto ">
          <h1 className="text-[36px] sm:text-[25px] xs:text-[23px] md:text-[28px] font-semibold text-center text-[#181C20] mb-6 mt-8">Key advantages of the Opportunity Card</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 sm:gap-4 xs:gap-2 md:gap-8 mt-16 ">

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

          <div className="mt-16 ">
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="pb-4">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas minus beatae quisquam quae, exercitationem aliquid laudantium eos? Quisquam pariatur accusantium nam itaque nisi. Enim, facilis consequatur! Dolore cupiditate architecto aliquam.            </p>
            <p className="pb-4">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores deleniti sapiente quaerat accusantium iure nemo recusandae voluptatum ullam earum facilis facere dicta. Sed quia beatae officia voluptatibus! Molestiae, doloremque? adipisicing elit. Voluptate commodi possimus blanditiis.
            </p>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt laudantium dolorem fuga alias.
            </p>
          </div>
        </div>
        <Faq />
      </div>


  );
};

export default Candidates;