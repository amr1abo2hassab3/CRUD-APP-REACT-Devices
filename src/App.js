import { createContext } from "react";
import "./App.css";
import ComponentA from "./component/ComponentA";

export const userContext = createContext();
export const cityContext = createContext();
export const ageContext = createContext();

function App() {
  return <div className="App">
    <userContext.Provider value={"Amr"}>
      <cityContext.Provider value={"Sohag"}>
        <ageContext.Provider value={"22"}>
          <ComponentA />
        </ageContext.Provider>
      </cityContext.Provider>
    </userContext.Provider>
  </div>;
}

export default App;
