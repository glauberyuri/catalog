
import React from 'react';
import { Truck } from 'lucide-react';


const ProductShipping = ({ shipping }) => {
  return (
    <div className="flex items-center gap-2 mt-4 p-3 bg-blue-50 rounded-lg">
      <Truck size={18} className="text-primary" />
      <div className="flex-1">
        <p className="text-sm font-medium">
          {shipping.free ? 'Frete Grátis' : 'Frete Calculado no Checkout'}
        </p>
        <p className="text-xs text-gray-600">
          Prazo de entrega estimado: {shipping.estimatedDelivery}
        </p>
      </div>
    </div>
  );
};

export default ProductShipping;
