import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (_id) => {
    axios
      .delete("http://localhost:4000/tasks/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
        // Filter out the deleted task from the current state
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/tasks/")
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Deadline</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.deadline}</td>
                <td>{task.task}</td>
                <td>{task.status}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-task/" + task._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
