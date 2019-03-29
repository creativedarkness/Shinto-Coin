import React from 'react';
import "./Ledger.css"

const Ledger = (props) => {

    const showLedger = props.ledgers.map((ledger, idx) => {
        // console.log("passing in ledger as ",ledger);
        return (
            <tr key={idx}>
            <td>{ledger.action}</td>
            <td>{ledger.amount}</td>
            <td>{ledger.value}</td>
            <td><button>Details</button></td>
            </tr>
        )
    })

    return (
        <div className="ledger">
            <h1>Browser the Ledger</h1>
            <p>Here you can browse all ShintoCoin transactions</p>
            <table className="coinLedger">
                <caption className="tableTitle">ShintoCoin Ledger</caption>
                <tbody>
                    <tr>
                        <th>Action</th>
                        <th>Amount</th>
                        <th>Value</th>
                        <th></th>
                    </tr>
                        {showLedger}
                </tbody>
            </table>
        </div>
    )
}

export default Ledger