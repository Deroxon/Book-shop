import React, {useState} from "react"



function Cart(props) {

    console.log("propsy cart")
   console.log(props)

    let b = "CP"+props.item.id;

    return (
        <div className='cartProduct' id={b}> 
            <button className="close" onClick={() => props.deleteOrder(props.item.id)}>X</button>
            <div className="cartIMG" style={{backgroundImage: `url(${props.item.url})` }}> </div>  
            <div className="cartName">Book: {props.item.name}</div>
            <div className="cartAuthor">Artist: {props.item.artist}</div>
            <div className='cartPrice'><b>Price per one: </b>{ parseInt(props.item.price)}$</div>
            <div className="cartPrice"><b>Price per all: </b> {parseInt(props.item.price * props.item.inCartQuanity)} </div>
            <div className="cartQuanity"> <h3>Quanity:</h3>
                <div className="cartQuanityDiv">
                    <button className="cartMinus" onClick={() => props.obliczanie(props.item.id, false)}>-</button>
                    <div>{props.item.inCartQuanity}</div>
                    <button className="cartPlus" onClick={() => props.obliczanie(props.item.id, true) }>+</button>
                </div>
            </div>
        </div>
    )

}


export default Cart