import { Heart, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gradient-gold mb-3">
              Balaji Dinesh Mithai Wala
            </h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Crafting authentic Indian sweets with tradition and love for over 20 years. Your trusted mithai shop in Hyderabad.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/balaji_dinesh_mithai_wala/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+919246529811"
                className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/maps?q=Balaji+Dinesh+Mithai+Wala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {["Home", "About", "Menu", "Reviews", "Location", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Order */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Order Online</h4>
            <div className="space-y-3">
              <a
                href="https://www.zomato.com/hyderabad/balaji-dinesh-mithai-wala-yousufguda/order"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                Order via Zomato →
              </a>
              <a
                href="https://www.swiggy.com/city/hyderabad/balaji-dinesh-mithai-wala-ameerpet-jawahar-nagar-rest173191"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                Order via Swiggy →
              </a>
            </div>
            <div className="mt-6 p-4 bg-secondary-foreground/5 rounded-xl border border-secondary-foreground/10">
              <p className="text-xs text-secondary-foreground/60">
                <strong className="text-secondary-foreground/80">Takeaway Only</strong> • Average cost ₹150 for one order
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-secondary-foreground/50">
            © 2025 Balaji Dinesh Mithai Wala. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
