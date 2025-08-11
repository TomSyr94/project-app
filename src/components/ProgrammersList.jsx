import React, { useState } from "react";
import "./ProgrammersList.css";

function ProgrammersList({ data, handleDelete, onAdd }) {
  const [newProgrammer, setNewProgrammer] = useState({
    id: data.length > 0 ? Math.max(...data.map((prog) => prog.id)) + 1 : 1,
    name: "",
    position: "junior",
  });

  const handleChange = (event) => {
    const source = event.target.name;
    const val = event.target.value;

    switch (source) {
      case "name": {
        setNewProgrammer({ ...newProgrammer, name: val });
        break;
      }
      case "position": {
        setNewProgrammer({ ...newProgrammer, position: val });
        break;
      }
      default:
        break;
    }
  };

  const handleAdd = () => {
    if (newProgrammer.name.trim() === "") {
      alert("Fill in a name");
      return;
    }

    onAdd(newProgrammer);

    setNewProgrammer({
      id: newProgrammer.id + 1,
      name: "",
      position: "junior",
    });
  };

  return (
    <div className="programmers-form">
      <h3>Your team</h3>
      {data.map((programmer) => (
        <div key={programmer.id} className="name-item">
          <span>
            {programmer.name} - {programmer.position}
          </span>
          <button onClick={() => handleDelete(programmer.id)}>✕</button>
        </div>
      ))}
      <div className="form-row">
        Name
        <input
          type="text"
          name="name"
          placeholder=""
          onChange={handleChange}
          value={newProgrammer.name}
        />
        <label>
          <input
            type="radio"
            name="position"
            value="junior"
            checked={newProgrammer.position === "junior"}
            onChange={handleChange}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="senior"
            checked={newProgrammer.position === "senior"}
            onChange={handleChange}
          />
          Senior
        </label>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default ProgrammersList;
