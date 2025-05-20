import React from 'react';

const ColorSelector = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold mb-2">
        Cor: {colors.find(c => c.id === selectedColor)?.name}
      </h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.id}
            className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.id ? 'border-primary' : 'border-gray-200'}`}
            style={{ backgroundColor: color.value }}
            onClick={() => onSelectColor(color.id)}
          >
            {selectedColor === color.id && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;