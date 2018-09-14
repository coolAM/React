import React from 'react';
import $ from 'jquery';
import CardNumber from '../Components/CardNumber'
import CardHolder from '../Components/CardHolder'
import CVV from '../Components/CVV'
import CardExpiration from '../Components/CardExpiration';
import SubmitBtn from '../Components/SubmitBtn';
import CreditCardBox from '../Components/CreditCardBox';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return(
          <div className="checkout" >
              <CreditCardBox />
              <form className="form" autoComplete="off" noValidate>
                <CardNumber />
                <CardHolder />
                <CardExpiration />
                <CVV />
                <SubmitBtn />
              </form>
          </div>  
        );
    }
  };

  /*App.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}*/

  export default App;