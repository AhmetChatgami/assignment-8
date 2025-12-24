import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "./AppsCard";
import { Link } from "react-router";
import NotFound from "./notFound";
import appError from "../assets/App-Error.png";
import Skeleton from "./Skeleton";

const Apps = () => {
  const { appsData, loading } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? appsData.filter((app) => app.title.toLowerCase().includes(term))
    : appsData;
  if (!searchedApps.length)
    return (
      <section className="mx-auto">
        <img className="h-80 mx-auto my-10" src={appError} alt="" />
        <p className="text-center text-4xl font-semibold">
          OPPS!! APP NOT FOUND
        </p>
        <p className="text-center text-gray-500">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <p className="text-center">

        <Link to="/">
          <button className="btn text-white mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
            Go Back!
          </button>
        </Link>
        </p>
      </section>
    );
  return (
    <div>
      <div className="py-8">
        <h1 className="text-4xl text-center font-bold">Our All Applications</h1>
        <p className="text-center p-6">
          Explore All Apps on the Market developed by us. We code for Millons
        </p>
      </div>

      <div className="flex flex-col-1 justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {" "}
          ({searchedApps.length}) Apps Found
        </h2>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>

      {loading? <Skeleton count= "20"/> : <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {searchedApps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>}

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
