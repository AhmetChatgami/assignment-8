import React from "react";
import appsNot from "../assets/App-Error.png"

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <img className="mx-auto" src={appsNot} alt="Error 404" />

      <div className="text-center p-8">
        <h1 className="text-4xl font-bold py-4">A not found!</h1>
        
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
            Go Back!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
