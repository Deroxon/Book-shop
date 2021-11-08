import React from "react"

function Countries(props) {


    return (
        <option value ={props.item.country}>
            {props.item.country}
        </option>
    )


}

export default Countries