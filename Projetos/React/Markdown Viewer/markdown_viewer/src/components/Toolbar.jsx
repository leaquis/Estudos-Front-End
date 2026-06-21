import React from "react";

const Toolbar = ({ insertText }) => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText("# ", "")}>h1</button>
      <button onClick={() => insertText("## ", "")}>h2</button>
      <button onClick={() => insertText("**", "**")}>Bold</button>
      <button onClick={() => insertText("*", "*")}>Italico</button>
      <button onClick={() => insertText("[", "] (https://)")}>Link</button>
      <button onClick={() => insertText("```", "```")}>Code Block</button>
      <button onClick={() => insertText("- ", "")}>List Item</button>
      <button onClick={() => insertText("\n---\n", "")}>Horizontal Line</button>
    </div>
  );
};

export default Toolbar;
