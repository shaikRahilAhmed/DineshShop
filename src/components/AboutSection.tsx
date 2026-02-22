import { motion } from "framer-motion";
import { Award, Heart, Leaf, Users } from "lucide-react";
import aboutImage from "@/assets/about-shop.jpg";

const highlights = [
  { icon: Award, title: "20+ Years", desc: "Of sweet-making excellence" },
  { icon: Heart, title: "Family Owned", desc: "Passed through generations" },
  { icon: Leaf, title: "Pure Vegetarian", desc: "100% veg friendly" },
  { icon: Users, title: "10,000+", desc: "Happy customers" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-gold">
              <img
                src={aboutImage}
                alt="Inside Balaji Dinesh Mithai Wala"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl px-6 py-4 shadow-lg">
              <p className="font-serif text-3xl font-bold">20+</p>
              <p className="text-sm opacity-80">Years of Trust</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of <span className="text-gradient-gold">Sweetness</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Balaji Dinesh Mithai Wala is a renowned family-owned sweet shop located at the heart of Yousufguda, Hyderabad. For over two decades, we have been crafting authentic Indian sweets and snacks using traditional recipes and the finest ingredients.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              From our signature Kaju Katli and Anjeer Rolls to the classic Rasgulla and Besan Laddu — every sweet is made fresh daily with pure ghee and love. We are proud to be a trusted name for festivals, celebrations, and everyday indulgence in Hyderabad.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
