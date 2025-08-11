import { useState } from "react";
import "./App.css";
import ProgrammersList from "./components/ProgrammersList";
import PlanningTasksForm from "./components/PlanningTasksForm";
import rawData from "./programmersData.json";

function App() {
  const [listOfProgrammers, setListOfProgrammers] = useState(
    rawData.programmers
  );
  const [activeTab, setActiveTab] = useState(1);

  function handleDelete(idToDel) {
    setListOfProgrammers(listOfProgrammers.filter((p) => p.id !== idToDel));
  }

  const handleAdd = (programmer) => {
    setListOfProgrammers([...listOfProgrammers, programmer]);
  };

  return (
    <div className="page-container">
      <h1>Your app for handling projects</h1>
      <h3>Toggle view</h3>
      <div className="toggle-buttons">
        <button
          className={`toggler-btn ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          List of programmers
        </button>
        <button
          className={`toggler-btn ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          Form for planning tasks
        </button>
      </div>
      {activeTab === 1 && (
        <ProgrammersList
          data={listOfProgrammers}
          handleDelete={handleDelete}
          onAdd={handleAdd}
        />
      )}
      {activeTab === 2 && <PlanningTasksForm programmers={listOfProgrammers} />}
    </div>
  );
}

export default App;
