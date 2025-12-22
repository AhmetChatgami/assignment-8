import React from "react";
import { Link, useLoaderData } from "react-router";
import AppsCard from "./AppsCard";
import useApps from "../Hooks/useApps";
import googlePlay from "../assets/d8f_GooglePlay_mediumklein.jpg"
import appStore from "../assets/App_Store_(iOS).svg.png"
import banner from "../assets/hero.png"
const Home = () => {
  // const appsData = useLoaderData();
  const { appsData, loading, error } = useApps();

  const featuredApps = appsData.slice(0, 8);

  return (
    <div>
      <div className="py-4 pb-8">
        <h1 className="text-4xl font-bold text-center">
          We Build <br />{" "}
          <span className="linear-from-[#632EE3] to-[#9F62F2] text-[#632EE3]">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="text-center py-4">
          {" "}
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        
      </div>
       <div className="flex justify-center gap-4">
          <Link
            to="https://play.google.com/store/apps/"
            target="_blank"
            className="flex justify-center mt-4 mb-2 btn"
          > <img className="h-6" src={googlePlay} alt="" />
            <p>Google Play</p>
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            className="flex justify-center mt-4 mb-2 btn"
          > <img className="h-6" src={appStore} alt="" />
            <p>Apps Store</p>
          </Link>
        
        </div>

        <div className="my-8 justify-center flex">
          <img src={banner} alt="" />
        </div>
      <h2 className="text-2xl font-semibold mb-4">Featured Apps</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {featuredApps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/apps">
          <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
            See All Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
