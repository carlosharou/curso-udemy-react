import './TableData.css';
import TableElem from '../TableElem/TableElem';

const TableData = (props) => {
    const data = props.data;

    return (
        /* Todo: Show below table conditionally (only once result data is available) */
        /* Show fallback text if no data is available */
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <TableElem data={data} />
        </table>
    );
}

export default TableData;