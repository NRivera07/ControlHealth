import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { loginInitiate } from "../../redux/action/action";
import { useHistory } from 'react-router-dom';



const Login = () => {

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const { email, password } = state;

  const dispatch = useDispatch();

  const {currentUser} = useSelector(state => state.user);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password)
      return

    dispatch(loginInitiate(email, password));
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  useEffect(() => {
        if(currentUser){
            history.push('/');
        }
    },[currentUser, history])

  return (
    <>
      <h1>Image</h1>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" onChange={handleChange} id='email' value={email} name="email"></input>
        </div>
        <div >
          <label htmlFor="password">Password</label>
          <input type='password' placeholder="Password" onChange={handleChange} id="password" value={password} name="password"></input>
        </div>
        <button type="submit" >Login</button>
        <hr />
        <p>You do not have an account ?</p>
        <Link to="/register">sing up</Link>
      </form>
    </>
  )
}

export default Login
