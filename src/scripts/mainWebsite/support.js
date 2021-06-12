import "../../styles/main/support.css"
import React from "react"
import SupportQA from "../mainWebsite/supports/supportQA"


class Support extends React.Component {

    constructor() {
        super()
        this.state= {
            sentences: [],
            truth: false,
           

        }
        this.togglerSupport = this.togglerSupport.bind(this)
    }

    componentDidMount() {

        fetch("https://602022d346f1e40017802fa0.mockapi.io/test1", {

        })
        .then(res =>res.json())
        .then(data => {
        this.setState({
            sentences: data
      })
        })

        


    }

    togglerSupport(id) {

        let grabConent = document.getElementById(id)

        
        
        this.setState(prevState => {
            const updatedSentence = prevState.sentences.map(nowy => {
                if(nowy.id === id) {
                    // ODWROTNA ZALEŻNOŚĆ
                    if(nowy.Truth) { grabConent.style.backgroundColor = 'rgb(238, 234, 234)'}
                    else { grabConent.style.backgroundColor = "rgb(246, 241, 241)" }
                    return {
                        ...nowy,
                        Truth: !nowy.Truth
                    }
                }
                console.log( "ELO" ,nowy.Truth)
                

                

                return nowy
            })
            return {
                sentences: updatedSentence
            }
        })

        

    }

    



    render() {

        const support =  this.state.sentences.map(item =>  <SupportQA  item={item} key ={item.id} togglerSupport = {this.togglerSupport} />   );
       
        

        return (
            <div className="konter">
                
            
                
                <table>
                    {support}
                </table>
                
                 mapa
                 <div className="googleMap">
                    
                 </div>
                
                
                
            </div>
        )

    }


}


export default Support