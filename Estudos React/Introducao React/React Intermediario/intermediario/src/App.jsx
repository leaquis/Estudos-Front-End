import { useState } from "react";
import "./App.css";

import City from "../src/assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const [userName] = useState("Roberta");

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
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/*reaproveitamento*/}
      <CarDetails brand="Ford" km={50000} color="Vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={0} color="Cinza" newCar={false} />
    </div>
  );
}

export default App;
