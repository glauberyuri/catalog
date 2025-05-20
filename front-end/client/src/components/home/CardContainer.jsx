import React from 'react';
import HomeCard from './HomeCard';

const CardContainer = ({ products, loading }) => {

  const productList = Object.values(products);

  const gridClasses =
    productList.length === 1
      ? "grid-cols-1" 
      : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:p-6 lg:gap-6";

  return (
    <div className="py-4 bg-gray-50">
      <div className="container-mobile p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Produtos em Destaque</h2>
            <a href="#" className="text-primary text-sm">Ver todos</a>
          </div>
          <div className={`mt-10 grid ${gridClasses} gap-4`}>
            {productList.map((product) => (
              <HomeCard key={product.id} product={product} loading={loading} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default CardContainer;
