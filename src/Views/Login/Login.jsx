import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })
  const {email, password} = state;

  const handleSubmit = (param) => {
    
  }
  const handleChange = (params) => {
    
  }
  
  return (
    <>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" id='email'value={email} name="email"></input>
        </div>
        <div >
          <label htmlFor="password">Password</label>
            <input type='password' placeholder="Password" onChange={handleChange} value={password} name="password"></input>
        </div>
        <button type="submit" >Enviar</button>
        <hr />
        <p>You do not have an account ?</p>
        <Link to="/Home"></Link>
    </form>
    </>
  )
}

export default Login
