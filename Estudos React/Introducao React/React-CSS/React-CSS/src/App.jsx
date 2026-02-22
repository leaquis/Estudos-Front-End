import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const n = 15;
  const [name] = useState("Giovani");
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Paragrafo do App.js</p>
      <p
        style={{
          color: "blue",
          background: "green",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinamico
      </h2>
      <h2
        style={
          name === "Giovani"
            ? { color: "green", backgroundColor: "yellow" }
            : null
        }
      >
        CSS Dinamico
      </h2>
      <h2 className={redTitle === true ? "red-title" : "title"}>
        Este titulo vai ter uma classe dinamica
      </h2>
    </div>
  );
}

export default App;
