import React from "react"
import "../../../styles/main/support.css"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
class SupportQA extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
           
        }
    }

   



    render() {

        let textButton;
        

        if(this.props.item.Truth) {
            textButton = <AiOutlineArrowUp />
        } else { textButton = <AiOutlineArrowDown/>}
        
        
        return ( 
           
                <tr >
                    <td id={this.props.item.id} onClick={() => this.props.toggler(this.props.item.id)}>
                
                        <div className="quest" >
                            <p className="question">{this.props.item.Question}</p>
                                <div className="togglerQA" > {textButton} </div>
            
                            <p className="answer"  style={{display: this.props.item.Truth ? "block" : "none"}}>{this.props.item.Answer}</p>
                        </div>
                        
                    </td>
                </tr>
                
    
           
        )
    }
    

}



export default SupportQA