import React from "react";
import { Link, useLoaderData } from "react-router";
import AppsCard from "./AppsCard";
import useApps from "../Hooks/useApps";

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
