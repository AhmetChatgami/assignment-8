import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import gitHub from "../assets/github-logo-png_seeklogo-304612.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/apps">Apps</Link>
              </li>
              <li>
                <Link to="/installation">Installation</Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="text-xl font-bold flex items-center">
            {" "}
            <img className="h-10" src={logo} alt="" />
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-6">
            <li className="hover:text-purple-600 hover:underline transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-purple-600 hover:underline transition-colors duration-300">
              <Link to="/apps">Apps</Link>
            </li>
            <li className="hover:text-purple-600 hover:underline transition-colors duration-300">
              <Link to="/installation">Installation</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Contribute</a> */}
          <Link
            to="https://github.com/AhmetChatgami"
            target="_blank"
            className="flex justify-center mt-4 mb-2 btn bg-[#632EE3] hover:bg-purple-800 text-white"
          >
            {" "}
            <img className="h-6" src={gitHub} alt="" />
            <p>Contribute</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
