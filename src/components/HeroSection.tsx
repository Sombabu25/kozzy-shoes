import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navbar/80 via-navbar/60 to-navbar/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="animate-fade-up text-4xl md:text-5xl lg:text-7xl font-bold text-navbar-foreground mb-6">
            Premium <span className="text-gradient">Shoes</span>
          </h1>
          <p className="animate-fade-up stagger-1 text-lg md:text-xl lg:text-2xl text-navbar-foreground/80 mb-4">
            Delivery All Over Nepal
          </p>
          <p className="animate-fade-up stagger-2 text-sm md:text-base text-navbar-foreground/60 mb-8 max-w-xl mx-auto">
            Chelsea Boots • Timberland Style • Casual Shoes • Premium Quality
          </p>
          <Button
            onClick={scrollToProducts}
            size="lg"
            className="animate-fade-up stagger-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            Shop Now
            <ChevronDown className="ml-2 animate-bounce" size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-navbar-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
