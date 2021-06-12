import React from "react"

function Countries(props) {


    return (
        <option value ={props.item.name}>
            {props.item.name}
        </option>
    )


}

export default Countries