import ProductCard1 from "../productCard1/ProductCard1";
import "./Suculentas.css";
import axios from "axios";
import { useState , useEffect } from "react";
import { json } from "react-router-dom";

const succUrl = "http://127.0.0.1:8000/plants/plant/" ;;


function Suculentas() {

    const [getData, setGetData] = useState([{}]);

    useEffect( () => {
        async function handleGet() {
            let res = await axios.get(succUrl) ;
            console.log(res.data)
            const cactusArrays = res.data.filter((item) => item.category === "Suculentas");
            console.log(cactusArrays);
            setGetData(cactusArrays);
        }
        handleGet();
    }, [])
    

    return  <div className = "contcard" name= "succ">
    <div className="fancy">
        <div className="headerCactus">
            Succulents
        </div>
        <div className="gridCard">
            {getData.map((item)=> {
                console.log(item)
                return <ProductCard1 name = {item.name} precio = {item.cost} img = {item.image} id = {item.id}/>
            })}
        </div>

    </div>
    
</div>
}

export default Suculentas ;