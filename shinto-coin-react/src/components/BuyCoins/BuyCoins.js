import React, { Component } from 'react';

class BuyCoins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
        }
    }

    // place functions here to manipulate the state
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state.coinsBought);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.buyCoins(this.state.inputValue)
        // console.log("purchase submitted")
    }

    render() {
        // console.log(this.props);
        // set variables to arrow functiont to create HTML components
        return (
            <div>
                <h1>Buy Conins here</h1>
                <p>
                    Current ShintoCOin Value: ${this.props.currentValue}.00
                </p>
                <p>
                    Number of ShintoCoins Owned: {this.props.coinsOwned}
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="inputValue" className="inputValue" value={this.state.inputValue} onChange={this.handleChange} />
                    <input type="submit" value="BUY" />
                </form>
            </div>
        )
    }
}
export default BuyCoins