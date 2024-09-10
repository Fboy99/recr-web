'use client'
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Radio,
  Button,
} from "@material-tailwind/react";

// const ApplicationAssistant = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionChange = (value) => {
//     setSelectedOption(value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <Typography variant="h3" color="blue-gray" className="mb-2">
//         Application Assistant
//       </Typography>
//       <Typography variant="paragraph" color="gray" className="mb-8">
//         Your personal assistant on the way to the Opportunity Card
//       </Typography>
      
//       <Card className="w-full max-w-[800px] shadow-lg">
//         <CardBody className="flex flex-col">
//           <Typography variant="small" color="blue-gray" className="mb-2">
//             Question 3 of 17
//           </Typography>
//           <Typography variant="h5" color="blue-gray" className="mb-4">
//             Do you have a qualification that required at least 2 years to complete?
//           </Typography>
          
//           <div className="border-t border-b border-blue-gray-100 py-4 mb-4">
//             <Radio
//               name="qualification"
//               label="A. Yes, I hold a professional qualification (vocational training)"
//               onChange={() => handleOptionChange('professional')}
//               className="mb-2"
//             />
//             <Radio
//               name="qualification"
//               label="B. Yes, I have a university degree"
//               onChange={() => handleOptionChange('university')}
//               defaultChecked
//               className="mb-2"
//             />
//             <Radio
//               name="qualification"
//               label="C. Yes, I have an appropriate qualification from a German Chamber of Commerce abroad"
//               onChange={() => handleOptionChange('german-chamber')}
//               className="mb-2"
//             />
//             <Radio
//               name="qualification"
//               label="D. No, I do not have any formal professional qualifications"
//               onChange={() => handleOptionChange('no-qualification')}
//             />
//           </div>
//         </CardBody>
        
//         <CardFooter className="pt-0 flex justify-between">
//           <Button 
//             variant="outlined"
//             color="blue-gray"
//             size="sm"
//           >
//             Back
//           </Button>
//           <Button 
//             variant="filled"
//             color="blue"
//             size="sm"
//           >
//             Next
//           </Button>
//         </CardFooter>
//       </Card>
      
     
//     </div>
//   );
// };

// export default ApplicationAssistant;


