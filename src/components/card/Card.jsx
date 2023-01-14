import { Link, useNavigate } from "react-router-dom";
import "./Card.css"
import {BiRightArrow} from "react-icons/bi"


function Card({userId}) {

    const navigate = useNavigate() 
    const handleClick  = () => {
        navigate(`/${userId}`)
   }
   
   return <>

            <div className = "card" >
                <div className = " suculentas cactus"></div>
                    
                    <h1 className = "name">
                        <div className ="line"></div>
                        {userId}
                    </h1>
                
                <div className = "img">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className = "icon" onClick = {handleClick}>
                    <BiRightArrow className = "arrow"/>
                </div>
            </div>
 
    </>
}

export default Card ;