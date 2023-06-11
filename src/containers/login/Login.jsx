import React from "react";
import logo from "./../../assets/ilogo.jpeg";
import { CommonInput, CtaButton } from "../../components";
import "./login.css";

const inputField = ["Email ID", "Password"];

const Login = () => {
  return (
    <div className="user-login">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="login-form">
        <h1 className="title-heading">Sign in</h1>

        <div className="input-fields">
          {inputField.map((item) => (
            <CommonInput placeholderText={item} />
          ))}
        </div>
        <a href="/">
          <CtaButton text="Login" />
        </a>
      </div>
      <div className="warning">
        <p  style={{marginBottom:"1rem"}}>
          1.Check your computer or device in advance to ensure it meets the
          requirements for the online exam
        </p>
        <p  style={{marginBottom:"1rem"}}>
         2. Choose a quiet and well-lit location where you can focus without
          distractions
        </p>
        <p  style={{marginBottom:"1rem"}}>
          3.Make sure you have a comfortable seating arrangement and that the area
          around you is clear of any prohibited items.
        </p>
        <p  style={{marginBottom:"1rem"}}>
          4.Close any unnecessary applications or tabs to optimize system
          performance during the exam.
        </p>
        <p  style={{marginBottom:"1rem"}}>
          5.Avoid any form of cheating, such as referring to unauthorized
          materials, communicating with others, or using prohibited devices.
        </p>
        <p  style={{marginBottom:"1rem"}}>
          6.Follow the proctor's instructions for webcam, microphone, or screen
          recording as applicable.
        </p>
      </div>
    </div>
  );
};

export default Login;
