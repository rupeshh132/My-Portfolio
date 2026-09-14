import React, { useEffect } from 'react';

const PricingBrochure = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f0f0f0';
    document.body.style.color = '#17202a';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <div className="pricing-brochure">
      {/* Page 1: Cover & Services */}
      <div className="a4-page">
        <div className="header">
          <p className="subtitle">FREELANCE WEB DEVELOPMENT</p>
          <h1 className="title">Websites & Web Applications<br />Built for Real Businesses</h1>
          <p className="subtitle" style={{ marginTop: '8px' }}>Professional web development services for businesses, professionals, startups and growing brands.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Business Websites</h3>
            <p>Corporate • Startup • Agency • Service Businesses</p>
          </div>
          <div className="service-card">
            <h3>E-commerce</h3>
            <p>Online Stores • Catalogues • Marketplaces</p>
          </div>
          <div className="service-card">
            <h3>Real Estate & Booking</h3>
            <p>Property • Hotels • Clinics • Restaurants • Appointments</p>
          </div>
          <div className="service-card">
            <h3>Custom Web Applications</h3>
            <p>CRM • LMS • Dashboards • Management Systems</p>
          </div>
        </div>

        <div className="starting-price">
          <h2>Starting from ₹10,000</h2>
          <p>Final pricing depends on pages, functionality, integrations, content and level of customization required.</p>
        </div>

        <div className="footer-details">
          <h3>Rupesh Kumar Vishwakarma</h3>
          <p>Freelance Web Developer & Software Engineer</p>
          <p className="meta">Pricing Guide • 2026</p>
        </div>
      </div>

      <div className="page-break"></div>

      {/* Page 2: Packages */}
      <div className="a4-page">
        <h2 className="section-title">Website Development Packages</h2>
        <p className="section-desc">Choose a starting package based on the project's scope. A final quotation is provided after requirements are confirmed.</p>
        
        <div className="packages-list">
          {[
            { num: '01', name: 'Starter Website', price: '₹10,000+', for: 'Small businesses & local services', features: ['3-5 pages', 'Responsive design', 'Contact / enquiry form', 'WhatsApp integration', 'Basic animations', 'Basic SEO setup', 'Deployment'] },
            { num: '02', name: 'Professional Business Website', price: '₹20,000+', for: 'Businesses, startups & professionals', features: ['5-10 pages', 'Custom UI', 'Responsive design', 'Contact & enquiry forms', 'WhatsApp / Maps integration', 'Basic SEO', 'Animations', 'Deployment', '30 days basic support'] },
            { num: '03', name: 'Premium / Real Estate Website', price: '₹35,000+', for: 'Property, hospitality & high-customization projects', features: ['Custom page layouts', 'Property / service listings', 'Search & filtering where required', 'Lead / enquiry workflows', 'Maps integration', 'Responsive UI', 'Advanced interactions', 'Deployment', '30 days basic support'] },
            { num: '04', name: 'E-commerce Website', price: '₹40,000+', for: 'Online stores & product businesses', features: ['Product catalogue', 'Categories & search', 'Cart & checkout', 'Customer accounts where required', 'Payment gateway integration', 'Order management', 'Basic admin functionality', 'Responsive design', 'Deployment'] },
            { num: '05', name: 'Custom Web Application', price: '₹50,000+', for: 'Business systems & software products', features: ['Custom workflows', 'Authentication & user roles', 'Database-backed features', 'Admin dashboard', 'CRUD / management modules', 'API integrations where required', 'Responsive interface', 'Deployment', 'Project-specific support'] },
          ].map((pkg, idx) => (
            <div className="package-card" key={idx}>
              <div className="pkg-header">
                <div className="pkg-title-wrapper">
                  <span className="pkg-num">{pkg.num}</span>
                  <div>
                    <h3 className="pkg-name">{pkg.name}</h3>
                    <p className="pkg-for">{pkg.for}</p>
                  </div>
                </div>
                <div className="pkg-price">{pkg.price}</div>
              </div>
              <ul className="pkg-features">
                {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="meta" style={{ marginTop: '20px' }}>Note: Prices are starting prices, not fixed prices. Features outside the agreed scope may require a revised quotation.</p>
      </div>

      <div className="page-break"></div>

      {/* Page 3: Add-ons & Terms */}
      <div className="a4-page">
        <h2 className="section-title">Add-ons & Optional Services</h2>
        <p className="section-desc" style={{ marginBottom: '24px' }}>These items can be added depending on project requirements.</p>

        <table className="addons-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Estimated charge</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Extra page</td><td>₹1,000 - ₹2,500 / page</td></tr>
            <tr><td>Payment gateway integration</td><td>₹2,000 - ₹5,000</td></tr>
            <tr><td>Content upload / data entry</td><td>₹1,000 - ₹5,000+</td></tr>
            <tr><td>Advanced SEO</td><td>₹5,000+</td></tr>
            <tr><td>Custom feature / module</td><td>Quoted separately</td></tr>
            <tr><td>Maintenance & updates</td><td>₹2,000 - ₹5,000 / month</td></tr>
            <tr><td>Domain</td><td>Usually ₹800 - ₹1,500 / year*</td></tr>
            <tr><td>Hosting</td><td>Usually ₹2,000 - ₹8,000 / year*</td></tr>
          </tbody>
        </table>
        <p className="meta" style={{ marginTop: '8px' }}>*Third-party provider pricing may vary and is normally paid by the client directly.</p>

        <h2 className="section-title" style={{ marginTop: '40px' }}>Project Payment Terms</h2>
        <ul className="terms-list">
          <li><strong>50%</strong> — Project confirmation & development start</li>
          <li><strong>30%</strong> — Development milestone / working build</li>
          <li><strong>20%</strong> — Final approval & handover</li>
        </ul>

        <h2 className="section-title" style={{ marginTop: '30px' }}>What the Client Receives</h2>
        <ul className="terms-list">
          <li>Responsive website / web application as agreed in the project scope</li>
          <li>Source code and project handover after final payment</li>
          <li>Deployment assistance</li>
          <li>Basic post-launch support for the period specified in the quotation</li>
          <li>Documentation / credentials handover where applicable</li>
        </ul>
      </div>

      <div className="page-break"></div>

      {/* Page 4: Contact */}
      <div className="a4-page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '277mm' }}>
        <h1 className="title" style={{ fontSize: '48px', marginBottom: '16px' }}>Let's Build Your Project</h1>
        <p className="subtitle" style={{ maxWidth: '600px', fontSize: '18px' }}>Share your requirements, and I'll recommend the appropriate package and provide a project-specific quotation.</p>
        
        <div className="contact-box" style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '8px', color: '#17202a' }}>Rupesh Kumar Vishwakarma</h2>
          <p style={{ color: '#34495e', marginBottom: '24px', fontSize: '16px' }}>Freelance Web Developer & AI Enthusiast</p>
          
          <div className="contact-links">
            <p>📧 <strong>Email:</strong> <a href="mailto:vrupesh132@gmail.com">vrupesh132@gmail.com</a></p>
            <p>📞 <strong>WhatsApp / Phone:</strong> <a href="tel:+918090683207">+91 8090683207</a></p>
            <p>🌐 <strong>Portfolio:</strong> <a href="https://my-portfolio-coral-rho-5fuq441i1t.vercel.app/">View Live Projects</a></p>
            <p>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rupesh-vishwakarma-10a904225/">rupesh-vishwakarma</a></p>
            <p>🐙 <strong>GitHub:</strong> <a href="https://github.com/rupeshh132">github.com/rupeshh132</a></p>
            <p>👨‍💻 <strong>LeetCode:</strong> <a href="https://leetcode.com/u/rupeshh132/">leetcode.com/u/rupeshh132</a></p>
          </div>
        </div>

        <div style={{ marginTop: '60px', borderTop: '1px solid #eaeaea', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', color: '#17202a', marginBottom: '8px' }}>Project pricing starts from ₹10,000.</h2>
          <p style={{ color: '#566573', fontSize: '14px' }}>Final pricing is based on project requirements and confirmed scope.</p>
        </div>
      </div>
      
      {/* Simple overlay button to print, only visible on screen */}
      <button className="print-btn no-print" onClick={() => window.print()}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        Save as PDF
      </button>
    </div>
  );
};

export default PricingBrochure;
