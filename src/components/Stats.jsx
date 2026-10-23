import React from 'react';
import { companyInfo } from '../data/interiorData';

export default function Stats() {
  const statsList = [
    {
      value: companyInfo.stats.satisfiedClients,
      label: "Satisfied Customers",
      sub: "Across Hyderabad & Secunderabad"
    },
    {
      value: companyInfo.stats.completedProjects,
      label: "Completed Projects",
      sub: "Villas, Apartments & Commercial"
    },
    {
      value: companyInfo.stats.pipelinedProjects,
      label: "Pipelined Projects",
      sub: "Under execution & design phase"
    },
    {
      value: companyInfo.stats.years,
      label: "Years of Trust",
      sub: "Registered in 2008 in Hyderabad"
    }
  ];

  return (
    <div className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
