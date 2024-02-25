import React, { useState } from 'react';
import './Tipcalculator.css';

const Tipcalculator = () => {
    const [tip, setTip] = useState(0);
    const [amount, setAmount] = useState("");
    const [experience, setExperience] = useState("");
    const [name, setName] = useState("");
    const [customerList, setCustomerList] = useState([]);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const addCustomerAndCalculateTip = () => {
        if (name.trim() !== "") {
            let tipAmount = 0;
            if (experience === "Excellent-20%") {
                tipAmount = parseFloat(amount) * 0.2;
            } else if (experience === "Moderate-10%") {
                tipAmount = parseFloat(amount) * 0.1;
            } else if (experience === "Bad-5%") {
                tipAmount = parseFloat(amount) * 0.05;
            }
            setTip(tipAmount);
            setCustomerList([...customerList, { name, tip: tipAmount }]);
            setName("");
            setAmount("");

        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Tip Calculator</h1>
            </div>
            <div className="input">
                <p>Enter your bill amount</p>
                <input type="number" placeholder='Enter Amount' value={amount} onChange={handleAmountChange} /><br />
                How Was The Service:
                <select onChange={handleExperienceChange}>
                    <option value="" disabled selected>Select Your Experience</option>
                    <option>Excellent-20%</option>
                    <option>Moderate-10%</option>
                    <option>Bad-5%</option>
                </select>

                <input type="text" placeholder='Enter Customer Name' value={name} onChange={handleNameChange} />
                <button id='add' onClick={addCustomerAndCalculateTip}>Add Customer</button>
            </div>
            <div className="customerlist">
                <h2>Customer List:-</h2>
                <ul>
                    {customerList.map((customer, index) => (
                        <li key={index}>{customer.name} offered a tip of :-{customer.tip} rs</li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <table>
                    <thead>
                        <tr>
                            <th>Total Customer</th>
                            <th>Total Tip</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{customerList.length}</td>
                            <td>{customerList.reduce((acc, curr) => acc + curr.tip, 0)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tipcalculator;
