import './TableElem.css';

const TableElem = (props) => {
    const data = props.data;

    if (data.length == 0) {
        return (
            <tbody>
                <tr>
                    <td colSpan='5' align='center'>Data not found</td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody>
            {
                data.map((elem) => {
                    return (
                        <tr key={elem.year}>
                            <td>{elem.year}</td>
                            <td>{elem.savingsEndOfYear}</td>
                            <td>{elem.yearlyInterest}</td>
                            <td>{elem.yearlyContribution}</td>
                            <td>{elem.yearlyInterest + elem.yearlyContribution}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
}

export default TableElem;