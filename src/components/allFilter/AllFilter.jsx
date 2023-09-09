import ProductCard1 from "../productCard1/ProductCard1"
import "./AllFilter.css"
import axios from "axios";
import { useState , useEffect } from "react";
import Cactus from "../cactus/Cactus"
import Suculentas from "../suculentas/Suculentas"
import Filter from "../filter/Filter";

const succUrl = "http://127.0.0.1:8000/plants/plant/" ;


function AllFilter() {

    const [getDataS, setGetDataS] = useState([{}]);

    useEffect( () => {
        async function handleGetS() {
            let res = await axios.get(succUrl) ;
            console.log(res.data)
            setGetDataS(res.data)
        }
        handleGetS();
    }, [])


    return <div className = "contcard1">
        <div className="header2">
            <span>Our Plants</span>
        </div>
        <Filter></Filter>
        <div className="fancy1">
            <Cactus></Cactus>
            <Suculentas></Suculentas>
            <div className="headerCactus1"  name= "all">
                All
            </div>
            <div className="gridCard">
            {getDataS.map((item)=> {
                return ( 
                <ProductCard1 name = {item.name} precio = {item.cost} img = {item.image} id = {item.id}/>)
            })}
            </div>
        </div>
    </div>
}


export default AllFilter ;