import React from "react"
import "../../../styles/main/support.css"
import {IconContext } from "react-icons"
function QcategoriesForm(props) {

    
    return (
        <div className="Qcategory">
            <header>   
                <div className="topic"> 
                <IconContext.Provider value={{padding: "10px", size: "30px", className: 'icon-Qcat' }} > 
                {props.item.icon}
                </IconContext.Provider >
                {props.item.topic}
                </div> 
            </header>
            <ul>
                <li>{props.item.ul[0]}</li>
                <li>{props.item.ul[1]}</li>
                <li>{props.item.ul[2]}</li>
            </ul>
        </div>
    )


}

export default QcategoriesForm