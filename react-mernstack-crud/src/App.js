import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-task"} className="nav-link">
            Task App
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-task"} className="nav-link">
                  Add task
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/task-list"} className="nav-link">
                  View tasks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-task" element={<CreateTask />} />
            <Route exact path="/edit-task/:id" element={<EditTask />} />
            <Route exact path="/task-list" element={<TaskList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
