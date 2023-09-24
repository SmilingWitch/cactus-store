import { NavLink } from "react-router-dom";
import {RiCactusFill} from "react-icons/ri";
import {RiMenuLine} from "react-icons/ri";
import {useState, useEffect} from  "react";
import {BiCart} from "react-icons/bi"
import "./Navbar.css";
import { BsArrowDownShort } from "react-icons/bs";
import axios from "axios";


function Navbar() {

    const [hMenu,setHmenu] = useState(false) ;
    const [items, setItems] = useState();
    const [circle, setCircle] = useState();
    const token = localStorage.getItem('token');

   
    const  SingOut = async () => {
        const token = localStorage.getItem('token');

        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        };
        
            let res = await axios.get("https://cactus-shopi.onrender.com/logout/", config);
            console.log(res);
            localStorage.setItem('token', "");
            localStorage.setItem('refresh_token', "");
    }


    function renderContent() {
        if (token === "") {
          return <NavLink to = "/login" className = "log" onClick = {() => {setHmenu(!hMenu)}}  >Sing in</NavLink>
        } else {
          return <div className =  "log" onClick={SingOut} > Sing Out </div>;
        }
      }
    

    return(
    <div className="bar">
        <div className="hamburguerMenu">
            <div className="list">
                <div className="menu" >
                        <RiMenuLine className="Micon" onClick={() => {setHmenu(!hMenu)}} />
                </div>
                <ul className= {hMenu === true  ? "Active dropdown" : "notActive dropdown" } >
                    <li>
                        <NavLink to = "/"  className = {({isActive}) => (isActive ? "active " : "a")  } onClick={() => {setHmenu(!hMenu)}} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/catalogue" className = {({isActive}) => (isActive ? "active " : "a")  } >
                                <span className="catalogue" onClick = {() => {setHmenu(!hMenu)}} >Catalogue</span>  
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/info" className = {({isActive}) => (isActive ? "active " : "a") } onClick = {() => {setHmenu(!hMenu)}}  >Blog</NavLink>
                    </li>
                    <li>
                        {renderContent()}
                    </li>
                    <li>
                    <NavLink to = "/singup" className =  "sing" onClick = {() => {setHmenu(!hMenu)}}>Sing up</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="cartjoin">
            <div className="cart"> 
                    <NavLink to = "/cart" className =  "cCart">
                        <BiCart className="iconCart"/>
                    </NavLink>
                    {/*<div className = "cartCircle" >
                        <span className="articles" >{items}</span>
    </div>*/}
            </div>
        </div>
        

        
            
        

                                     
                                
        
    </div>
    )


}

export default Navbar ;