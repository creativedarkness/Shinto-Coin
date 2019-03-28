import React, { Component } from 'react';
import axios from "axios";

class Ledger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: []
        }
    }

    retriveCoins = () => {
        axios
            .get(`http://localhost:1337/coins/`)
            .then((response) => {
                console.log(response);
            })
    }
    render() {
        return (
            <div>
                <h1>Browser the Ledger</h1>
                <p>Here you can browse all ShintoCoin transactions</p>
            </div>
        )
    }
}

export default Ledger