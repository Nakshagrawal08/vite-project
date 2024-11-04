import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 m-4 bg-gray-200 rounded-md shadow-lg">
      <Link to="/">
        <div className="border-2 border-black p-4 rounded-md shadow-md bg-slate-300 text-center">
          Dashboard
        </div>
      </Link>
      <Link to="/Add_Form">
        <div className="border-2 border-black p-4 rounded-md shadow-md bg-slate-300 text-center">
          Add Details
        </div>
      </Link>
      <Link to="/Show_Details">
        <div className="border-2 border-black p-4 rounded-md shadow-md bg-slate-300 text-center">
          Show Details
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
