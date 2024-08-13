import './ExpenseDate.css';

function ExpenseDate(props) {
    const mes = props.date.toLocaleString('es-MX', { month: 'long' });
    const dia = props.date.toLocaleString('es-MX', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{mes}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{dia}</div>
        </div>
    );
}

export default ExpenseDate;