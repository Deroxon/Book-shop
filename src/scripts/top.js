import Hello from "./Navigation/Navbar"
import React from "react"
import "../styles/top.css"
import Books from "./mainWebsite/books"
import "../styles/main/book.css"

function Top(props) {

    
    const mapujListe = props.ul.map(item =>  <Hello key={item.id} item={item} klik={props.klik}/> )
    // console.log('propy topa ', props);
    
    let activeCart = false;
    
    
    
    
    return (
        <div className='topSide'>
             
            <div className='koszyk' onClick={() =>  {
                    let grabZaslona = document.querySelector('.zaslonaCart');
                    let grabCart = document.querySelector('.cart')
                    console.log(grabCart)

                    if(activeCart === false) {
                    grabCart.style.display = "block"
                    grabCart.style.position = "fixed"
                    grabZaslona.style.display = "block"
                    activeCart = true
                    }else {
                    grabCart.style.display = "none"
                    grabZaslona.style.display = "none"
                    activeCart = false
                    }

            } }>
                <div className="icon"> <div className="przedmioty">{props.SumOfCartProducts} </div></div>
                <div className="sumKoszyka"></div>
            </div>

             <ul className="navigUL"> 
                 {mapujListe}
             </ul>


             

             
        </div>
    )
}



export default Top