<template>
  <section class="services-section">
    <div class="services-container">
      <div class="services-header">
        <h1 class="section-title">My Services</h1>
        <div class="title-divider"></div>
        <p class="section-subtitle">Professional solutions for your digital needs</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon" style="background-color: #f0e6d8;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3 class="service-title">Website Design</h3>
          <p class="service-description">
            Custom, responsive website designs tailored to your brand identity and business goals, with a focus on visual appeal and user experience.
          </p>
          <ul class="service-features">
            <li>UI/UX Design</li>
            <li>Responsive Layouts</li>
            <li>Brand Integration</li>
            <li>Wireframing</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon" style="background-color: #e8d9c9;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 class="service-title">Front-end Development</h3>
          <p class="service-description">
            Clean, efficient code implementation using modern frameworks to bring designs to life with optimal performance and functionality.
          </p>
          <ul class="service-features">
            <li>HTML5/CSS3</li>
            <li>JavaScript/Vue.js</li>
            <li>Performance Optimization</li>
            <li>Cross-browser Testing</li>
          </ul>
        </div>
        
        <div class="service-card">
          <div class="service-icon" style="background-color: #e0cdba;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 class="service-title">UX Consultation</h3>
          <p class="service-description">
            Expert analysis and recommendations to improve user experience, increase conversions, and enhance customer satisfaction.
          </p>
          <ul class="service-features">
            <li>User Research</li>
            <li>Usability Testing</li>
            <li>Journey Mapping</li>
            <li>Accessibility Audits</li>
          </ul>
        </div>
      </div>
      
      <div class="cta-section">
        <p class="cta-text">Ready to discuss your project?</p>
        <button class="cta-button">Get in Touch</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Service'
};
</script>

<style scoped>
.services-section {
  background-color: #f5f1ee;
  padding: 4rem 2rem;
  min-height: 100vh;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #5e3516;
  margin-bottom: 1rem;
}

.title-divider {
  width: 80px;
  height: 4px;
  background-color: #a78a7f;
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #8d6e63;
  font-style: italic;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(94, 53, 22, 0.08);
  border: 1px solid #e8d5c3;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(94, 53, 22, 0.12);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  color: #5e3516;
  margin-bottom: 1rem;
}

.service-description {
  color: #5f4b41;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1.5rem;
}

.service-features li {
  position: relative;
  padding-left: 1.5rem;
  color: #8d6e63;
  margin-bottom: 0.5rem;
}

.service-features li:before {
  content: "•";
  color: #d7b899;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: -3px;
}

.cta-section {
  text-align: center;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(94, 53, 22, 0.08);
  border: 1px solid #e8d5c3;
  max-width: 800px;
  margin: 0 auto;
}

.cta-text {
  font-size: 1.25rem;
  color: #5e3516;
  margin-bottom: 1.5rem;
}

.cta-button {
  background-color: #5e3516;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: #8d6e63;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
}
</style>