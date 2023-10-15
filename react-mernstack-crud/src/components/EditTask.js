import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTask() {
  const [taskForm, setTaskForm] = useState({
    deadline: "",
    task: "",
    status: "pending",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputsHandler = (e) => {
    setTaskForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/tasks/" + params.id, taskForm)
      .then((res) => {
        console.log({ status: res.status });
        navigate("/task-list");
      });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/tasks/" + params.id).then((res) => {
      setTaskForm({
        deadline: res.data.data.deadline,
        task: res.data.data.task,
        status: res.data.data.status,
      });
    });
  }, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
