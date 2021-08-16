import './App.css';
import Top from "./scripts/top"
import React from "react"
import ulList from './scripts/fakeDataBase/ul'
import Main from './scripts/mainWebsite/main'
import Books from './scripts/mainWebsite/books'
import Games from "./scripts/mainWebsite/games"
import Load from "./scripts/mainWebsite/Loading"
import $ from 'jquery'
import Cart from "./scripts/mainWebsite/cart"
import SummaryCart from "./scripts/mainWebsite/summaryCart"
import CartForm from "./scripts/mainWebsite/cartForm"
import Support from './scripts/mainWebsite/support';
import Footer from "./scripts/mainWebsite/footer"
import Product from "./scripts/mainWebsite/Product"

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      strona: '',
      listaUl: ulList,
      books: [],
      wygenerowania: <Load change={this.sprawdzStrone } />,
      games: [],
      cart: [],
      sum: 0,
      SumOfCartProducts: 0,
      activeCart: false,
      activeOrder: false,
      summary: false,
      form: false
    }
    this.sprawdzStrone = this.sprawdzStrone.bind(this)
    this.pokazStrone = this.pokazStrone.bind(this)
    this.updateQuanity = this.updateQuanity.bind(this)
    this.podliczKoszyk = this.podliczKoszyk.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
    this.AddToCart = this.AddToCart.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.showProduct = this.showProduct.bind(this)
  }


  componentDidMount() {
    fetch('https://602022d346f1e40017802fa0.mockapi.io/books', {
        
    })
    .then(res => res.json())
    .then(data => {
        this.setState({
            books: data
            
        })
    })

    fetch('https://602022d346f1e40017802fa0.mockapi.io/games', {

    })
    .then(res =>res.json())
    .then(data => {
      this.setState({
        games: data
      })
    })

    /// loading website and animation before

      setTimeout( () => { this.setState({wygenerowania: <Main  books={this.state.books} showProduct={this.showProduct} AddToCart={this.AddToCart} cart={this.state.cart} books={this.state.books} />}) }, 1500   )

    
  }

  componentDidUpdate(prevProps, prevState) {
    // scroll bottom when clicked checked product and there is value more than 0
    if(this.state.sum !== 0 ) {
      let grabCart = document.querySelector(".cart");
      grabCart.scrollTop = grabCart.scrollHeight;
    }
    if (prevState.wygenerowania == <Product />) {
      console.log("this was A PRODUCT")
    }
  }

  communicates(com, boolean) {

    let grabPopUp = document.querySelector(".popUp");
    let color= "";

    if(boolean) {
      color = "linear-gradient(to bottom right,  lightgreen, rgb(80, 202, 80), lightgreen )";
    } else { color ="red"}

    grabPopUp.style.background = color;
    grabPopUp.style.top = "0%";
    grabPopUp.innerHTML = com;
    

    setTimeout(function t() { let grabPopUp = document.querySelector(".popUp"); grabPopUp.style.top = "-30%"; },1300)
    
  }

 


  sprawdzStrone(id) {
    this.setState({strona: id})

    this.setState(prevState => {
      const updatedValue = prevState.listaUl.map(nowa => {
        // instrukcja aby nasza jedna zmienna która klikamy miała true
        if(nowa.id === id) {
          
          return {
            ...nowa,
            actually: true
          }   
        }
        // zmiana reszty wartości na false
        else{     
          return {
            ...nowa,
            actually: false
          }
        }

      })
      // zwracamy zupdateowaną listę
      return {
        listaUl: updatedValue
      }
      
      
    })
    
    

    

    this.pokazStrone(id)
    console.log('pokaz strone funckja przekazanie', id)
    
  }


  

  pokazStrone(id) {
    let grabNavTop = document.querySelector(".top");
    grabNavTop.style.marginTop = "0px";

    let grabMainApp = document.querySelector(".mainApp")
      // scroll top when choose product
      $(document).ready( () => { 
        $('html, body').animate({scrollTop: 0}, 300)
    })

    if(id === 0) {
      this.setState({wygenerowania: <Main books={this.state.books} AddToCart={this.AddToCart} cart={this.state.cart} showProduct={this.showProduct}  />})
      grabMainApp.classList.remove("mainAppRepair")
    } 
    else if (id === 1) {
      this.setState({wygenerowania: <Books books={this.state.books} cart={this.state.cart} AddToCart={this.AddToCart} showProduct={this.showProduct} />})
      grabMainApp.classList.add("mainAppRepair")
    }
    else if (id === 2) {
      this.setState({wygenerowania: <Games games={this.state.games} cart={this.state.cart} AddToCart={this.AddToCart} showProduct={this.showProduct}  />})
      grabMainApp.classList.add("mainAppRepair")
    }
    else if(id === 3) {
      this.setState({wygenerowania: <Support change={this.sprawdzStrone }/>})
      grabMainApp.classList.remove("mainAppRepair")
    }
    
  }


  updateQuanity(id, boolean) {
         
    this.setState(prevState => {
        const updated = prevState.cart.map(nowy => {
            // jeśli naciskamy przycisk dodaj to zwiększamy ilość danego towaru o 1
            if(nowy.id === id && boolean === true) {
               
                return {

                    ...nowy,
                    inCartQuanity: nowy.inCartQuanity +1
                    
                }
            } 
            // jeśli zmniejszamy przyciskiem odejmij ilośc danego towaru o 1
            else if ( nowy.id === id && boolean === false && nowy.inCartQuanity >0){
                return {
                    ...nowy,
                    inCartQuanity: nowy.inCartQuanity -1

                }
            } 
            // jeśli nie możemy zmniejszyć danego towaru
            else if ( nowy.id === id && boolean === false && nowy.inCartQuanity <= 0){
                alert("you cant have quanity less than 1, if u wanna delete item just click X");
            }
            return nowy
            
        })
        return {
            cart: updated,
        }
        
    })
    console.log('wózek')
    console.log( this.state.cart)
    
   
    
 }

podliczKoszyk() {

    
  

    let cos= 0;
    this.setState( () => {

        for(let i=0; i< this.state.cart.length; i++) {
            console.log('ile '+this.state.cart[i].inCartQuanity);
            console.log('ile '+this.state.cart[i].price);
            cos += (this.state.cart[i].price * this.state.cart[i].inCartQuanity)
            
        }
       console.log("cosiek " + cos)
        return {
            sum: cos
        }

        
    })
    cos= 0
    
   
}
deleteFromCart(id) {  
   

    let checkCart = this.state.cart.map( e => {return e.id;} ).indexOf(id)

    if(checkCart >=0) {
        
        this.state.cart.splice(checkCart, 1)
        console.log(this.state.cart)
    }
    // liczymy operacje usunięcia z wózka oraz renderujemy 
    this.setState(prevState => {
      return {
        // usuwanie z ikonki wózka za każdym kliknieciem usuń
        SumOfCartProducts: prevState.SumOfCartProducts - 1,
        operacje: prevState.operacje +1
      }
    })
   console.log(checkCart);
}

  // funkcja Dodawania do koszyka

  AddToCart(id, bool) {
    //console.error("Przesłane id: ")
    
    this.setState(prevState => {
     
      
      let zmienna = "";
      let finalObject = "";
      if(id < 70) {
        console.log('to id jest mniejsze')
        zmienna = this.state.books
        // pamiętamy że aby indexować od dobrej dajemy -1 
      } else {
        zmienna = this.state.games
        // pamiętamy że aby indexować od dobrej dajemy -100 ponieważ w grach obiekty mają id od 101
        console.log("OBIEKKKT")
      }
        zmienna = zmienna.map( e => {
          if(e.id === id) {
            finalObject = e;
          }
          else {
            return
          }
        })


        console.log(finalObject)

      // wyszukiwanie czy dany index o parametrze id znajduję się w tabelce cart
      let pos = this.state.cart.map( e => {return e.id;} ).indexOf(id)
      
      
      // jeśli nie znajduje się czyli -1 to dodajemy do koszyka nową wartość
      if (pos < 0) {
          return {
              SumOfCartProducts: prevState.SumOfCartProducts + 1,
              cart: [...prevState.cart, finalObject],
          }
      } 
      // w przeciwnym wypadku dostajesz alert
      else {
        this.communicates( "Product is already in the cart!" ,false)
      }

      
      
  })
  this.communicates( "Product has been added to cart" ,true)
  }


  clearCart() {
    // exiting the empty Cart
    let grabCart = document.querySelector('.cart');
    let grabZaslona = document.querySelector('.zaslonaCart');

    this.setState( prevState => {
        return {
          cart: [],
          form: !prevState.form, 
          summary: !prevState.summary, 
          sum: 0,
          SumOfCartProducts: 0,
          
        }
    })
    grabCart.style.display = "none";
    grabZaslona.style.display = "none";
    this.communicates("Your order has been send, check e-mail" ,true)

  }


  // zrobić show products aby po kliknięciu sprawdzimy czy id które klikneliśmy jest w books or games i następnie jeśli jest to generujemy stronę gdzie przesyłamy odpowiednie dane tego id, a ta strona nam generuje nasz produkt ze szczegółami, ładnie umiejscowiony
  showProduct(id) {

    // scroll top when choose product
    $(document).ready( () => { 
        $('html, body').animate({scrollTop: 0}, 300)
    })

    

      let zmienna = "";
      let finalObject = "";
      if(id < 70) {
        console.log('to id jest mniejsze')
        zmienna = this.state.books
      } else {
        zmienna = this.state.games
      }

      zmienna = zmienna.map( e => {
        if(e.id === id) {
          finalObject = e;
        }
        else {
          return
        }
      })

      

    this.setState({wygenerowania: <Product change={this.sprawdzStrone } book={finalObject} ebook={finalObject} showProduct={this.showProduct} AddToCart={this.AddToCart} books={this.state.books} ebooks={this.state.games}/>})
    


    

    console.log("IDDDDDDDDDDDDDDDDDDDDDDD", id)
  }
 


  
  
render() {

  
  

  // przypisanie funkcji scrollowania w momencie załadowania dokumentu

  $(document).ready( () => {
    $('.goUp').click( () => {
      $('html, body').animate({scrollTop: 0}, 300)
  })
  })

  console.log("cartttttttttttttttttttttt")
  console.log(this.state.cart)
  let mapujSummary = this.state.cart.map(item => <SummaryCart key={item.id} item={item} />)
            
  let mapujCart = this.state.cart.map(item => <Cart key={item.id} item={item} obliczanie={this.updateQuanity} deleteOrder ={this.deleteFromCart} />)

  /* Sprawdzanie mapowania, aktualnego stanu form, summary oraz sumy 
  console.log('mapowanko')
  console.log(mapujCart)

  console.log("FOOOOORM")
  console.log(this.state.form)

  console.log("SUMAAAAAAARY")
  console.log(this.state.summary)

  console.log("AKTUALNA SUMA")
  console.log(this.state.sum)
  
  */

  console.log("heeeeeey")
  console.log(this.state.cart)

  let grabCart = document.querySelector('.cart');
  let grabZaslona = document.querySelector('.zaslonaCart');

  return (
    <div className="mainApp">

        <div className="popUp">Komunikat</div>

              <div className='zaslonaCart'></div>
                    <div id="cart"  className="cart" >
                       <div style={{display: (!this.state.form && !this.state.summary ) ? "block" : "none"}}>

                          <button className ="exitCart" onClick= {() => { grabCart.style.display = 'none'; grabZaslona.style.display ='none' }}>X</button>

                          {mapujCart}

                          <button style={{display: this.state.SumOfCartProducts === 0 ? "none" : "block"}} className='check' onClick={this.podliczKoszyk} >Check</button>

                          <div style={{display: this.state.sum !== 0 ? 'block' : 'none'}} className='forAll'>Price for cart: {this.state.sum}$</div>
                          
                          <button style={{display: this.state.sum !== 0 ? 'block' : 'none'}} className='goOrder' onClick={prevState => this.setState({form: !prevState.form})} >Go to Form</button>
                       </div>
                      

                        <div style={{display: this.state.form && !this.state.summary ? "block" : "none"}}>
                               <h2 className="Formu">Form:</h2> 
                               <CartForm  />
                                <button className="goOrder" onClick={prevState =>  this.setState({form: !prevState.form, summary: !prevState.summary})} >Send Form!</button>
                        </div>

                        <div style={{display: this.state.summary && this.state.form ? "block" : "none"}}> 
                            <h2 className="Formu">Order Summary:</h2>
                          {mapujSummary}

                            <button className="goOrder" onClick={ () => this.clearCart() }>Order!</button>
                        </div>

                    </div>  

            
      
        <div className='top'>
          <Top klik={this.sprawdzStrone} ul={this.state.listaUl} SumOfCartProducts={this.state.SumOfCartProducts}  />
        </div>

        
        <div className="mainContent">
            {this.state.wygenerowania}
            
        </div>

        <div className='goUp' ></div>


       
            <Footer />
        

       

    </div>
  )
}
  
}

export default App;
