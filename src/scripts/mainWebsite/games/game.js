import React from "react"


class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false,
        }

        this.toggleHover = this.toggleHover.bind(this)
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    
        render() {



            let linkStyle = ''

            if(this.state.hover) {
                linkStyle = {
                    backgroundColor: " #f2efff",
                    cursor: "pointer"
                }
            } 
            else {
                linkStyle = {backgroundColor: "white"}
            }


            return(
                <div className='childBook' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}> 
        
            
                    <div className='childIMG' style={{backgroundImage:  `url(${this.props.item.url})` }} 
                    onClick={() => this.props.showProduct(this.props.item.id)}></div>


                    <ul onClick={() => this.props.showProduct(this.props.item.id)}>

                        <li><b>e-Book:</b> {this.props.item.name}</li><br/>
                        <li><b>Publishing house:</b> {this.props.item.artist}</li><br/>
                        <li><b>Price:</b> {this.props.item.price}$</li><br/>

                    </ul>
                    
                    <button onClick={() => this.props.funkcja(this.props.item.id)}>Add to Cart</button> 
                    
                    
                   
                </div>
            )

        }
     
 } 
 
 export default Game