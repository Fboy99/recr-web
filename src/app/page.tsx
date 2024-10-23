"use client"
import  Faq  from "./components/Faq";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Advantages } from "./components/Advantages";
import SimulatorForm from "./components/SimulatorForm";
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
        <Faq isHome={true}/>
        <SimulatorForm /> 
        <JobSubscription />
        </div>

      
    </>

  );
}

export default Home;
