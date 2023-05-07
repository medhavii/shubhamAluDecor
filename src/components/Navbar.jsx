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
    <div className="shadow-md w-full sticky top-0 left-0 z-10 text-white bg-slate-600">
      <div className="flex items-center justify-between">
        <Link className="flex   items-center ml-2" to="/">
          <span className="m-2">
            <img src={logo} alt="logo" className="w-12" />
          </span>
          <span className="text-xl">Shubham AluDecor</span>
        
        </Link>
        <div>
          <nav>
            <ul className="flex justify-around">
              <li className="m-2">
                <Link className="m-2" to="/windows">
                  Products
                </Link>
                <Link className="m-2" to="/">
                  Why choose us?
                </Link>
                <Link to="/form" className="rounded bg-yellow-400 p-2 m-2">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
