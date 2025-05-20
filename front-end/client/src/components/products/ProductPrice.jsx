import React from 'react';

const ProductPrice = ({ price, discount, oldPrice }) => {
  return (
    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-primary">
          R$ {price.toFixed(2).replace('.', ',')}
        </div>
        
        {discount > 0 && (
          <div className="flex flex-col">
            <span className="text-sm line-through text-gray-500">
              R$ {oldPrice.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full self-start">
              -{discount}% OFF
            </span>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-1">
        Em até 12x de R$ {(price / 12).toFixed(2).replace('.', ',')} sem juros
      </p>
    </div>
  );
};

export default ProductPrice;