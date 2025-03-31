import React, { useState, useEffect } from 'react';

const carouselItems = [
  {
    id: 1,
    title: "Novos Lançamentos",
    subtitle: "Produtos exclusivos",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800"
  },
  {
    id: 2,
    title: "Promoções",
    subtitle: "Até 30% OFF",
    bgColor: "bg-red-100",
    textColor: "text-red-800"
  },
  {
    id: 3,
    title: "Coleção Verão",
    subtitle: "Veja as novidades",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800"
  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 ">
      <div className="container-mobile p-4">
        <div className="relative overflow-hidden rounded-xl h-40">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              } ${item.bgColor} p-6 flex flex-col justify-center`}
            >
              <h3 className={`text-xl font-bold ${item.textColor}`}>{item.title}</h3>
              <p className={`${item.textColor}`}>{item.subtitle}</p>
            </div>
          ))}
          
          {/* Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;