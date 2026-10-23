import React, { useState } from 'react';
import { servicesData } from '../data/interiorData';

export default function ServicesSection({ onOpenEstimateWithService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  const categories = ['All', 'Kitchen', 'Living', 'Bedroom', 'Storage', 'Commercial', 'Finishes', 'Decor'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">End-to-End Solutions</span>
          <h2 className="section-title">
            Our <span>Bespoke Interior Services</span>
          </h2>
          <p className="section-desc">
            From custom modular kitchens to acoustic ceilings and smart automation, our skilled architects and Moosapet factory craftsmen execute every detail to perfection.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="service-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-image-box">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="service-price-tag">Starting {service.startingPrice}</span>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <ul className="service-features-list">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-actions">
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedServiceModal(service)}
                  >
                    View Details
                  </button>
                  <button
                    className="btn btn-gold btn-sm"
                    onClick={() => onOpenEstimateWithService(service.title)}
                  >
                    Get 3D Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="modal-backdrop" onClick={() => setSelectedServiceModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedServiceModal(null)}>✕</button>
            <div style={{ maxHeight: '240px', overflow: 'hidden', borderRadius: '10px', marginBottom: '1.2rem' }}>
              <img
                src={selectedServiceModal.image}
                alt={selectedServiceModal.title}
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
            </div>
            <h3 style={{ color: '#FFF', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
              {selectedServiceModal.title}
            </h3>
            <div style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', fontWeight: '700', marginBottom: '1rem' }}>
              Starting from {selectedServiceModal.startingPrice} • Custom Factory Manufactured
            </div>
            <p style={{ color: '#CBD7D0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {selectedServiceModal.fullDesc}
            </p>

            <h5 style={{ color: '#FFF', marginBottom: '0.8rem' }}>Key Specifications:</h5>
            <ul className="service-features-list" style={{ marginBottom: '1.8rem' }}>
              {selectedServiceModal.features.map((feat, idx) => (
                <li key={idx} style={{ color: '#E2EBE5', fontSize: '0.9rem' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-gold"
                style={{ flex: 1 }}
                onClick={() => {
                  const sTitle = selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  onOpenEstimateWithService(sTitle);
                }}
              >
                Request 3D Drawing & Quote
              </button>
              <button
                className="btn btn-outline"
                onClick={() => setSelectedServiceModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
