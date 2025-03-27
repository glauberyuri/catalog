import React from 'react';
import { BASE_URL } from '../../Api';
import Skeleton from '../ui/Skeleton';
import { Link } from 'react-router-dom';
const HomeCard = ({ product =[], loading}) => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <Link to={`products/${product.slug}`} >
        {loading ? <Skeleton /> :        
         <div
          key={product.id}
          className="relative bg-white rounded-lg overflow-hidden w-full"
        >
          {product.news && (
            <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-r-lg uppercase">
              Novo
            </div>
          )}
          <figure>
            <img
              src={`${BASE_URL}${product.image}`}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
          </figure>

          <div className="p-2 lg:p-4 flex flex-col justify-between">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">R$ {product.price}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>

          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="bg-white p-2 rounded-full shadow">📊</button>
          </div>
        </div>
      }
      </Link>
    </div>
  );
};

export default HomeCard;