import React, { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>TextForm Component</h2>

      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here"
      ></textarea>

      <br /><br />

      <button onClick={handleUppercase}>
        Convert to Uppercase
      </button>

      <p><strong>Output:</strong> {text}</p>
    </div>
  );
}

export default TextForm;
