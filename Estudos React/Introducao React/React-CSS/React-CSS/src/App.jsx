import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
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
    </div>
  );
}

export default App;
