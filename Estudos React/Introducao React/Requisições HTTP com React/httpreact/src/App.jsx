import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:3000/products";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            {products.name} - {products.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
