import React from "react";
// import styli
import '../../styles/Navigation/navbar.css';


function Hello(props) {

    
    

    return (

              <li className="Navig" style={{color: props.item.actually ? "#333333" : '#ffffff'}} onClick={() => props.klik(props.item.id)}>{props.item.text} </li>

    )
}




export default Hello