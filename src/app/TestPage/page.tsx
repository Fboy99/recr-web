import Questionnaire from "../components/Questioner";

export default function TestPage(){
    return (
   <div className="bg-gray-50 w-full max-w-[1440px] h-auto sm:px-4 md:px-8 pt-[96px] pb-0 gap-10 opacity-100  mb-10 mx-auto items-center ">
    <div className="w-full max-w-[1440px] h-auto py-0 px-4 sm:px-6 md:px-8 gap-[16px] items-center">
      <h1 className="text-4xl font-bold text-center mb-2">
        Application Assistant
      </h1>
      <p className="text-center text-gray-700 ">
        The best place to start your application at the German Chancenkarte
      </p>
    </div>
    <Questionnaire/>
    // </div>
);
}