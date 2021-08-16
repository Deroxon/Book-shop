import React from "react"
import "../../styles/main/product.css"

import {HiStar} from "react-icons/hi"
import { IconContext } from "react-icons";
import {AiOutlineShoppingCart} from "react-icons/ai"

import  transportList from "../fakeDataBase/transportList"
import Ksiazka from "../mainWebsite/ksiazka"
import OtherProduct from "../mainWebsite/games/otherProducts"


class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state ={ 
            item: props.book,
            ebook:props.ebook,
            selectedOption: '',
            books: props.books,
            ebooks: props.ebooks,
            
            actualIndex: 0,
            stalaWartoscPrzewijania: 3,
            nowyMap: 0,
            type: props.type,
            showProduct: props.showProduct,
            actualParams: '',

        }
        this.changeOption = this.changeOption.bind(this)
        
    }


    changeOption(params) {

        this.setState({actualParams: params})


        document.querySelector(".specDesc").classList.remove("selectedLi");
        document.querySelector(".specSpec").classList.remove("selectedLi");
        document.querySelector(".specDeli").classList.remove("selectedLi");

        document.querySelector(".specDesc").classList.add("unSelectedLi");
        document.querySelector(".specSpec").classList.add("unSelectedLi");
        document.querySelector(".specDeli").classList.add("unSelectedLi");

        let cover='';

        if(this.state.type = "ebook") {

            if(this.state.ebook.cover) {
                cover = " - "
            } else {
                cover = " - "
            }
         }
        else if (this.state.type = "book") {   

            if(this.state.item.cover) {
                cover = "Hard"
            } else {
                cover = "Soft"
            }    

            
        }
       

        let tableOfSpecies = [ 
            {name: "Type ", sentences: this.props.book.type},
            {name: "Name ", sentences: this.props.book.name}, 
            {name: "Artist ", sentences: this.props.book.artist },
            {name: "Pages ", sentences: this.props.book.pages },
            {name: "Relase Date ", sentences: this.props.book.relaseDate },
            {name: "Cover ", sentences: cover },
            

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
            option = this.props.book.lorem;
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

                    <img src={this.props.book.secondaryImg} />

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

        
        

        this.setState(prevState => {
                // w zmiennej ucinamy to co nas interesuje
        let nowaMap = this.state.books.slice(this.state.actualIndex, this.state.stalaWartoscPrzewijania);

        // w tej zmiennej również dopsiujemy wartość i przekazujemy props który ustawia state aby mozna było widzieć jakie właściwości mamy
        nowaMap = nowaMap.map(item => <OtherProduct key={item.id} item={item} funkcja={ id => this.state.AddToCart(id) } showProduct={ id => this.state.showProduct(id)}  changeOption ={ () => this.changeOption} type="book" actualParams ={this.state.actualParams} />)

        return {
        nowyMap: nowaMap,
        actualParams: "describe"
        }
    })


        // set default description on start
        this.setState({ selectedOption: this.props.book.lorem});
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevState.actualIndex !== this.state.actualIndex) {
            this.nowaWartosc()
        }
        // if we change actual product to another we check if props are changing
        if( (prevProps.book || prevProps.ebook) !== (this.props.book && this.props.ebook) ) {
            this.changeOption(this.state.actualParams);
        } 
        

        
    }

   



    przewijaniePrzod() {

       
        this.setState(prevState => {
            return {
                
                actualIndex: prevState.actualIndex +3,
                stalaWartoscPrzewijania: prevState.stalaWartoscPrzewijania +3
            }
            })
            
    }

    przewijanieTyl() {
        console.log('dziala');
        this.setState(prevState => {
            return {
                actualIndex: prevState.actualIndex -3,
                stalaWartoscPrzewijania: prevState.stalaWartoscPrzewijania -3
            }
            })
            
    }

    nowaWartosc() {
        // ustawienie listy rozwijanej książek
        this.setState( () => {
                // w zmiennej ucinamy to co nas interesuje
        let nowaMap = this.state.books.slice(this.state.actualIndex, this.state.stalaWartoscPrzewijania);
        
        // w tej zmiennej również dopsiujemy wartość i przekazujemy props który ustawia state aby mozna było widzieć jakie właściwości mamy
        nowaMap = nowaMap.map(item => <OtherProduct key={item.id} item={item}  showProduct ={ id => this.props.showProduct(id)} books={this.state.books} changeOption ={ () => this.changeOption} actualParams ={this.state.actualParams}   />)

            return {
            nowyMap: nowaMap
            }
        })

        
        
    }






    render() {

  

        // checking if user not going too early
        if (this.state.actualIndex < 0) {
            this.setState(prevState => {
                return {
                    actualIndex: 0,
                    stalaWartoscPrzewijania: 3
                }
            })
            
        }

        // checking if user not going too far

        if(this.state.actualIndex > this.props.books.length && this.props.books.length) {
             
            console.error("dont go there")
            this.setState(prevState => {
                return {
                    actualIndex: prevState.actualIndex - 3,
                     stalaWartoscPrzewijania: prevState.stalaWartoscPrzewijania - 3
                }
            })
         }



        let avaible='';

        if(this.state.type = "ebook") {
            console.log("ebook")
            console.log(this.state.ebook)
            if(this.state.ebook.quanity > 0) {
                avaible = "This product is Avaible"
            } else {
                avaible = "This product Isnt Avaible now"
            }
         }

        else if (this.state.type = "book") {   

            if(this.state.item.quanity > 0) {
                avaible = "This product is Avaible"
            } else {
                avaible = "This product Isnt Avaible now"
            }    

            
        }
       
        
        
        




        let tableofStars = [ "star1", "star2", "star3", "start4", "start5"];
        let counterStars = 0;
        
        let mappedLiStars = tableofStars.map( () => {
            console.log("starsy z importu", this.props.book.stars)
            console.log("zmienna", counterStars)
            if(this.props.book.stars > counterStars) {
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
           
                <div className='GridLayout'>

                    <div className="gridContent gridIMG">
                        <img src={this.props.book.url} />

                        
                    </div>
                    <div className="gridContent gridText">

                        <ul className="itemName">
                            <li><b>{this.props.book.name}</b></li>
                            <li>Author: {this.props.book.artist}</li>
                            <li>Price:  <b style={{color: "orange"}}>{this.props.book.price}$ </b></li>
                        </ul>

                        <ul className="stars">
                            {mappedLiStars}
                        </ul>
                        <span>
                            {this.props.book.stars} ocen
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


                     <div className="clickAP clickL" onClick={ () => this.przewijanieTyl() }>{"<"}</div>
                            

                                {this.state.nowyMap}

                      <div className="clickAP clickR" onClick={ () => this.przewijaniePrzod() }>{">"}</div>

                    </section>
                    

                </div>

            
            
        )
    }


}

export default Product