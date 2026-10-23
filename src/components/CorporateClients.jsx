import React from 'react';
import { corporateClients } from '../data/interiorData';

export default function CorporateClients() {
  return (
    <section className="clients-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold-primary)',
            fontWeight: '700'
          }}>
            Trusted by Hyderabad Corporates & 900+ Homeowners
          </span>
        </div>

        <div className="clients-flex">
          {corporateClients.map((client, idx) => (
            <div className="client-logo-item" key={idx}>
              <img src={client.logo} alt={client.name} onError={(e) => { e.target.style.display = 'none'; }} />
              <div>
                <span>{client.name}</span>
                <div style={{ fontSize: '0.72rem', color: '#9EABA3' }}>{client.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
