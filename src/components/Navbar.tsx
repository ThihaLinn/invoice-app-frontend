import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-600">
      <div className=" w-[90%] py-3 px-4 flex justify-between items-center text-xl font-bold text-white container mx-auto ">
        <div>
          <Link to={"/"}>INVOICE</Link>
        </div>
        <div className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
          <Link to={"/create-invoice"}>Create Invoice</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
