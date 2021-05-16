import React from "react"
import "../../App.css"

function CartForm(props) {

    return (

        <div className="parentForm">
            <form>

                <div className="formP1">
                    <label for="fname">First Name:</label> <br/>
                    <input type="text" id="fname" name='fname' placeholder="First Name" minLength="2"></input><br/>

                    <label for="lname">Last Name:</label> <br/>
                    <input type="text" id="lname" name='lname' placeholder="Last Name"></input><br/>

                    <label for="email">Email: </label> <br/>
                    <input type="email" id="email" name='email' placeholder="Email"></input><br/>

                </div>


                <div className="formP1">
                    <label for="Country">Country:</label> <br/>
                    <select id="Country" name="Country">
                        <option value=""></option>
                        <option value="Poland">Poland</option>
                        <option value="France">France</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Russia">Russia</option>
                    </select><br/>

                    <label for="city">City</label> <br/>
                    <input type="text" id="city" name='city' placeholder="City"></input><br/>

                    <label for="zip">Zip Code</label> <br/>
                    <input type="text" id="zip" name='zip' placeholder="Zip Code"></input>
                </div>

            </form>

        </div>

    )
}

export default CartForm