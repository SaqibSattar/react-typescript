import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const nameList = [
    {
      firstName: "Bruce",
      lastName: "Wayne",
    },
    {
      firstName: "Clark",
      lastName: "Kent",
    },
    {
      firstName: "Princess",
      lastName: "Diana",
    },
  ];

  return (
    <>
      <Greet name="Saqi" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;
