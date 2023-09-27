import React from "react";
import Nav from "./Nav";
import Utill from "./Utill";

const Header = () => {
  return (
    <header>
      <h1 className="loGo">로고</h1>
      <Nav />
      <Utill />
    </header>
  );
};

export default Header;
