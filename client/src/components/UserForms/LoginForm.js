import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setUser}) => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    let navigate = useNavigate()

    const handleChange = (e) => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    };   
 
    const handleSubmit = (e) => {
        e.preventDefault()
        let params = {
          ...formData  
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => {
            if(resp.ok){
                resp.json()
                .then((json) => {
                    setUser(json)
                    navigate(`/`)
                })
            } else {
                resp.json()
                .then((json) => {
                    setErrors(json.errors)
                })
            }
        })
    }

    const handleWindow = () => {
        window.open();
       
    }; 
    
    return (
        <div className='login-page'>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <label htmlFor="username">Username:</label>
                    <input onChange={handleChange} type="text" name="username" value={formData.username}/>
                    <label htmlFor="password">Password:</label>
                    <input onChange={handleChange} type="password" name="password" value={formData.password}/>
                    <br/>
                    <button type="submit" className='login-button'>Log in</button>
                    <p style={{color: "black"}}>{errors}</p>
                </form>
                <p>Dont have an account? <a href='/signup'>Sign-Up!</a></p>
                <p className='forgot-pass' onClick={handleWindow}><a href='/signup'>Forgot Password?</a></p>
            </div>
        </div>
    )
};
export default LoginForm;