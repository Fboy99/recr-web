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
    <div className="container mx-auto py-8 px-20 max-w-[1024px]">
      <h1 className="text-3xl font-bold mb-4">Site Notice</h1>
      <p className="text-gray-600 mb-8">Last updated on {formattedDate}</p>
      
    </div>
  );
};

export default SiteNotice;
