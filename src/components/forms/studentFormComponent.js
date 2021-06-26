import { useState } from "react";

const StudentForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
    college: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="tab-panel" id="nav-student-panel">
      <form className="form">
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={state.name}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          id="state"
          name="state"
          placeholder="State"
          required
          value={state.state}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          id="city"
          name="city"
          placeholder="City"
          required
          value={state.city}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          id="college"
          name="College"
          placeholder="College"
          required
          value={state.college}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          id="position"
          name="position"
          placeholder="Position Applied for"
          required
          value={state.position}
          onChange={handleChange}
        />
        <div className="form-textarea-box">
          <textarea
            rows="3"
            cols="50"
            className="form-textarea"
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            data-length="500"
            max-length="500"
            required
            value={state.message}
            onChange={handleChange}
          ></textarea>
          <div className="charcounter">{500 - state.message.length}</div>
        </div>
        <div>
          <label for="file" className="resume">
            Upload your Resume:
          </label>
          <input
            className="form-input"
            type="file"
            id="upload"
            name="file"
            required
          />
        </div>
        <button
          type="submit"
          className="submit"
          id="submit"
          name="student-form"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
