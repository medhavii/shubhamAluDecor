import React from "react";
import Card from "../components/Card";
import { v4 as uuid4 } from "uuid";

const doors = [
  {
    name: "Sliding Doors",
    description:
      "Sliding patio doors save space by not opening into your home but rather gliding open from the left or right, connecting your indoor and outdoor living spaces.",
    img: "https://www.plygem.com/wp-content/uploads/2018/08/Door-Sliding-PlyGem_Mira-Double.gif?9?3?3?0?8?6",
  },
  {
    name: "Swinging Doors",
    description:
      "A hinged or swinging patio door allows one or both door panels to swing open into or out of your home for easy outdoor access.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/T3_Outswing.gif?6?8?8",
  },
  {
    name: "Multi-Sliding Doors",
    description:
      "Multi-sliding patio doors feature three or more door panels with operable panels that glide open from the left, right or both to open up living areas.",
    img: "https://www.plygem.com/wp-content/uploads/2019/07/multislide_patio_door_final.gif?0?9?7",
  },
  {
    name: "French Doors",
    description:
      "Available in sliding and multiple swing options, French Doors feature a broad stile and rail for an authentic French appearance.",
    img: "https://www.plygem.com/wp-content/uploads/2019/01/Door-French-PlyGem_Mira-Quad_Outswing.gif?6?5",
  },
  {
    name: "Bi-fold doors",
    description:
      "Bi-fold doors fold in on themselves to create a wide opening that seamlessly connects indoor and outdoor spaces, offering flexibility and versatility in the way you use your living areas.",
    img: "https://i.pinimg.com/236x/61/e1/c3/61e1c35bb5ab253e1c55b70cb3277532.jpg",
  },
  {
    name: "Custom",
    description:
      "Custom doors are made-to-order doors that can be designed and manufactured to fit specific size, style, material, and functional requirements, allowing for personalized and unique solutions for your home or project."
      ,
    img: "https://i.pinimg.com/236x/67/b8/bd/67b8bd1b31b6699f68edbf41ed221350.jpg",
  },
];

const Doors = () => {
  return (
    <div>
    
    <div className=" w-7/12 m-12">
    <span className="text-4xl text-purple-500">Doors</span>
    {/* <h1 className="text-2xl text-yellow-400">Experience the difference of precision-crafted aluminium windows.</h1> */}
    <p className="text-xl text-gray-600">Whether you’re building a new home or re-imagining an existing one, Shubham AluDecor has the perfect door for you. With innovative designs, inspiring colors and advanced materials, our swinging or sliding patio doors will open a world of possibilities for your home. Grasp the handle, open your door and take comfort in knowing you made the right decision.</p>
    </div>
    <div className="flex flex-wrap">
      {doors.map((door) => {
        console.log(door);
        return (
          <Card key={uuid4()} name={door.name} description={door.description} img={door.img} />
        );
      })}
    </div>
      
    </div>
  );
};

export default Doors;
