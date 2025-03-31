import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, Truck, ShoppingBag, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import ProductGallery from '../products/ProductGallery';
import ProductRelated from '../products/ProductRelated';
import ProductReviews from '../products/ProductReviews';


const product = {
  id: 1,
  name: "Camisa Casual Masculina",
  price: 129.90,
  discount: 20,
  oldPrice: 159.90,
  rating: 4.5,
  reviewCount: 87,
  description: "Camisa casual masculina com tecido macio e confortável. Perfeita para o dia a dia ou ocasiões especiais. Material de alta qualidade e durabilidade.",
  colors: [
    { id: 1, name: "Azul", value: "#3B82F6" },
    { id: 2, name: "Preto", value: "#1F2937" },
    { id: 3, name: "Branco", value: "#F9FAFB" },
    { id: 4, name: "Vermelho", value: "#EF4444" },
  ],
  sizes: ["P", "M", "G", "GG"],
  images: [
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  ],
  specifications: [
    { name: "Material", value: "Algodão 100%" },
    { name: "Estilo", value: "Casual" },
    { name: "Manga", value: "Longa" },
    { name: "Gola", value: "Italiana" },
    { name: "Lavagem", value: "Máquina, água fria" },
    { name: "Origem", value: "Nacional" },
  ],
  shipping: {
    free: true,
    estimatedDelivery: "3-5 dias úteis",
  }
};

const ProductDetail = ({producs, similarProducts}) => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pb-16 bg-gray-50">
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

      <div className="pt-16 pb-24"> 

        <ProductGallery images={product.images} />

        <div className="bg-white p-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviewCount} avaliações)</span>
              </div>
            </div>
            <div className="text-right">
              {product.discount > 0 && (
                <span className="text-sm line-through text-gray-400">
                  R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <div className="text-xl font-bold text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>
              {product.discount > 0 && (
                <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">
                  -{product.discount}% OFF
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 p-3 bg-blue-50 rounded-lg">
            <Truck size={18} className="text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">
                {product.shipping.free ? 'Frete Grátis' : 'Frete Calculado no Checkout'}
              </p>
              <p className="text-xs text-gray-600">
                Prazo de entrega estimado: {product.shipping.estimatedDelivery}
              </p>
            </div>
          </div>


          <div className="mt-5">
            <h3 className="text-sm font-semibold mb-2">Cor: {product.colors.find(c => c.id === selectedColor)?.name}</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.id ? 'border-primary' : 'border-gray-200'}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color.id)}
                >
                  {selectedColor === color.id && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-sm font-semibold mb-2">Tamanho: {selectedSize}</h3>
            <RadioGroup 
              value={selectedSize} 
              onValueChange={setSelectedSize}
              className="flex gap-2"
            >
              {product.sizes.map((size) => (
                <div key={size} className="flex-1">
                  <RadioGroupItem 
                    value={size} 
                    id={`size-${size}`} 
                    className="peer sr-only" 
                  />
                  <label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-center text-sm font-medium transition-all hover:bg-gray-100 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                  >
                    {size}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mt-5">
            <h3 className="text-sm font-semibold mb-2">Quantidade</h3>
            <div className="flex items-center border border-gray-200 rounded-md w-36">
              <button 
                className="px-3 py-2 text-gray-500"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-12 text-center border-0 focus:ring-0"
              />
              <button 
                className="px-3 py-2 text-gray-500"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white mt-2 p-4">
          <Tabs defaultValue="description">
            <TabsList className="grid grid-cols-3 bg-gray-100">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="py-4">
              <div className="grid grid-cols-2 gap-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium">{spec.name}:</span> {spec.value}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-4">
              <ProductReviews rating={product.rating} reviewCount={product.reviewCount} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-4">
          <ProductRelated products={similarProducts}/>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetail;