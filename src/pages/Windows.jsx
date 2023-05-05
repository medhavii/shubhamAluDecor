import React from "react";
import Card from "../components/Card";
import { v4 as uuid4 } from "uuid";

const windows = [
  {
    name:"Double Hung Window",
    description:
      "Double hung windows can be opened from the bottom or top for fresh air and even tilt in for easy cleaning from inside your home.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/Double_Hung.gif?3"
  },
  {
    name:"Single Hung Windows",
    description:
      "A single hung window lifts open from the bottom while the top of the window remains stationary.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/T_3.gif?3?3"
  },
  {
    name:"Casement Windows",
    description:
      "Casement windows open outward by turning an easy-to-reach handle, providing optimum airflow, energy efficiency and weatherability.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/T3_Casement.gif?0"
  },
  {
    name:"Slider Windows",
    description:
    "Slider windows easily glide open horizontally from the left or right and deliver a wide open view and ample fresh air.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/T3_Horizontal_Slider.gif?1?6?9"
  },
  {
    name:"Awning Windows",
    description:
      "Awning windows are hinged at the top, opening outward with the turn of a handle and can be left open for fresh air during the rain.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/T3_Awning.gif?7?4?8?1?9?1?1?0?6?3"
  },
  {
    name:"Bay or Bow Windows",
    description:
      "Bay or Bow specialty windows combine several window styles together to create added interior space, dimension and curb appeal.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/Bay.jpg?2?5?3?3?1"
  },
  {
    name:"Picture Windows",
    description:
      "Offering an expansive view, a picture window is a non-opening, energy- efficient style that is ideal for large and small spaces.",
    img: "https://www.plygem.com/wp-content/uploads/2021/12/T3_Fixed_Window200x200.jpg?1?7"
  },
  {
    name:"Custom",
    description:
      "Make your own window. Customise it as you like.",
    img: "https://www.plygem.com/wp-content/uploads/2018/09/T3_Garden.gif?2?5?3?3"
  },
  
];
const Windows = () => {
  return (
    <div>
    <div className=" w-7/12 m-12">
    <span className="text-4xl text-purple-500">Windows</span>
    <h1 className="text-2xl text-yellow-400">Experience the difference of precision-crafted aluminium windows.</h1>
    <p className="text-xl text-gray-600">Discover your perfect window style with our wide range of options at Shubham Aludecor. Elevate the look and feel of your living space with unique features that can transform your home's ambiance and aesthetic. Browse our selection to find the window style that suits your needs and customize it to your liking. Our commitment to your satisfaction ensures a seamless window selection experience.</p>
    </div>
    <div className="flex flex-wrap ">
      {windows.map((window) => {
        console.log(window);
        return (
          <Card
            key={uuid4()}
            name={window.name}
            description={window.description}
            img={window.img}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Windows;
