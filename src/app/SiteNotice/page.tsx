import React from 'react';

const SiteNotice: React.FC = () => {
  // Get the current date
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;

  return (
    // <div className="container mx-auto py-8 px-20 max-w-[1024px]">
    //   <h1 className="text-3xl font-bold mb-4">Site Notice</h1>
    //   <p className="text-gray-600 mb-8">Last updated on {formattedDate}</p>
    <div className="my-16 mx-auto pb-10 sm:px-4 xs:px-8 md:mx-8">
    <div className="max-w-5xl mx-auto py-12">
     <h1 className="text-4xl font-bold text-center my-8">Site Notice</h1> 
      <p className="text-center text-lg mb-16">Last updated on {formattedDate}</p> 

      
    </div>
    </div>
  );
};

export default SiteNotice;
