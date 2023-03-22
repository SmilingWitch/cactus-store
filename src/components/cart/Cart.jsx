import "./Cart.css"
import {GoTrashcan} from "react-icons/go"
import {AiOutlinePlus} from "react-icons/ai"
import axios from "axios";
import { useState , useEffect } from "react";

function newOrder(name,price,photo,qty) {
     return {
         name: name,
         price: price,
         photo:photo,
         qty:qty
     }
}

function Cart({name , precio, img, qty}) {

     const [item, setItem] = useState({});
     const ordersUrl = "http://localhost:3001/orderItem"

     async function loadItem(url) {
          let res = await axios.get(url);
          setItem(res.data)
     }

     async function addItem() {
          console.log("add item called")
          const res = await axios.get(ordersUrl);          
          console.log(res.data)
          res.data.map((item) => {
               if (name === item.name ) {                    
                    const order = newOrder(item.name,item.price,item.photo,item.qty += 1)
                    let orderUrl = `${ordersUrl}/${item.id}`
                    axios.put(orderUrl,order);
                    loadItem(orderUrl)
               }
          });
     }

    async function delItem() {
          let res = await axios.get(ordersUrl);
          console.log("del item called")
          console.log(res.data)
     
          res.data.map((item) => {
               if (name === item.name) {
                    if (item.qty === 1) {
                         let orderUrl = `${ordersUrl}/${item.id}`
                         axios.delete(orderUrl)                         
                         loadItem(orderUrl)
                    } else {
                         const order = newOrder(item.name,item.price,item.photo,item.qty-1)
                         let orderUrl = `${ordersUrl}/${item.id}`
                         axios.put(orderUrl,order);                         
                         loadItem(orderUrl)
                    }
               }
          })
     } 
          
    return (
        <div className="cartCont">
           <div className="productImg">
                <img src={`./${img}.jpeg`} />
           </div>
           <div className="productInfo">
            <div className="prodBx">
                <div className="productName">
                     <span>{name}</span>
                </div>
                <div className="productPrice">
                     <span>${precio}</span>
                </div>
            </div>

           </div>
           <div className="iconBx">
                <div className="trash" onClick={() => delItem()}><GoTrashcan/></div>
                <div className="addNumber">{item.qty}</div>
                <div className="addIcon" onClick={() => addItem()} ><AiOutlinePlus/></div>

           </div>
        </div>
    );
}

export default Cart ;