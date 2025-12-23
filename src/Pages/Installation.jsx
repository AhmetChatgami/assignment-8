import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApp"));
    if (savedList) setInstalledApps(savedList);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold py-4 text-center">
        Your Installed Apps
      </h1>

      <div className="flex items-center justify-between">
        <p>{installedApps.length} Apps Found</p>

        <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
          Sort Apps
        </button>
      </div>

      <div className="space-y-4">
        {installedApps.map((a) => (
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img className="w-25 h-20 object-cover"
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{a.title}</h2>
              <p>{a.companyName}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Uninstall</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
