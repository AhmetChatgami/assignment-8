import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "./AppsCard";
import { Link } from "react-router";

const Apps = () => {
  const { appsData } = useApps();
  return (
    <div>
      <div className="py-8">
        <h1 className="text-4xl text-center font-bold">
          Our All Applications
        </h1>
        <p className="text-center p-6">
          Explore All Apps on the Market developed by us. We code for Millons
        </p>
      </div>
      <h2 className="text-xl font-semibold mb-4">
        {" "}
        ({appsData.length}) Apps Found
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {appsData.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/installation">
          <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
            Proceed to Installation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Apps;
