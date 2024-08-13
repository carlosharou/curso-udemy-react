import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

function ExpenseItem(props) {//props, {date, title, amount}
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('updated!!!');
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;