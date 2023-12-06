// import React from 'react';
// import { Link, NavLink } from "react-router-dom"
// import "./Register.scss"
// import Header from '../Header/Header';

// const Register = () => {

//   return (
//     <div>
//     <div className="register">
//       <div className="card">

//         <div className="left">
//           <h1>PortfoMeister</h1>
//           <p>Create and showcase your professional portfolio with ease.</p>
//           <span>Have an account?</span>

//         <NavLink to="/login">
//                 <button className="cta-button">Login</button>
//                 {/* to navigate to the login form when clicked on login */}
//         </NavLink>
          
//         </div>

//         <div className="right">
//           <h1>Register</h1>
//           <form>
//             <input type="text" placeholder="Name" onChange={handlechange}/>
//             <input type="text" placeholder="Username"/>
//             <input type="password" placeholder="Password"/>
//             <input type="text" placeholder="Email"/>

//             <button className="cta-button">Register</button>
//           </form>
//         </div>

//       </div>
//     </div>
//     </div>
//   )
// }

// export default Register




import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.scss';
import { supabase } from '../client';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        username: formData.username,
      });
      alert('Check your email for verification link');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>PortfoMeister</h1>
            <p>Create and showcase your professional portfolio with ease.</p>
            <span>Have an account?</span>

            <NavLink to="/">
              <button className="cta-button">Login</button>
            </NavLink>
          </div>

          <div className="right">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="name" onChange={handleChange} />
              <input type="text" placeholder="Username" name="username" onChange={handleChange} />
              <input type="password" placeholder="Password" name="password" onChange={handleChange} />
              <input type="text" placeholder="Email" name="email" onChange={handleChange} />

              <button type="submit" className="cta-button">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
