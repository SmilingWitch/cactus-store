import "./LogIn.css"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, Navigate} from "react-router-dom";


function LogIn() {

    function log(username,password) {
        return {
            username: username,
            password: password
        }
    }

    async function logIn(username,password) {
        const order = log(username,password);
        console.log(order);
        return await axios.post('http://localhost:8000/login/',order); 
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect,SetRedirect] = useState(false)
    const [correct,SetCorrect] = useState(true)

    const handleChange = (e) => {
      if (e.target.name === 'username') {
        setUsername(e.target.value);
      } else if (e.target.name === 'password') {
        setPassword(e.target.value);
      }

    }

    const  handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await logIn(username, password);
            console.log(res);
            if (res.status === 200) {
              SetRedirect(true);
              const token = res.data.token;
              const refresh_token = res.data.refresh_token;
              console.log(token)
              localStorage.setItem('token', token);
            }
          } catch (error) {
            console.log(error.response.status);
            if (error.response.status === 400) {
              SetCorrect(false);
              console.log("error");
            }
          }

    }
    
    if(redirect === true){
        return <Navigate to = "/catalogue"></Navigate>
    }

    return( 
        <div className="principalContainer">
            <div className="blur">
                <div className="secundaryContainer">
                    <div className="userInfo">
                        <div className="bgSecundary"> 
                            <span>Welcome!!!</span> 
                        </div>
                        <div className="info3">
                            <div className="all">
                                <span className="logg">Sing in</span>
                                <span className = {correct === true ? "invisible" : "visible"} >Incorrect username or password </span>
                                <form action="" onSubmit={ (e) => handleSubmit(e)} > 
                                    <label >User Name</label><br />
                                    <input type="text" required name="username" value={username} onChange={handleChange} className="form-control" /><br />
                                    <label>Password</label><br />
                                    <input type="password" required name="password" value={password} onChange={handleChange} className="form-control" /><br />
                                    <button  type= "submit" className="btn btn-primary">Submit</button>
                                </form>
                                <Link to = "/singup"><span className="acc" > Don't you have an account?</span></Link>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default LogIn ;