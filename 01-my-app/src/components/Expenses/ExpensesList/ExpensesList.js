import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css';


const ExpensesList = props => {
    const filteredExpenses = props.items;

    if (filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">{
            filteredExpenses.map((element) => {
                return (
                    <ExpenseItem 
                        key={element.id} 
                        title={element.title} 
                        amount={element.amount} 
                        date={element.date}
                    ></ExpenseItem>
                );
            })
        }</ul>
    )
};

export default ExpensesList;