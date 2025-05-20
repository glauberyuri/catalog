
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart } from 'lucide-react';

const ProductHeader = ({ productId, productName }) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white py-3 px-4 shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-gray-100 mr-3"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold truncate flex-1">Detalhes do Produto</h1>
        <div className="flex gap-2">

          <button className="p-2 rounded-full bg-gray-100">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;