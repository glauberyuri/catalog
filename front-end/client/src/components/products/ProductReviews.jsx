import React from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';
import { Progress } from "../ui/Progress";

const reviews = [
  {
    id: 1,
    user: 'João Silva',
    rating: 5,
    date: '12/06/2023',
    comment: 'Excelente produto! O tecido é de alta qualidade e a camisa ficou perfeita. Recomendo muito!',
    helpful: 12,
  },
  {
    id: 2,
    user: 'Maria Oliveira',
    rating: 4,
    date: '28/05/2023',
    comment: 'Gostei bastante da camisa, só achei que ela ficou um pouco mais larga do que o esperado, mas nada que prejudique a qualidade.',
    helpful: 5,
  },
  {
    id: 3,
    user: 'Pedro Santos',
    rating: 5,
    date: '15/05/2023',
    comment: 'Comprei para dar de presente e a pessoa amou! Material muito bom e a cor é exatamente como na foto.',
    helpful: 8,
  },
];

// Calculate ratings distribution
const ratingCounts = {
  5: 65,
  4: 15,
  3: 5,
  2: 2,
  1: 0,
};

const ProductReviews = ({ rating, reviewCount }) => {
  return (
    <div>
      {/* Overall Rating */}
      <div className="flex gap-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">{rating.toFixed(1)}</div>
          <div className="flex justify-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-1">{reviewCount} avaliações</div>
        </div>
        
        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 mb-1">
              <div className="flex items-center">
                <span className="text-xs text-gray-600 w-1">{star}</span>
                <Star size={12} className="text-yellow-400 fill-yellow-400 ml-1" />
              </div>
              <Progress 
                value={(ratingCounts[star] / reviewCount) * 100} 
                className="h-2 flex-1"
              />
              <span className="text-xs text-gray-600 w-8">
                {ratingCounts[star]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center">
                  <User size={16} className="text-gray-600" />
                </div>
                <span className="font-medium text-sm">{review.user}</span>
              </div>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            
            <p className="text-sm mt-2 text-gray-700">{review.comment}</p>
            
            <button className="flex items-center gap-1 mt-2 text-xs text-gray-500">
              <ThumbsUp size={12} />
              <span>Útil ({review.helpful})</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="w-full py-2.5 border border-primary text-primary rounded-md font-medium text-sm">
          Escrever uma Avaliação
        </button>
      </div>
    </div>
  );
};

export default ProductReviews;