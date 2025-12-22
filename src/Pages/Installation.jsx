import React from 'react';
import { Link } from 'react-router';

const Installation = () => {
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