import React from "react";
import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";

const AppsDetails = () => {
  const { id } = useParams();
  const { appsData, loading, error } = useApps();
  const appDetails = appsData.find((a) => String(a.id) === id);

  if (loading) {
    return <div>Loading...</div>;
  }
  const { image, title, size, ratingAvg } = appDetails || {};

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("installedApp"));
    let updatedList = [];
    if (existingList) {
      updatedList = [...existingList, appDetails];
    } else {
      updatedList.push(appDetails);
    }
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  
  return (
    <div>
      <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p> */}
          <div className="card-actions justify-between">
            <div className="badge badge-outline bg-green-300"> {size} MB</div>
            <div className="badge badge-outline bg-amber-400">
              {ratingAvg} ⭐
            </div>
          </div>
          <button
            onClick={handleInstall}
            className="btn hover:bg-green-600 hover:text-white transition duration-400 mx-auto"
          >
            Install Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
