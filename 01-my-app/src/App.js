import { useState } from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        }, { 
            id: 'e2', 
            title: 'New TV', 
            amount: 799.49, 
            date: new Date(2021, 2, 12)
        }, {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        }, {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [initDataExpenses, setDataExpenses] = useState(expenses);

    const addExpenseHandler = (expense) => {
        setDataExpenses((prevStatus) => {
            return [
                expense,
                ...prevStatus
            ];
        });
    }


    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses data={initDataExpenses} />
        </div>
    );
}

export default App;
