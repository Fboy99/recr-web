// components/FeatureList.js
import { CheckCircleIcon, HomeIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/outline'

const features = [
  {
    icon: <CheckCircleIcon className="w-6 h-6 text-blue-500" />,
    title: "Easy, fast and legal entry to Germany",
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-blue-500" />,
    title: "Possibility of permanent residence in Germany",
  },
  {
    icon: <CurrencyDollarIcon className="w-6 h-6 text-blue-500" />,
    title: "Securing your livelihood with a good income",
  },
  {
    icon: <BriefcaseIcon className="w-6 h-6 text-blue-500" />,
    title: "Immediate work permit after successful application",
  },
];

const FeatureList = () => {
  return (
    <div className="bg-white p-6 m-2 rounded-[20px] shadow-lg ">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center mb-4">
          {feature.icon}
          <span className="ml-3 text-gray-700">{feature.title}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
