import React from "react";
import "./App.css";
import Input from "./Components/Input";

const App = () => {
  return (
    <div className="App">
      <h1>Self Employed Tax Calculator</h1>

      <Input name="income" placeholder="Income" />
    </div>
  );
};

export default App;
