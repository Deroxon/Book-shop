import "../../styles/main/support.css"
import React from "react"
import SupportQA from "../mainWebsite/supports/supportQA"
import QcategoriesForm from "../mainWebsite/supports/QcategoriesForm"
import ContactOurTeam from "../mainWebsite/supports/ContactOurTeam"

import { MdAccessibility, MdShoppingCart, MdPayment, MdShop } from "react-icons/md";
class Support extends React.Component {

    constructor() {
        super()
        this.state= {
            sentences: [],
            truth: false,
            qload: 5,
            qstart:0,
            actualSentences: []
         

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

        this.setState(prevState => {
            const updatedSentence = prevState.sentences.map(nowy => {
                if(nowy.id === id) {
                    // ODWROTNA ZALEŻNOŚĆ
                   
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

    showMoreQuestions() {

        this.setState(prevState => {

            let mappedListofQuestions =[];
            if(this.state.qload === (this.state.sentences.length + 5) ) {
                mappedListofQuestions = this.state.sentences.slice(this.state.qstart, 5);
            }else {
                mappedListofQuestions = this.state.sentences.slice(this.state.qstart, this.state.qload);
            }
        
            mappedListofQuestions = mappedListofQuestions.map(item =>  <SupportQA  item={item} key ={item.id} togglerSupport = {this.togglerSupport} />   );

            // if i have enough 
            if(this.state.qload === (this.state.sentences.length + 5)) {
                return {
                    actualSentences: mappedListofQuestions,
                    qload: 5,
                }
            }
            else {
                return {
                    actualSentences: mappedListofQuestions,
                    qload: prevState.qload+5,
                }
            }
            
        } )



    }



    render() {
        let QcategoriesForma = [];
        const support =  this.state.sentences.map(item =>  <SupportQA  item={item} key ={item.id} togglerSupport = {this.togglerSupport} />   );

        const Qtitles = [
        {topic: "My account", ul: ['Change data', 'Forgotten password', 'Communication preferences'], icon: <MdAccessibility /> },
        {topic: "My order", ul: ['Track my order', 'Cancel my order', 'Order not shown on account'], icon: <MdShoppingCart/> },
        {topic: "Payment", ul: ['Payment options', 'When do I get charged', 'Payment declined'], icon: <MdPayment/> },
        {topic: "Stores & Service", ul: ['Collect from my store', 'Contact my store', 'Stores during lockdown?'], icon: <MdShop/> },
        ];
        // ZRÓB TO API ODNOŚNIE 4 SYMBOLI LUB WYKMIN JAK ZROBIĆ TO BEZ API 

        
        QcategoriesForma = Qtitles.map(item => <QcategoriesForm  item={item} key={item.topic}/>)

        let text = '';
        if(this.state.qload === 5) {
            text = "Show Questions"
        } else if (this.state.qload === (this.state.sentences.length + 5)) {text="hide most Questions"} else { text="Show more Questions"}

        return (
            <div className="konter">
                
                

                <section className="Qquestions">
                    <table>
                        {this.state.actualSentences}
                    </table>
                    <button onClick={() => this.showMoreQuestions()}>{text}</button>
                </section>

                <section className="Contact">
                    <ContactOurTeam />
                </section>


                <div className="Qcategories">
                    {QcategoriesForma}
                </div>
                
                
                
                
                 
                
                
                
            </div>
        )

    }


}


export default Support