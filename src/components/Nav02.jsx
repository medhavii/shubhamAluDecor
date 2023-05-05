import React from "react";
import logo from "../assets/logo.jpeg";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex border-2 border-gray-600 ">
      
      <Link to="/">
        <img src={logo} alt="logo" className="w-12 justify-center " />
        Shubham AluDecor
      </Link>

      <Dropdown />

      <Link to="/Wcu">Why Choose us?</Link>

      <Link to="/form" className="rounded bg-yellow-400 h-8 p-2 m-2">
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
