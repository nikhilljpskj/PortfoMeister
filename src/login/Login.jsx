// import React from 'react';
// import { Link, NavLink } from "react-router-dom"
// import "./Login.scss"
// import Header from '../Header/Header';

// const Login = () => {
//   return (
//     <div>
//     <div className="login">
//       <div className="card">

//         <div className="left">
//           <h1>PortfoMeister</h1>
//           <p>Create and showcase your professional portfolio with ease.</p>
//           <span>Don't you have an account?</span>
//           <NavLink to="/register">
//                   <button className="cta-button">Register</button>  
//           </NavLink>
          
//         </div>

//         <div className="right">
//           <h1>Login</h1>
//           <form>
//             <input type="text" placeholder="Username"/>
//             <input type="password" placeholder="Password"/>
//             <br/>
//             <NavLink to="/">
//             <button className="cta-button">Login</button>
//             </NavLink>
//           </form>
//         </div>

//       </div>
//     </div>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import './Login.scss';
import { supabase } from '../client';

const Login = () => {
  let navigate = useNavigate() 

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.username, // Assuming the username is an email address
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      navigate('/home')

      // Redirect or perform other actions upon successful login
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>PortfoMeister</h1>
            <p>Create and showcase your professional portfolio with ease.</p>
            <span>Don't you have an account?</span>
            <NavLink to="/register">
              <button className="cta-button">Register</button>
            </NavLink>
          </div>

          <div className="right">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email" name="username" onChange={handleChange} />
              <input type="password" placeholder="Password" name="password" onChange={handleChange} />
              <br />
              <button type="submit" className="cta-button">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
