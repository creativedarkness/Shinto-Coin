import React, { Component } from 'react';

class SellCoins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numToSell: 0,
        }
    }

    // place functions here to manipulate the state


handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    if(this.numToSell + this.props.currentOwned < 0){
        alert("You cannot sell more than what you have")
    }else {
        this.props.sellCoins(this.state.numToSell)
    }
    // console.log("input submitted")
}

    render() {
        // set variables to arrow functiont to create HTML components

        return (
            <div>
                <h1>Sell ShintoCoins</h1>
                <p>
                    Current ShintoCoin Value: ${this.props.value}.00
                </p>
                <p>
                    Number of ShintoCoins Owned: {this.props.coinsOwned}
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="numToSell" className="numToSell" value={this.state.numToSell} onChange={this.handleChange} />
                    <input type="submit" value="Sell" />
                </form>
            </div>
        )
    }
}
export default SellCoins