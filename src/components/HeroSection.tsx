"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
  };

  return (
    <section 
      dir="rtl" 
      className={clsx(
        "relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center",
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070"
          alt="חנות בגדים גמא - תמונת רקע"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Glassmorphism Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto px-6 py-12 sm:px-8 md:px-12 lg:px-16 max-w-7xl w-full"
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Glassmorphism Card */}
          <div className="p-8 md:p-12 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-glass">
            {/* Logo/Store Name */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl font-bold text-white/80">חנות בגדים גמא</h2>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white"
            >
              חנות בגדים מוביל בישראל
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-10 text-white/90"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.div variants={itemVariants}>
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="neumorphic-button px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-secondary/90 to-secondary/80 text-white shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                קבע תור עכשיו
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements - Floating Circles */}
      <div className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-glass"></div>
      <div className="absolute bottom-1/4 left-[15%] w-24 h-24 rounded-full bg-gradient-to-tr from-secondary/20 to-white/10 backdrop-blur-md border border-white/20 shadow-glass"></div>
      <div className="absolute top-1/3 left-[20%] w-16 h-16 rounded-full bg-gradient-to-bl from-white/15 to-secondary/10 backdrop-blur-md border border-white/20 shadow-glass"></div>
    </section>
  );
}