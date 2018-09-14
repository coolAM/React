import React from 'react';
import styles from './styles.css' 
import validatorExpiration from './cardExpiration.js'

class CardExpiration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    

    render() {
        return(
            <div className={styles}>
                <fieldset className="fieldset-expiration">
                  <label htmlsfor="card-expiration-month">Expiration date</label>
                  <div className="select">
                    <select id="card-expiration-month">
                      <option></option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="select">
                    <select id="card-expiration-year">
                      <option></option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </div>
                </fieldset>
            </div>
        );
    }
}
export default CardExpiration;