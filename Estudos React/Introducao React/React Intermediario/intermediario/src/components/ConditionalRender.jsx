import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, Sim!</p>}
      {!x && <p>Se x for false, Não!</p>}
    </div>
  );
};

export default ConditionalRender;
