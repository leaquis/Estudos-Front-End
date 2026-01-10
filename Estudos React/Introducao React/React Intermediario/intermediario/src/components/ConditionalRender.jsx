import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Giovani");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, Sim!</p>}
      {!x && <p>Se x for false, Não!</p>}

      <h1>If ternário</h1>
      {name === "Giovani" ? (
        <div>
          <p>O nome é Giovani</p>
        </div>
      ) : (
        <div>
          <p>O nome não é Giovani</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Mudar nome</button>
    </div>
  );
};

export default ConditionalRender;
