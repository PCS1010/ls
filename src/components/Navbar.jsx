import React, { useState } from 'react';
import { companyInfo } from '../data/interiorData';

export default function Navbar({ onOpenEstimate, activeSection, onNavigate, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'transformation', label: 'Before & After' },
    { id: 'calculator', label: 'Cost Estimator' },
    { id: 'services', label: 'Services' },
    { id: 'factory', label: 'Factory Interio' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+919177374198">+91 9177374198</a> / <a href="tel:+917893002568">7893002568</a>
            </div>
            <div className="top-bar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a href="mailto:lsinteriors24@gmail.com">lsinteriors24@gmail.com</a>
            </div>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-highlight">★ Zero Token Advance • 3D Image Drawings First</span>
            <div className="top-bar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Moosapet, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="navbar-wrap">
        <div className="container">
          <nav className="navbar">
            <a href="#hero" className="brand-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}>
              <div className="logo-badge">LS</div>
              <div className="logo-text">
                <span className="logo-name">LS INTERIORS</span>
                <span className="logo-tagline">Hyderabad • Estd 2008</span>
              </div>
            </a>

            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              {/* Theme Toggle Button */}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>

              <button
                className="btn btn-gold btn-sm btn-consultation"
                onClick={onOpenEstimate}
              >
                Get Free 3D Estimate
              </button>

              <button
                className="nav-mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
