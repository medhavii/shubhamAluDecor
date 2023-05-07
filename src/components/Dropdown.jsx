import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative flex ">
      <div className="m-2 p-2 " onClick={(e) => setIsActive(!isActive)}>Products</div>
      {isActive && (
        <div className=" absolute flex flex-col py-2 mt-12 w-full rounded bg-slate-500 ">
          <Link className="hover:bg-slate-600 px-3 " to="/windows">Windows</Link>
          <Link className="hover:bg-slate-600 px-3" to="/doors">Doors</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
