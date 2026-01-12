import { Award, Truck, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handpicked footwear from trusted brands ensuring durability and comfort.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast and reliable delivery to all 77 districts across Nepal.',
  },
  {
    icon: Shield,
    title: 'Genuine Products',
    description: '100% authentic products with quality guarantee on every purchase.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Dedicated support and easy returns for your complete satisfaction.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Karan Collection is a premium footwear store providing branded and affordable shoes 
            with fast delivery across Nepal. We believe everyone deserves quality footwear 
            without breaking the bank.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`animate-fade-up stagger-${index + 1} bg-card p-6 md:p-8 rounded-xl text-center hover-lift border border-border`}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
