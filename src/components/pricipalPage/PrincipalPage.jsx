import Card from "../card/Card";
import "./PrincipalPage.css"

function PrincipalPage() {
    return <div className = "page">
                <div className = "cardBx">
                    
                </div>
                <div className = "bgBox">
                    <div className = "bg1">
                        <h1>Cactus Store </h1>  
                    </div>
                    <div className = "bg2">
                        <div className = "suculentas Card">
                            <Card userId = "suculentas"/>
                        </div>
                        <div className = "cactus Card">
                            <Card userId = "cactus"/>
                        </div>
                    </div>
                </div>   
    </div>
}

export default PrincipalPage ;