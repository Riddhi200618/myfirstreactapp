import React, { useState } from "react";

function Navbar() {
  const [title, setTitle] = useState("My React App");

  return (
    <nav style={{ backgroundColor: "#282c34", padding: "10px", color: "white" }}>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Title Changed!")}>
        Change Title
      </button>
    </nav>
  );
}

export default Navbar;
