import React from "react"
import "../../../styles/main/support.css"

class SupportQA extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            showedAnswer: false
        }
    }

   
    



    render() {

        let textButton;
        

        if(this.props.item.Truth) {
            textButton = "Hide Answer";
        } else { textButton = "Show Answer"}
        console.log("update")

        return ( 
            <div className="questionContainer" >
                <tr id={this.props.item.id}>
                    <td>
                
                        <div className="quest" >
                            <p className="question">{this.props.item.Question}</p>
                                <button className="togglerQA" onClick={() => this.props.togglerSupport(this.props.item.id)}> {textButton} </button>
            
                            <p className="answer"  style={{display: this.props.item.Truth ? "block" : "none"}}>{this.props.item.Answer}</p>
                        </div>
                        
                    </td>
                </tr>
                
    
            </div>
        )
    }
    

}



export default SupportQA