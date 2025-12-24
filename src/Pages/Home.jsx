import React from "react";
import { Link, useLoaderData } from "react-router";
import AppsCard from "./AppsCard";
import useApps from "../Hooks/useApps";
import googlePlay from "../assets/Google_Play_2012-2016_icon.svg.png";
import appStore from "../assets/App_Store_(iOS).svg.png";
import banner from "../assets/hero.png";
import Skeleton from "./Skeleton";
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
          to="https://play.google.com/store/search?q=programming+hero&c=apps"
          target="_blank"
          className="flex justify-center mt-4 mb-2 btn"
        >
          {" "}
          <img className="h-6" src={googlePlay} alt="" />
          <p>Google Play</p>
        </Link>
        <Link
          to="https://apps.apple.com/us/app/neptune-by-programming-hero/id1639834172"
          target="_blank"
          className="flex justify-center mt-4 mb-2 btn"
        >
          {" "}
          <img className="h-6" src={appStore} alt="" />
          <p>Apps Store</p>
        </Link>
      </div>

      <div className="my-8">
        <div className="justify-center flex">
          <img src={banner} alt="" />
        </div>

        <div className="bg-radial-[at_35%_25%] from-[#632EE3] to-[#9F62F2] w-full py-8 px-4 text-center text-white">
          <h2 className="text-3xl font-bold">
            Trusted By Millions, Built For You
          </h2>

          <section className="flex-1 lg:flex min-w-full justify-center items-center space-x-8 mt-4">
            <div>
              <h2 className="text-sm">Total Downloads</h2>
              <p className="text-5xl font-bold py-2">29.6M</p>
              <p className="text-sm">21% More Than Last Month</p>
            </div>
            <div>
              <h2 className="text-sm">Total Reviews</h2>
              <p className="text-5xl font-bold py-2">906K</p>
              <p className="text-sm">46% More Than Last Month</p>
            </div>
            <div>
              <h2 className="text-sm">Active Apps</h2>
              <p className="text-5xl font-bold py-2">132+</p>
              <p className="text-sm">31More Will Launch</p>
            </div>
          </section>
        </div>
      </div>

      {/* Featured Apps */}
      <div>
        <h2 className="text-3xl font-semibold text-center">Trending Apps</h2>
        <p className="text-center my">
          Explore All Trending Apps on the Market developed by us.
        </p>
        {loading? <Skeleton/>: <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
          {loading ? (
            <Skeleton />
          ) : (
            featuredApps.map((app) => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))
          )}
        </div>}

        <div className="flex justify-center">
          <Link to="/apps">
            <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
              See All Apps
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
