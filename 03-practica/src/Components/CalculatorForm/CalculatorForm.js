import './CalculatorForm.css';

const CalculatorForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        
        const data = {
            currentSavings: +document.getElementById('current-savings').value,
            contribution: +document.getElementById('yearly-contribution').value,
            expectedReturn: +document.getElementById('expected-return').value,
            duration: +document.getElementById('duration').value
        };
        
        props.onCalculatedHandler(data);
    }

    const resetHandler = (event) => {
        document.getElementById('current-savings').value = '';
        document.getElementById('yearly-contribution').value = '';
        document.getElementById('expected-return').value = '';
        document.getElementById('duration').value = '';

        props.onClearData();
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="button" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default CalculatorForm;