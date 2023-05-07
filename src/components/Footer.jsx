import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-slate-600 text-white flex justify-around p-2 h-64">
      <div>
      <Link className="flex   items-center " to="/">
          <span className="">
            <img src={logo} alt="logo" className="w-12" />
          </span>
          <span className="text-xl font-semibold ml-2">Shubham AluDecor</span>
        
        </Link>
        <br />

        <span>
          Direct: <br /> 6356561410 <br /> 9377375819
        </span>
        <br />
        <br />
        <span>
          © 2023 Shubham Alu Decor <br />
          All rights Reserved.
        </span>
      </div>
      <div className="mt-20">
        <span>E-mail: shubhamaludecor@gmail.com</span>
        <br />
        <br />
        <span>
          Address: <br />
          Shop 8-9, Anjar - Bhuj Hwy,
          <br /> opp. Hotel Kutch Desert,
          <br /> Madhapar, Bhuj, Gujarat 
          370020
        </span>
        <br />
        <br />
      </div>
      <div>
        <br />
        <Link to="/form" className="rounded bg-yellow-400 p-2  my-8">
          Request a Quote
        </Link>
        <br />
<br />        <iframe className="mt-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7508189.295874021!2d60.485356975000016!3d23.239154700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e175bee73fad%3A0x2289a42fb5cb600d!2sShubham%20Aludecor!5e0!3m2!1sen!2sin!4v1682883438417!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  );
};

export default Footer;
