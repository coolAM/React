import React from 'react';
import styles from './styles.css' 

class CreditCardBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return(
            <div className={styles}>
                
                    <div className="credit-card-box">
                        <div className="flip">
                        <div className="front">
                            <div className="chip"></div>
                            <div className="number"></div>
                            <div className="card-holder">
                            <label>Card holder</label>
                            <div></div>
                            </div>
                            <div className="card-expiration-date">
                            <label>Expires</label>
                            <div></div>
                            </div>
                        </div>
                        <div className="back">
                            <div className="strip"></div>
                            <div className="ccv">
                            <label>CCV</label>
                            <div></div>
                            </div>
                        </div>
                        </div>
                    </div>
               
            </div>
        );
    }
}
export default CreditCardBox;