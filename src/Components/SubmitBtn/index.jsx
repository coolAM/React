import React from 'react';
import styles from './styles.css' 

class SubmitBtn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return(
            <div className={styles}>
                <button className="btn"><i className="fa fa-lock"></i> submit</button>
            </div>
        );
    }
}



export default SubmitBtn;