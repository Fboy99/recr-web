// // import React from 'react';
// // import SectionHeader from '../components/SectionHeader';
// // import { useTranslation } from 'react-i18next';

// // const PrivacyPolicy: React.FC = () => {
// //   const { t } = useTranslation("common");

// //   const currentDate = new Date();
// //   const formattedDate = currentDate.toLocaleDateString('en-US', {
// //     year: 'numeric',
// //     month: 'long',
// //     day: 'numeric',
// //   });

// //   return (
// //     <div className=" font-roboto my-16 mx-auto pb-10 sm:px-4 xs:px-4 md:mx-8 lg:px-16">
// //       <SectionHeader 
// //         title={t("privacyPolicy.title")} 
// //         paragraph={`${("privacyPolicy.lastUpdate")} ${formattedDate}`} 
// //       /> 

// //       <div className=" font-roboto max-w-5xl mx-auto py-12">
// //         <h2 className=" font-roboto text-2xl font-bold mb-8">1. An overview of data protection</h2>
// //         <h3 className=" font-roboto text-xl font-bold mb-2">General information</h3>
// //         <p className="text-[#42474E] font-roboto mb-8">The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term "personal data" comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
// //         </p>
        
// //         <h3 className=" font-roboto text-xl font-bold mb-2">Data recording on this website</h3>
// //         <p className="text-[#42474E] font-roboto mb-8">
// //         The Opportunity Card offers potential workers from non-EU countries an easier way to enter the country than was previously the case. Complicated residence and employment applications are no longer necessary. Using the points system, applicants can easily and quickly prove that they meet the necessary requirements. They can apply via the local Foreigners' Registration Office or at the competent German mission abroad in their country of origin. Skilled workers with a recognised training qualification receive the Opportunity Card immediately.
// //         </p>
// //         <h4 className=" font-roboto text-base font-bold mb-2">Who is the responsible party for the recording of data on this website (i.e., the "controller")?</h4>
// //         <p className="text-[#42474E] font-roboto mb-8">
// //         The data on this website is processed by the operator of the website, whose contact information is available under section "Information about the responsible party (referred to as the "controller" in the GDPR)" in this Privacy Policy.
// //         </p>

// //         <h3 className=" font-roboto text-base font-bold mb-2">How do we record your data?</h3>
// //         <p className="text-[#42474E] font-roboto mb-8">
// //         We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form. Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.        </p>


// //         <h3 className=" font-roboto text-base font-bold mb-2">What are the purposes we use your data for?</h3>
// //         <p className="text-[#42474E] font-roboto mb-8">
// //         A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns. 
// //                </p>


// //                <h3 className=" font-roboto text-base font-bold mb-2">What are the purposes we use your data for?</h3>
// //         <p className="text-[#42474E] font-roboto mb-8">
// //         A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns. 
// //                </p>



// //                <h3 className=" font-roboto text-base font-bold mb-2">
// //                 What rights do you have as far as your information is concerned?
// //                 </h3>
// //         <p className="text-[#42474E] font-roboto mb-8">
// //         You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.
// //         Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.
// //                        </p>



// //                        <h3 className=" font-roboto text-base font-bold mb-2">
// //                        Analysis tools and tools provided by third parties                </h3>
// //         <p className="text-[#42474E] font-roboto mb-8">

// //         There is a possibility that your browsing patterns will be statistically analyzed when your visit this website. Such analyses are performed primarily with what we refer to as analysis programs.
// // For detailed information about these analysis programs please consult our Data Protection Declaration below.
// //         </p>

        
// //       </div>
// //     </div>
// //   );
// // };

// // export default PrivacyPolicy;



// import React from 'react';
// import SectionHeader from '../components/SectionHeader';
// import { useTranslation } from 'react-i18next';

// const PrivacyPolicy: React.FC = () => {
//   const { t } = useTranslation("common");

//   const currentDate = new Date();
//   const formattedDate = currentDate.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });

//   return (
//     <div className=" font-roboto my-16 mx-auto pb-10 sm:px-4 xs:px-4 md:mx-8 lg:px-16">
//       <SectionHeader 
//         title={t("privacyPolicy.title")} 
//         paragraph={`${t("privacyPolicy.lastUpdate")} ${formattedDate}`} 
//       /> 

//       <div className=" font-roboto max-w-5xl mx-auto py-12">
//         <h2 className=" font-roboto text-2xl font-bold mb-8">1. An overview of data protection</h2>
//         <h3 className=" font-roboto text-xl font-bold mb-2">General information</h3>
//         <p className="text-[#42474E] font-roboto mb-8">The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term `personal data` comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
//         </p>
        
//         <h3 className=" font-roboto text-xl font-bold mb-2">Data recording on this website</h3>
//         <p className="text-[#42474E] font-roboto mb-8">
//         The Opportunity Card offers potential workers from non-EU countries an easier way to enter the country than was previously the case. Complicated residence and employment applications are no longer necessary. Using the points system, applicants can easily and quickly prove that they meet the necessary requirements. They can apply via the local Foreigners' Registration Office or at the competent German mission abroad in their country of origin. Skilled workers with a recognised training qualification receive the Opportunity Card immediately.
//         </p>
//         <h4 className=" font-roboto text-base font-bold mb-2">Who is the responsible party for the recording of data on this website (i.e., the `controller`)?</h4>
//         <p className="text-[#42474E] font-roboto mb-8">
//         The data on this website is processed by the operator of the website, whose contact information is available under section `Information about the responsible party (referred to as the `controller` in the GDPR)` in this Privacy Policy.
//         </p>

//         <h3 className=" font-roboto text-base font-bold mb-2">How do we record your data?</h3>
//         <p className="text-[#42474E] font-roboto mb-8">
//         We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form. Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
//         </p>

//         <h3 className=" font-roboto text-base font-bold mb-2">What are the purposes we use your data for?</h3>
//         <p className="text-[#42474E] font-roboto mb-8">
//         A portion of the information is generated to guarantee the error-free provision of the website. Other data may be used to analyze your user patterns.
//         </p>

//         <h3 className=" font-roboto text-base font-bold mb-2">
//           What rights do you have as far as your information is concerned?
//         </h3>
//         <p className="text-[#42474E] font-roboto mb-8">
//         You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.
//         Please do not hesitate to contact us at any time if you have questions about this or any other data protection-related issues.
//         </p>

//         <h3 className=" font-roboto text-base font-bold mb-2">
//           Analysis tools and tools provided by third parties
//         </h3>
//         <p className="text-[#42474E] font-roboto mb-8">
//         There is a possibility that your browsing patterns will be statistically analyzed when you visit this website. Such analyses are performed primarily with what we refer to as analysis programs.
//         For detailed information about these analysis programs, please consult our Data Protection Declaration below.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React from 'react';
import SectionHeader from '../components/SectionHeader';
// import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  // const { t } = useTranslation("common");

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className=" font-roboto my-16 mx-auto pb-10 sm:px-4 xs:px-4 md:mx-8 lg:px-16">
      <SectionHeader 
        title={("privacyPolicy.title")} 
        paragraph={`${("privacyPolicy.lastUpdate")} ${formattedDate}`} 
      /> 

      <div className=" font-roboto max-w-5xl mx-auto py-12">
        <h2 className=" font-roboto text-2xl font-bold mb-8">1. An overview of data protection</h2>
        {/* <h3 className=" font-roboto text-xl font-bold mb-2">General information</h3>
        <p className="text-[#42474E] font-roboto mb-8">The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term personal data comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
        </p>
        
        <h3 className=" font-roboto text-xl font-bold mb-2">Data recording on this website</h3>
        <p className="text-[#42474E] font-roboto mb-8">
        The Opportunity Card offers potential workers from non-EU countries an easier way to enter the country than was previously the case. Complicated residence and employment applications are no longer necessary. Using the points system, applicants can easily and quickly prove that they meet the necessary requirements. They can apply via the local Foreigners Registration Office or at the competent German mission abroad in their country of origin. Skilled workers with a recognised training qualification receive the Opportunity Card immediately.
        </p>
        <h4 className=" font-roboto text-base font-bold mb-2">Who is the responsible party for the recording of data on this website (i.e., the controller)?</h4>
        <p className="text-[#42474E] font-roboto mb-8">
        The data on this website is processed by the operator of the website, whose contact information is available under section Information about the responsible party (referred to as the controller in the GDPR) in this Privacy Policy.
        </p>

        <h3 className=" font-roboto text-base font-bold mb-2">How do we record your data?</h3>
        <p className="text-[#42474E] font-roboto mb-8">
        We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form. Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
        </p>

        <h3 className=" font-roboto text-base font-bold mb-2">What are the purposes we use your data for?</h3>
        <p className="text-[#42474E] font-roboto mb-8">
        A portion of the information is generated to guarantee the error-free provision of the website. Other data may be used to analyze your user patterns.
        </p>

        <h3 className=" font-roboto text-base font-bold mb-2">
          What rights do you have as far as your information is concerned?
        </h3>
        <p className="text-[#42474E] font-roboto mb-8">
        You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.
        Please do not hesitate to contact us at any time if you have questions about this or any other data protection-related issues.
        </p>

        <h3 className=" font-roboto text-base font-bold mb-2">
          Analysis tools and tools provided by third parties
        </h3>
        <p className="text-[#42474E] font-roboto mb-8">
        There is a possibility that your browsing patterns will be statistically analyzed when you visit this website. Such analyses are performed primarily with what we refer to as analysis programs.
        For detailed information about these analysis programs, please consult our Data Protection Declaration below.
        </p> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
