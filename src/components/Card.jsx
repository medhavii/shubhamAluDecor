import React from "react";


const Card = (props) => {
  return (
    
    <div className="bg-yellow-400 w-80 flex flex-col rounded-xl ml-4 mt-4 items-center">
      <img className="w-40 rounded-xl mt-3 h-40 " src={props.img} alt="" />
      <span className="text-red-800 font-bold mt-3" >{props.name}</span>
      <p className="block m-2 p-2 text-justify">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
