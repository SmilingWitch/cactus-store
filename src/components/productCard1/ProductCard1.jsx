
import "./ProductCard1.css"
import {AiOutlinePlus} from "react-icons/ai"
import img1 from "./1.jpeg"
import axios from "axios";
import {BiCart} from "react-icons/bi"
import { useState , useEffect } from "react";
import {Navigate} from "react-router-dom";


function ProductCard1({name , precio, img, id}) {

    const [redirect,SetRedirect] = useState(false)

    /*----------ADD TO CART PETITION----------*/

    const  add = async (id) => {
        const token = localStorage.getItem('token');
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        };
        try {
            let res = await axios.get(`https://cactus-shopi.onrender.com/client/car/add_car/?plant_id=${id}`, config);
            console.log(res);

            /*---------------PARA GUARDAR LA PLANTA EN EL CARRITO---------------*/ 

            // Obtiene los datos de respuesta
            const responseData = res.data.order_items[0];
            console.log(responseData)

            // Obtiene el arreglo existente en el local storage (si existe)
            const existingData = localStorage.getItem('miArreglo');
            console.log("carrito", existingData)
            
            // Crea un nuevo arreglo si no hay datos previos en el local storage
            let updatedData = existingData ? JSON.parse(existingData) : [];

            // Verifica si el ID ya existe en el arreglo existente
            const existingObject = updatedData.find(obj => obj.plant_id === responseData.plant_id);
            console.log("Existing data", existingObject )

            if (existingObject) {
              // Si el ID existe, suma uno a la clave "qty"
              existingObject.qty += 1;
            } else {
              // Si el ID no existe, agrega un nuevo objeto al arreglo
              updatedData.push({ 
                plant_id: responseData.plant_id, 
                qty: 1, 
                image: responseData.image,
                plant_name: responseData.plant_name, 
                cost: responseData.cost,
             });
            }
            // Guarda el arreglo actualizado en el local storage
            localStorage.setItem('miArreglo', JSON.stringify(updatedData));
            const carrito = localStorage.getItem('miArreglo');

            console.log('Respuesta agregada al local storage:', responseData);
            console.log("carrito", carrito)

            
          } catch (error) {
            console.log(error.response.status);
            SetRedirect(true);
          }
    }

    if(redirect === true){
        return <Navigate to = "/singup"></Navigate>
    }


    return (
        <div className="allCard2">
            <div className="card122">
                <div className="imgBx12">
                        <img src={`https://cactus-shopi.onrender.com${img}`}  />
                </div>
                <div className="namePlant2">
                        {name}
                </div>
                <div className="information2">
                    <div className="price2">
                        <span>${precio}</span>
                    </div>
                    <div className="add2"onClick={() => add(id)} >
                        <BiCart />
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default ProductCard1 ;