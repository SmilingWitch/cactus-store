import { Link, useNavigate } from "react-router-dom";


function Card({userId}) {

    const navigate = useNavigate() 
    const handleClick  = () => {
        navigate(`/${userId}`)
   }
   
   return <>

            <div className = "card" onClick = {handleClick}>
                card
            </div>
 
    </>
}

export default Card ;