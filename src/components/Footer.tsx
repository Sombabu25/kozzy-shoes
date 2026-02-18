import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navbar py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-navbar-foreground">
            <span className="font-bold text-lg">KOZY</span>{' '}
            <span className="text-primary font-bold text-lg">Shoes</span>
          </div>
          
          <p className="text-navbar-foreground/60 text-sm text-center">
            © {currentYear} KOZY Shoes. All rights reserved.
          </p>
          
          <p className="text-navbar-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
