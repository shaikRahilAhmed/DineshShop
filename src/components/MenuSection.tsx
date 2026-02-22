import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  tag?: string;
};

type Category = {
  name: string;
  items: MenuItem[];
};

const menuData: Category[] = [
  {
    name: "Sweets",
    items: [
      { name: "Kaju Katli", price: "₹600/kg", desc: "Premium cashew fudge with silver leaf", tag: "Bestseller" },
      { name: "White Kalakand", price: "₹160", desc: "Soft paneer-based sweet with cardamom" },
      { name: "Malai Peda", price: "₹160", desc: "Creamy milk peda with saffron" },
      { name: "Anjeer Roll", price: "₹180", desc: "Fig rolls with dry fruits — healthy & delightful", tag: "New" },
      { name: "Besan Laddu", price: "₹140", desc: "Traditional gram flour laddu with pure ghee" },
      { name: "Rasgulla", price: "₹120", desc: "Soft spongy cottage cheese balls in sugar syrup" },
      { name: "Milk Barfi", price: "₹140", desc: "Rich milk-based barfi topped with pistachios" },
      { name: "Gulab Jamun", price: "₹100", desc: "Deep fried milk dumplings soaked in rose syrup" },
      { name: "Soan Papdi", price: "₹120", desc: "Flaky layered sweet with cardamom flavor" },
      { name: "Motichoor Laddu", price: "₹160", desc: "Fine boondi laddus with saffron" },
    ],
  },
  {
    name: "Kaju & Milk Specials",
    items: [
      { name: "Kaju Roll", price: "₹650/kg", desc: "Rolled cashew sweet with pistachio filling", tag: "Premium" },
      { name: "Kaju Pista Roll", price: "₹700/kg", desc: "Cashew and pistachio layered roll" },
      { name: "Badam Burfi", price: "₹550/kg", desc: "Almond fudge with rose water" },
      { name: "Pista Barfi", price: "₹680/kg", desc: "Rich pistachio barfi with silver work" },
      { name: "Coconut Barfi", price: "₹120", desc: "Sweet coconut squares with condensed milk" },
      { name: "Khoya Peda", price: "₹160", desc: "Traditional milk-solid sweet with nuts" },
    ],
  },
  {
    name: "Snacks",
    items: [
      { name: "Samosa", price: "₹20", desc: "Crispy pastry filled with spiced potatoes", tag: "Popular" },
      { name: "Kachori", price: "₹25", desc: "Flaky deep-fried bread with dal filling" },
      { name: "Mixture", price: "₹100", desc: "Crunchy savory mix with sev and nuts" },
      { name: "Aloo Bonda", price: "₹20", desc: "Potato fritters in gram flour batter" },
      { name: "Mirchi Bajji", price: "₹15", desc: "Stuffed chili fritters — spicy delight" },
      { name: "Bread Pakora", price: "₹25", desc: "Bread slices dipped in batter and fried" },
    ],
  },
  {
    name: "Combos & Drinks",
    items: [
      { name: "Sweet Box (500g)", price: "₹250", desc: "Assorted sweets gift box", tag: "Gift" },
      { name: "Sweet Box (1kg)", price: "₹450", desc: "Premium mixed sweets box" },
      { name: "Festival Special Box", price: "₹800", desc: "Curated festival collection with dry fruits" },
      { name: "Lassi", price: "₹40", desc: "Traditional Punjabi sweet lassi" },
      { name: "Badam Milk", price: "₹50", desc: "Rich almond milk with saffron" },
    ],
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Offerings
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our <span className="text-gradient-gold">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Handcrafted with premium ingredients and traditional recipes passed down through generations.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuData.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === i
                  ? "bg-gradient-gold text-foreground shadow-gold"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {menuData[activeTab].items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-warm hover:border-primary/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-semibold text-primary text-sm whitespace-nowrap ml-3">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                {item.tag && (
                  <span className="inline-block mt-2 text-xs font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Prices may vary. Available for takeaway & online order via{" "}
            <a
              href="https://www.zomato.com/hyderabad/balaji-dinesh-mithai-wala-yousufguda/order"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Zomato
            </a>{" "}
            &{" "}
            <a
              href="https://www.swiggy.com/city/hyderabad/balaji-dinesh-mithai-wala-ameerpet-jawahar-nagar-rest173191"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Swiggy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
