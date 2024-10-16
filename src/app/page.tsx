"use client"
import  Faq  from "./components/Faq";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Advantages } from "./components/Advantages";
import AssistApp from "./components/AssistForm";
import { PointsDistribution } from './components/PointsDistribution';
import JobSubscription from "./components/JobSubscription";





function Home() {
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

export default Home;
