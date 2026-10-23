import React, { useState } from 'react';

export default function EstimateModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyLocation: '',
    configuration: initialData?.propertyType || '3 BHK',
    packageTier: initialData?.packageTier || 'Premium Elegance',
    scopeDetails: initialData?.serviceTitle || ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    const randomId = 'LSI-HYD-' + Math.floor(1000 + Math.random() * 9000);
    setBookingId(randomId);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(4, 66, 12, 0.4)',
              border: '2px solid var(--gold-primary)',
              color: 'var(--gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 1.2rem auto'
            }}>
              ✓
            </div>

            <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
              3D Design Consultation Confirmed!
            </h3>
            <p style={{ color: 'var(--gold-primary)', fontWeight: '700', fontSize: '1.05rem', marginBottom: '0.8rem' }}>
              Booking Reference: {bookingId}
            </p>
            <p style={{ color: '#C0CEC5', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.8rem' }}>
              Thank you, <strong>{formData.name}</strong>. Our senior interior architect will review your property details and contact you at <strong>{formData.phone}</strong> to schedule your free laser site measurement in Hyderabad.
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'left',
              fontSize: '0.82rem',
              color: '#A0B0A6',
              marginBottom: '1.8rem'
            }}>
              <div style={{ color: '#FFF', fontWeight: '600', marginBottom: '0.3rem' }}>Next Steps:</div>
              <div>• Free Laser Site Visit & Dimension Mapping</div>
              <div>• 3D Drawing Presentation (Pictorial Views)</div>
              <div>• Exact Itemized Estimation (Zero Token Advance)</div>
            </div>

            <button className="btn btn-gold" onClick={handleReset} style={{ width: '100%' }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="section-tag" style={{ marginBottom: '0.5rem' }}>
                Zero Token Advance
              </span>
              <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '0.3rem' }}>
                Book Free 3D Design & Site Estimate
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#9EABA3' }}>
                Get architectural 3D drawings and itemized estimates for your space in Hyderabad with zero upfront advance payment.
              </p>
            </div>

            {initialData?.estimatedAmount && (
              <div style={{
                background: 'rgba(4, 66, 12, 0.35)',
                border: '1px dashed var(--gold-primary)',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                marginBottom: '1.2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '0.82rem', color: '#E1ECE5' }}>
                  Selected Estimate ({initialData.propertyType} - {initialData.packageTier}):
                </span>
                <span style={{ color: 'var(--gold-light)', fontWeight: '800', fontSize: '1.1rem' }}>
                  {initialData.estimatedAmount}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email ID</label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Property Location (Hyderabad)</label>
                  <input
                    type="text"
                    placeholder="e.g. Gachibowli / Moosapet / Kukatpally"
                    className="form-input"
                    value={formData.propertyLocation}
                    onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Home Configuration</label>
                  <select
                    className="form-select"
                    value={formData.configuration}
                    onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                  >
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK / Villa">4 BHK / Villa</option>
                    <option value="Commercial">Commercial Office</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Key Requirements / Notes</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Modular Kitchen, 2 Wardrobes, False Ceiling"
                  className="form-textarea"
                  value={formData.scopeDetails}
                  onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '0.95rem' }}>
                Confirm Free 3D Design Appointment
              </button>
              <div style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '0.75rem', color: '#88988F' }}>
                ✓ No token advance required • Direct factory engineers
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
