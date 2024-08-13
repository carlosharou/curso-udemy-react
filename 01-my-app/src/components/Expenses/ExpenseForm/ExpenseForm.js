import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('100.00');
    const [enteredDate, setEnteredDate] = useState('dd/mm/aaaa');
    const [showNewExpense, setShowNewExpense] = useState(false);
    /*const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });*/

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /*setUserInput({
            title: event.target.value,
            ...userInput
        });
        setUserInput((prevState) => {
            return {
                title: event.target.value,
                ...prevState
            }
        });*/
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /*setUserInput((prevState) => {
            console.log({amount: event.target.value});
            return {
                amount: event.target.value,
                ...prevState
            }
        });*/
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /*setUserInput((prevState) => {
            return {
                date: event.target.value,
                ...prevState
            }
        });*/
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        clickCancelNewExpense();
    }

    const clickShowNewExpense = () => {
        setShowNewExpense(true);
    }

    const clickCancelNewExpense = () => {
        setShowNewExpense(false);
    }


    if (!showNewExpense) {
        return (
            <form>
                <button onClick={clickShowNewExpense}>Add New Expense</button>
            </form>
        );
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={clickCancelNewExpense}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;