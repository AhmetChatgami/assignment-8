import React from "react";
import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Skeleton from "./Skeleton";


const MySwal = withReactContent(Swal);
const AppsDetails = () => {
  const { id } = useParams();
  const { appsData, loading } = useApps();
  const appDetails = appsData.find((a) => String(a.id) === id);
  console.log(appDetails);

  if (loading) {
    return (
      <div>
        <Skeleton count="1" />
      </div>
    );
  }

  const {
    image,
    title,
    size,
    ratingAvg,
    companyName,
    downloads,
    reviews,
    description,
  } = appDetails || {};

  const handleInstall = () => {
    Swal.fire("App Installed!");
    const existingList = JSON.parse(localStorage.getItem("installedApp"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === appDetails.id);
      if (isDuplicate) return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "App is already installed!",
          
        });

      updatedList = [...existingList, appDetails];
    } else {
      updatedList.push(appDetails);
    }
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  return (
    // App Details Section
    <div>
    
      <div className="card lg:card-side">
        <figure className="h-80 w-80 overflow-hidden">
          <img src={image} alt="title" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="border-b-1 border-gray-400">
            Developed by: {companyName}
          </p>

          {/* Peoples Interested in this App */}

          <div className="flex space-x-8 mt-4">
            <div>
              <img className="h-7" src={downloadIcon} alt="" />
              <p>Downloads</p>
              <p className="text-2xl font-bold">{downloads}</p>
            </div>

            {/* Ratings */}
            <div>
              <img className="h-7" src={ratingIcon} alt="" />
              <p>Average Rating</p>
              <p className="text-2xl font-bold">{ratingAvg}</p>
            </div>

            {/* Reviews */}
            <div>
              <img className="h-7" src={reviewIcon} alt="" />
              <p>Total Reviews</p>
              <p className="text-2xl font-bold">{reviews}</p>
            </div>
          </div>

          <div className="card-actions justify mt-4">
            <Link
              to="/installation"
              onClick={handleInstall}
              className="btn bg-[#00D390] text-white"
            >
              Install Now ({size} MB)
            </Link>
          </div>
        </div>
      </div>
      {/* bar chart */}
      <div className="my-8 space-y-8 border-gray-300 border-t">
        <h2 className="mt-8 font-semibold text-xl">Ratings</h2>

        <div className="bg-base-100 border-b p-4 h-80">
          {/* <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={appsData}
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ratings" />
            <YAxis width="auto" />
            
            <Bar
              dataKey="reviews"
              fill="#8884d8"
              activeBar={{ fill: "pink", stroke: "blue" }}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={{ fill: "gold", stroke: "purple" }}
              radius={[10, 10, 0, 0]}
            />
            <RechartsDevtools />
          </BarChart> */}

          {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart data={appDetails?.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" barSize={25} fill="#82ca9d"></Bar>
            </BarChart>
          </ResponsiveContainer> */}

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={appDetails?.ratings}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Description Part */}
      <div>
        <h2 className="text-2xl font-semibold">Description:</h2> <br />
        <p className="text-gray-500">{description}</p>
      </div>{" "}
      <br />
      {/* <Link to="/installation">
        <button className="btn btn-primary">Go to Installation</button>
      </Link> */}
    </div>
  );
};

export default AppsDetails;
