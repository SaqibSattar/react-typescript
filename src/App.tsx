import React from "react";
import "./App.css";
import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  // const personName = {
  //   firstName: "Bruce",
  //   lastName: "Wayne",
  // };

  // const nameList = [
  //   {
  //     firstName: "Bruce",
  //     lastName: "Wayne",
  //   },
  //   {
  //     firstName: "Clark",
  //     lastName: "Kent",
  //   },
  //   {
  //     firstName: "Princess",
  //     lastName: "Diana",
  //   },
  // ];

  return (
    <>
      {/* <Greet name="Saqi" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status  status="loading"/>
      <Heading>
        Placeholder text
      </Heading>
      <Oscar>
      <Heading>
        Awards goes to Bruce Wayne
      </Heading>
      </Oscar>
      <Greet name="Saqi" isLoggedIn={false} /> */}
      <Button 
      handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}
      /> 
      <Input
      value={'test'} 
      handleChange={(event) => {
        console.log('Value changed', event)
      }}
      /> 
    </>
  );
}

export default App;
