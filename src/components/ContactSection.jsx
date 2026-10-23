import React, { useState } from 'react';
import { companyInfo } from '../data/interiorData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: '3 BHK',
    estimatedBudget: '₹6L - ₹10L',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch With Our Designers</span>
          <h2 className="section-title">
            Visit Our Factory or <span>Book a Consultation</span>
          </h2>
          <p className="section-desc">
            Connect directly with LS Interiors' founders and chief architects. 
            Free laser site measurement and photorealistic 3D drawings with zero token advance.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Panel */}
          <div className="contact-info-panel">
            <div className="contact-card-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <h5>Office & Manufacturing Unit Address</h5>
                <p>{companyInfo.address}</p>
                <div style={{ marginTop: '0.6rem' }}>
                  <a
                    href="https://maps.google.com/?q=Moosapet+Hyderabad+Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--gold-primary)', fontWeight: '600', fontSize: '0.85rem' }}
                  >
                    ↗ Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <h5>Direct Helpline Numbers</h5>
                <p>
                  <a href="tel:+919177374198">+91 9177374198</a> <br />
                  <a href="tel:+917893002568">+91 7893002568</a>
                </p>
                <div style={{ fontSize: '0.78rem', color: '#9EABA3', marginTop: '0.3rem' }}>
                  Available 9:00 AM – 8:30 PM (Mon – Sun)
                </div>
              </div>
            </div>

            <div className="contact-card-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <div>
                <h5>Official Email Inquiry</h5>
                <p>
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </p>
                <div style={{ fontSize: '0.78rem', color: '#9EABA3', marginTop: '0.3rem' }}>
                  Send floor plans for express 24-hr 3D quotation
                </div>
              </div>
            </div>

            <div className="contact-card-box" style={{ background: 'rgba(37, 211, 102, 0.1)', borderColor: 'rgba(37, 211, 102, 0.3)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <div>
                <h5 style={{ color: '#25D366' }}>WhatsApp Direct Connect</h5>
                <p style={{ color: '#CBE5D4' }}>Chat instantly with our senior interior design director.</p>
                <div style={{ marginTop: '0.5rem' }}>
                  <a
                    href="https://wa.me/919177374198?text=Hello%20LS%20Interiors,%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project%20in%20Hyderabad."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-emerald btn-sm"
                    style={{ background: '#128C7E' }}
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="contact-form-box">
            <h3 style={{ color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
              Request Free Site Measurement & 3D Plan
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#9EABA3', marginBottom: '1.5rem' }}>
              Fill in your details below. We will assign a senior designer to inspect your space in Hyderabad with zero advance fees.
            </p>

            {submitted ? (
              <div className="alert-success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <div>
                  <strong>Thank You, {formData.fullName}!</strong>
                  <p style={{ fontSize: '0.82rem', margin: 0, color: '#E1ECE5' }}>
                    Your request has been registered. Our senior architect from Moosapet will call you at <strong>{formData.phone}</strong> within 2 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
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
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
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
                      placeholder="e.g. Hitec City / Moosapet / Kukatpally"
                      className="form-input"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Property Type</label>
                    <select
                      className="form-select"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    >
                      <option value="1 BHK">1 BHK Apartment</option>
                      <option value="2 BHK">2 BHK Apartment</option>
                      <option value="3 BHK">3 BHK Luxury Flat</option>
                      <option value="4 BHK / Villa">4 BHK / Duplex Villa</option>
                      <option value="Commercial">Commercial Office / Retail</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Requirements & Comments</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your spaces (Modular Kitchen, Wardrobes, False Ceiling, Wall Finishes, etc.)"
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '0.95rem' }}>
                  Submit Inquiry • 0 Token Advance
                </button>
                <div style={{ textAlign: 'center', marginTop: '0.8rem', fontSize: '0.75rem', color: '#88988F' }}>
                  🔒 Your contact information remains strictly confidential.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
