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
      "Custom doors are made-to-order doors that can be designed and manufactured to fit specific size, style, material, and functional requirements, allowing for personalized and unique solutions for your home or project.",
    img: "https://i.pinimg.com/236x/67/b8/bd/67b8bd1b31b6699f68edbf41ed221350.jpg",
  },
];

const Doors = () => {
  return (
    <div className="flex justify-center flex-col mb-8 ">
      <div className="flex justify-center m-2 min-h-screen ">
        <div className=" flex w-11/12  justify-center">
          <div className="w-4/6 flex flex-col justify-center m-2 p-2">
            <span className="text-4xl text-purple-500">Doors</span>

            <p className="text-xl text-yellow-50 ">
              Whether you’re building a new home or re-imagining an existing
              one,{" "}
              <span className="text-2xl text-yellow-400">Shubham AluDecor</span>{" "}
              Shubham AluDecor has the perfect door for you. With innovative
              designs, inspiring colors and advanced materials, our swinging or
              sliding patio doors will open a world of possibilities for your
              home. Grasp the handle, open your door and take comfort in knowing
              you made the right decision.
            </p>
          </div>

          <div className="flex flex-col justify-center p-2 m-2">
            <img
              src="https://img.freepik.com/free-photo/white-hallway-with-glass-doors-metal-ceiling-modern-building_181624-7177.jpg?size=626&ext=jpg&ga=GA1.1.606803408.1681710001&semt=ais"
              alt=""
            />
          </div>
        </div>
      </div>
<div className="flex justify-center m-2 ">
<div className="flex  w-10/12 flex-wrap justify-center ">
        {doors.map((door) => {
          console.log(door);
          return (
            <Card
              key={uuid4()}
              name={door.name}
              description={door.description}
              img={door.img}
            />
          );
        })}
      </div>
</div>
      
    </div>
  );
};

export default Doors;
