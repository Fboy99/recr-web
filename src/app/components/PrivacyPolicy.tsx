import React from 'react';

const PrivacyPolicy: React.FC = () => {
  // Get the current date
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;

  return (
    <div className="container mx-auto py-8 px-20 max-w-[1024px]">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated on {formattedDate}</p>
      
      <h2 className="text-2xl font-bold mb-4">1. An overview of data protection</h2>
      <h3 className="text-xl font-bold mb-2">General information</h3>
      <p className="mb-4">
        The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit
        this website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the
        subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
      </p>
      
      <h3 className="text-xl font-bold mb-2">Data recording on this website</h3>
      <p className="mb-4">
        The Opportunity Card offers potential workers from non-EU countries an easier way to enter the country than was previously the case.
        Complicated residence and employment applications are no longer necessary. Using the points system, applicants can easily and quickly
        prove that they meet the necessary requirements. They can apply via the local Foreigners’ Registration Office or at the competent German
        mission abroad in their country of origin. Skilled workers with a recognised training qualification receive the Opportunity Card
        immediately.
      </p>

      {/* Placeholder text to replace the rest of the long content */}
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel dolor quis orci pharetra ultricies. Quisque ac velit a urna
        bibendum tristique. Nulla facilisi. Donec ac leo vitae arcu suscipit aliquam. Suspendisse potenti. Praesent eget eros vel odio
        accumsan malesuada. Integer id lectus eu ligula volutpat aliquet. Fusce venenatis libero id felis consectetur, at luctus erat dapibus.
        Suspendisse nec diam turpis. Cras vel massa lectus. Aenean interdum, arcu non vulputate consectetur, nisl ante euismod neque, ac
        vehicula sapien est a libero.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel dolor quis orci pharetra ultricies. Quisque ac velit a urna
        bibendum tristique. Nulla facilisi. Donec ac leo vitae arcu suscipit aliquam. Suspendisse potenti. Praesent eget eros vel odio
        accumsan malesuada. Integer id lectus eu ligula volutpat aliquet. Fusce venenatis libero id felis consectetur, at luctus erat dapibus.
        Suspendisse nec diam turpis. Cras vel massa lectus. Aenean interdum, arcu non vulputate consectetur, nisl ante euismod neque, ac
        vehicula sapien est a libero.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel dolor quis orci pharetra ultricies. Quisque ac velit a urna
        bibendum tristique. Nulla facilisi. Donec ac leo vitae arcu suscipit aliquam. Suspendisse potenti. Praesent eget eros vel odio
        accumsan malesuada. Integer id lectus eu ligula volutpat aliquet. Fusce venenatis libero id felis consectetur, at luctus erat dapibus.
        Suspendisse nec diam turpis. Cras vel massa lectus. Aenean interdum, arcu non vulputate consectetur, nisl ante euismod neque, ac
        vehicula sapien est a libero.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
