import React from "react";
import { Link } from "react-router";
import Skeleton from "./Skeleton";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

const AppsCard = ({ app }) => {
  const { image, title, ratingAvg, loading, downloads } = app;
  return (
    <Link to={`/app/${app.id}`}>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow hover:scale-105 transition ease-in-out duration-300">
          <figure className="h-48 overflow-hidden">
            <img className="w-full object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>

            <div className="card-actions justify-between">
              <div className="badge text-[#00D390] font-semibold bg-[#F1F5E8]">
                {" "}
                <img className="h-3" src={downloadIcon} /> {downloads}
              </div>
              <div className="badge bg-[#FFF0E1] text-[#FF8811] font-semibold">
                {" "}
                <img className="h-3" src={ratingIcon} />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default AppsCard;
