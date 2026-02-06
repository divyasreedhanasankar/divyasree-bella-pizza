import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItem from "@/components/MenuItem";
import { menuItems, menuCategories } from "@/data/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("pizzas");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block"
          >
            Explore Our
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Full Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Every dish is crafted with care using authentic recipes and the
            freshest ingredients
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 sticky top-[73px] bg-background/95 backdrop-blur-sm z-40 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-center">
                  {menuCategories.find((c) => c.id === activeCategory)?.icon}{" "}
                  {menuCategories.find((c) => c.id === activeCategory)?.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <MenuItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Note */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="card-elevated rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Prices may vary.
              Gluten-free and vegan options available upon request. Please
              inform our staff of any allergies.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
