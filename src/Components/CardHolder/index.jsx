import React from 'react';
import styles from './styles.css' 

class CardHolder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return(
            <div className={styles}>
                <fieldset className='Cardholder'>
                    <label htmlsfor="card-holder">Card holder</label>
                    <input type="text" id="card-holder" />
                </fieldset>
            </div>
        );
    }
}
export default CardHolder;