import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'MINUS_EXPENSE',
            payload: expense
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><TiPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}>+</TiPlus></td>
        <td><TiMinus size='1.5em' onClick={event=> decreaseAllocation(props.name)}></TiMinus></td>
        <td><TiDelete size='1.5em' onClick={event=> handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;