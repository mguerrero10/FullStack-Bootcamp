import React from "react";
import "./App.css";
import Mensaje from "./Mensaje";

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos a full" />
      <Mensaje color="green" message="En el dia de hoy" />
      <Mensaje color="blue" message="esta realmente agotador" />
    </div>
  );
};

export default App;
