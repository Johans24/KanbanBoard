import React from "react";
import Kanban from "./components/Kanban";
import "./App.scss";

const App = () => {
  return (
    <div id="page" className="h-screen bg-grey">
      <Kanban />
    </div>
  );
};

export default App;
