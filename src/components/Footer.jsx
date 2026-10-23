import React from 'react';
import { companyInfo } from '../data/interiorData';

export default function Footer({ onScrollToSection, onOpenEstimate }) {
  return (
    <footer className="footer" id="colophon">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Registration */}
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '1.2rem' }}>
              <div className="logo-badge">LS</div>
              <div className="logo-text">
                <span className="logo-name">LS INTERIORS</span>
                <span className="logo-tagline">Hyderabad • Estd 2008</span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#A0B0A6', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              {companyInfo.registration}. We are a vertically integrated custom manufacturing company providing end-to-end bespoke interior solutions with zero token advance.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--border-gold)',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              fontSize: '0.78rem',
              color: 'var(--gold-light)'
            }}>
              <span>100% Assurance of Your Dreams' Fulfilment</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); onScrollToSection('hero'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onScrollToSection('about'); }}>About Us</a></li>
              <li><a href="#transformation" onClick={(e) => { e.preventDefault(); onScrollToSection('transformation'); }}>Before & After</a></li>
              <li><a href="#calculator" onClick={(e) => { e.preventDefault(); onScrollToSection('calculator'); }}>Cost Estimator</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>Services</a></li>
              <li><a href="#factory" onClick={(e) => { e.preventDefault(); onScrollToSection('factory'); }}>Factory Interio</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); onScrollToSection('gallery'); }}>Project Gallery</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onScrollToSection('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4>Our Specialties</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>Modular Kitchen Ideas</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>Designer Wardrobes</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>TV & Crockery Units</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>Living Room Furniture</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>Partitions & Jalis</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>Commercial & Office</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onScrollToSection('services'); }}>False Ceiling & Light</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory Unit */}
          <div className="footer-col">
            <h4>Factory & Office</h4>
            <p style={{ fontSize: '0.85rem', color: '#CCD6CF', lineHeight: '1.6', marginBottom: '0.8rem' }}>
              <strong>Address:</strong><br />
              Plot no- 15, Bldg.No-5-246/9/2, HPC Road, Moosapet, Hyderabad, Telangana - 500018.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#CCD6CF', lineHeight: '1.6', marginBottom: '0.8rem' }}>
              <strong>Phone:</strong><br />
              <a href="tel:+919177374198">+91 9177374198</a>, <a href="tel:+917893002568">+91 7893002568</a>
            </p>
            <p style={{ fontSize: '0.85rem', color: '#CCD6CF', lineHeight: '1.6', marginBottom: '1.2rem' }}>
              <strong>Email:</strong><br />
              <a href="mailto:lsinteriors24@gmail.com">lsinteriors24@gmail.com</a>
            </p>
            <button className="btn btn-gold btn-sm" onClick={onOpenEstimate} style={{ width: '100%' }}>
              Get Free 3D Estimation
            </button>
          </div>
        </div>

        {/* Footer Bottom Strip with Designed by Purna */}
        <div className="footer-bottom">
          <div>
            © {companyInfo.established} - {new Date().getFullYear()} L S Interiors | Designed & Developed by <strong style={{ color: 'var(--gold-primary)' }}>Purna</strong>. Registered under Companies Act, Hyderabad.
          </div>

          {/* Prominent Designed by Purna Credit Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1.5px solid var(--gold-primary)',
            padding: '0.5rem 1.2rem',
            borderRadius: '25px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.25)'
          }}>
            <span style={{ fontSize: '0.85rem', color: '#FFF' }}>Designed & Built with ❤️ by</span>
            <strong style={{
              color: 'var(--gold-light)',
              fontSize: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Purna
            </strong>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', color: '#8F9E96' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Factory ISO Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
