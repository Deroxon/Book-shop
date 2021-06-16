import React from "react"

function PaymentDiv(props) {

    return (
        <li className="paymentDiv" style={{backgroundImage: "url("+ props.item.link+")"}}>
           
        </li>
    )
}


export default PaymentDiv