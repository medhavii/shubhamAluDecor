import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-around ">
      <div>
        <div>
          {" "}
          <img src={logo} alt="" className="w-12 justify-center" /> Shubham
          AluDecor
        </div>
        <br />
        <Link to="/form" className="rounded bg-yellow-400 p-2 m-2 my-8">
          Request a Quote
        </Link>
        <br />
        <br />
        <span>
          © 2023 Shubham Alu Decor <br />
          All rights Reserved.
        </span>
      </div>
      <div className="">
        <span>
          Direct: <br /> 6356561410 <br /> 9377375819
        </span>
        <br />
        <br />
        <span>E-mail: shubhamaludecor@gmail.com</span>
        <br />
        <br />
        
      </div>
      <div >
        <span>
          Address: <br />
          Shop 8-9, Anjar - Bhuj Hwy,
          <br /> opp. Hotel Kutch Desert,
          <br /> Madhapar, Bhuj, Gujarat <br />
          370020
        </span>
        <br />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7508189.295874021!2d60.485356975000016!3d23.239154700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e175bee73fad%3A0x2289a42fb5cb600d!2sShubham%20Aludecor!5e0!3m2!1sen!2sin!4v1682883438417!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  );
};

export default Footer;
