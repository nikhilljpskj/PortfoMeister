import React from 'react';
import { Link, NavLink } from "react-router-dom"
import "./Register.scss"
import Header from '../Header/Header';

const Register = () => {
  return (
    <div>
    <div className="register">
      <div className="card">

        <div className="left">
          <h1>PortfoMeister</h1>
          <p>Create and showcase your professional portfolio with ease.</p>
          <span>Have an account?</span>

        <NavLink to="/login">
                <button className="cta-button">Login</button>
                {/* to navigate to the login form when clicked on login */}
        </NavLink>
          
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Email"/>

            <button className="cta-button">Register</button>
          </form>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Register