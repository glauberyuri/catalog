import React from 'react';
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";



const SizeSelector = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="mt-5">
      <h3 className="text-sm font-semibold mb-2">Tamanho: {selectedSize}</h3>
      <RadioGroup 
        value={selectedSize} 
        onValueChange={onSelectSize}
        className="flex gap-2"
      >
        {sizes.map((size) => (
          <div key={size} className="flex-1">
            <RadioGroupItem 
              value={size} 
              id={`size-${size}`} 
              className="peer sr-only" 
            />
            <label
              htmlFor={`size-${size}`}
              className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm font-medium transition-all hover:bg-gray-100 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
            >
              {size}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SizeSelector;