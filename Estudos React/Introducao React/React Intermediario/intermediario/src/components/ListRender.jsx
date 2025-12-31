import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Giovani", "Roberta", "Fernanda"]);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
