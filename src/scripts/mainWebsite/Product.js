import React from "react"
import "../../styles/main/product.css"

import {HiStar} from "react-icons/hi"
import { IconContext } from "react-icons";
import {AiOutlineShoppingCart} from "react-icons/ai"

import  transportList from "../fakeDataBase/transportList"
import Ksiazka from "../mainWebsite/ksiazka"

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state ={ 
            item: props.book,
            selectedOption: '',
            books: props.books,
            actualIndex: 0,
            stalaWartoscPrzewijania: 6,
            nowyMap: 0

        }
        
    }


    changeOption(params) {

        document.querySelector(".specDesc").classList.remove("selectedLi");
        document.querySelector(".specSpec").classList.remove("selectedLi");
        document.querySelector(".specDeli").classList.remove("selectedLi");

        document.querySelector(".specDesc").classList.add("unSelectedLi");
        document.querySelector(".specSpec").classList.add("unSelectedLi");
        document.querySelector(".specDeli").classList.add("unSelectedLi");

        let cover='';
        if(this.state.item.cover) {
            cover = "Hard"
        } else {
            cover = "Soft"
        }


        let tableOfSpecies = [ 
            {name: "Name ", sentences: this.state.item.name}, 
            {name: "Artist ", sentences: this.state.item.artist },
            {name: "Pages ", sentences: this.state.item.pages },
            {name: "Relase Date ", sentences: this.state.item.relaseDate },
            {name: "Cover ", sentences: cover }
            ];

        let mappedTable = tableOfSpecies.map( item => { return (
            <tr>
                <th className="firstC">{item.name}</th>
                <th className="secondC">{item.sentences}</th>
            </tr>
        )});


        let mappedDelivery = transportList.map(item => {
            return (
                <tr>
                    <th className='tableImg' style={{backgroundImage: "url("+ item.link+")"}}> </th>

                    <th className="thType"> {item.type} </th>
                    <th> {item.onlineP}$ </th>
                    <th> {item.offlineP}$ </th>
                </tr>
            )
        });

        

        let option = ''
        let specValue = ''

        switch (params) {
            case 'describe':
            option = this.state.item.lorem;
            specValue = document.querySelector(".specDesc");
            specValue.classList.add("selectedLi")
            specValue.classList.remove("unSelectedLi")
            break;

            case 'species':
            
            specValue = document.querySelector(".specSpec");
            specValue.classList.add("selectedLi")
            specValue.classList.remove("unSelectedLi")

             option =   
             
             <div>

                    <img src={this.state.item.secondaryImg} />

                    <table>
                      
                        {mappedTable}

                    </table>

            </div>;
            break;

            case 'delivery': 
            specValue = document.querySelector(".specDeli");
            specValue.classList.add("selectedLi")
            specValue.classList.remove("unSelectedLi")


            option = <table className="delPayTable">
                  <th className ="thFirst"></th> 
                  <th className ="thFirst"></th> 
                  <th className ="thFirst">Online Payments</th>
                  <th className ="thFirst">Offline Payments</th>
                  
                        
                {mappedDelivery}
                
            </table>
            break;

        }


        this.setState({ selectedOption: option});

    };


   

    componentDidMount() {
        // set default description on start
        this.setState({ selectedOption: this.props.book.lorem});
    }



    render() {

        console.log("ITEM")
        console.log(this.state.item)
        
        let cover='';
        if(this.state.item.cover) {
            cover = "Hard"
        } else {
            cover = "Soft"
        }
        
        let avaible='';
        if(this.state.item.quanity > 0) {
            avaible = "This product is Avaible"
        } else {
            avaible = "This product Isnt Avaible now"
        }




        let tableofStars = [ "star1", "star2", "star3", "start4", "start5"];
        let counterStars = 0;
        
        let mappedLiStars = tableofStars.map( () => {
            console.log("starsy z importu", this.state.item.stars)
            console.log("zmienna", counterStars)
            if(this.state.item.stars > counterStars) {
                counterStars = counterStars +20

                return (
                        <IconContext.Provider value={{ color: "yellow" }}>
                                <li><HiStar /> </li>
                        </IconContext.Provider>
                )
            }
            else {
                return (
                    <IconContext.Provider value={{ color: 'white' }}>
                            <li><HiStar /> </li>
                    </IconContext.Provider>
            )
            }
        })

        
        
       
        
        return (
            <div>
                <div className='GridLayout'>

                    <div className="gridContent gridIMG">
                        <img src={this.state.item.url} />

                        
                    </div>
                    <div className="gridContent gridText">

                        <ul className="itemName">
                            <li><b>{this.state.item.name}</b></li>
                            <li>Author: {this.state.item.artist}</li>
                            <li>Price:  <b style={{color: "orange"}}>{this.state.item.price}$ </b></li>
                        </ul>

                        <ul className="stars">
                            {mappedLiStars}
                        </ul>
                        <span>
                            {this.state.item.stars} ocen
                        </span>

                        <h3>{avaible}</h3>

                        <button className="productButton" onClick= {() => this.props.AddToCart(this.props.book.id)}>

                            <ul>
                                <li>
                                <IconContext.Provider value={{ size: 30 }}>
                                    <AiOutlineShoppingCart />
                                </IconContext.Provider>
                                </li>
                                <li className="pbSC">
                                    Add to Cart
                                </li>
                            </ul>
                        
                            
                             
                        </button>

                        
                    
                        

                    </div>
                    <div className="gridContent gridSpecies">

                        <ul className="speciesUL">
                            <li className='specDesc selectedLi'
                            onClick={() => this.changeOption("describe")}
                            >Description</li>

                            <li className='specSpec unSelectedLi' onClick={() => this.changeOption("species")}>Species</li>

                            <li className='specDeli unSelectedLi'
                            onClick={() => this.changeOption("delivery")}>Delivery {"&"} Payments</li>
                        </ul>


                        <section className="selectedOption">

                            {this.state.selectedOption}

                        </section>


                        
                    </div>
                    
                    <section className="anotherProducts">

                        {this.state.nowyMap}

                    </section>
                    

                </div>

            
            </div>
        )
    }


}

export default Product