import Lottie from "lottie-react";
import Airplane from "../animations/plane.json";
import Card from "../components/Card";

const Landing = () => {
  const ar = [1, 2, 3, 4];
  return (
    <div className="bg-gray-200 h-screen">
      {/* Home page  */}
      <div className="flex">
        {/* left side  */}
        <div className="w-1/2 h-scree flex flex-col justify-center items-center">
          <h1 className="font-bold w-1/2" style={{ fontSize: "40px" }}>
            Unleash Your Wanderlust with Our Travel Planner
          </h1>
          <h1 className="w-1/2 mt-4 text-2xl">
            Plan, arrange, and map your travel schedules using a free app
            tailored for vacations and road trips.
          </h1>
          <div className="mt-8 w-1/2">
            <button className="bg-blue-500 px-4 py-3 text-white rounded-xl">
              Start planning
            </button>
          </div>
        </div>

        {/* right side  */}
        <div className="w-1/2 h-screen flex justify-center items-center ">
          <Lottie animationData={Airplane} className="mr-6  rounded-3xl" />
        </div>
      </div>

      {/* second breakpoint  */}
      <div className=" h-screen bg-gray-200">
        {/* advertisment page  */}
        <div className="flex">
          {/* left side  */}
          <div className="w-1/2 h-screen flex justify-center items-center">
            <h1 className="text-3xl"> Google Maps picture here</h1>
          </div>
          {/* right side */}
          <div className="w-1/2 h-screen flex flex-col">
            <h1
              className="ml-5 mt-3 font-bold w-1/2"
              style={{ fontSize: "30px" }}
            >
              Your itinerary and your map in one view
            </h1>
            <h1 className="w-1/2 text-xl ml-5 mt-3">
              No more switching between different apps, tabs, and tools to keep
              track of your travel plans.
            </h1>
          </div>
        </div>
      </div>

      {/* Third breakpoint  */}
      <div className="h-screen bg-gray-200">
        {/* Child container  */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold" style={{ fontSize: "30px" }}>
            What travelers are raving about
          </h1>
          <div className="flex mt-10 space-x-5 ">
            {ar.map((item) => {
              return <Card />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
