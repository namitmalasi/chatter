import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chatter</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14113987/pexels-photo-14113987.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Namit</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
