// import { AppAssistant } from "./components/AppAssistant";
import  Faq  from "./components/Faq";
import { Features } from "./components/Features";
import  Footer  from "./components/Footer";
import { Hero } from "./components/Hero";
import { Advantages } from "./components/Advantages";
import AssistApp from "./components/AssistForm";
// import ApplicationAssistant from "./components/ApplicationAssistant";
import { PointsDistribution } from './components/PointsDistribution';
import JobSubscription from "./components/JobSubscription";


export default function Home() {
  return (
    <>
      <Hero />
        <Features />
        <Advantages /> 
        <PointsDistribution/>
        <Faq />
        <AssistApp /> 


        {/* <ApplicationAssistant/> */}


        <JobSubscription />

      
    </>
  );
}
