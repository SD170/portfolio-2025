'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="nav"
    >
      <div className="nav-container">
        <div className="nav-content">
          <a href="#home" className="nav-logo">
            SD
          </a>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                borderTop: '1px solid rgba(0, 255, 65, 0.1)',
                background: 'rgba(15, 15, 15, 0.5)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '18px',
                      transition: 'color 0.3s ease',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px 0',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
