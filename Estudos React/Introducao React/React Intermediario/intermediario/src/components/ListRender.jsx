import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Giovani", "Roberta", "Fernanda"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Giovani", age: 28 },
    { id: 2, name: "Roberta", age: 29 },
    { id: 3, name: "Fernanda", age: 18 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
