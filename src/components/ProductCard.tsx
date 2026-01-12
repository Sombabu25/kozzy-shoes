import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
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

  const handleWhatsAppOrder = () => {
    if (!selectedSize) return;
    
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering:\n\n*${product.name}*\nSize: ${selectedSize}\nPrice: Rs. ${product.offerPrice}\n\nPlease confirm availability and delivery details.`
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
        <div className="absolute top-3 right-3 bg-price-offer text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          Save Rs. {product.marketPrice - product.offerPrice}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 md:p-5">
        <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl font-bold text-price-offer">
            Rs. {product.offerPrice.toLocaleString()}
          </span>
          <span className="text-price-strike line-through text-sm">
            Rs. {product.marketPrice.toLocaleString()}
          </span>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Select Size:</p>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 text-xs rounded-md font-medium transition-all duration-200 border ${
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

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppOrder}
          disabled={!selectedSize}
          className="w-full bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-semibold py-5 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MessageCircle size={18} className="mr-2" />
          Order on WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
