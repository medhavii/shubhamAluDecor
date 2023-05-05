import React from "react";
import machine from '../assets/machine.png'

const Home =()=>{
     return (
        <div>
            <button className=" text-red-400 border-red-4">this is home</button>
            <img src={machine}  alt="" />
        </div>
     );
}

export default Home;