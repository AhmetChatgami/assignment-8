import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErroPage = () => {
  return (
    <div>
        <Navbar />
      <img className="mx-auto" src={errorImg} alt="Error 404" />

      <div className="text-center p-8">
        <h1 className="text-4xl font-bold py-4">Oops, page not found!</h1>
        <p>The page you are looking for is not available.</p>
      </div>
      <div className="flex justify-center">
        <Link to="/apps">
          <button className="btn text-white  mt-8 my-6 hover:bg-purple-800 bg-[#632EE3]">
            Go Back!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErroPage;
