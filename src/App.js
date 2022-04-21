import React, { useState } from "react";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import UserForm from "./components/userForm/userForm";

function App() {
  const [user, setUsers] = useState([]);
  

  const submit = (e) => {
    setUsers([...user, e]);
  };

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <UserForm
            handleSubmit={submit}
          ></UserForm>
        </div>
      </Card>
      <Card>
        <ul>
          {user.map((user) => (
            <li key={user.email}>
              {`${user.name} ${user.lastname} ${user.email}`}
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}

export default App;
