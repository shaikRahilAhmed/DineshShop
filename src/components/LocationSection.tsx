import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, ExternalLink, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our <span className="text-gradient-gold">Shop</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-warm border border-border h-[350px] md:h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8!2d78.44!3d17.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9126336d7093%3A0x7b1137f6d0000000!2sBalaji%20Dinesh%20Mithai%20Wala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Balaji Dinesh Mithai Wala location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Check Post, 8-3-229, Tahir Ville,<br />
                    Yadagiri Nagar, c/4, Yousufguda,<br />
                    Hyderabad, Telangana 500045, India
                  </p>
                  <a
                    href="https://maps.google.com/maps?q=Balaji+Dinesh+Mithai+Wala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-2 hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-1">Opening Hours</h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex justify-between gap-8">
                      <span>Monday – Sunday</span>
                      <span className="font-semibold text-foreground">10:00 AM – 11:00 PM</span>
                    </div>
                    <p className="text-xs text-primary font-medium mt-2">Open all 7 days • Open on festivals</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="contact" className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg mb-1">Contact</h3>
                  <div className="space-y-2">
                    <a href="tel:+919246529811" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      +91 92465 29811
                    </a>
                    <a href="tel:+919000181077" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      +91 90001 81077
                    </a>
                    <a
                      href="https://www.instagram.com/balaji_dinesh_mithai_wala/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      @balaji_dinesh_mithai_wala
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.zomato.com/hyderabad/balaji-dinesh-mithai-wala-yousufguda/order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground rounded-xl py-3.5 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Order on Zomato
              </a>
              <a
                href="https://www.swiggy.com/city/hyderabad/balaji-dinesh-mithai-wala-ameerpet-jawahar-nagar-rest173191"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-gold text-foreground rounded-xl py-3.5 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Order on Swiggy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
