import { useState } from 'react';

import Header from './Components/Header/Header';
import CalculatorForm from './Components/CalculatorForm/CalculatorForm';
import TableData from './Components/TableData/TableData';

function App() {
  const [dataInterest, setDataInteres] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...*/
    setDataInteres(yearlyData);
  };

  const clearData = () => {
    setDataInteres([]);
  }

  return (
    <div>
      <Header />
      <CalculatorForm onCalculatedHandler={calculateHandler} onClearData={clearData} />
      <TableData data={dataInterest} />
    </div>
  );
}

export default App;
