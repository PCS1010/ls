import React from 'react';
import { clientTestimonials } from '../data/interiorData';

export default function Testimonials({ onOpenEstimate }) {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Hyderabad Homeowner Stories</span>
          <h2 className="section-title">
            Words of Appreciation from <span>Our Clients</span>
          </h2>
          <p className="section-desc">
            Read authentic feedback from families who entrusted LS Interiors with their apartments, penthouses, and independent villas.
          </p>
        </div>

        <div className="testimonials-grid">
          {clientTestimonials.map((review, idx) => (
            <div className="testimonial-card" key={idx}>
              <div>
                <div className="stars-row">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{review.text}"</p>
              </div>

              <div className="author-info">
                <h5>{review.name}</h5>
                <p>📍 {review.location} • <em>{review.projectType}</em></p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          background: 'rgba(4, 66, 12, 0.3)',
          border: '1px solid var(--border-gold)',
          borderRadius: '16px',
          padding: '2.5rem'
        }}>
          <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem' }}>
            Ready to Begin Your Home Transformation?
          </h3>
          <p style={{ color: '#C0CEC5', maxWidth: '620px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
            Get your floor plan evaluated by our senior designers with zero initial token advance. We provide the 3D drawings and itemized estimation upfront.
          </p>
          <button className="btn btn-gold" onClick={onOpenEstimate}>
            Book Free Site Measurement & 3D Drawings
          </button>
        </div>
      </div>
    </section>
  );
}
