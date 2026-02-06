export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuCategories = [
  { id: "pizzas", name: "Pizzas", icon: "🍕" },
  { id: "pastas", name: "Pastas", icon: "🍝" },
  { id: "sides", name: "Sides", icon: "🥗" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
];

export const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: "1",
    name: "Margherita",
    description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
    price: "₹349",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80",
    category: "pizzas",
  },
  {
    id: "2",
    name: "Pepperoni",
    description: "Classic pepperoni, mozzarella, house-made tomato sauce, oregano",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80",
    category: "pizzas",
  },
  {
    id: "3",
    name: "Four Cheese",
    description: "Mozzarella, gorgonzola, parmesan, ricotta with garlic oil",
    price: "₹449",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    category: "pizzas",
  },
  {
    id: "4",
    name: "BBQ Chicken",
    description: "Grilled chicken, smoky BBQ sauce, red onions, cilantro, mozzarella",
    price: "₹479",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    category: "pizzas",
  },
  {
    id: "5",
    name: "Vegetarian Supreme",
    description: "Bell peppers, mushrooms, olives, onions, tomatoes, spinach",
    price: "₹379",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80",
    category: "pizzas",
  },
  {
    id: "6",
    name: "Meat Lovers",
    description: "Pepperoni, Italian sausage, bacon, ham, ground beef",
    price: "₹549",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&q=80",
    category: "pizzas",
  },
  
  // Pastas
  {
    id: "7",
    name: "Spaghetti Carbonara",
    description: "Creamy egg sauce, pancetta, parmesan, black pepper",
    price: "₹329",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80",
    category: "pastas",
  },
  {
    id: "8",
    name: "Fettuccine Alfredo",
    description: "Rich cream sauce, butter, parmesan, garlic, parsley",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&q=80",
    category: "pastas",
  },
  {
    id: "9",
    name: "Penne Arrabbiata",
    description: "Spicy tomato sauce, garlic, red chili flakes, fresh basil",
    price: "₹279",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&q=80",
    category: "pastas",
  },
  {
    id: "10",
    name: "Lasagna",
    description: "Layers of pasta, beef ragù, béchamel, mozzarella, parmesan",
    price: "₹379",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&q=80",
    category: "pastas",
  },
  
  // Sides
  {
    id: "11",
    name: "Garlic Bread",
    description: "Toasted ciabatta with garlic butter and fresh herbs",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=500&q=80",
    category: "sides",
  },
  {
    id: "12",
    name: "Caesar Salad",
    description: "Romaine, parmesan, croutons, house-made Caesar dressing",
    price: "₹219",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80",
    category: "sides",
  },
  {
    id: "13",
    name: "Mozzarella Sticks",
    description: "Golden fried mozzarella with marinara dipping sauce",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500&q=80",
    category: "sides",
  },
  {
    id: "14",
    name: "Chicken Wings",
    description: "Crispy wings with your choice of Buffalo, BBQ, or Garlic Parmesan",
    price: "₹269",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&q=80",
    category: "sides",
  },
  
  // Desserts
  {
    id: "15",
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers, mascarpone",
    price: "₹179",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80",
    category: "desserts",
  },
  {
    id: "16",
    name: "Cannoli",
    description: "Crispy Sicilian pastry filled with sweet ricotta cream",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1631206753348-db44968fd440?w=500&q=80",
    category: "desserts",
  },
  {
    id: "17",
    name: "Panna Cotta",
    description: "Silky vanilla cream with fresh berry compote",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80",
    category: "desserts",
  },
  {
    id: "18",
    name: "Gelato",
    description: "Three scoops of authentic Italian gelato, ask for flavors",
    price: "₹159",
    image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=500&q=80",
    category: "desserts",
  },
  
  // Drinks
  {
    id: "19",
    name: "Italian Soda",
    description: "Sparkling water with your choice of fruit syrup",
    price: "₹89",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&q=80",
    category: "drinks",
  },
  {
    id: "20",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh mint",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80",
    category: "drinks",
  },
  {
    id: "21",
    name: "Espresso",
    description: "Rich Italian espresso, single or double shot",
    price: "₹69",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80",
    category: "drinks",
  },
  {
    id: "22",
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with aromatic flavors",
    price: "₹49",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80",
    category: "drinks",
  },
];
