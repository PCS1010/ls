import React from 'react';
import { companyInfo } from '../data/interiorData';

export default function WhyChooseUs({ onOpenEstimate }) {
  return (
    <section className="section why-section" id="about">
      <div className="container">
        {/* About Company Split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div>
            <span className="section-tag">Since 2008 • Hyderabad</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Welcome to <span>LS Interiors</span>
            </h2>
            <p style={{ marginBottom: '1.2rem', color: '#CCD7D0', fontSize: '1.05rem', lineHeight: '1.8' }}>
              <strong>L S Interiors, Hyderabad</strong> was registered in 2008 under the Companies Act in Hyderabad. 
              Over the last 16+ years, we have emerged as one of the twin cities' most reliable interior design and turnkey manufacturing studios.
            </p>
            <p style={{ marginBottom: '1.5rem', color: '#9EABA3', lineHeight: '1.7' }}>
              Each and every requirement and estimation of work is mapped strictly according to your desires. 
              We present you with comprehensive <strong>3D Image Drawings and Pictorial Views</strong> before starting. 
              Unlike other firms, <strong>there is NO Token Advance</strong> — we announce the complete, transparent estimation price only after completing the 3D design plan.
            </p>

            <div style={{
              background: 'rgba(4, 66, 12, 0.35)',
              border: '1px solid var(--border-gold)',
              borderRadius: '10px',
              padding: '1.2rem 1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '1rem', marginBottom: '0.3rem' }}>
                ✓ 100% Assurance of Your Dreams' Fulfilment
              </div>
              <div style={{ fontSize: '0.85rem', color: '#C0D0C7' }}>
                Custom manufactured at our Moosapet unit with German machinery and direct online purchasing options.
              </div>
            </div>

            <button className="btn btn-gold" onClick={onOpenEstimate}>
              Meet Our Architects • Free Consultation
            </button>
          </div>

          <div>
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid var(--border-gold)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
            }}>
              <img
                src="https://lsinteriors.in/wp-content/uploads/2021/12/images2-440x440.jpg"
                alt="Welcome to LS Interiors Hyderabad"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '1.2rem',
                left: '1.2rem',
                background: 'rgba(7, 21, 14, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--gold-primary)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                color: 'var(--gold-light)',
                fontWeight: '700'
              }}>
                Registered in 2008 • Hyderabad
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="section-header">
          <span className="section-tag">Our Core Guarantees</span>
          <h2 className="section-title">
            Why Homeowners Choose <span>LS Interiors</span>
          </h2>
          <p className="section-desc">
            We specialize in interior design providing all kinds of woodwork, living room furniture, children's furniture, and cabinets at a very normal, direct-to-consumer cost.
          </p>
        </div>

        <div className="why-grid">
          {companyInfo.guarantees.map((g, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h4>{g.title}</h4>
              <p>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
