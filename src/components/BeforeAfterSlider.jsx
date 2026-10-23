import React, { useState, useRef } from 'react';

export default function BeforeAfterSlider({ onOpenEstimate }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeScene, setActiveScene] = useState('living');
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const scenes = {
    living: {
      title: "Luxury Penthouse Living Room",
      before: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1920&q=85",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      localBefore: "file:///C:/Users/purna/.gemini/antigravity-ide/brain/216693ac-90c2-4b79-b772-110597ebc05d/before_raw_apartment_1792741985796.jpg",
      localAfter: "file:///C:/Users/purna/.gemini/antigravity-ide/brain/216693ac-90c2-4b79-b772-110597ebc05d/after_luxury_apartment_1792742145647.jpg",
      beforeAlt: "Bare Shell Raw Concrete Apartment Living Room Before Work",
      afterAlt: "LS Interiors Finished Luxury Living Room with Fluted Woodwork & Cove Lighting"
    },
    kitchen: {
      title: "German Finish Modular Kitchen",
      before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=85",
      after: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
      beforeAlt: "Unfinished Kitchen Shell Space Before Modular Installation",
      afterAlt: "LS Interiors High-Gloss Acrylic Modular Kitchen with Quartz Island"
    }
  };

  const current = scenes[activeScene];
  const beforeSrc = current.localBefore || current.before;
  const afterSrc = current.localAfter || current.after;

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percentage);
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    updatePosition(e.clientX);
  };

  return (
    <section className="section slider-section" id="transformation">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Ultra HD Visual Proof</span>
          <h2 className="section-title">
            The <span>LS Interiors</span> Transformation
          </h2>
          <p className="section-desc">
            Drag the slider horizontally to inspect the razor-sharp transition from a bare concrete shell to our Moosapet factory turnkey execution.
          </p>
        </div>

        {/* Scene Selector Tabs */}
        <div className="ba-scene-tabs">
          <button
            className={`tab-btn ${activeScene === 'living' ? 'active' : ''}`}
            onClick={() => setActiveScene('living')}
          >
            🛋️ Penthouse Living Room
          </button>
          <button
            className={`tab-btn ${activeScene === 'kitchen' ? 'active' : ''}`}
            onClick={() => setActiveScene('kitchen')}
          >
            🍳 Modular Kitchen Transformation
          </button>
        </div>

        {/* Crystal Clear Interactive Before & After Box */}
        <div
          className="before-after-box"
          ref={containerRef}
          onClick={handleClick}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Base Layer: Before (Underneath) */}
          <img
            src={beforeSrc}
            alt={current.beforeAlt}
            className="ba-img-layer"
            onError={(e) => { e.target.src = current.before; }}
          />
          <span className="ba-label ba-label-before">Before: Raw Shell Flat</span>

          {/* Top Layer: After (Precision Clip-Path, 100% Sharp) */}
          <div
            className="ba-after-layer"
            style={{
              clipPath: `polygon(0% 0%, ${sliderPos}% 0%, ${sliderPos}% 100%, 0% 100%)`,
              WebkitClipPath: `polygon(0% 0%, ${sliderPos}% 0%, ${sliderPos}% 100%, 0% 100%)`
            }}
          >
            <img
              src={afterSrc}
              alt={current.afterAlt}
              className="ba-img-layer"
              onError={(e) => { e.target.src = current.after; }}
            />
          </div>
          <span className="ba-label ba-label-after">After: LS Interiors Finished Home</span>

          {/* Divider Handle */}
          <div
            className="ba-divider"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="ba-handle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"/>
                <polyline points="9 18 3 12 9 6"/>
              </svg>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button className="btn btn-gold" onClick={onOpenEstimate}>
            Transform Your Home • Get Free 3D Plan
          </button>
        </div>
      </div>
    </section>
  );
}
