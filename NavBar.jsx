import React from "react";

const NavBar = ({ onPin }) => (
  <nav style={{ display: "flex", alignItems: "center", padding: "1rem", background: "#f5f5f5" }}>
    <h2 style={{ marginRight: "2rem" }}>MediData</h2>
    <button onClick={onPin}>Pin Answer</button>
  </nav>
);

export default NavBar;