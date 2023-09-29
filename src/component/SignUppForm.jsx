import React from "react";
import { useState } from "react";

const SignUppForm = () => {

    const[formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailEdress:"",
        passWord: "",
        conformPassword: "",
    });

    const inputChangHandaler = (event) => {

        setFormData( (previous) => (
            {
                ...previous,
                [event.target.name]: event.target.value
            }
        ))   
    }

    const formSubmitHandaler = () => {
      
    }

  return (
    <form onSubmit={formSubmitHandaler}>
      <div>

        <label>First Name : </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={inputChangHandaler}
          value={FormData.firstName}
        />

        <br />
        <br />

        <label>Last Name : </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="last name"
          onChange={inputChangHandaler}
          value={FormData.lastName}
        />
        <br />
        <br />

        <label>Email : </label>
        <br />
        <input
          type="email"
          name="emailEdress"
          id="emailEdress"
          placeholder="Enter Email"
          onChange={inputChangHandaler}
          value={FormData.passWordData}
        />
        <br />
        <br />

        <label>Password : </label>
        <br />
        <input
          type="password"
          name="passWord"
          id="passWord"
          placeholder="password"
          onChange={inputChangHandaler}
          value={FormData.passWord}
        />
        <br />
        <br />

        <label>Conform Password : </label>
        <br />
        <input
          type="password"
          name="conformPassword"
          id="conformPassword"
          placeholder="Conform Password"
          onChange={inputChangHandaler}
          value={FormData.conformPassword}
        />

      </div>

      <button className="p-2 bg-green-400 text-white mt-4">Create Account</button>
    </form>
  );
};

export default SignUppForm;
