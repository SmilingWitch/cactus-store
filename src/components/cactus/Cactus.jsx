import ProductCard from "../productCard/ProductCard";
import "./Cactus.css"
import axios from "axios";
import { useState , useEffect } from "react";
import ProductCard1 from "../productCard1/ProductCard1";

const cactusUrl = "https://cactus-shopi.onrender.com/plants/plant/" ;

function Cactus() {

    const [getDataC, setGetDataC] = useState([{}]);



    /*----Funcion para pedir la informacion de las card---- */
    
    useEffect( () => {
        async function handleGetC() {
            let res = await axios.get(cactusUrl) ;
            console.log(res.data)

            const cactusArrays = res.data.filter((item) => item.category === "Cactus");
            console.log(cactusArrays);
            setGetDataC(cactusArrays);
        }
        handleGetC();
    }, [])

    

    return <div className = "contcard" name= "cactus">
    <div className="fancy">
        <div className="headerCactus">
                Cactus
        </div>
        <div className="gridCard">
        {getDataC.map((item)=> {
                return <ProductCard1 name = {item.name} precio = {item.cost} img = {item.image} id = {item.id}/>
                
            })}
        </div>
    </div>
    
</div>
}

 
export default Cactus ;