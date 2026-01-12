import { MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '9779811825657';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your footwear collection. Please share more details."
    );
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
      <span className="absolute right-full mr-3 bg-card text-card-foreground px-3 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us!
      </span>
    </button>
  );
};

export default FloatingWhatsApp;
