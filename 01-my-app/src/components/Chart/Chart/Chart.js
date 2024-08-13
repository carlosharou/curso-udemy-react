import ChartBar from './../ChartBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
    const data = props.items;
    const arrayValues = data.map(elem => elem.value);
    const totalMax = Math.max(...arrayValues);//para sacarlos del arreglo y manejarlo como elementos independientes ( sin estar dentro de un arreglo )

    return (
        <div className="chart">{
            data.map((items) => {
                return (
                    <ChartBar
                        key={items.label}
                        value={items.value}
                        maxValue={totalMax}
                        label={items.label}
                     />
                )
            })
        }</div>
    );
}

export default Chart;