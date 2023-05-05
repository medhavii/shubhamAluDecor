import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div >
      <div className="mx-4" onClick={(e) => setIsActive(!isActive)}>Products</div>
      {isActive && (
        <div className="flex flex-col mx-4">
          <Link className="hover:bg-yellow-400 hover:rounded hover:p-2" to="/windows">Windows</Link>
          <Link className="hover:bg-yellow-400 hover:rounded hover:p-2" to="/doors">Doors</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
