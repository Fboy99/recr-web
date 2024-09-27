// "use client";

// import { useState, useEffect } from 'react';
// import Image from "next/image";
// import Link from 'next/link';
// import { useTranslation } from 'react-i18next';
// import Logo from "../assets/Logo.svg";
// import Menu from "../assets/Menu.svg"; 
// import Icon from "../assets/france.png"; 
// import Icon2 from "../assets/germany.png"; 
// import Icon3 from "../assets/england.png"; 
// import '../../i18n/i18n';

// const languages = [
//   { name: "English", flag: Icon3, code: 'en' },
//   { name: "French", flag: Icon, code: 'fr' },
//   { name: "German", flag: Icon2, code: 'de' },
// ];

// export function Navbar() {
//   const { t, i18n } = useTranslation('common');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

//   // Load saved language from localStorage on component mount
//   useEffect(() => {
//     const savedLanguage = localStorage.getItem('language');
//     if (savedLanguage) {
//       i18n.changeLanguage(savedLanguage);
//       const selectedLang = languages.find(lang => lang.code === savedLanguage);
//       if (selectedLang) setSelectedLanguage(selectedLang);
//     }
//   }, [i18n]);

//   const handleLinkClick = (name:string) => {
//     setActiveLink(name);
//     setIsMenuOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLanguageChange = (lang) => {
//     setSelectedLanguage(lang);
//     i18n.changeLanguage(lang.code);  // This changes the language
//     localStorage.setItem('language', lang.code); // Save selected language
//     toggleDropdown();
//     console.log("Current language:", i18n.language);
//   };

//   const navLinks = [
//     { name: t('home'), path: "/" },
//     { name: t('candidates'), path: "/Candidates" },
//     { name: t('employers'), path: "/Employers" },
//     { name: t('aboutUs'), path: "/About-Us" },
//     { name: t('news'), path: "/News" },
//     { name: t('applicationAssistant'), path: "/Application-Assistant" },
//     { name: t('testPage'), path: "/TestPage" },
//   ];

//   return (
//     <nav className="absolute z-40 flex w-full px-5 py-4 items-center justify-between">
//       <div className="flex items-center">
//         <Link href="/" className="flex items-center hover:no-underline" onClick={() => handleLinkClick("")}>
//           <Image src={Logo} alt="Logo" width={24} height={24} />
//           <h1 className="ml-2 text-xl font-bold text-black">{t('logo')}</h1>
//         </Link>
//       </div>

//       <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
//   <div className="flex gap-x-12 whitespace-nowrap overflow-hidden relative">
//     {navLinks.map((item, index) => (
//       <div key={index} className="relative group">
//         <Link
//           href={item.path}
//           className={`text-base font-medium hover:no-underline ${
//             activeLink === item.name ? "text-blue-600" : "text-black"
//           }`}
//           style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
//           onClick={() => handleLinkClick(item.name)}
//         >
//           {item.name}
//         </Link>
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-max bg-gray-700 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ bottom: '100%', marginBottom: '4px' }}>
//           {item.name}
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//       <div className="flex items-center gap-x-5 ml-auto relative">
//         <div className="relative">
//           <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
//             <Image src={selectedLanguage.flag} alt="Language Icon" width={24} height={24} />
//           </button>

//           {isDropdownOpen && (
//             <div className="absolute top-full right-2 mt-2 bg-white shadow-md rounded-md z-20">
//               {languages.map((lang, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center py-2 pl-2 pr-8 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleLanguageChange(lang)}
//                 >
//                   <Image src={lang.flag} alt={lang.name} width={20} height={20} />
//                   <span className="ml-2 text-sm text-black">{lang.name}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
//           <Image src={Menu} alt="Menu Button" width={24} height={24} />
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-16 right-0 bg-white shadow-md rounded-md z-10 w-full">
//           {navLinks.map((item, index) => (
//             <Link
//               href={item.path}
//               key={index}
//               className={`block p-2 text-center text-gray-200 bg-[#181C20] font-medium hover:bg-gray-800 hover:no-underline ${
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

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Logo from "../assets/Logo.svg";
import Menu from "../assets/Menu.svg"; 
import Icon from "../assets/france.png"; 
import Icon2 from "../assets/germany.png"; 
import Icon3 from "../assets/england.png"; 
import '../../i18n/i18n';

// Define a type for the language object
type Language = {
  name: string;
  flag: StaticImageData;
  code: string;
};

const languages: Language[] = [
  { name: "English", flag: Icon3, code: 'en' },
  { name: "French", flag: Icon, code: 'fr' },
  { name: "German", flag: Icon2, code: 'de' },
];

export function Navbar() {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Load saved language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      const selectedLang = languages.find(lang => lang.code === savedLanguage);
      if (selectedLang) setSelectedLanguage(selectedLang);
    }
  }, [i18n]);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Explicitly define the parameter type as Language
  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.code);  // This changes the language
    localStorage.setItem('language', lang.code); // Save selected language
    toggleDropdown();
    console.log("Current language:", i18n.language);
  };

  const navLinks = [
    { name: t('home'), path: "/" },
    { name: t('candidates'), path: "/Candidates" },
    { name: t('employers'), path: "/Employers" },
    { name: t('aboutUs'), path: "/About-Us" },
    { name: t('news'), path: "/News" },
    { name: t('applicationAssistant'), path: "/Application-Assistant" },
    { name: t('testPage'), path: "/TestPage" },
  ];

  return (
    <nav className="absolute z-40 flex w-full px-5 py-4 items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center hover:no-underline" onClick={() => handleLinkClick("")}>
          <Image src={Logo} alt="Logo" width={24} height={24} />
          <h1 className="ml-2 text-xl font-bold text-black">{t('logo')}</h1>
        </Link>
      </div>

      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
        <div className="flex gap-x-12 whitespace-nowrap overflow-hidden relative">
          {navLinks.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.path}
                className={`text-base font-medium hover:no-underline ${
                  activeLink === item.name ? "text-blue-600" : "text-black"
                }`}
                style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                onClick={() => handleLinkClick(item.name)}
              >
                {item.name}
              </Link>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-max bg-gray-700 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ bottom: '100%', marginBottom: '4px' }}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-5 ml-auto relative">
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            <Image src={selectedLanguage.flag} alt="Language Icon" width={24} height={24} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full right-2 mt-2 bg-white shadow-md rounded-md z-20">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center py-2 pl-2 pr-8 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange(lang)}
                >
                  <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                  <span className="ml-2 text-sm text-black">{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
          <Image src={Menu} alt="Menu Button" width={24} height={24} />
        </button>
      </div>

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