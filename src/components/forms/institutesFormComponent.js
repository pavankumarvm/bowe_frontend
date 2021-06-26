import { useState } from "react";

const InstituteForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="tab-panel" id="nav-clients-panel">
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
        <div className="form-textarea-box">
          <textarea
            rows="3"
            cols="50"
            className="form-textarea"
            type="text"
            id="address"
            name="address"
            placeholder="Office Address/Correspondence Address"
            maxLength="500"
            required
            value={state.address}
            onChange={handleChange}
          ></textarea>
          <div className="charcounter">{500 - state.address.length}</div>
        </div>

        <input
          className="form-input"
          type="number"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          maxLength="10"
          required
          value={state.phone}
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
            maxLength="500"
            required
            value={state.message}
            onChange={handleChange}
          ></textarea>
          <div className="charcounter">{500 - state.message.length}</div>
        </div>
        <button type="submit" className="submit" id="submit" name="client-form">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InstituteForm;
