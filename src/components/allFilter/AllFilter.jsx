import "./AllFilter.css"

import img1 from "./cactus1.jpg"
import img2 from "./cactus2.jpg"
import img3 from "./cactus3.jpg"
import img4 from "./suculenta1.jpg"
import img5 from "./suculenta2.jpg"

let list = document.querySelectorAll('.list') ; 
let itemBox = document.querySelectorAll('.itemBox') ;

function AllFilter() {
    return <>
        <div className = "section">
           <ul>  
                <li className = "list active" data-filter = "all"> All</li> 
                <li className = "list" data-filter = "mobile"> Mobile</li> 
                <li className = "list" data-filter = "camera"> Camera</li> 
                <li className = "list" data-filter = "watch"> Watch</li> 
                <li className = "list" data-filter = "shoe"> Shoe</li> 
                <li className = "list" data-filter = "headphone">Headphone</li>   
            </ul>
            <div className = "product">
                <div className = "itemBox" data-item = "mobile" ><img src={img1}/></div>
                <div className = "itemBox" data-item = "camera" ><img src={img2}/></div>
                <div className = "itemBox" data-item = "watch" ><img src={img3}/></div>
                <div className = "itemBox" data-item = "shoe" ><img src={img4}/></div>
                <div className = "itemBox" data-item = "headphone" ><img src={img5}/></div> 
                <div className = "itemBox" data-item = "mobile" ><img src={img1}/></div>
                <div className = "itemBox" data-item = "camera" ><img src={img2}/></div>
                <div className = "itemBox" data-item = "watch" ><img src={img3}/></div>
                <div className = "itemBox" data-item = "shoe" ><img src={img4}/></div>
                <div className = "itemBox" data-item = "headphone" ><img src={img5}/></div> 
                <div className = "itemBox" data-item = "mobile" ><img src={img1}/></div>
                <div className = "itemBox" data-item = "camera" ><img src={img2}/></div>
                <div className = "itemBox" data-item = "watch" ><img src={img3}/></div>
                <div className = "itemBox" data-item = "shoe" ><img src={img4}/></div>
                <div className = "itemBox" data-item = "headphone" ><img src={img5}/></div> 
            </div>
        </div>
        {another()};
    </>
}

function another() {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length ; j++) {
            list[j].classList.remove('active') ;
                 } 
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter') ;
    
            for (let k = 0; k<itemBox.length; k++) {
                itemBox[k].classList.remove('active') ;
                itemBox[k].classList.add('hide') ;
    
                if (itemBox[k].getAttribute('data-item')== dataFilter || dataFilter == "all") {
                    itemBox[k].classList.remove('hide') ;
                    itemBox[k].classList.add('active') ;
                }
                
            }   
        }
        , ) 
    }
}

export default AllFilter ;