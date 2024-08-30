import React, { useContext } from "react";
import { cityContext, userContext, ageContext } from "../App";
const ComponentA = () => {
  const name = useContext(userContext);
  const city = useContext(cityContext);
  const age = useContext(ageContext);
  return (
    <div>
      <h1>my name is : {name}</h1>
      <h1> I have : {age} years old</h1>
      <h1>I live in : {city}</h1>
    </div>
  );
};

export default ComponentA;
