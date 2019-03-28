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
      action:"",
      minedCoins: 0,
      coinsBought: 0,
      coinsSold: 0,
      currentValue: 0,
      coinsOwned: 0,
      coins: null
    }
  }

  retrieveCoinRecords = () => {

  }

  //stores a random number of coins when user mines for coins
  mineForCoins = (numOfTries) => {
    let coins = (Math.floor(Math.random() * numOfTries));
    this.setState({
      action: "Mined",
      minedCoins: coins,
      // coinsOwned: this.state.coinsOwned + parseInt(coins),
      currentValue: this.state.currentValue + parseInt(coins),
      // history: [...this.state.history, ]
    });
    console.log("mined coins");
  }

  //stores the number of coins bough and the current value
  buyCoins = (coinsToBuy) => {
    this.setState({
    
      coinsBought: this.state.coinsBought + parseInt(coinsToBuy),
      coinsOwned: this.state.coinsOwned + parseInt(coinsToBuy),
      currentValue: this.state.currentValue * parseInt(coinsToBuy),
    })
    console.log("coins bought")
  }

  //stores the number of coins sold and the current value
  sellCoins = (selling) => {
      this.setState({
        coinsSold: this.state.coinsSold + parseInt(selling),
        coinsOwned: this.state.coinsOwned - parseInt(selling),
        currentValue: this.state.currentValue - parseInt(selling),
      })
    console.log("sold coins");
  }


  render() {
    console.log("current state", this.state)

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
                  minedCoins={this.state.minedCoins}
                  currentValue={this.state.currentValue}
                  coinsOwned={this.state.coinsOwned}
                  mineForCoins={this.mineForCoins} ß
                />)
              }}
            />
            <Route
              path="/buy"
              render={(props) => {
                return (<BuyCoins
                  coinsBought={this.state.coinsBought}
                  currentValue={this.state.currentValue}
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
                  currentValue={this.state.currentValue}
                  coinsOwned={this.state.coinsOwned}
                  sellCoins={this.sellCoins}
                />)
              }}
            />
            <Route 
            path="/ledger" 
            render={(props) => {
              return (<Ledger
                minedCoins={this.state.minedCoins}
                coinsBought={this.state.coinsBought}
                coinsSold={this.state.coinsSold}
                currentValue={this.state.currentValue}
                coinsOwned={this.state.coinsOwned}
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
