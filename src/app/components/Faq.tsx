"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from '../assets/Plus.svg';
import Image from "next/image";
import { useState } from "react";
import ToggleButton from "./Button/ToggleButton";
import faqData from "../data/faqs.json";  // Import JSON data directly
import arrow_down from '../assets/arrow_down.svg'
import { FaForwardFast } from "react-icons/fa6";

// Define the structure of each FAQ item
type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export default function Faq() {
  const [selectedTab, setSelectedTab] = useState("Candidates");

  // Use the imported faqData directly
  const items: FaqItem[] = faqData;

  return (
    <div className="flex flex-col items-center pt-4 sm:px-4 md:px-8">
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
          <button className="bg-[#E3F1FF] text-black py-2 px-6 rounded-full flex flex-row">
            View More 
            <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4752 14.475L7.8502 10.85C7.8002 10.8 7.7627 10.7458 7.7377 10.6875C7.7127 10.6292 7.7002 10.5667 7.7002 10.5C7.7002 10.3667 7.74603 10.25 7.8377 10.15C7.92936 10.05 8.0502 10 8.2002 10H15.8002C15.9502 10 16.071 10.05 16.1627 10.15C16.2544 10.25 16.3002 10.3667 16.3002 10.5C16.3002 10.5333 16.2502 10.65 16.1502 10.85L12.5252 14.475C12.4419 14.5583 12.3585 14.6167 12.2752 14.65C12.1919 14.6833 12.1002 14.7 12.0002 14.7C11.9002 14.7 11.8085 14.6833 11.7252 14.65C11.6419 14.6167 11.5585 14.5583 11.4752 14.475Z" fill="#42474E"/>
            </svg>
            </span>
            {/* <img src={'../assets/arrow_down.svg'} alt="Forward arrow" width="24" height="24" /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
