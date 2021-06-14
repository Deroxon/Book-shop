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
            qload: 5,
            qstart:0,
            actualSentences: [],

         

        }
        this.toggler = this.toggler.bind(this)
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

    toggler(id) {
        this.setState(prevState => {
            const updatedList = prevState.sentences.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        Truth: !item.Truth
                    }
                }
                return item
            })
            return {
                sentences: updatedList
            }
        })
    }

    showMore() {

        if(this.state.qload === 15) {
            this.setState( {  
                    qload: 5
            })
        }
        else {
            this.setState( prevState => {
                return {
                    qload: prevState.qload + 5
                }
            })
        }
       

    }
    

       
    

    render() {
        let QcategoriesForma = [];

        // mapped list
        let updatedList = this.state.sentences.slice(this.state.qstart, this.state.qload);
        updatedList = updatedList.map(item => <SupportQA item={item} key={item.id} toggler={this.toggler } /> )

        const Qtitles = [
        {topic: "My account", ul: ['Change data', 'Forgotten password', 'Communication preferences'], icon: <MdAccessibility /> },
        {topic: "My order", ul: ['Track my order', 'Cancel my order', 'Order not shown on account'], icon: <MdShoppingCart/> },
        {topic: "Payment", ul: ['Payment options', 'When do I get charged', 'Payment declined'], icon: <MdPayment/> },
        {topic: "Stores & Service", ul: ['Collect from my store', 'Contact my store', 'Stores during lockdown?'], icon: <MdShop/> },
        ];
    
        
        QcategoriesForma = Qtitles.map(item => <QcategoriesForm  item={item} key={item.topic}/>)

       let text = '';
       if(this.state.qload === 15) { text='Show Less'}
       else{text='Show More'}

        return (
            <div className="konter">
                
                

                <section className="Qquestions">
                    <table>
                        {updatedList}
                    </table>
                </section>
                <button onClick={() => this.showMore()}>{text}</button>
                

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