import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGallery from '../products/ProductGallery';
import RelatedProducts from '../products/ProductRelated';
import ProductHeader from '../products/ProductHeader';
import ProductPrice from '../products/ProductPrice';
import ProductShipping from '../products/ProductShipping';
import ColorSelector from '../products/ColorSelector';
import SizeSelector from '../products/SizeSelector';
import QuantitySelector from '../products/QuantitySelector';
import ProductInfo from '../products/ProductInfo';
import ProductActions from '../products/ProductActions';
import api from "../../Api"


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

const ProductDetail = ({products, similarProducts, numCartItems, setNumerCartItems}) => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [inCart, setInCart] = useState(false)
  const [quantity, setQuantity] = useState(1);
  const cart_code = localStorage.getItem("cart_code");

  useEffect(() => {
    if(product.id)
    {
      api.get(`product_in_cart?cart_code=${cart_code}&product_id=${product.id}`)
      .then(res => {
        console.log(res.data)
        setInCart(res.data.product_in_cart)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  }, [cart_code, product.id])

  const newItem = {cart_code: cart_code, product_id: product.id, quantity: quantity}
  function add_item(){
    api.post("add_item/", newItem)
     .then(res => {
        console.log(res.data, "sucesso na criação")
        setInCart(true)
        setNumerCartItems(curr => curr + 1)
     })
     .catch(err =>{
      console.log(err.message, 'erro ao cadastrar item')
     })
  }

  const handleBuyNow = () => {
    // Aqui adicionaríamos a lógica para compra direta
    navigate('/checkout');
  };

  return (
    <div className="pb-16 bg-gray-50">
      {/* Header */}
      <ProductHeader productId={product.id} productName={product.name} numCartItems={numCartItems}/>

      <div className="pt-16 pb-24"> 

        {/* Product Gallery */}
        <ProductGallery images={product.images} />
        
        {/* Product Info */}
        <div className="bg-white p-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-1 mt-1">
                {/* Star ratings foram movidos para o componente ProductReviews */}
              </div>
            </div>
          </div>

          {/* Preço */}
          <ProductPrice 
            price={product.price} 
            discount={product.discount} 
            oldPrice={product.oldPrice} 
          />

          {/* Shipping */}
          <ProductShipping shipping={product.shipping} />

          {/* Color Selection */}
          <ColorSelector 
            colors={product.colors} 
            selectedColor={selectedColor} 
            onSelectColor={setSelectedColor} 
          />

          {/* Size Selection */}
          <SizeSelector 
            sizes={product.sizes} 
            selectedSize={selectedSize} 
            onSelectSize={setSelectedSize} 
          />

          {/* Quantity */}
          <QuantitySelector 
            quantity={quantity} 
            setQuantity={setQuantity} 
          />
        </div>

        {/* Product Tabs */}
        <ProductInfo 
          description={product.description}
          specifications={product.specifications}
          rating={product.rating}
          reviewCount={product.reviewCount}
        />

        {/* Related Products */}
        <div className="mt-4">
          <RelatedProducts products={similarProducts}/>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <ProductActions 
        onAddToCart={add_item} 
        onBuyNow={handleBuyNow} 
      />
    </div>
  );
};

export default ProductDetail;