import React from 'react'


function Ul(props) {

        return (
            <ul className="footerUl">
                <li><b>{props.item.text}</b></li>
                <li>{props.item.tableofLI[0]}</li>
                <li>{props.item.tableofLI[1]}</li>
                <li>{props.item.tableofLI[2]}</li>
                <li>{props.item.tableofLI[3]}</li>
                <li>{props.item.tableofLI[4]}</li>
            </ul>
        )
    
    
}

export default Ul