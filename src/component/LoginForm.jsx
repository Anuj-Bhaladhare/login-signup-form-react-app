import React from "react";
import { useState } from "react";

const LoginForm = () => {

    const[formData, setFormData] = useState({
        emailEdress:"",
        passWordData: ""
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

    return(
        <form onSubmit={formSubmitHandaler}>
            <label>Email : </label>
            <br/>
            <input
              type='email'
              name='emailEdress'
              id='emailEdress'
              placeholder='Enter Your Email'
              onChange={inputChangHandaler}
              value={FormData.emailEdress}
            />
            <br/>
            <br/>

            <label>Password : </label>
            <br/>
            <input
              type='password'
              name='passWordData'
              id='passWordData'
              placeholder='Enter Your password'
              onChange={inputChangHandaler}
              value={FormData.passWordData}
            />

            <div>
                <button className="p-2 bg-green-400 text-white mt-4">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;