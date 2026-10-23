import React from 'react';

export default function Hero({ onOpenEstimate, onScrollToSection }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Estd. 2008 • Reg. Under Companies Act, Hyderabad</span>
            </div>

            <h1 className="hero-title">
              Develop The Home That You Desired With <span>Factory Precision</span>
            </h1>

            <p className="hero-desc">
              L S Interiors provides bespoke, end-to-end interior design and custom manufacturing solutions across Hyderabad. 
              We present photorealistic 3D drawings with <strong>Zero Token Advance</strong>, transparent upfront pricing, and direct factory-to-home handover.
            </p>

            <div className="hero-pills">
              <div className="pill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Zero Token Advance</span>
              </div>
              <div className="pill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>In-House Moosapet Factory</span>
              </div>
              <div className="pill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>45-Day Handover Guarantee</span>
              </div>
              <div className="pill-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>10-Year Genuine Warranty</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn btn-gold" 
                onClick={() => onScrollToSection('calculator')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="16" height="20" x="4" y="2" rx="2"/>
                  <line x1="8" x2="16" y1="6" y2="6"/>
                  <line x1="16" x2="16" y1="14"/>
                  <path d="M16 10h.01"/>
                  <path d="M12 10h.01"/>
                  <path d="M8 10h.01"/>
                  <path d="M12 14h.01"/>
                  <path d="M8 14h.01"/>
                  <path d="M12 18h.01"/>
                  <path d="M8 18h.01"/>
                </svg>
                Calculate Project Cost
              </button>

              <button 
                className="btn btn-outline"
                onClick={onOpenEstimate}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                </svg>
                Get Free 3D Design
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card-main">
              <img 
                src="https://lsinteriors.in/wp-content/uploads/2021/12/image1.jpg" 
                alt="LS Interiors Luxury Living Room and Modular Kitchen Design Hyderabad" 
              />
              <div className="visual-overlay-badge">
                <div className="badge-text">
                  <h4>Modular Kitchen & Luxury Living</h4>
                  <p>Custom Engineered at Moosapet Manufacturing Unit</p>
                </div>
                <button 
                  className="btn btn-gold btn-sm"
                  onClick={() => onScrollToSection('gallery')}
                >
                  View Work
                </button>
              </div>
            </div>

            <div className="floating-pill-badge">
              <h5>1,000+</h5>
              <span>Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
