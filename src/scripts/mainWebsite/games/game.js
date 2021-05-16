
function Game(props) {

    console.log(props)
 
     return(
         <div className='childBook'> 
 
     
             <div className='childIMG' style={{backgroundImage:  `url(${props.item.url})` }}></div>
             <ul>
                 <li><b>Book:</b> {props.item.name}</li><br/>
                 <li><b>Author:</b> {props.item.artist}</li><br/>
                 <li><b>Price:</b> {props.item.price}$</li><br/>
             </ul>
             <button onClick={() => props.funkcja(101)}>Add to Cart</button> 
             
             
            
         </div>
     )
 } 
 
 export default Game