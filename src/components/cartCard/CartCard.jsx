import "./CartCard.css"
import {GoTrashcan} from "react-icons/go"
import {AiOutlinePlus} from "react-icons/ai"
import {HiOutlineMinus} from "react-icons/hi"
import axios from "axios";
import { useState , useEffect } from "react";


function CartCard() {

    const [totalP, setTotalP] = useState();
    const [totalI, setTotalI] = useState();
    const [subtotalP, setSubtotalP] = useState();
     

    const carrito = JSON.parse(localStorage.getItem('miArreglo'));
    console.log("CARRITO", carrito)
    /*console.log("ORDER", order.order)*/
      
      var totalPrice = 0;
      var totalItems = 0;
      var subtotal = 0
      
      const sum = (carrito) => {
        // Verificar si carrito está definido antes de ejecutar el map
        if (carrito) {
          carrito.map((item) => {
            totalPrice += item.qty * item.cost;
            totalItems += item.qty;
            
          });
          setTotalP(totalPrice.toFixed(2));
          setTotalI(totalItems);
          localStorage.setItem("totalItems", totalItems);
        }
      };

      useEffect(() => {
        sum(carrito);
      }, [carrito]);
    

      const incDec = (id, option, carrito) => {
        const actions = {

          dec: () => {
            const updatedCarritoDec = carrito.map((item) => {
              if (item.plant_id === id && item.qty >= 1) {
                return { ...item, qty: item.qty - 1 };
              }
              return item;
            });
            
            localStorage.setItem("miArreglo", JSON.stringify(updatedCarritoDec));
            sum(updatedCarritoDec);
          },

          inc: () => {
            const updatedCarritoInc = carrito.map((item) => {
              if (item.plant_id === id) {
                return { ...item, qty: item.qty + 1 };
              }
              return item;
            });
            
            localStorage.setItem("miArreglo", JSON.stringify(updatedCarritoInc));
            sum(updatedCarritoInc);
          },
        };
      
        const action = actions[option];
        if (action) {
          action();
        } else {
          // Código para manejar opciones desconocidas
        }
      };
      const filteredCarrito = carrito.filter((item) => item.qty !== 0);
    

     
      

      const SendCart = (filteredCarrito) => {
            const order = {
              order: filteredCarrito
            };

            console.log("ORDER", order)
      }
    
      
    return (
        <div className="orderArea">
            <div className='namebar'>
                    Shopping Card
            </div>
            <div className="orderBx">
                <div className="itemsBx">
                    <div className="subTitles">
                        <span className="prod">Products</span>
                        <span className="price">Price</span>
                        <span className="qty">Quantity</span>
                        <span className="st">Subtotal</span>
                    </div>
                    {filteredCarrito.map((item) => {
                        return <div className="cartCont">
                        <div className="productImg">
                            <img src={`http://localhost:8000${item.image}`}/>
                        </div>
                        <div className="productName">
                             <span>{item.plant_name}</span>
                        </div>
                        <div className="productPrice">
                             <span>${item.cost}</span>
                        </div>
                        <div className="iconBx">
                            <div className="iconCenter">
                                <div className="minus" onClick={() =>
                                     incDec(item.plant_id,"dec",carrito)}>
                                        <HiOutlineMinus/>
                                </div>
                                <div className="addNumber">{item.qty}</div>
                                <div className="addIcon" onClick={() => {
                                    incDec(item.plant_id,"inc",carrito)}}>
                                        <AiOutlinePlus/>
                                </div>
                            </div>
                        </div>
                        <div className="subtotal">
                            {(item.qty * item.cost).toFixed(2)}
                        </div>
                        <div className="trash1">
                            <GoTrashcan/>
                        </div>
                        </div>
                    })}
                </div>
                
                <div className='infobar'>
                    <div className='items'>
                        <div className="cartheader">
                            Order Summary
                        </div>
                        <div className='totalItems'>
                            <span>Total Items</span>{totalI}
                        </div>
                        <div className='totalPrice'>
                            <span>Total</span> ${totalP}
                        </div>
                    </div>
                    <div className='order' onClick={() => {
                                    SendCart(filteredCarrito)}}> 
                        CHECKOUT
                    </div>
                </div>
            </div>
      
            
        </div>
                
    );
}

export default CartCard ;