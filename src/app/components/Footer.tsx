// // components/Footer.tsx
// "use client";
// import React from 'react';
// import Link from 'next/link';
// import { useTranslation } from 'react-i18next';

// export default function Footer() {
//   const { t } = useTranslation('common');

//   return (
//     <div className="bottom-0 left-0 right-0 text-[14px] font-medium text-[#151515] bg-white py-2 px-8 xs:flex xs:flex-col xs:items-start">
//       <ul className="flex xs:flex-col  justify-between items-center xs:space-y-2">
//         <li className="flex-grow xs:text-center ">
//         {t('footer.copyright')}
//         </li>
//         <div className="flex space-x-4 xs:space-x-0 xs:flex-col ">
//           <li>
//             <Link href="../PrivacyPolicy" className="text-[#151515] hover:no-underline  xs:text-center">
//             {t('footer.privacyPolicy')}
//             </Link>
//           </li>
//           <li>
//             <Link href="../SiteNotice" className="text-[#151515] hover:no-underline  xs:text-center">
//             {t('footer.siteNotice')}
//             </Link>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }

"use client";
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <div className="text-[14px] font-medium text-[#151515] bg-white pt-8 pb-4 px-8">
      <ul className="flex xs:flex-col justify-center items-center xs:space-y-2">
        <li className="flex-grow xs:text-center">
          {t('footer.copyright')}
        </li>
        <div className="flex space-x-4 xs:space-x-0 xs:flex-col xs:items-center">
          <li>
            <Link href="../PrivacyPolicy" className="text-[#151515] hover:no-underline xs:text-center">
              {t('footer.privacyPolicy')}
            </Link>
          </li>
          <li>
            <Link href="../SiteNotice" className="text-[#151515] hover:no-underline xs:text-center">
              {t('footer.siteNotice')}
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
