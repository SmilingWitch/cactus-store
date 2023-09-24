import "./SingUp.css"
import React, { useState} from 'react';
import axios from "axios";
import { Link,Navigate } from "react-router-dom";



function SingUp() {

    function log(username,password) {
        return {
            username: username,
            password: password,
            email: email,
            name:"",
            last_name: "",
            image: null
        }
    }

    async function logIn(username,password,email) {
        const order = log(username,password,email);
        console.log(order);
        return await axios.post('https://cactus-shopi.onrender.com/user/register/',order);
        
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
      const [redirect,SetRedirect] = useState(false)
    const [correct,SetCorrect] = useState(true)

    const handleChange = (e) => {
      if (e.target.name === 'username') {
        setUsername(e.target.value);

      } else if (e.target.name === 'email') {
        setEmail(e.target.value);
      }
      else if(e.target.name === 'password'){
        setPassword(e.target.value);
      }
      
    }

    const  handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await logIn(username,password,email);
            console.log(res.status);
            if (res.status === 200) {
              SetRedirect(true);
            }
          } catch (error) {
            console.log(error.response.status);
            if (error.response.status === 400) {
              SetCorrect(false);
              console.log("error");
            }
          }
    }

    return (
        <div className="principalContainer">
            <div className="blur">
                <div className="secundaryContainer">
                    <div className="userInfo">
                        <div className="bgSecundary"> 
                            <span>Welcome!!!</span> 
                        </div>
                        <div className="info3">
                            <div>
                                <span className="logg">Sing Up</span>
                                <span className = {correct === true ? "invisible" : "visible"} >The user is already exist </span>
                                <form action="" onSubmit={ (e) => handleSubmit(e)} > 
                                    <label >User Name</label><br />
                                    <input type="text" required name="username" value={username} onChange={handleChange} className="form-control" /><br />
                                    <label >Email</label><br />
                                    <input type="email"  name="email" value={email} onChange={handleChange} className="form-control" /><br />
                                    <label>Password</label><br />
                                    <input type="password" required name="password" value={password} onChange={handleChange} className="form-control" /><br />
                                    <button  type= "submit" className="btn btn-primary">Submit</button>
                                </form>
                                <Link to = "/login"><span className="acc"> Do you have an account?</span></Link>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default SingUp ;