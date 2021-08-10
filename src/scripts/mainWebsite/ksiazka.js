
function Ksiazka(props) {

   console.log("Propsuj",props)

    

    return(
        <div className='childBook' > 

    
            <div onClick={() => props.showProduct(props.item.id)} className='childIMG' style={{backgroundImage:  `url(${props.item.url})` }}></div>
            <ul onClick={() => props.showProduct(props.item.id)}>
                <li><b>Book:</b> {props.item.name}</li><br/>
                <li><b>Author:</b> {props.item.artist}</li><br/>
                <li><b>Price:</b> {props.item.price}$</li><br/>
            </ul>
            <button onClick={() => props.funkcja(props.item.id)}>Add to Cart</button> 
            
            
           
        </div>
    )
} 

export default Ksiazka