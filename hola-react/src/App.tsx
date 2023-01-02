import { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import UserForm, { UserFormState } from "./forms/Users";

type User = UserFormState & { id: number };

function App() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <ul>
        {users.map((e) => {
          return <li key={e.id}>{`${e.name} ${e.username}`} </li>;
        })}
      </ul>
      <UserForm
        handleSubmit={(user) =>
          setUsers([...users, { ...user, id: Date.now() }])
        }
      />
    </div>
  );
}

export default App;
