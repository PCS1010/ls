import React, { useState, useMemo } from 'react';

export default function CostCalculator({ onOpenEstimateWithData }) {
  const [propertyType, setPropertyType] = useState('3bhk');
  const [packageTier, setPackageTier] = useState('premium');
  const [selectedModules, setSelectedModules] = useState({
    kitchen: true,
    masterWardrobe: true,
    guestWardrobe: true,
    tvUnit: true,
    falseCeiling: true,
    painting: true,
    electrical: false
  });

  const propertyOptions = [
    { id: '1bhk', label: '1 BHK', area: '~650 sq.ft', multiplier: 0.6 },
    { id: '2bhk', label: '2 BHK', area: '~1,150 sq.ft', multiplier: 0.85 },
    { id: '3bhk', label: '3 BHK', area: '~1,650 sq.ft', multiplier: 1.0 },
    { id: '4bhk', label: '4 BHK / Villa', area: '~2,600+ sq.ft', multiplier: 1.55 },
    { id: 'office', label: 'Commercial Office', area: '~1,500 sq.ft', multiplier: 1.2 }
  ];

  const packageTiers = [
    {
      id: 'essential',
      title: 'Essential Smart',
      desc: 'MR Grade Plywood, 0.8mm Matte Laminates, Hafele/Ebco soft-close hinges. 5-Yr Warranty.',
      priceMultiplier: 0.82
    },
    {
      id: 'premium',
      title: 'Premium Elegance',
      desc: '710 BWP Marine Ply, 1.5mm High-Gloss Acrylic, Hettich hardware & sensor LED. 10-Yr Warranty.',
      priceMultiplier: 1.0
    },
    {
      id: 'royal',
      title: 'Royal Luxury Bespoke',
      desc: 'HDHMR & Marine Ply, PU Paint & Veneer accents, Blum hardware, Italian Quartz & Automation.',
      priceMultiplier: 1.38
    }
  ];

  const modulesList = [
    { id: 'kitchen', label: 'Modular Kitchen & Pantry', basePrice: 185000 },
    { id: 'masterWardrobe', label: 'Master Bedroom Wardrobe & Dresser', basePrice: 140000 },
    { id: 'guestWardrobe', label: 'Guest / Kids Room Wardrobe', basePrice: 110000 },
    { id: 'tvUnit', label: 'Living TV Console & Fluted Panel', basePrice: 85000 },
    { id: 'falseCeiling', label: 'Gypsum False Ceiling & Cove Light', basePrice: 95000 },
    { id: 'painting', label: 'Royale Luxury Painting & Sanding', basePrice: 65000 },
    { id: 'electrical', label: 'Smart Electrical & Mood Lighting', basePrice: 70000 }
  ];

  const toggleModule = (id) => {
    setSelectedModules((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calculatedCost = useMemo(() => {
    const propMultiplier = propertyOptions.find((p) => p.id === propertyType)?.multiplier || 1.0;
    const tierMultiplier = packageTiers.find((t) => t.id === packageTier)?.priceMultiplier || 1.0;

    let subtotal = 0;
    modulesList.forEach((mod) => {
      if (selectedModules[mod.id]) {
        subtotal += mod.basePrice;
      }
    });

    const total = Math.round(subtotal * propMultiplier * tierMultiplier);
    const woodwork = Math.round(total * 0.58);
    const hardware = Math.round(total * 0.16);
    const ceilingPainting = Math.round(total * 0.16);
    const installation = Math.round(total * 0.1);

    return {
      total,
      woodwork,
      hardware,
      ceilingPainting,
      installation
    };
  }, [propertyType, packageTier, selectedModules]);

  const formatINR = (val) => {
    return '₹ ' + (val / 100000).toFixed(2) + ' Lakhs';
  };

  const handleBookEstimate = () => {
    const selectedProp = propertyOptions.find(p => p.id === propertyType)?.label;
    const selectedTier = packageTiers.find(t => t.id === packageTier)?.title;
    if (onOpenEstimateWithData) {
      onOpenEstimateWithData({
        propertyType: selectedProp,
        packageTier: selectedTier,
        estimatedAmount: formatINR(calculatedCost.total),
        modulesCount: Object.values(selectedModules).filter(Boolean).length
      });
    }
  };

  return (
    <section className="section calculator-section" id="calculator">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Instant Estimate Generator</span>
          <h2 className="section-title">
            Hyderabad Home <span>Interior Cost Estimator</span>
          </h2>
          <p className="section-desc">
            Get an instant, transparent price projection based on your floor configuration and preferred materials. 
            Remember: At LS Interiors, we present the final 3D design and quotation with <strong>Zero Token Advance</strong>.
          </p>
        </div>

        <div className="calc-container">
          <div className="calc-steps">
            {/* Step 1: Property Type */}
            <div>
              <div className="calc-group-title">
                <span>1</span> Select Home Configuration
              </div>
              <div className="calc-options-grid">
                {propertyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`calc-btn-option ${propertyType === opt.id ? 'selected' : ''}`}
                    onClick={() => setPropertyType(opt.id)}
                  >
                    <strong>{opt.label}</strong>
                    <div style={{ fontSize: '0.72rem', marginTop: '0.2rem', opacity: 0.8 }}>
                      {opt.area}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quality Tier */}
            <div>
              <div className="calc-group-title">
                <span>2</span> Choose Finishing & Material Tier
              </div>
              <div className="calc-tier-cards">
                {packageTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`tier-card ${packageTier === tier.id ? 'selected' : ''}`}
                    onClick={() => setPackageTier(tier.id)}
                  >
                    <h5>{tier.title}</h5>
                    <p>{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Modules */}
            <div>
              <div className="calc-group-title">
                <span>3</span> Select Scope & Rooms Required
              </div>
              <div className="calc-checkboxes">
                {modulesList.map((mod) => (
                  <div
                    key={mod.id}
                    className={`calc-checkbox-item ${selectedModules[mod.id] ? 'checked' : ''}`}
                    onClick={() => toggleModule(mod.id)}
                  >
                    <input
                      type="checkbox"
                      checked={!!selectedModules[mod.id]}
                      onChange={() => {}}
                    />
                    <span>{mod.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Output Card */}
          <div className="calc-summary-panel">
            <div>
              <div className="summary-header">
                <h4>Estimated Investment</h4>
                <p style={{ fontSize: '0.82rem', color: '#9EABA3' }}>
                  Factory Direct Pricing • Zero Middleman Commissions
                </p>
              </div>

              <div className="summary-price-box">
                <div className="price-box-label">Projected Total (Turnkey)</div>
                <div className="price-box-amount">{formatINR(calculatedCost.total)}</div>
                <div className="price-box-note">*Final estimation confirmed after free laser site measurement</div>
              </div>

              <div className="summary-breakdown">
                <div className="breakdown-row">
                  <span>In-House Factory Woodwork (Moosapet)</span>
                  <span>{formatINR(calculatedCost.woodwork)}</span>
                </div>
                <div className="breakdown-row">
                  <span>Fittings & Hardware (Hettich / Hafele)</span>
                  <span>{formatINR(calculatedCost.hardware)}</span>
                </div>
                <div className="breakdown-row">
                  <span>False Ceiling & Royale Painting</span>
                  <span>{formatINR(calculatedCost.ceilingPainting)}</span>
                </div>
                <div className="breakdown-row">
                  <span>White-Glove Installation & 10-Yr Warranty</span>
                  <span>{formatINR(calculatedCost.installation)}</span>
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn btn-gold"
                style={{ width: '100%', padding: '1rem' }}
                onClick={handleBookEstimate}
              >
                Lock This Estimate & Get 3D Drawings
              </button>
              <div style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '0.78rem', color: '#A0B0A7' }}>
                ✓ 0 Token Advance • Free Site Visit Across Hyderabad
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
