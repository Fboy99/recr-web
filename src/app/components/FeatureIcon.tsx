// import { useTranslation } from 'react-i18next';
// import { CheckCircleIcon, HomeIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/outline';
// import featuresData from '../data/featuresIcons.json';

// const iconMapping = {
//   CheckCircleIcon: CheckCircleIcon,
//   HomeIcon: HomeIcon,
//   CurrencyDollarIcon: CurrencyDollarIcon,
//   BriefcaseIcon: BriefcaseIcon,
// };

// const FeatureIcon = () => {
//   const { t } = useTranslation('common');

//   return (
//     <div className="bg-white p-6 m-2 sm:mx-4 rounded-[20px] shadow-lg">
//       {featuresData.map((feature, index) => {
//         const IconComponent = iconMapping[feature.icon];
//         return (
//           <div key={index} className="flex items-center mb-4">
//             {IconComponent && <IconComponent className="w-6 h-6 text-blue-500" />}
//             <span className="ml-3 text-gray-700">{t(`${feature.titleKey}`)}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default FeatureIcon;

import { useTranslation } from 'react-i18next';
import { CheckCircleIcon, HomeIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/outline';
import featuresData from '../data/featuresIcons.json';

// Define a union type for the icon names
type IconName = 'CheckCircleIcon' | 'HomeIcon' | 'CurrencyDollarIcon' | 'BriefcaseIcon';

const iconMapping: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  CheckCircleIcon: CheckCircleIcon,
  HomeIcon: HomeIcon,
  CurrencyDollarIcon: CurrencyDollarIcon,
  BriefcaseIcon: BriefcaseIcon,
};

const FeatureIcon = () => {
  const { t } = useTranslation('common');

  return (
    <div className="bg-white p-6 my-2 rounded-[20px] lg:max-w-[520px] shadow-lg">
      {featuresData.map((feature, index) => {
        // Ensure that feature.icon is of type IconName
        const IconComponent = iconMapping[feature.icon as IconName];
        return (
          <div key={index} className="flex items-center mb-4">
            {IconComponent && <IconComponent className="w-6 h-6 text-blue-500" />}
            <span className="ml-3 text-gray-700">{t(`${feature.titleKey}`)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureIcon;