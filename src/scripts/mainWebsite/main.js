import '../../styles/main/main.css'
import React from 'react'
import HotSellers from "./hotSeller"
import $ from "jquery"


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            dane: [],
            
        }

    }

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            this.setState({dane: data.results})
        })
        .catch(err => console.log("error", err))

        


    }

    
    
    render() {
       
        
        // zmapowana lista i w tym pliku jest ten komponent
        let mappedList = this.state.dane.map(item => <HotSellers key={item.height} item={item} />)
        

        return (
            <div className="mainContainer">
                
                <div className="mainPicture1"></div>
                <div className = "container"> 
    
                    <div className="rowIcons">
                        <div className="Icon"><img src="../../images/book.png" /><span>Look our full offer</span> </div>
                        <div className="Icon"><img src="../../images/book.png" /><span>Look our full offer</span> </div>
                        <div className="Icon">ikona</div>
                        <div className="Icon">ikona</div>
                    </div>
    
                    <h1>Welcome to the Frogipt!</h1>
    
                    <div> 
                        <h2>About us: </h2>
                        <p> Consectetur est ea tempor velit dolore tempor culpa eu excepteur sint. Enim irure tempor mollit proident proident ea et adipisicing eu sit velit. Magna et aliquip ullamco non minim proident.
    
                        Esse consequat incididunt enim ea quis sint aliquip nisi consequat minim laborum labore. Cillum ex irure cupidatat sunt cupidatat ipsum occaecat dolore. Duis sint veniam aute voluptate est ex occaecat quis qui elit. Ea ullamco veniam aliqua sunt nostrud velit.
    
                        Sint voluptate culpa irure velit consectetur quis cillum laboris dolor. Incididunt voluptate minim sint consequat ea. Nisi ex labore in velit dolor et occaecat fugiat laboris dolor elit tempor. Esse ullamco et aute aliquip esse do ea anim tempor in tempor ipsum. Laborum minim quis duis quis elit do ipsum ad nostrud sunt laborum sint sit. Consectetur elit do laboris dolor. Sint excepteur elit magna nostrud irure consequat ad aliquip.
                        </p>
    
    
                    </div>

                        <h1>Hot Fetched Names:</h1>

                        <p className='shh'>Sorry for same price and pictures but my API didnt have parametr like that</p>
            
                        <div className='parentHot'> 
                            {mappedList}
                        </div>
                        
                    
    
                </div>

                
            </div>
            
        )
    }
   
    

}



export default Main


