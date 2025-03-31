import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel.tsx";

const categoryItems = [
  { 
    id: 1, 
    name: 'Roupas', 
    description: 'Moda atual e elegante',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  { 
    id: 2, 
    name: 'Sapatos', 
    description: 'Conforto para seus pés',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 3, 
    name: 'Acessórios', 
    description: 'Complementos perfeitos',
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 4, 
    name: 'Beleza', 
    description: 'Produtos para sua pele',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 5, 
    name: 'Casa', 
    description: 'Decoração e utilidades',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 6, 
    name: 'Tecnologia', 
    description: 'Inovação e conectividade',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 7, 
    name: 'Esportes', 
    description: 'Para sua atividade física',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 8, 
    name: 'Alimentos', 
    description: 'Sabor e qualidade',
    image: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
  },
];

const CategoryCarousel = () => {
  return (
    <div className="py-6 bg-white">
      <div className="container-mobile">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Explore Categorias</h2>
          <a href="#" className="text-primary text-sm font-medium">Ver todas</a>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {categoryItems.map((category) => (
              <CarouselItem key={category.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                <div className="relative overflow-hidden rounded-xl shadow-sm h-32 group">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                    <h3 className="font-bold text-white">{category.name}</h3>
                    <p className="text-xs text-white/90">{category.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;