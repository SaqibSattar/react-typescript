import React from "react";
import { Name } from "./Person.types";

type ListProps = {
  names: Name[];
};

const PersonList = (props: ListProps) => {
  return (
    <div>
      {props.names?.map((name) => {
        return (
          <h2 key={name.firstName}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
