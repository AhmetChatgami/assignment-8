import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortApp, setSortApp] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApp"));
    if (savedList) setInstalledApps(savedList);
  }, []);

  const sortedApps = (() => {
    if (sortApp === "size") {
      return [...installedApps].sort((a, b) => a.size - b.size);
    } else if (sortApp === "ratings") {
      return [...installedApps].sort((a, b) => b.ratingAvg - a.ratingAvg);
    } else {
      return installedApps;
    }
  })();

  // const handleInstall = () => {
  //     const existingList = JSON.parse(localStorage.getItem("installedApp"));
  //     let updatedList = [];
  //     if (existingList) {
  //       const isDuplicate = existingList.some((a) => a.id === appDetails.id);
  //       if (isDuplicate) return alert("App is proceed to install.");

  //       updatedList = [...existingList, appDetails];
  //     } else {
  //       updatedList.push(appDetails);
  //     }
  //     localStorage.setItem("installedApp", JSON.stringify(updatedList));
  //   };

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installedApp"));
    let updatedList = existingList.filter((a) => a.id !== id);

    setInstalledApps((prev) => prev.filter((a) => a.id !== id));
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold py-4 text-center">
        Your Installed Apps
      </h1>

      <div className="flex items-center justify-between space-y-4 mb-6">
        <p>{installedApps.length} Apps Found</p>

        <label className="form-control max-w-xs">
          <select
            className="select select-bordered"
            name="sort"
            id="sort"
            value={sortApp}
            onChange={(e) => setSortApp(e.target.value)}
          >
            <option value="none">Sort By</option>
            <option value="size">Sort By Size</option>
            <option value="ratings">Sort By Ratings</option>
          </select>
        </label>
        {/* <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
          Sort Apps
        </button> */}
      </div>

      <div className="space-y-4">
        {sortedApps.map((a) => (
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                className="w-25 h-20 object-cover"
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{a.title}</h2>
              <p>{a.companyName}</p>
              <p>{a.size} MB</p>
              <p>{a.ratingAvg} Ratings</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemove(a.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/apps">
        <button className="btn btn-primary">Back to Apps</button>
      </Link>
    </div>
  );
};

export default Installation;
