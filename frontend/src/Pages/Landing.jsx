import Lottie from "lottie-react";
import Airplane from "../animations/plane.json";
import Card from "../components/Card";
import Slider from "react-slick";
import Features from "../components/Features";
import addPlaces from "../assets/MainFeatureTiles__addPlaces.png";
import collaborate from "../assets/MainFeatureTiles__collaborate.png";
import exportImage from "../assets/MainFeatureTiles__export.png";
import contactImage from "../assets/MainFeatureTiles__import.png";
import optimizeRoute from "../assets/MainFeatureTiles__optimizeRoute.png";
import recommendation from "../assets/MainFeatureTiles__recommendations.png";
import GoogleMaps from "../components/GoogleMaps";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handlePlan = () => {
    if (user) {
      navigate("/itinerary");
    } else {
      navigate("/login");
    }
  };

  const reviews = [1, 2, 3, 4, 5, 6, 7, 8];
  const features = [1, 2, 3, 4, 5, 6];
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const featureData = [
    {
      image: addPlaces,
      heading: "Add places from guides with 1 click",
      desc: "We crawled the web so you don’t have to. Easily save mentioned places.",
    },
    {
      image: collaborate,
      heading: "Collaborate with friends in real time  ",
      desc: "Plan along with your friends with live syncing and collaborative editing.",
    },
    {
      image: exportImage,
      heading: "Export your places to Google Maps",
      desc: "Synced automatically, for when plans change.",
    },
    {
      image: contactImage,
      heading: "Import flight and hotel reservations",
      desc: "Connect or forward your emails to get them magically added into your trip plan.",
    },
    {
      image: optimizeRoute,
      heading: "Optimize your route",
      desc: "Perfect for road trips and saving $$$ on gas! Get the best route auto-rearranged.",
    },
    {
      image: recommendation,
      heading: "Get personalized suggestions",
      desc: "Find the best places to visit with smart recommendations based on your itinerary.",
    },
  ];
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
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
            <button
              id="startplanning"
              onClick={handlePlan}
              className="bg-blue-500 px-4 py-3 text-white rounded-xl"
            >
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
            {/* <h1 className="text-3xl"> Google Maps picture here</h1> */}
            <GoogleMaps />
          </div>
          {/* right side */}
          <div className="w-1/2 h-screen flex flex-col justify-center items-center">
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
          <div className=" mt-20 " style={{ width: "80%" }}>
            <Slider {...settings}>
              {reviews.map((item, index) => (
                <div key={index}>
                  <Card key={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Fourth breakpoint  */}
      <div className="h-screen bg-gray-200">
        {/* Child container  */}
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="font-bold" style={{ fontSize: "30px" }}>
            {" "}
            Features to replace all your other tools
          </h1>

          <div className="mt-8 flex flex-wrap justify-center items-center space-y-7">
            {featureData.map((feature, index) => {
              return (
                <Features
                  key={index}
                  image={feature.image}
                  desc={feature.desc}
                  heading={feature.heading}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
