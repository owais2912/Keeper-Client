import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user-data");
    if (auth) {
      navigate("/notes");
    }
  });
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
      const { token, user } = await loginUser(formData);
      localStorage.setItem("token", token);
      localStorage.setItem("user-data", JSON.stringify(user));

      setFormData(initialState);
      setErrorMessage("");
      navigate("/notes");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.message);
      } else {
        console.log(error);
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <div className="registration-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <div>
          <button type="submit">Login</button>
        </div>
        <p>{errorMessage && errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;
