import React, {useState} from "react"



function Cart(props) {


    let b = "CP"+props.item.id;

    return (

        <div className="cartContainer">

                <button className="close" onClick={() => props.deleteOrder(props.item.id)}>X</button>

                <div className="cartIMG" style={{backgroundImage: `url(${props.item.url})` }}> </div>   

            <div className='cartProduct' id={b}> 
                    
                    
                    <div className="cartName"><b>Book:</b> {props.item.name}</div>
                    <div className="cartAuthor"><b>Artist:</b> {props.item.artist}</div>
                    <div className='cartPrice'><b>Price per one: </b>{ parseInt(props.item.price)}$</div>
                    <div className="cartPrice"><b>Price per all: </b> {parseInt(props.item.price * props.item.inCartQuanity)}$ </div>

                    <div className="cartQuanity"> 
            <p className="Nquanity">Quanity:</p>

                <div className="cartQuanityDiv">
                    <button className="cartMinus" onClick={() => props.obliczanie(props.item.id, false)}>-</button>
                    <div>{props.item.inCartQuanity}</div>
                    <button className="cartPlus" onClick={() => props.obliczanie(props.item.id, true) }>+</button>
                </div>
            </div>

                
            </div>


            


        </div>
        
    )

}


export default Cart