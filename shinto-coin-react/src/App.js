import React, { Component } from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import axios from "axios";
import Home from "./components/Home/Home";
import MineCoins from "./components/MineCoins/MineCoins";
import BuyCoins from "./components/BuyCoins/BuyCoins";
import SellCoins from "./components/SellCoins/SellCoins";
import Ledger from "./components/Ledger/Ledger";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      amount: 0,
      value: 0,
      coinsOwned: 0,
      ledgers: []
    }
  }

  componentDidMount() {
    // console.log("componentDidMount")
    axios
      .get("http://localhost:1337/ledgers")
      .then((response) => {
        // console.log("didmount response:",response);
        this.setState({
          ledgers: response.data.ledgers,
        })
      })
  }

  //stores a random number of coins when user mines for coins
  mineForCoins = (numOfTries) => {
    let coins = (Math.floor(Math.random() * numOfTries));
    let newValue = this.state.value + parseInt(coins);
    let newCoins = this.state.coinsOwned + parseInt(coins)

    this.setState({
      action: "Mined",
      amount: coins,
      coinsOwned: newCoins,
      value: newValue,
      // ledgers: response.data.ledgers,
    })
    // axios
    //   .post("http://localhost:1337/ledgers", {
    //     action: "Mined",
    //     amount: coins,
    //     coinsOwned: newCoins,
    //     value: newValue
    //   })
    //   .then((mineResponse) => {
    //     console.log("mined coins", mineResponse);
    //     axios
    //       .get("http://localhost:1337/ledgers")
    //       .then((mineGetResponse) => {
    //         console.log("didmount response:", mineGetResponse);
    //       })

    //   })
  }

  //stores the number of coins bough and the current value
  buyCoins = (coinsToBuy) => {
    this.setState({
      action: "Bought",
      amount: this.state.amount + parseInt(coinsToBuy),
      coinsOwned: this.state.coinsOwned + parseInt(coinsToBuy),
      value: this.state.value * parseInt(coinsToBuy),
    })
    console.log("coins bought")
  }

  //stores the number of coins sold and the current value
  sellCoins = (selling) => {
    this.setState({
      action: "Sold",
      amount: this.state.amount + parseInt(selling),
      coinsOwned: this.state.coinsOwned - parseInt(selling),
      value: this.state.value - parseInt(selling),
    })
    console.log("sold coins");
  }


  render() {
    console.log("current state", this.state);

    return (
      <div className="App">
        <BrowserRouter>
          <div className="navBar">
            <ul>
              <li className="navItem"><Link to="/home">Home</Link></li>
              <li className="navItem"><Link to="/mine">Mine Coins</Link></li>
              <li className="navItem"><Link to="/buy">Buy Coins</Link></li>
              <li className="navItem"><Link to="/sell">Sell Coins</Link></li>
              <li className="navItem"><Link to="/ledger">Browse Ledger</Link></li>
            </ul>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route
              path="/mine"
              render={(props) => {
                return (<MineCoins
                  amount={this.state.amount}
                  value={this.state.value}
                  coinsOwned={this.state.coinsOwned}
                  mineForCoins={this.mineForCoins} 
                />)
              }}
            />
            <Route
              path="/buy"
              render={(props) => {
                return (<BuyCoins
                  coinsBought={this.state.coinsBought}
                  value={this.state.value}
                  coinsOwned={this.state.coinsOwned}
                  buyCoins={this.buyCoins}
                />)
              }}
            />
            <Route
              path="/sell"
              render={(props) => {
                return (<SellCoins
                  coinsSold={this.state.coinsSold}
                  value={this.state.value}
                  coinsOwned={this.state.coinsOwned}
                  sellCoins={this.sellCoins}
                />)
              }}
            />
            <Route
              path="/ledger"
              render={(props) => {
                return (<Ledger
                  ledgers={this.state.ledgers}
                />)
              }}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
