import React, { Component } from 'react';

class MineCoins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNum: 0,
        }
    }


    // place functions here to manipulate the state
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.mineForCoins(this.state.inputNum)
    }

    render() {
        console.log("You found this many coins: ", this.props.amount);
        // console.log("current value", this.props)
        // set variables to arrow functiont to create HTML components
        return (
            <div>
                <h1>Mine Conins here</h1>
                <p>
                    Here you can mine ShintoCoins by being the first to solve the algorithm:
                </p>
                <p>
                    Enter the number of time you would like to mine
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="inputNum" value={this.state.inputNum} onChange={this.handleChange} />
                    <input type="submit" value="Mine" />
                </form>

                <h3 className="displayTitle">You found {this.props.amount} coins!</h3>
            </div>
        )
    }
}
export default MineCoins