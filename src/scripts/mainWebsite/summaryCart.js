import React from "react"
import "../../styles/main/summaryCart.css"

function SummaryCart(props) {
    
    console.log('SUMMARY PROPS')
    console.log(props)

    return(
        <div className="sumCart">

            <div className="cartIMG" style={{backgroundImage: `url(${props.item.url})` }}> </div>  

            <div className="cartName">Book: <br/> {props.item.name}</div>
            <div className="cartAuthor">Artist: {props.item.artist}</div>
            <div className='cartPrice'><b>Price per one: </b>{ parseInt(props.item.price)}$</div>
            <div className="cartPrice"><b>Price per all: </b> {parseInt(props.item.price * props.item.inCartQuanity)} </div>
            <div className="cartQuanity"> <h3>Quanity: {props.item.inCartQuanity}</h3>  </div>



        </div>
    )
}

export default SummaryCart