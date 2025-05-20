import React from 'react';


const QuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold mb-2">Quantidade</h3>
      <div className="flex items-center border border-gray-200 rounded-md w-36">
        <button 
          className="px-3 py-2 text-gray-500"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="w-12 text-center border-0 focus:ring-0"
        />
        <button 
          className="px-3 py-2 text-gray-500"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;