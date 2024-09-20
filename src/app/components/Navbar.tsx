// "use client";

// import { useState } from 'react';
// import Image, { StaticImageData } from "next/image";
// import Link from 'next/link';
// import Logo from "../assets//Logo.svg";
// import Menu from "../assets//Menu.svg";
// import Icon from "../assets//france.png"; 
// import Icon2 from "../assets//germany.png"; 
// import Icon3 from "../assets//england.png"; 

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Candidates", path: "/Candidates" },
//   { name: "Employers", path: "/Employers" },
//   { name: "About Us", path: "/About-Us" },
//   { name: "News", path: "/News" },
//   { name: "Application Assistant", path: "/Application-Assistant" },
//   { name: "Test Page", path: "/TestPage" },
// ];

// const languages = [
//   { name: "French", flag: Icon },
//   { name: "German", flag: Icon2 },
//   { name: "England", flag: Icon3 },


// ];

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState(""); // Track the active link
//   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Set French as default language

//   const handleLinkClick = (name: string) => {
//     setActiveLink(name); // Update the active link when clicked
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown menu
//   };

//   const handleLanguageChange = (lang: { name: string; flag: StaticImageData }) => {
//     setSelectedLanguage(lang); // Update the selected language
//     toggleDropdown(); // Close the dropdown menu
//   };

//   return (
//     <nav className="absolute z-40 flex w-full px-5 py-4 items-center justify-between">
//       {/* Left Block: Logo and Name (Clickable to go to Home Page) */}
//       <div className="flex items-center">
//         <Link href="/" className="flex items-center hover:no-underline" onClick={() => handleLinkClick("")}>
//           <Image src={Logo} alt="Logo" width={24} height={24} />
//           <h1 className="ml-2 text-xl font-bold text-black">Logoipsum</h1>
//         </Link>
//       </div>

//       {/* Center Block: Navigation Links (Centered) */}
//       <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
//         <div className="flex gap-x-14">
//           {navLinks.map((item, index) => (
//             <Link
//               href={item.path}
//               key={index}
//               className={`text-base font-medium hover:no-underline ${
//                 activeLink === item.name ? "text-blue-600" : "text-black"
//               }`}
//               onClick={() => handleLinkClick(item.name)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Right Block: Icons and Menu Button */}
//       <div className="flex items-center gap-x-5 ml-auto relative">
//         {/* Language Dropdown Icon */}
//         <div className="relative">
//           <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
//             <Image src={selectedLanguage.flag} alt="Language Icon" width={24} height={24} />
//           </button>

//           {/* Dropdown Menu */}
//           {isDropdownOpen && (
//             <div className="absolute top-full right-2 mt-2 bg-white shadow-md rounded-md z-20">
//               {languages.map((lang, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center py-2 pl-2 pr-8 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageChange(lang)} // Change language on click
//                 >
//                   <Image src={lang.flag} alt={lang.name} width={20} height={20} />
//                   <span className="ml-2 text-sm text-black">{lang.name}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Menu Button (Visible on small screens) */}
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
//           <Image src={Menu} alt="Menu Button" width={24} height={24} />
//         </button>
//       </div>

//       {/* Dropdown Menu for Small Screens */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-16 right-0 bg-white shadow-md rounded-md z-10 w-full">
//           {navLinks.map((item, index) => (
//             <Link
//               href={item.path}
//               key={index}
//               className={`block p-2 text-center	text-gray-200  bg-[#181C20] font-medium hover:bg-gray-800 hover:no-underline ${
//                 activeLink === item.name ? "text-blue-600" : "text-black"
//               }`}
//               onClick={() => handleLinkClick(item.name)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }


"use client";

import { useState } from 'react';
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import Logo from "../assets/Logo.svg";
import Menu from "../assets/Menu.svg";
import Icon from "../assets/france.png"; 
import Icon2 from "../assets/germany.png"; 
import Icon3 from "../assets/england.png"; 

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Candidates", path: "/Candidates" },
  { name: "Employers", path: "/Employers" },
  { name: "About Us", path: "/About-Us" },
  { name: "News", path: "/News" },
  { name: "Application Assistant", path: "/Application-Assistant" },
  { name: "Test Page", path: "/TestPage" },
];

const languages = [
  { name: "French", flag: Icon },
  { name: "German", flag: Icon2 },
  { name: "England", flag: Icon3 },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Set French as default language

  const handleLinkClick = (name: string) => {
    setActiveLink(name); // Update the active link when clicked
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown menu
  };

  const handleLanguageChange = (lang: { name: string; flag: StaticImageData }) => {
    setSelectedLanguage(lang); // Update the selected language
    toggleDropdown(); // Close the dropdown menu
  };

  return (
    <nav className="absolute z-40 flex w-full px-5 py-4 items-center justify-between">
      {/* Left Block: Logo and Name (Clickable to go to Home Page) */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center hover:no-underline" onClick={() => handleLinkClick("")}>
          <Image src={Logo} alt="Logo" width={24} height={24} />
          <h1 className="ml-2 text-xl font-bold text-black">Logoipsum</h1>
        </Link>
      </div>

      {/* Center Block: Navigation Links (Centered) */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
        <div className="flex gap-x-14">
          {navLinks.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`text-base font-medium hover:no-underline ${
                activeLink === item.name ? "text-blue-600" : "text-black"
              }`}
              onClick={() => handleLinkClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Block: Icons and Menu Button */}
      <div className="flex items-center gap-x-5 ml-auto relative">
        {/* Language Dropdown Icon */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            <Image src={selectedLanguage.flag} alt="Language Icon" width={24} height={24} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full right-2 mt-2 bg-white shadow-md rounded-md z-20">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 pl-2 pr-8 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange(lang)} // Change language on click
                >
                  <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                  <span className="ml-2 text-sm text-black">{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Menu Button (Visible on small screens) */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
          <Image src={Menu} alt="Menu Button" width={24} height={24} />
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 bg-white shadow-md rounded-md z-10 w-full">
          {navLinks.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`block p-2 text-center text-gray-200 bg-[#181C20] font-medium hover:bg-gray-800 hover:no-underline ${
                activeLink === item.name ? "text-blue-600" : "text-black"
              }`}
              onClick={() => handleLinkClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
