
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProductReviews from '../products/ProductReviews';



const ProductInfo = ({ description, specifications, rating, reviewCount }) => {
  return (
    <div className="bg-white mt-2 p-4">
      <Tabs defaultValue="description">
        <TabsList className="grid grid-cols-3 bg-gray-100">
          <TabsTrigger value="description">Descrição</TabsTrigger>
          <TabsTrigger value="specifications">Especificações</TabsTrigger>
          <TabsTrigger value="reviews">Avaliações</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </TabsContent>
        <TabsContent value="specifications" className="py-4">
          <div className="grid grid-cols-2 gap-3">
            {specifications.map((spec, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{spec.name}:</span> {spec.value}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="py-4">
          <ProductReviews rating={rating} reviewCount={reviewCount} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductInfo;