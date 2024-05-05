import React, { useState } from 'react';

const DisableEnableButton = () => {
  const [isChecked, setIsChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (option) => {
    setIsChecked({
      ...isChecked,
      [option]: !isChecked[option],
    });
  };

  const areAllOptionsSelected = () => {
    return Object.values(isChecked).every((value) => value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col space-y-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600 h-5 w-5"
            checked={isChecked.option1}
            onChange={() => handleCheckboxChange('option1')}
          />
          <span className="ml-2">Option 1</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600 h-5 w-5"
            checked={isChecked.option2}
            onChange={() => handleCheckboxChange('option2')}
          />
          <span className="ml-2">Option 2</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600 h-5 w-5"
            checked={isChecked.option3}
            onChange={() => handleCheckboxChange('option3')}
          />
          <span className="ml-2">Option 3</span>
        </label>
      </div>
      <button
        className={`mt-4 px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50 ${
          areAllOptionsSelected() ? '' : 'cursor-not-allowed'
        }`}
        disabled={!areAllOptionsSelected()}
      >
        Submit
      </button>
    </div>
  );
};

export default DisableEnableButton;
