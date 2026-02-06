import { motion } from "framer-motion";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

const MenuItem = ({ name, description, price, image, index }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-elevated rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="font-display text-lg font-bold text-primary whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
