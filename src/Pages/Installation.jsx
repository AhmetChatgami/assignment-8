import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApp"))
    if(savedList) setInstalledApps(savedList)
  }, []);

  return (
    <div>
      <h1>this is installation page</h1>

      <Link to="/apps">
        <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
          Back to Apps
        </button>
      </Link>
    </div>
  );
};

export default Installation;
