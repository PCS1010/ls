import React, { useState } from 'react';
import { galleryProjects } from '../data/interiorData';

export default function GallerySection({ onOpenEstimate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = ['All', 'Living', 'Kitchen', 'Wardrobes', 'Bedroom', 'Office', 'Factory', 'Partitions'];

  const filteredProjects = activeCategory === 'All'
    ? galleryProjects
    : galleryProjects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio of Realised Dreams</span>
          <h2 className="section-title">
            Featured <span>Project Showcase</span>
          </h2>
          <p className="section-desc">
            Explore our curated gallery of handcrafted residences, modular kitchens, and commercial interiors completed across Hyderabad.
          </p>
        </div>

        {/* Categories Filter */}
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

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredProjects.map((item) => (
            <div
              className="gallery-card"
              key={item.id}
              onClick={() => setActiveLightbox(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>📍 {item.location}</p>
                <div className="scope-text">{item.scope}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-gold" onClick={onOpenEstimate}>
            Request Similar 3D Design for Your Space
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="modal-backdrop" onClick={() => setActiveLightbox(null)}>
          <button className="modal-close-btn" onClick={() => setActiveLightbox(null)}>✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '0.3rem' }}>
                {activeLightbox.title}
              </h3>
              <p style={{ color: 'var(--gold-light)', fontSize: '0.9rem' }}>
                📍 {activeLightbox.location} • {activeLightbox.scope}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
