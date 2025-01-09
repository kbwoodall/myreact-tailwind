import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (operation) => {
    let calculatedResult;

    if (operation === 'add') {
      
      calculatedResult = parseFloat(num1) + parseFloat(num2);
      console.log(result);
    } else if (operation === 'subtract') {
      calculatedResult = parseFloat(num1) - parseFloat(num2);
      console.log(result);
    } else if (operation === 'multiply') {
      calculatedResult = parseFloat(num1) * parseFloat(num2);
      console.log(result);
    } else if (operation === 'divide') {
      calculatedResult = parseFloat(num1) / parseFloat(num2);
      console.log(result);
    }

    setResult(calculatedResult);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Simple Calculator</h1>
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
          <input
            type="number"
            className="border border-gray-300 rounded px-4 py-2"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
          <input
            type="number"
            className="border border-gray-300 rounded px-4 py-2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleCalculate('add')}
          >
            +
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleCalculate('subtract')}
          >
            -
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleCalculate('multiply')}
          >
            *
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleCalculate('divide')}
          >
            /
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg">Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;