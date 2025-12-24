import React from "react";
import { Link } from "react-router";
import Skeleton from "./Skeleton";
import downloadIcon from "../assets/icon-downloads.png"
import ratingIcon from "../assets/icon-ratings.png"

// {
//     "image": "https://i.ibb.co.com/vv4Gz5LZ/bb9923bd5779f9c3673dfcb722bb3ee4.jpg",
//     "title": "ZenFlow: Daily Meditation",
//     "companyName": "Serenity Labs",
//     "id": 101,
//     "description": "Find your inner peace with guided meditations and breathing exercises designed for stress relief.",
//     "size": 45.2,
//     "reviews": 1240,
//     "ratingAvg": 4.8,
//     "downloads": 50000,
//     "ratings": [
//       { "name": "1 star", "count": 20 },
//       { "name": "2 star", "count": 30 },
//       { "name": "3 star", "count": 50 },
//       { "name": "4 star", "count": 140 },
//       { "name": "5 star", "count": 1000 }
//     ]
//   }
const AppsCard = ({ app }) => {
 
  const { image, title, size, ratingAvg, loading, downloads } = app;
  return (
    <Link to={`/app/${app.id}`}>
    {loading? <Skeleton/>: <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow hover:scale-105 transition ease-in-out duration-300">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
         
        </h2>
        {/* <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p> */}
        <div className="card-actions justify-between">
          <div className="badge text-[#00D390] font-semibold bg-[#F1F5E8]"> <img className="h-3" src={downloadIcon}/> {downloads}</div>
          <div className="badge bg-[#FFF0E1] text-[#FF8811] font-semibold"> <img className="h-3" src={ratingIcon} />{ratingAvg}</div>
        </div>
      </div>
    </div>}
    </Link>
  );
};

export default AppsCard;
