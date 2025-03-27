import React from 'react';
import HomeCard from './HomeCard';

const CardContainer = ({ products, loading }) => {

  const productList = Object.values(products);

  const gridClasses =
    productList.length === 1
      ? "grid-cols-1" 
      : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6";

  return (
    <div className="bg-gray-50 py-12 sm:py-24">
      <div className="mx-auto max-w-2xl px-2 lg:px-6 lg:max-w-7xl lg:px-8">
        <h5 className="text-center text-base/7 font-semibold text-indigo-600">
          Destaques
        </h5>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Nossos Produtos
        </p>
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
