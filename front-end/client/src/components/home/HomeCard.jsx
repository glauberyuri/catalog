import React from 'react';
import { BASE_URL } from '../../Api';
import Skeleton from '../ui/Skeleton';
import { Link } from 'react-router-dom';
const HomeCard = ({ product =[], loading}) => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <Link to={`products/${product.slug}`} >
        {loading ? <Skeleton skeleton="product" /> :        
          <div key={product.id} className="bg-white p-3 rounded-xl border-4 border-indigo-500/50 shadow-sm hover:shadow-md transition-all duration-300">
          {product.news && (
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-r-lg uppercase">
              Novo
            </div>
          )}
              <img 
                src={`${BASE_URL}${product.image}`}
                alt={product.name} 
                className="w-full h-36 object-cover rounded-lg mb-2" 
              />
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="text-primary font-bold">
                R$ {product.price}
              </p>
              <button className="w-full bg-indigo-500/50 text-white rounded-full py-1 mt-2 text-sm">
                Adicionar
              </button>
          </div>
      }
      </Link>
    </div>
  );
};

export default HomeCard;