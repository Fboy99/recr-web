// "use client";

// import * as Accordion from "@radix-ui/react-accordion";
// import Plus from "../../public/assets/Plus.svg";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import ToggleButton from "./Button/ToggleButton"; // Import the ToggleButton component

// export default function Faq() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTab, setSelectedTab] = useState("Candidates");

//   useEffect(() => {
//     fetch("data/faqs.json")
//       .then((response) => {
//         if (!response.ok) {
//           console.error("Response status:", response.status);
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setItems(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching FAQ data:", error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading FAQs: {error.message}</p>;

//   return (
//     <div className="flex flex-col items-center pt-4">
//       <h1 className="text-[#FFFFF] text-[32px] font-medium text-center">
//         Frequently Asked Questions
//       </h1>

//       <div className="flex my-4">
//         <ToggleButton
//           active={selectedTab === "Candidates"}
//           onClick={() => setSelectedTab("Candidates")}
//           label="Candidates"
//           isLeft={true}
//         />
//         <ToggleButton
//           active={selectedTab === "Employers"}
//           onClick={() => setSelectedTab("Employers")}
//           label="Employers"
//           isLeft={false}
//         />
//       </div>

//       <div className="w-full max-w-[1040px]">
//         <Accordion.Root
//           type="single"
//           defaultValue="item-1"
//           collapsible
//           className="flex flex-col gap-y-4"
//         >
//           {items
//             .filter((item) => item.category === selectedTab)
//             .map((item, index) => (
//               <div key={index}>
//                 <Accordion.Item
//                   value={`item-${index + 1}`}
//                   className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
//                 >
//                   <Accordion.Header>
//                     <Accordion.Trigger className="flex w-full items-center justify-between">
//                       <p className="text-left font-medium text-[#172026] lg:text-[18px]">
//                         {item.question}
//                       </p>
//                       <span>
//                         <Image
//                           src={Plus}
//                           alt="See more"
//                           className="h-10 w-10 lg:w-6 lg:h-6"
//                         />
//                       </span>
//                     </Accordion.Trigger>
//                   </Accordion.Header>

//                   <Accordion.Content>
//                     <p className="pt-2 text-[#36485C]">{item.answer}</p>
//                   </Accordion.Content>
//                 </Accordion.Item>
//               </div>
//             ))}
//         </Accordion.Root>
//         <div className="flex justify-center mt-4">
//           <button className="bg-[#E3F1FF] text-black py-2 px-6 rounded-full">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ToggleButton from "./Button/ToggleButton"; // Import the ToggleButton component

// Define the structure of each FAQ item
type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export default function Faq() {
  const [items, setItems] = useState<FaqItem[]>([]); // Use the FaqItem type for the state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedTab, setSelectedTab] = useState("Candidates");

  useEffect(() => {
    fetch("data/faqs.json")
      .then((response) => {
        if (!response.ok) {
          console.error("Response status:", response.status);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: FaqItem[]) => { // Explicitly type the data
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading FAQs: {error.message}</p>;

  return (
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-[#FFFFF] text-[32px] font-medium text-center">
        Frequently Asked Questions
      </h1>

      <div className="flex my-4">
        <ToggleButton
          active={selectedTab === "Candidates"}
          onClick={() => setSelectedTab("Candidates")}
          label="Candidates"
          isLeft={true}
        />
        <ToggleButton
          active={selectedTab === "Employers"}
          onClick={() => setSelectedTab("Employers")}
          label="Employers"
          isLeft={false}
        />
      </div>

      <div className="w-full max-w-[1040px]">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items
            .filter((item) => item.category === selectedTab)
            .map((item, index) => (
              <div key={index}>
                <Accordion.Item
                  value={`item-${index + 1}`}
                  className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between">
                      <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                        {item.question}
                      </p>
                      <span>
                        <Image
                          src={Plus}
                          alt="See more"
                          className="h-10 w-10 lg:w-6 lg:h-6"
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content>
                    <p className="pt-2 text-[#36485C]">{item.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
        </Accordion.Root>
        <div className="flex justify-center mt-4">
          <button className="bg-[#E3F1FF] text-black py-2 px-6 rounded-full">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
