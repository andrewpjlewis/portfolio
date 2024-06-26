import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [newCurrency, setNewCurrency] = useState(currency);

    // Sync local state with context state
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        setNewBudget(parseInt(event.target.value, 10) || 0);
    };

    const handleBudgetUpdate = () => {
        const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
        if (newBudget < totalExpenses) {
            alert(`Budget cannot be lower than the total expenses: ${currency}${totalExpenses}`);
            setNewBudget(budget);  // Reset the input to the current budget
        } else {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    };

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setNewCurrency(newCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
                onBlur={handleBudgetUpdate} 
            />
            <div>
                <label>Currency: </label>
                <select 
                    value={newCurrency} 
                    onChange={handleCurrencyChange} 
                    className="custom-select"
                >
                    <option value="£" className="custom-option">£ Pound</option>
                    <option value="$" className="custom-option">$ Dollar</option>
                    <option value="€" className="custom-option">€ Euro</option>
                    <option value="₹" className="custom-option">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;
