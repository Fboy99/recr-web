"use client"
// import { AppAssistant } from "./components/AppAssistant";
import  Faq  from "./components/Faq";
import { Features } from "./components/Features";
// import  Footer  from "./components/Footer";
import { Hero } from "./components/Hero";
import { Advantages } from "./components/Advantages";
import AssistApp from "./components/AssistForm";
// import ApplicationAssistant from "./components/ApplicationAssistant";
import { PointsDistribution } from './components/PointsDistribution';
import JobSubscription from "./components/JobSubscription";
import { appWithTranslation, useTranslation } from 'next-i18next';



function Home() {
  // const { t } = useTranslation('common'); 
  return (
    <>
      <Hero />
      <div className="mx-[12px]">
        <Features/>
        <Advantages /> 
        <PointsDistribution/>
        <Faq />
        <AssistApp /> 
        {/* <ApplicationAssistant/> */}

        <JobSubscription />
        </div>

      
    </>
  );
}
export default appWithTranslation(Home);

