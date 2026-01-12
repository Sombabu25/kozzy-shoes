import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import heroImage from '@/assets/hero-shoes.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection heroImage={heroImage} />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
