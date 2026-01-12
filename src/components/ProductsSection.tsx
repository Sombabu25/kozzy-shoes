import ProductCard from './ProductCard';
import chelseaBootsImg from '@/assets/chelsea-boots.jpg';
import timberlandBootsImg from '@/assets/timberland-boots.jpg';
import casualShoesImg from '@/assets/casual-shoes.jpg';
import leatherBootsImg from '@/assets/leather-boots.jpg';
import sneakersImg from '@/assets/sneakers.jpg';
import oxfordShoesImg from '@/assets/oxford-shoes.jpg';

const products = [
  {
    id: 1,
    name: 'Premium Chelsea Boots - Black Leather',
    image: chelseaBootsImg,
    marketPrice: 4500,
    offerPrice: 3200,
    sizes: [39, 40, 41, 42, 43],
  },
  {
    id: 2,
    name: 'Timberland Style Boots - Wheat',
    image: timberlandBootsImg,
    marketPrice: 5500,
    offerPrice: 3800,
    sizes: [39, 40, 41, 42, 43],
  },
  {
    id: 3,
    name: 'Casual Leather Shoes - Brown',
    image: casualShoesImg,
    marketPrice: 3800,
    offerPrice: 2500,
    sizes: [39, 40, 41, 42, 43],
  },
  {
    id: 4,
    name: 'Classic Leather Boots - Tan',
    image: leatherBootsImg,
    marketPrice: 4800,
    offerPrice: 3500,
    sizes: [40, 41, 42, 43],
  },
  {
    id: 5,
    name: 'Urban Sneakers - White',
    image: sneakersImg,
    marketPrice: 3500,
    offerPrice: 2200,
    sizes: [39, 40, 41, 42, 43],
  },
  {
    id: 6,
    name: 'Oxford Formal Shoes - Black',
    image: oxfordShoesImg,
    marketPrice: 4200,
    offerPrice: 2900,
    sizes: [40, 41, 42, 43],
  },
];

const PHONE_NUMBER = '9779800000000'; // Replace with actual number

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover premium footwear at unbeatable prices. Quality shoes delivered anywhere in Nepal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              phoneNumber={PHONE_NUMBER}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
