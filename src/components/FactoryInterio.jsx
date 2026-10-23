import React from 'react';
import { processSteps } from '../data/interiorData';

export default function FactoryInterio({ onOpenEstimate }) {
  return (
    <section className="section factory-section" id="factory">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Custom Manufacturing Facility • Moosapet</span>
          <h2 className="section-title">
            The <span>Factory Interio</span> Advantage
          </h2>
          <p className="section-desc">
            LS Interiors is a vertically integrated custom manufacturing company providing end-to-end interior solutions. 
            We design in-house and produce every modular element at our dedicated Moosapet factory.
          </p>
        </div>

        {/* Factory Hero Showcase */}
        <div className="factory-hero-grid">
          <div className="factory-info-col">
            <h3 style={{ color: '#FFF', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
              Precision German CNC Engineering vs Traditional Carpenters
            </h3>
            <p style={{ marginBottom: '1.2rem', color: '#CCD7D0' }}>
              Traditional carpentry on-site takes months, creates heavy dust, and suffers from uneven manual cutting and edge peeling. 
              At LS Interiors, all panels, carousels, and wardrobes are engineered with computerized beam saws and automated multi-radius edge banding.
            </p>

            <div className="factory-features-list">
              <div className="factory-feature-box">
                <h5>30% - 40% Cost Savings</h5>
                <p>Direct factory-to-doorstep model eliminates expensive dealer margins and middleman commissions.</p>
              </div>

              <div className="factory-feature-box">
                <h5>Zero Edge Peeling</h5>
                <p>PUR moisture-proof edge banding prevents water penetration and ensures razor-sharp 0.5mm joint lines.</p>
              </div>

              <div className="factory-feature-box">
                <h5>Certified Marine BWP Ply</h5>
                <p>IS:710 grade boiling waterproof core plywood with anti-termite and borer chemical immersion.</p>
              </div>

              <div className="factory-feature-box">
                <h5>Dust-Free 45-Day Install</h5>
                <p>Units arrive pre-drilled and flat-packed. On-site installation takes days instead of messy months.</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-gold" onClick={onOpenEstimate}>
                Schedule Factory Visit & Consultation
              </button>
            </div>
          </div>

          <div className="factory-image-col">
            <div className="factory-image-wrapper">
              <img
                src="https://lsinteriors.in/wp-content/uploads/2021/12/images6.jpg"
                alt="LS Interiors Custom Manufacturing Facility Moosapet Hyderabad"
              />
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                background: 'rgba(7, 21, 14, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '0.9rem 1.2rem',
                borderRadius: '8px',
                border: '1px solid var(--border-gold)',
                color: '#FFF'
              }}>
                <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--gold-light)' }}>
                  LS Factory Unit: Moosapet, Hyderabad
                </div>
                <div style={{ fontSize: '0.78rem', color: '#B0BEB6' }}>
                  HPC Road, Moosapet • High Precision Edge Banding & CNC Routing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Turnkey Process Timeline */}
        <div style={{ marginTop: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag">Seamless Handover Journey</span>
            <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)' }}>
              How We Deliver Your Dream Home in 5 Simple Steps
            </h3>
          </div>

          <div className="timeline-grid">
            {processSteps.map((step) => (
              <div className="timeline-card" key={step.step}>
                <div className="timeline-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
