import { useState } from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  image: string;
  marketPrice: number;
  offerPrice: number;
  sizes: number[];
}

interface ProductCardProps {
  product: Product;
  index: number;
  phoneNumber: string;
}

const ProductCard = ({ product, index, phoneNumber }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const totalPrice = product.offerPrice * quantity;

  const handleWhatsAppOrder = () => {
    if (!selectedSize) return;
    
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering:\n\n*${product.name}*\nSize: ${selectedSize}\nQuantity: ${quantity}\nTotal: Rs. ${totalPrice.toLocaleString()}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      className={`animate-fade-up stagger-${(index % 6) + 1} group bg-card rounded-xl overflow-hidden shadow-md hover-lift border border-border`}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-price-offer text-primary-foreground px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
          Save Rs. {product.marketPrice - product.offerPrice}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="font-semibold text-base sm:text-lg text-card-foreground mb-1.5 sm:mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <span className="text-lg sm:text-2xl font-bold text-price-offer">
            Rs. {product.offerPrice.toLocaleString()}
          </span>
          <span className="text-price-strike line-through text-xs sm:text-sm">
            Rs. {product.marketPrice.toLocaleString()}
          </span>
        </div>

        {/* Sizes */}
        <div className="mb-3 sm:mb-4">
          <p className="text-xs text-muted-foreground mb-1.5 sm:mb-2">Select Size:</p>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs rounded-md font-medium transition-all duration-200 border ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary text-secondary-foreground border-transparent hover:border-primary/50'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mb-3 sm:mb-4">
          <p className="text-xs text-muted-foreground mb-1.5 sm:mb-2">Quantity:</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md bg-secondary text-secondary-foreground border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-semibold text-sm sm:text-base">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-md bg-secondary text-secondary-foreground border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus size={14} />
            </button>
            <span className="ml-auto text-sm font-semibold text-price-offer">
              Total: Rs. {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppOrder}
          disabled={!selectedSize}
          className="w-full bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-semibold py-3 sm:py-5 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          <MessageCircle size={16} className="mr-1.5 sm:mr-2 flex-shrink-0" />
          Order on WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
