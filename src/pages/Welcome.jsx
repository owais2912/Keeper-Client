import React, { useState } from "react";
import Register from "./Register/index";
import "../assets/style.css";
import Login from "./Login";

const Welcome = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="welcome-container">
      <div className="welcome-message">
        {/* <h1>Welcome to Keeper App</h1>
        <p>
          Keep your notes organized at one place with Keeper App, your ultimate
          digital notebook. Whether you're jotting down ideas, managing to-do
          lists, or capturing memories, our app makes it easy and efficient.
          Access your notes on any device, anytime, ensuring you never lose a
          thought again. With advanced search functionalities, seamless
          integration options, and intuitive categorization, managing your daily
          tasks and long-term projects has never been easier. Start simplifying
          your life today with Keeper App.
        </p> */}
        <h1>Welcome to the Keeper App</h1>
        {/* <hr /> */}
        <p>
          Organize your thoughts effortlessly with Keeper App, your all-in-one
          digital notebook. From daily tasks to long-term projects, access and
          manage your notes from any device, anytime. Start simplifying your
          note-keeping today!
        </p>
      </div>
      <div className="register-container">
        {/* <Register /> */}
        {showLogin ? <Login /> : <Register onLoginClick={toggleShowLogin} />}
      </div>
    </div>
  );
};

export default Welcome;
