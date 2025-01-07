import React, { useState } from "react";

const InputWidget = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-green-400 p-6 rounded-lg shadow-md w-96">
        <label htmlFor="input" className="block text-gray-700 font-medium mb-2">
          Enter Text:
        </label>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Type something..."
        />
        {inputValue && (
          <p className="mt-4 text-gray-600">
            You entered: <span className="font-bold">{inputValue}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default InputWidget;

