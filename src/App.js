import React from "react";
import Greeting from "./components/Greeting";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      <Navbar />
      <Greeting name="Riddhi" />
      <TextForm />
    </div>
  );
}

export default App;
