import { useState } from 'react';

import './Expenses.css';
import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

function Expenses(props) {
    const data = props.data;
    const [filteredYear, setFilteredYear] = useState('2020');


    const changeFilterYear = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = data.filter(elem => {
        return elem.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilterYear={changeFilterYear} selectedYear={filteredYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;