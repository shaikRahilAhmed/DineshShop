import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-sweets.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Traditional Indian sweets" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gold-light text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4"
          >
            Since 20+ Years • Yousufguda, Hyderabad
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-cream leading-tight mb-6">
            Balaji Dinesh{" "}
            <span className="text-gradient-gold block">Mithai Wala</span>
          </h1>

          <p className="text-cream/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Crafting authentic Indian sweets with love and tradition. From our family to yours — every bite tells a story of heritage and pure flavors.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center gap-1.5 bg-cream/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-cream text-sm font-semibold">4.5</span>
              <span className="text-cream/60 text-sm">• Google Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 bg-cream/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-cream text-sm font-semibold">4.2</span>
              <span className="text-cream/60 text-sm">• 10,900+ Zomato</span>
            </div>
            <div className="flex items-center gap-1.5 bg-cream/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-cream/80 text-sm">10 AM – 11 PM</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-gradient-gold text-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity shadow-gold"
            >
              Explore Our Menu
            </a>
            <a
              href="#location"
              className="flex items-center gap-2 border border-cream/30 text-cream px-8 py-3.5 rounded-full font-medium text-base hover:bg-cream/10 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
