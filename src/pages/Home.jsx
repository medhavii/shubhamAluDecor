import React from "react";
import machine from '../assets/machine.png'
const Home =()=>{
     return (
        // <div className="gradient">
        //     <button className=" text-red-400 border-red-4">this is home</button>
        //     <img src={machine}  alt="" />
        // </div>
        <div className="flex justify-center m-2 min-h-screen ">
        <div className=" flex w-11/12  justify-center">
        <div className="w-4/6 flex flex-col justify-center m-2 p-2">
            <span className="text-5xl text-purple-500 font-semibold">#1 Manufacturer of Windows and Doors in Kutch</span>
            
        </div>

        <div className="flex flex-col justify-center p-2 m-2">
          <img
            src={machine}
            alt=""
          />
        </div>
        </div>
          
      </div>
     );
}

export default Home;