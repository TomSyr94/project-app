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
        />
        time limit [days]
        <input
          type="number"
          id="limit-days"
          value={limitDays}
          onChange={handleChangeDays}
        />
        <button
          className="btn-add"
          disabled={!canDo}
          onClick={handleClick}
          style={{ backgroundColor: canDo ? "green" : "red" }}
        >
          Do it
        </button>
      </div>
    </div>
  );
}

export default PlanningTasksForm;
