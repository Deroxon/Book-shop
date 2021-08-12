import React from "react" 
import $ from 'jquery'
import FadeIn from "react-fade-in"

class OtherProduct extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            hover: false,
        }
        this.toggleHover = this.toggleHover.bind(this)
    }

   toggleHover() {
       this.setState({ hover: !this.state.hover})
   }


  


    render() {

        let grabEdit = document.querySelector(".editedChildBook");
        if(grabEdit) {
            grabEdit.addEventListener("click", this.togglerAnimation )
        }
        
        


        let linkStyle = ''

        if(this.state.hover) {
            linkStyle = {
                backgroundColor: " #f2efff",
                cursor: "pointer",
                borderTop: "2.5px solid #57A6F5 ",
                borderRadius: '5px',
                margin: "0",
                
            }
        } else {
            linkStyle = {
                backgroundColor: " white",
                border: "0",
                borderRadius: '5px'
        }
        }


        return (
            <FadeIn style={{display: "flex"}}>
            <div className='editedChildBook' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}   > 
        
            
                    <div onClick={() => this.props.showProduct(this.props.item.id)} className='childIMG' style={{backgroundImage:  `url(${this.props.item.url})` }}></div>
                    <ul onClick={() => this.props.showProduct(this.props.item.id)}>
                        <li><b>Book:</b> {this.props.item.name}</li><br/>
                        <li><b>Author:</b> {this.props.item.artist}</li><br/>
                        <li><b>Price:</b> {this.props.item.price}$</li><br/>
                    </ul>
                    
                    
                    
                
            </div>
            </FadeIn>
        )

    }

   

    
}

export default OtherProduct