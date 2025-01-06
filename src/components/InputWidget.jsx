import React from "react";

const InputWidget = () => {
  return (
    <div className="flex items-center justify-center bg-blue-300">
      <div className="bg-green-400 p-6 rounded-lg shadow-md w-96">
        <label htmlFor="input" className="block text-gray-700 font-medium mb-2">
          Enter Text:
        </label>
        <input
          type="text"
          id="input"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Type something..."
        />
      </div>
    </div>
  );
};

export default InputWidget;
