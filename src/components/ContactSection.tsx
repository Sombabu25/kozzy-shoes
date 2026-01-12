import { MapPin, Phone, MessageCircle, Clock, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE_NUMBER = '9779800000000'; // Replace with actual number
const DISPLAY_PHONE = '+977 98XXXXXXXX'; // Replace with actual display number

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to inquire about your products. Please share more details."
    );
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our store or contact us directly. We're here to help you find the perfect pair!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card p-6 rounded-xl border border-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-1">
                    Store Location
                  </h3>
                  <p className="text-muted-foreground">
                    Kalanki, Kathmandu<br />
                    Near Cambridge College
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card p-6 rounded-xl border border-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-1">
                    Phone / WhatsApp
                  </h3>
                  <p className="text-muted-foreground">{DISPLAY_PHONE}</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card p-6 rounded-xl border border-border hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-1">
                    Store Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Sunday - Friday: 10 AM - 7 PM<br />
                    Saturday: 11 AM - 5 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    Delivery Information
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We deliver to all 77 districts of Nepal. Inside Kathmandu Valley: 1-2 days. 
                    Outside Valley: 3-5 days. Cash on Delivery available!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="flex-1 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground font-semibold py-6"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </Button>
              <Button
                onClick={handleCallClick}
                size="lg"
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-6"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-card rounded-xl overflow-hidden border border-border h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5684619655!2d85.27635007546896!3d27.69375762615901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c9a2f9d5d3%3A0x7c3c7c9c2c5c5c5c!2sKalanki%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1699000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karan Collection Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
