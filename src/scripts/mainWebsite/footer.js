import React from "react" 
import footerLI from '../fakeDataBase/footerLi'
import paymentList from "../fakeDataBase/paymentsList"
import transportList from "../fakeDataBase/transportList"
import Ul from "./Footer/footerUl"
import "../../styles/main/footer.css"
import PaymentDiv from "../mainWebsite/Footer/footerIcons"
import { AiFillPhone, AiOutlineShop, AiOutlineMail, AiOutlineQuestionCircle, AiOutlineFile } from 'react-icons/ai'
import {IconContext} from "react-icons"
class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: footerLI,
            paymentL: paymentList,
            transportL: transportList
        }
    }


    render() {
        let mappedUlList = this.state.data.map(item => <Ul item={item} key={item.id} />)

        let mappedPayList = this.state.paymentL.map(item => <PaymentDiv item={item} />)

        let mappedTransportList = this.state.transportL.map(item => <PaymentDiv item={item} />)

        return (
            <footer>
                <section className="footerLi">
                    
                        {mappedUlList}

                        <ul className='footerContact'>
                            <IconContext.Provider value={{className: "iconsFooter"}}>
                            <li><b><AiOutlineMail /> Contact</b></li>
                            <li><AiOutlineQuestionCircle />Check most Popular Questions</li>
                            <li><AiOutlineShop />Find your Store</li>
                            <li><AiOutlineFile />Sign to Newsletter</li>
                            </IconContext.Provider>
                        </ul>
                    
                </section>
    
                <section className="footerPay">
                        <div className="bankIcons">
                             <h3>Safe Payments</h3>
                             <ul>
                                 {mappedPayList}
                             </ul>
                             <h3>Our Transport</h3>
                             <ul>
                                 {mappedTransportList}
                             </ul>
                        </div>

                        <div className="contactAdress">
                            <h2>Contact</h2>
                            <ul>
                                <li className="contactBreak">Frogipt sp. z o.o.</li>

                                <AiOutlineShop />
                                <li>Street: Royals 6/13</li>
                                <li className="contactBreak">43-231 London</li>
                                
                                <AiFillPhone />
                                <li>Phone number: 70 231 32 11</li>
                                <li>fax: 70 242 11 32</li>
                                
                            </ul>
                        </div>
                </section>
            </footer>
        )
    }
    
}

export default Footer