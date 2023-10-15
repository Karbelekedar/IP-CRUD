import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateTask() {
  const [taskForm, setTaskForm] = useState({
    deadline: "",
    task: "",
    status: "pending",
  });

  const inputsHandler = (e) => {
    setTaskForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(taskForm);
    console.log("submitting");
    axios
      .post("http://localhost:4000/tasks/create-task", taskForm)
      .then((res) => {
        console.log(res.data);
        setTaskForm({
          deadline: "",
          task: "",
          status: "pending",
        });
      })
      .catch((error) => {
        console.error("Error creating task:", error);
        // Handle the error gracefully, e.g., display an error message to the user.
      });
  };
  

  useEffect(() => {}, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Deadline</label>
            <input
              type="date"
              className="form-control"
              name="deadline"
              id="deadline"
              value={taskForm.deadline}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Task</label>
            <input
              type="text"
              className="form-control"
              name="task"
              id="task"
              value={taskForm.task}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <label style={{ margin: "1vh" }}>
                <input
                  type="radio"
                  name="status"
                  value="pending"
                  checked={taskForm.status === "pending"}
                  onChange={inputsHandler}
                />
                Pending
              </label>
              <label style={{ margin: "1vh" }}>
                <input
                  type="radio"
                  name="status"
                  value="ongoing"
                  checked={taskForm.status === "ongoing"}
                  onChange={inputsHandler}
                />
                Ongoing
              </label>
              <label style={{ margin: "1vh" }}>
                <input
                  type="radio"
                  name="status"
                  value="completed"
                  checked={taskForm.status === "completed"}
                  onChange={inputsHandler}
                />
                Completed
              </label>
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
