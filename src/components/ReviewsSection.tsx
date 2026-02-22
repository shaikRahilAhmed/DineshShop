import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Madhu Karthik",
    rating: 5,
    text: "Excellent quality sweets! The Kaju Katli and Rasgulla are absolutely divine. Best mithai shop in Yousufguda area.",
    source: "Google",
    time: "2 months ago",
  },
  {
    name: "Bindu Naresh",
    rating: 5,
    text: "Amazing taste and very fresh sweets. We order from here for all festivals. Great packaging for gift boxes too!",
    source: "Google",
    time: "3 months ago",
  },
  {
    name: "Naveen Kumar",
    rating: 4,
    text: "Good variety of sweets and snacks. The samosas are crispy and fresh. Loved the Anjeer Roll — very unique!",
    source: "MagicPin",
    time: "5 months ago",
  },
  {
    name: "Priya Reddy",
    rating: 5,
    text: "Family favorite! We've been buying sweets from Balaji Dinesh for years. The Besan Laddu is to die for.",
    source: "Zomato",
    time: "1 month ago",
  },
  {
    name: "Rahul Sharma",
    rating: 4,
    text: "Authentic taste that reminds me of homemade sweets. Very affordable prices. The Malai Peda is a must try!",
    source: "Zomato",
    time: "4 months ago",
  },
  {
    name: "Srikanth M",
    rating: 5,
    text: "Best mithai shop near check post. Fresh sweets daily, reasonable prices. Highly recommended for Diwali orders!",
    source: "Google",
    time: "6 months ago",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            What People Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer <span className="text-gradient-gold">Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.5</span>
            <span className="text-muted-foreground text-sm">based on 10,000+ reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-all relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${
                      j < review.rating ? "text-gold fill-gold" : "text-border"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.time}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
