import '../../styles/main/main.css'
import React, {useState} from 'react'
import { FaShoppingCart, FaCashRegister, FaCommentDollar,  } from "react-icons/fa";
import {IconContext } from "react-icons"
import Ksiazka from './ksiazka';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: props.books,
            newList: [],
            parentHot: false,
            
            
        }

    }



       
    showHotSellers() {

        let nowaMap = this.state.books.slice(0, 6);
        
        // w tej zmiennej również dopsiujemy wartość i przekazujemy props który ustawia state aby mozna było widzieć jakie właściwości mamy
        nowaMap = nowaMap.map(item => <Ksiazka key={item.id} item={item} funkcja={ id => this.props.AddToCart(id)  } showProduct={this.props.showProduct} books={this.state.books}  />)
        
        
        this.setState( prevState => {
            return {
                parentHot: !prevState.parentHot,
                newList: nowaMap,
            }
        } )
        
    }
    

    

    
    
    render() {

       const isLoaded = this.state.parentHot;
       let button;
       let text;
       if(isLoaded) {
           button = "Hide HotSellers"
           text= this.state.newList;
       } else {
           button = "Show HotSellers"
           text= ''
       }
        
    
        

        return (
            <div className="mainContainer">
                
                <div className="mainPicture1">
                    
                </div>
                <div className = "container"> 
    
                    

                    <h1 className="h1main">What we offer:</h1>


                        <IconContext.Provider value={{color: "rgb(115, 184, 207)", size: "70px"}} >
                            <div className='icons'>
                                <ul>
                                    <li>
                                        <FaShoppingCart />
                                        <p>Methods of Payments</p>
                                    </li>
                                    <li>
                                        <FaCashRegister/>
                                        <p>Simple Cash bonus</p>
                                    </li>
                                    <li>
                                        <FaCommentDollar/>
                                        <p>Promotion Prices</p>
                                    </li>
                                </ul>
                            </div>
                        </IconContext.Provider >

                    <h1>Welcome to the Frogipt!</h1>
    
                    <div className="aboutUs"> 
                        <h2>About us: </h2>
                        <p> Consectetur est ea tempor velit dolore tempor culpa eu excepteur sint. Enim irure tempor mollit proident proident ea et adipisicing eu sit velit. Magna et aliquip ullamco non minim proident.
    
                        Esse consequat incididunt enim ea quis sint aliquip nisi consequat minim laborum labore. Cillum ex irure cupidatat sunt cupidatat ipsum occaecat dolore. Duis sint veniam aute voluptate est ex occaecat quis qui elit. Ea ullamco veniam aliqua sunt nostrud velit.
    
                        Sint voluptate culpa irure velit consectetur quis cillum laboris dolor. Incididunt voluptate minim sint consequat ea. Nisi ex labore in velit dolor et occaecat fugiat laboris dolor elit tempor. Esse ullamco et aute aliquip esse do ea anim tempor in tempor ipsum. Laborum minim quis duis quis elit do ipsum ad nostrud sunt laborum sint sit. Consectetur elit do laboris dolor. Sint excepteur elit magna nostrud irure consequat ad aliquip.
                        </p>
    
    
                    </div>

                        <h1>Hot Fetched Names:</h1>

                        
            

                        <button className="showHot" onClick={ () => this.showHotSellers()}><h2>{button}</h2></button>


                        <div className='parentHot'> 
                            {text}
                        </div>
                        
                    
    
                </div>

                
            </div>
            
        )
    }
   
    

}



export default Main


