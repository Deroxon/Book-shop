import React from "react"
import '../../styles/main/book.css'
import Ksiazka from "../mainWebsite/ksiazka"



class Books extends React.Component {

    /* kontynnuacja zrób tak aby w tej klasie zostało zmapowane cart i przekazane do funkcji która nam wygeneuje koszyk i ta funkcja zostanie zaimportowana do top.js aby można jej swobodnie używać na każdej podstronie, oczywiście po użyciu addToCard */
    constructor(props) {
        super(props)
        this.state = {
            actualPage: 1,
            actualIndex: 0,
            stalaWartoscPrzewijania:12,
            maxPages: {},
            cart: props.cart,
           books: props.books,
           nowyMap: -1,
           AddToCart: props.AddToCart,
           showProduct: props.showProduct

        }

    }
    

    
    componentDidMount() {
        // ustawienie listy rozwijanej książek
        this.setState(prevState => {
                // w zmiennej ucinamy to co nas interesuje
        let nowaMap = this.state.books.slice(this.state.actualIndex, this.state.stalaWartoscPrzewijania);
        // w tej zmiennej również dopsiujemy wartość i przekazujemy props który ustawia state aby mozna było widzieć jakie właściwości mamy
        nowaMap = nowaMap.map(item => <Ksiazka key={item.id} item={item} funkcja={ id => this.state.AddToCart(id) } showProduct={ id => this.state.showProduct(id)} type="book" />)

            return {
            nowyMap: nowaMap
            }
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.actualPage !== this.state.actualPage) {
            this.nowaWartosc()
        }

        
    }


    przewijaniePrzod() {

       
        this.setState(prevState => {
            return {
                actualPage: prevState.actualPage+1,
                actualIndex: prevState.actualIndex +12,
                stalaWartoscPrzewijania: prevState.stalaWartoscPrzewijania +12
            }
            })
            
    }

    przewijanieTyl() {
        console.log('dziala');
        this.setState(prevState => {
            return {
                actualPage: prevState.actualPage-1,
                actualIndex: prevState.actualIndex -12,
                stalaWartoscPrzewijania: prevState.stalaWartoscPrzewijania -12
            }
            })
            
    }

    nowaWartosc() {
        // ustawienie listy rozwijanej książek
        this.setState( () => {
                // w zmiennej ucinamy to co nas interesuje
        let nowaMap = this.state.books.slice(this.state.actualIndex, this.state.stalaWartoscPrzewijania);
        
        // w tej zmiennej również dopsiujemy wartość i przekazujemy props który ustawia state aby mozna było widzieć jakie właściwości mamy
        nowaMap = nowaMap.map(item => <Ksiazka key={item.id} item={item} funkcja={ id => this.state.AddToCart(id) } showProduct ={ id => this.state.showProduct(id)} books={this.state.books}   />)

            return {
            nowyMap: nowaMap
            }
        })

        
        
    }



  

    


    render() {
       // checking if user isnt going on pages that doesnt exist for previous
         if (this.state.actualPage < 1) {
             this.setState(prevState => {
                 return {
                     actualPage: 1,
                     actualIndex: 0,
                     stalaWartoscPrzewijania: 12
                 }
             })
             console.error('you cannot go on previous website!')
         }
         // checking if user isnt going on pages that doesnt exist for next
         // there is bug, about its backing 2 sites back, need to fix
         if(this.state.stalaWartoscPrzewijania > this.props.books.length +10 && this.props.books.length) {
             
            console.error("dont go there")
            this.setState(prevState => {
                return {
                    actualPage: prevState.actualPage -1,
                    actualIndex: prevState.actualIndex -12,
                     stalaWartoscPrzewijania: prevState.stalaWartoscPrzewijania - 12
                }
            })
         }

        


        

        
            /* Do sprawdzania indexu gdzie  sie znajduje i wczytanej tablicy obiektów
            console.log('Aktualny index', this.state.actualIndex)
            console.log('nowy map ' ,nowyMap)
            */

        // class name next sprawia to że aktualizujemy state innymi wartościamy aby co 12 elementów pokazywało nowe
        // className prev robi odwrotnie
        return (
            <div className='bookContainer'> 

                <div className='h1book'>Everyone will find his own way.. and Book!</div>
                <div className='parentBook'>{this.state.nowyMap}</div>
       
                
                <hr />
                <div className='szybkiSrodek'>

                    {/*guzik jedno cofnięcie */}
                    <div className='previous' onClick={() =>  this.przewijanieTyl()}>
                        {/* tutaj jest środek previous */}
                    </div>
                    <div className="actPage" >{this.state.actualPage}</div>

                    {/*guzik jedno przód */}

                    <div className='next'  
                    onClick={ () => this.przewijaniePrzod() }>
                        {/* tutaj jest środek next */}
                    </div>
                </div>

            </div>
            
        )
    }
    
}










export default Books