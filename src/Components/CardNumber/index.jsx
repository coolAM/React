import React from 'react';
import styles from './styles.css';
import Ajv from 'ajv'; 
import schema1 from './checkPaymentSystem.json'
//import validatorCardNumber from './validatorCardNumber.js'

class CardNumber extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstCardNum : 
                {firstName : '',
                value: ''},
            secondCardNum : 
                {secondName : '',
                value : ''},
            thirdCardNum : 
                {thirdName : '',
                value: ''},
            fourthCardNum : 
                {fourthName : '',
                value: ''},
            formErrors: {num: ''},
            numValid: false,
            formValid: false
        };
    }
    

    handleUserInput = (e) => {
        console.log(e.target.value);
        const {name} = e.target;
        const {value} = e.target;
        let ajv = new Ajv()
        let valueObj = {
            value: this.value
        };
        let validate = ajv.addSchema(schema1)
                  .compile(schema1);
        let valid = ajv.validate(schema1,valueObj);
        console.log(valid);
      }

    render() {
        return(
            <div className={styles}>
                <fieldset className='CardNumber'>
                    <label htmlsfor="card-number">Card Number</label>
                    <input name='firstName' type="num" className="input-cart-number" maxLength="4" 
                    value={this.state.firstName}
                    onChange={this.handleUserInput} />
                    <input name= 'secondName' type="num" className="input-cart-number" maxLength="4"
                    value={this.state.secondName}
                    onChange={this.handleUserInput} />
                    <input name='thirdName' type="num" className="input-cart-number" maxLength="4"
                    value={this.state.thirdName}
                    onChange={this.handleUserInput} />
                    <input name='fourthName' type="num" className="input-cart-number" maxLength="4"
                    value={this.state.fourthName}
                    onChange={this.handleUserInput} />
                </fieldset>
                
            </div>
            
        );
    }
    
}
export default CardNumber;