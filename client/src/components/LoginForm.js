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
                    // console.log(json)
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
    return (
        <div className="text-white">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" name="username" value={formData.username}/>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" name="password" value={formData.password}/>
                <button type="submit">Log in</button>
            </form>
            <br/>
            <p style={{color: "red"}}>{errors}</p>
        </div>
    )
}
export default LoginForm;