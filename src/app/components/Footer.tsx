// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 text-[14px] font-medium text-[#151515] bg-white py-2 px-8 xs:flex xs:flex-col xs:items-start">
      <ul className="flex xs:flex-col justify-between items-center xs:space-y-2">
        <li className="flex-grow xs:text-center">
          ©2024 Lorem ipsum. All rights reserved.
        </li>
        <div className="flex space-x-4 xs:space-x-0 xs:flex-col ">
          <li>
            <Link href="./PrivacyPolicy" className="text-[#151515] hover:underline xs:text-center">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="./SiteNotice" className="text-[#151515] hover:underline xs:text-center">
              Site Notice
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}