
function Game(props) {

    console.log(props)
 
     return(
         <div className='childBook'> 
 
     
             <div className='childIMG' style={{backgroundImage:  `url(${props.item.avatar})` }}></div>
             <ul>
                 <li><b>e-Book:</b> {props.item.name}</li><br/>
                 <li><b>Publishing house:</b> {props.item.company}</li><br/>
                 <li><b>Price:</b> {props.item.price}$</li><br/>
             </ul>
             <button onClick={() => props.funkcja(props.item.id)}>Add to Cart</button> 
             
             
            
         </div>
     )
 } 
 
 export default Game