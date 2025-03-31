
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel.tsx";
import { BASE_URL } from '../../Api';

const RelatedProducts = ({products}) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Produtos Relacionados</h2>
        <a href="#" className="text-primary text-sm flex items-center">
          Ver todos
          <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4">
              <div className="product-card">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`${BASE_URL}${product.image}`}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm truncate">{product.name}</h3>
                  <p className="text-primary font-bold mt-1">
                    R$ {product.price}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
