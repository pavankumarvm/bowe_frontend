import { useState } from "react";

const ClientForm = () => {
  const [state, setState] = useState({
    name: "",
    website: "",
    state: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="tab-panel" id="nav-institute-panel">
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
          type="text"
          id="website"
          name="website"
          placeholder="Website"
          required
          value={state.website}
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
        <button
          type="submit"
          className="submit"
          id="submit"
          name="institutes-form"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
