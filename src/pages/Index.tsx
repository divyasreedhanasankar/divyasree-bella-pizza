import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuItem from "@/components/MenuItem";
import { menuItems } from "@/data/menuData";

const featuredItems = menuItems.filter((item) => 
  ["1", "2", "3", "7"].includes(item.id)
);

const features = [
  {
    icon: Star,
    title: "Award Winning",
    description: "Voted Delhi's Best Pizza three years running",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Hot pizza at your door in 30 minutes or less",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Locally sourced, organic whenever possible",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80"
            alt="Delicious pizza"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-6"
            >
              Authentic Italian Since 2010
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Pizza Made with{" "}
              <span className="text-gradient">Love & Tradition</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Handcrafted pizzas using time-honored recipes, the freshest ingredients, 
              and a wood-fired oven that's been perfecting our craft for decades.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/menu">
                <Button size="lg" className="btn-primary text-primary-foreground font-medium px-8 py-6 text-lg">
                  View Our Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-medium px-8 py-6 text-lg border-2">
                  Find Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block"
            >
              From Our Kitchen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Customer Favorites
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Discover our most beloved dishes, crafted with passion and the finest ingredients
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/menu">
              <Button variant="outline" size="lg" className="font-medium px-8 border-2">
                View Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-elevated rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Order online for pickup or delivery, or visit us to experience the warm 
              atmosphere of our family-run pizzeria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-primary text-primary-foreground font-medium px-8">
                Order Online
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-medium px-8 border-2">
                  Visit Our Location
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
