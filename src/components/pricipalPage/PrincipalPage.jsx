import Card from "../card/Card";
import "./PrincipalPage.css"
import { useNavigate } from "react-router-dom";

function PrincipalPage() {

    const navigate = useNavigate() 
    const handleClick  = () => {
        navigate("/all")
    }
    return <div className = "page">
                <div className = "container">
                    <div className = "header">
                        <h1 className = "texto">Cactus  </h1> 
                    </div>
                    <div className = "Bx">
                        <div className = "cardBx">
                            <div className = "suculentas Card">
                                <Card userId = "cactus & suculents"/>
                            </div>
                            <div className = "info Card">
                                <Card userId = "info"/>
                            </div>
                        </div>
                        <div className = "content">
                            <submit className = "button" onClick = {handleClick}> View all</submit>
                            
                                
                        </div>
                            
                        
                        
                    </div>                    
                </div>
                 
    </div>
}

export default PrincipalPage ;