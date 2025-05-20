
import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductActions = ({ onAddToCart, onBuyNow }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 flex gap-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-10">
      <button 
        onClick={onAddToCart}
        className="flex-1 border border-primary text-primary rounded-full py-2.5 font-medium">
        Adicionar ao Carrinho
      </button>
      <button 
        onClick={onBuyNow}
        className="flex-1 bg-primary text-white rounded-full py-2.5 font-medium flex items-center justify-center gap-1">
        Comprar Agora
        <ShoppingBag size={16} />
      </button>
    </div>
  );
};

export default ProductActions;
