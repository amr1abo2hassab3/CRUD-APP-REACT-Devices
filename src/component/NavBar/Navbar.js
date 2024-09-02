import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header>
      <Link to={"#"} className="logo">
        {" "}
        <span>amr</span> abo hassab
      </Link>
      <nav className="navbar">
        <NavLink to={`/`}>home</NavLink>
        <NavLink to={`/phone`}>phone</NavLink>
        <NavLink to={`/laptop`}>laptop</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
