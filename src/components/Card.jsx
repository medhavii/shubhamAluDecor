import React from "react";


const Card = (props) => {
  return (
    <div className="bg-yellow-400 w-80  rounded-xl relative ml-4 mt-4">
      <img className="w-40 rounded-xl relative ml-20 mt-8" src={props.img} alt="" />
      <span className="text-red-800 font-bold" >{props.name}</span>
      <p className="block">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
