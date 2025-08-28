'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      fontFamily: "'Courier New', monospace"
    }}>
      <div style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            fontSize: '6rem',
            fontWeight: 'bold',
            color: 'var(--accent-green)',
            marginBottom: '16px',
            textShadow: '0 0 20px var(--glow-green)'
          }}>
            404
          </h1>
          <h2 style={{
            fontSize: '2rem',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Page Not Found
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '32px',
            maxWidth: '400px',
            margin: '0 auto 32px auto'
          }}>
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the portfolio.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'var(--accent-green)',
              color: 'var(--bg-primary)',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-green-light)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-green)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
