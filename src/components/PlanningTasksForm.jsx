import React, { useState } from "react";
import "./PlanningTaskForm.css";

function PlanningTasksForm({ programmers }) {
  const [codeLines, setCodeLines] = useState("");
  const [limitDays, setLimitDays] = useState("");

  let juniors = 0;
  let seniors = 0;

  for (let i = 0; i < programmers.length; i++) {
    if (programmers[i].position === "junior") {
      juniors = juniors + 1;
    } else {
      seniors = seniors + 1;
    }
  }

  const juniorLines = juniors * 100 * limitDays;
  const seniorLines = seniors * 200 * limitDays;
  const totalLines = juniorLines + seniorLines;

  const canDo = totalLines >= codeLines;

  const handleChangeLines = (e) => {
    setCodeLines(e.target.value);
  };

  const handleChangeDays = (e) => {
    setLimitDays(e.target.value);
  };

  function handleClick() {
    alert("Task can be done");
  }

  const isValidInput = codeLines > 0 && limitDays > 0;
  const isTaskPossible = isValidInput && canDo;

  return (
    <div className="page-container">
      <h3>Your Task</h3>
      <div className="form-row">
        lines of code
        <input
          type="number"
          id="code-lines"
          value={codeLines}
          onChange={handleChangeLines}
          min="1"
        />
        time limit [days]
        <input
          type="number"
          id="limit-days"
          value={limitDays}
          onChange={handleChangeDays}
          min="1"
        />
        <button
          className="btn-add"
          disabled={!isTaskPossible}
          onClick={handleClick}
          style={{
            backgroundColor: isTaskPossible ? "green" : "red",
          }}
        >
          Do it
        </button>
      </div>
    </div>
  );
}

export default PlanningTasksForm;
