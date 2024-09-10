// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {

  return (
    <div className="pt-[56px] text-[14px] font-medium text-[#151515] pb-2 mx-8">
      <ul className="flex justify-between items-center">
        <li className="flex-grow">
          ©2024 Lorem ipsum. All rights reserved.
        </li>
        <div className="flex space-x-4">
          <li>
            <Link href="./PrivacyPolicy" className="text-blue-500">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="./SiteNotice" className="text-blue-500">
              Site Notice
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
