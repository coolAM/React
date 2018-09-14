import React from 'react';
import styles from './styles.css' 

class CVV extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return(
            <div className={styles}>
                <fieldset className="fieldset-ccv">
                  <label htmlsfor="card-ccv">CCV</label>
                  <input type="text" id="card-ccv" maxLength="3" />
                </fieldset>
            </div>
        );
    }
}



export default CVV;