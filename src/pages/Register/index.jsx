import React, { useEffect, useState } from "react";
import { registerUser } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Register = ({ onLoginClick }) => {
  const navigate = useNavigate();
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setFormData(initialState);
      setErrorMessage("");
      onLoginClick();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.message);
      } else {
        console.log(error);
        setErrorMessage(error.message);
      }
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("user-data");
    if (auth) {
      navigate("/notes");
    }
  });
  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Register</button>
          <p className="error-message">{errorMessage && errorMessage}</p>
          <p>
            Already a user? <a onClick={onLoginClick}>Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
