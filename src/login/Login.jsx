import React from 'react';
import { Link, NavLink } from "react-router-dom"
import "./Login.scss"
import Header from '../Header/Header';

const Login = () => {
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
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <br/>
            <NavLink to="/">
            <button className="cta-button">Login</button>
            </NavLink>
          </form>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Login