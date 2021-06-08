import React from "react"
import '../../styles/main/main.css'


function HotSellers(props) {


            return(
                
                    <div className='parent'>
                        <img src='https://fajnepodroze.pl/wp-content/uploads/2020/04/oczy.jpg'  alt='loading' />
                        <div className='sellerChild'></div>
                        <div className='name'>{props.item.name}</div>
                        <div className="Bprice">26.99$</div>
                        <div className="price">19.99$</div>
                        <button className='addToCard'>Add to Card</button>
                       
                    </div>
                    
               
            )
 

  

    

   


}

export default HotSellers