import React from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { useNuiEvent } from "../hooks/useNuiEvent";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  useNuiEvent("setVisible", (data: any) => {
    console.log("setVisible", data);
  });

  return (
    <div className="App">
    <h1>Hello</h1>
    </div>
  );
};

export default App;
