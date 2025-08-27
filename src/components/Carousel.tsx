'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  links?: Record<string, string>;
  tags?: string[];
}

interface CarouselProps {
  items: CarouselItem[];
  title: string;
  className?: string;
}

export default function Carousel({ items, title, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold terminal-text mb-4">{title}</h3>
          <p className="text-text-muted text-lg">Explore my work and achievements</p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Image */}
              <div className="relative w-full h-full">
                {items[currentIndex].image ? (
                  <img
                    src={items[currentIndex].image}
                    alt={items[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-bg-secondary to-bg-tertiary" />
                )}
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <div className="text-center text-white max-w-2xl">
                    <h4 className="text-3xl md:text-4xl font-bold mb-4">
                      {items[currentIndex].title}
                    </h4>
                    {items[currentIndex].subtitle && (
                      <p className="text-accent-green text-xl font-medium mb-6">
                        {items[currentIndex].subtitle}
                      </p>
                    )}
                    
                    {/* Hover Description */}
                    <div className="group">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <p className="text-white/90 leading-relaxed text-lg mb-6">
                          {items[currentIndex].description}
                        </p>
                        
                        {/* Tags */}
                        {items[currentIndex].tags && (
                          <div className="flex flex-wrap justify-center gap-3 mb-6">
                            {items[currentIndex].tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-accent-green/20 text-accent-green text-sm rounded-full border border-accent-green/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Links */}
                        {items[currentIndex].links && (
                          <div className="flex flex-wrap justify-center gap-4">
                            {Object.entries(items[currentIndex].links!).map(([key, url]) => (
                              <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-green text-bg-primary rounded-lg font-medium hover:bg-accent-green-light transition-all duration-300"
                              >
                                <span className="capitalize">{key}</span>
                                <ExternalLink size={14} />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Arrows - Overlay on Image */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>
                
                {/* Slide Counter */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                  {currentIndex + 1} / {items.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-accent-green scale-125'
                  : 'bg-text-muted/30 hover:bg-accent-green/50 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
