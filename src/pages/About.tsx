import { motion } from "framer-motion";
import { Award, Users, Heart, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { number: "14+", label: "Years of Experience" },
  { number: "50K+", label: "Happy Customers" },
  { number: "25+", label: "Menu Items" },
  { number: "4.9", label: "Average Rating" },
];

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every pizza we make is crafted with genuine passion and care for our customers.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on ingredients. Fresh, authentic, and sourced responsibly.",
  },
  {
    icon: Users,
    title: "Family Tradition",
    description: "Three generations of pizza makers, passing down secrets and perfecting our craft.",
  },
  {
    icon: Utensils,
    title: "Authentic Recipes",
    description: "Traditional Italian recipes brought from Naples, adapted for modern tastes.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              A Family Legacy of{" "}
              <span className="text-gradient">Great Pizza</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Since 2010, Bella Pizza has been serving Delhi with authentic
              Italian flavors and a whole lot of heart.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Our restaurant"
                  className="rounded-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                  <p className="font-display text-3xl font-bold">14</p>
                  <p className="text-sm opacity-90">Years Strong</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                From Naples to New Delhi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It all started with Grandma Rosa's recipes and a dream. In 2010,
                  Antonio Bella opened the first Bella Pizza in a cozy corner in
                  Connaught Place, Delhi. Armed with nothing but his mother's secret dough
                  recipe and an authentic wood-fired oven, he set out
                  to bring authentic Italian pizza to India.
                </p>
                <p>
                  Word spread quickly. The thin, crispy crusts, the fresh San Marzano
                  tomato sauce, the hand-pulled mozzarella — everything was made
                  with love and care. What started as a family operation has grown
                  into a beloved neighborhood institution.
                </p>
                <p>
                  Today, Antonio's children continue the tradition, maintaining the
                  same commitment to quality and authenticity that made us famous.
                  We still use Grandma Rosa's recipes, still hand-stretch every
                  dough, and still believe that great pizza brings people together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              What We Stand For
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Our values guide everything we do, from sourcing ingredients to
              serving our community
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
              alt="Our team at work"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Meet the Family
              </h3>
              <p className="text-primary-foreground/80 max-w-xl">
                Our passionate team of chefs, servers, and pizza lovers work
                together to create memorable dining experiences every day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
