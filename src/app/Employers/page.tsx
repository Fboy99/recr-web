import Image from 'next/image';
// import { Features } from '../components/Features';
import InfoBlockWithIcons from '../components/InfoBlockWithIcons';
import { FaHome, FaMoneyBillWave, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
// import  Footer  from '../components/Footer';
import Faq from '../components/Faq';
import AssistForm from '../components/AssistForm';
// import { Navbar } from '../components/Navbar';
import img5 from "../assets/image5.jpeg"

const Employers: React.FC = () => {
  const infoBlocks = [
    {
      icon: <FaHome size={36} />,
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit. Donec euismod, nisl eget ultricies tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa.'
    },
    {
      icon: <FaMoneyBillWave size={36} />,
      title: 'Consectetur adipiscing elit',
      description: 'Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit. Donec euismod, nisl eget ultricies tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa.'
    },
    {
      icon: <FaCheckCircle size={36} />,
      title: 'Sed pretium, ligula in aliquam',
      description: 'Tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit. Donec euismod, nisl eget ultricies tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa.'
    },
    {
      icon: <FaBriefcase size={36} />,
      title: 'Donec euismod, nisl eget ultricies',
      description: 'Tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa. Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit.'
    },
    {
      icon: <FaBriefcase size={36} />,
      title: 'Donec euismod, nisl eget ultricies',
      description: 'Tincidunt, nisl nisl aliquam massa, nisl nisl aliquam massa. Sed pretium, ligula in aliquam tincidunt, nisl nisl aliquam massa, eu sollicitudin felis nisl eget velit.'
    },

  ];

  return (

    <div className="my-16 bg-white text-black pb-12">
          {/* <Navbar /> */}
      <div className=" mx-auto px-6 lg:px-16 py-12 max-w-[1080px]">
        <div className="w-full max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">Employers</h1>
          <p className="text-center text-black mb-12">Why we care about the opportunity card</p>

          <div className="flex flex-col items-center">
            <div className="w-full mb-8 flex justify-center">
              <Image
                src={img5}
                alt="About us"
                width={1080}
                height={800}
                className="rounded-[20px]"
              />
            </div>

{/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */}
            <div className="w-full text-center space-y-8">
      
              {/* <Features /> */}
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
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
        </div>
      </div>

      <div>
      <Faq/>
      <AssistForm/>
      {/* <Footer/> */}
      </div>

    </div>
    
  );
};

export default Employers;


