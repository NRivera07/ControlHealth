import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from '../../redux/action/action';
// import { useHistory } from 'react-router-dom';

const Register = () => {

    const [state, setState] = useState({
        nombre: "",
        email: "",
        password: "",
        password_confirm: ""
    })
    const { nombre, email, password, password_confirm } = state;

    const dispatch = useDispatch();
    // const {currentUser} = useSelector(state => state.user);
    // const history = useHistory();

    const handleSubmit = (e) => { 
        e.preventDefault();

        if(password !== password_confirm){
            return;
        }
        
        dispatch(registerInitiate(nombre, email, password));
        setState({email: "", nombre: "", password: "", password_confirm: ""})
    }
    

    // useEffect(() => {
    //     if(currentUser){
    //         history.push('/');
    //     }
    // },[currentUser])

    const handleChange = (e) => { 
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    return (
        <>
            <h1>Crear usuario</h1>
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="nombre">Nombre</label>

                    <input type="text"
                        placeholder="Nombre"
                        id='nombre'
                        value={nombre}
                        name="nombre"
                        onChange={handleChange}
                    >

                    </input>
                </div>

                <div >
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        placeholder="Email"
                        id='email'
                        value={email}
                        name="email"
                        onChange={handleChange}
                    >

                    </input>
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type='password'
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                        name="password"
                    >

                    </input>
                </div>
                <div >
                    <label htmlFor="password_confirm">Password_confirm</label>
                    <input type='password'
                        placeholder="Password_confirm"
                        onChange={handleChange}
                        value={password_confirm}
                        name="password_confirm"
                    >

                    </input>
                </div>

                <button type="submit" >Enviar</button>
                <hr />

                <p>You do not have an account ?</p>
                
            </form>
        </>
    )
}

export default Register
