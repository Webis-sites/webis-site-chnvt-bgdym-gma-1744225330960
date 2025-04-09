'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import clsx from 'clsx';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const FeaturedProducts: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Sample product data - would typically come from an API or props
  const products: Product[] = [
    {
      id: 1,
      name: 'חולצת כותנה קלאסית',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820',
      category: 'חולצות',
    },
    {
      id: 2,
      name: 'מכנסי ג׳ינס מעוצבים',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
      category: 'מכנסיים',
    },
    {
      id: 3,
      name: 'שמלת ערב אלגנטית',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
      category: 'שמלות',
    },
    {
      id: 4,
      name: 'חליפת עסקים יוקרתית',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
      category: 'חליפות',
    },
    {
      id: 5,
      name: 'נעלי עקב מעוצבות',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
      category: 'נעליים',
    },
    {
      id: 6,
      name: 'סוודר צמר איכותי',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
      category: 'סוודרים',
    },
  ];

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: 'ILS',
    }).format(price);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-50 dir-rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
            <span className="relative z-10">המוצרים המובילים שלנו</span>
            <span className="absolute bottom-0 right-0 h-3 w-24 bg-secondary/20 -z-0"></span>
          </h2>
          
          <motion.a
            href="/products"
            className="group flex items-center gap-2 text-secondary font-medium text-lg relative overflow-hidden"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="glassmorphism-button px-4 py-2 rounded-lg flex items-center gap-2">
              לכל המוצרים
              <MdKeyboardArrowLeft className="text-xl transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={clsx(
                "neumorphic-card rounded-2xl overflow-hidden transition-all duration-300",
                "bg-white/80 backdrop-blur-md border border-white/20",
                hoveredProduct === product.id ? "scale-[1.02] shadow-xl" : "scale-100 shadow-md"
              )}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={`${product.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{
                      transform: hoveredProduct === product.id ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                  
                  <div className="absolute top-4 right-4">
                    <span className="glassmorphism-tag px-3 py-1 text-xs font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {hoveredProduct === product.id && (
                    <motion.div
                      className="absolute inset-0 bg-black/30 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex gap-3">
                        <motion.button
                          className="glassmorphism-icon-button p-3 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiEye className="text-white text-xl" />
                        </motion.button>
                        <motion.button
                          className="glassmorphism-icon-button p-3 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiShoppingCart className="text-white text-xl" />
                        </motion.button>
                        <motion.button
                          className="glassmorphism-icon-button p-3 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiHeart className="text-white text-xl" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-secondary">{formatPrice(product.price)}</span>
                    <motion.button
                      className="neumorphic-button px-4 py-2 rounded-lg text-sm font-medium text-white bg-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      הוסף לסל
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;