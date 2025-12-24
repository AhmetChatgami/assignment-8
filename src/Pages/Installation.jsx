import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
    //   const swalWithBootstrapButtons = Swal.mixin({

    //   customClass: {
    //     confirmButton: "btn btn-success",
    //     cancelButton: "btn btn-danger",
    //   },
    //   buttonsStyling: false,
    // });
    // swalWithBootstrapButtons
    //   .fire({
    //     title: "Are you sure?",

    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonText: "Yes, uninstall it!",
    //     cancelButtonText: "No, cancel!",
    //     reverseButtons: true,
    //   })
    //   .then((result) => {
    //     if (result.isConfirmed) {
    //       swalWithBootstrapButtons.fire({
    //         title: "Uninstall!",
    //         text: "Your app has been uninstalled.",
    //         icon: "success",
    //       });
    //     } else if (
    //       /* Read more about handling dismissals below */
    //       result.dismiss === Swal.DismissReason.cancel
    //     ) {
    //       swalWithBootstrapButtons.fire({
    //         title: "Cancelled",
    //         text: "Your imaginary file is safe :)",
    //         icon: "error",
    //       });
    //     }
    //   });

    Swal.fire({
      title: "Uninstalled!",
      icon: "success",
      draggable: true,
    });
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  return (
    <div>
      <div className=" my-8 text-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="py-2 text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex items-center justify-between space-y-4 mb-6">
        <p className="font-semibold">{installedApps.length} Apps Found</p>

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

      <div className="space-y-4 mx-auto">
        {sortedApps.map((a) => (
          <div className="card lg:card-side shadow-sm flex items-center h-25 lg:h-20">
            <figure className="w-20 h-20 object-cover">
              <img src={a.image} alt={a.title} />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">
                {a.title} |{" "}
                <p className="text-sm text-gray-400">{a.companyName}</p>
              </h2>

              <div className="flex gap-4 items-center justify-between">
                <span className="flex items-center space-x-1">
                  <img className="h-3" src={downloadIcon} />
                  <p className="text-[#00D390] font-semibold">{a.downloads} </p>
                </span>

                <span className="flex items-center space-x-1">
                  <img className="h-3" src={ratingIcon} alt="" />
                  <p className="text-amber-500 font-semibold">{a.ratingAvg}</p>
                </span>
                <p className="font-semibold text-gray-400">{a.size} MB</p>

                <div className="card-actions">
                  <button
                    className="btn text-white bg-[#00D390]"
                    onClick={() => handleRemove(a.id)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/apps">
        <button className="btn btn-primary mt-6">Back to Apps</button>
      </Link>
    </div>
  );
};

export default Installation;
