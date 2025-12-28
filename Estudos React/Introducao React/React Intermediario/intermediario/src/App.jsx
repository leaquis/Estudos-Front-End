import "./App.css";
import City from "../src/assets/city.jpg";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>React Intermediario</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src="../src/assets/city.jpg" alt="Cidade" />
      </div>
      {/* Imagem como componente */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
    </div>
  );
}

export default App;
