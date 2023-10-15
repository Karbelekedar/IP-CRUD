import React, { useEffect, useState } from "react";
import axios from "axios";
function CreateStudent() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students/create-student", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          rollno: "",
        });
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
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Task</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            {/* <input
              type="text"
              className="form-control"
              name="rollno"
              id="rollno"
              value={userForm.rollno}
              onChange={inputsHandler}
            /> */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <label style={{ margin: '1vh' }}>
                  <input
                    type="radio"
                    name="rollno"
                    value="pending"
                    checked={userForm.rollno === "pending"}
                    onChange={inputsHandler}
                  />
                  Pending
                </label >
                <label style={{ margin: '1vh' }}>
                  <input
                    type="radio"
                    name="rollno"
                    value="ongoing"
                    checked={userForm.rollno === "ongoing"}
                    onChange={inputsHandler}
                  />
                  Ongoing
                </label>
                <label style={{ margin: '1vh' }}>
                  <input
                    type="radio"
                    name="rollno"
                    value="completed"
                    checked={userForm.rollno === "completed"}
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
export default CreateStudent;
