import React from "react";
import logo from "../assets/logo.jpeg";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";


const Links = [
  { name: "Products", url: "/Windows" },
  { name: "Why choose us?", url: "/wcu" },
];
const Header = () => {
  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-10 text-yellow-50 bg-slate-600">
      <div className="flex items-center justify-between">
        <Link className="flex   items-center ml-2" to="/">
          <span className="m-2">
            <img src={logo} alt="logo" className="w-12" />
          </span>
          <span className="text-xl">Shubham AluDecor</span>
        </Link>
        <div>
          <ul className="flex ">
            <Link>
              <Dropdown />
            </Link>
            <Link className="p-2 m-2" to="/">
              Why choose us?
            </Link>
            <Link to="/form" className="rounded bg-yellow-400 p-2 m-2">
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
