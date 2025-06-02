<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-header">
        <h1 class="section-title">Get In Touch</h1>
        <div class="title-divider"></div>
        <p class="section-subtitle">Let's collaborate on your next project</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-card">
            <div class="contact-icon" style="background-color: #f0e6d8;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 class="contact-method">Email</h3>
            <a href="mailto:dimas@email.com" class="contact-detail">faizfirzatullah27@email.com</a>
          </div>

          <div class="contact-card">
            <div class="contact-icon" style="background-color: #e8d9c9;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 class="contact-method">Phone</h3>
            <a href="tel:+6281234567890" class="contact-detail">+62 822 8472 1568</a>
          </div>

          <div class="contact-card">
            <div class="contact-icon" style="background-color: #e0cdba;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 class="contact-method">Location</h3>
            <p class="contact-detail">Riau, Indonesia</p>
          </div>
        </div>

        <form class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" id="name" class="form-input" placeholder="Enter your name">
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" id="email" class="form-input" placeholder="Enter your email">
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" id="subject" class="form-input" placeholder="What's this about?">
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" class="form-textarea" rows="5" placeholder="Tell me about your project"></textarea>
          </div>

          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>

      <div class="social-links">
        <a href="#" class="social-link" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5e3516">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5e3516">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="Dribbble">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5e3516">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.847 7.929c-.23-.734-2.086-2.026-4.379-2.404.516 1.002.932 2.1 1.188 3.018 1.573-.188 3.098-.65 3.191-1.614zm-5.703 1.188c-.366-1.29-.866-2.563-1.433-3.744-3.266.917-5.94 3.456-6.797 6.687 1.655.271 3.374.271 5.029 0 .666-1.289 1.843-2.742 3.201-2.943zm-4.144-4.244c-1.38 1.562-2.471 3.756-2.85 5.871-2.002-.645-3.74-1.841-4.613-3.388.34-2.719 2.713-4.989 5.463-5.26 1.02 1.02 1.957 1.84 3 2.777zm-8.144 3.528c.784 1.893 2.928 3.387 5.185 4.101-.271 1.584-.542 3.344-.542 5.086-3.923-.271-7.255-2.904-7.843-6.41.271-1.176.813-2.271 1.2-2.777zm5.515 9.677c0-1.462.271-2.913.542-4.336.917.271 1.84.542 2.777.813-.115 1.462-.433 2.904-.813 4.336-1.176-.271-2.323-.542-2.506-.813zm7.729 2.647c-.784-1.893-2.928-3.387-5.199-4.101.271-1.584.542-3.344.542-5.086 1.002.115 2.004.271 3.006.542.917 3.518-1.411 6.863-3.349 8.645z"/>
          </svg>
        </a>
        <a href="#" class="social-link" aria-label="Behance">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5e3516">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
  methods: {
    submitForm() {
      // Form submission logic would go here
      alert('Thank you for your message! I will get back to you soon.');
    }
  }
};
</script>

<style scoped>
.contact-section {
  background-color: #f5f1ee;
  padding: 4rem 2rem;
  min-height: 100vh;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(94, 53, 22, 0.08);
  border: 1px solid #e8d5c3;
  text-align: center;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.contact-method {
  font-size: 1.25rem;
  color: #5e3516;
  margin-bottom: 0.5rem;
}

.contact-detail {
  color: #8d6e63;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block;
}

a.contact-detail:hover {
  color: #5e3516;
  text-decoration: underline;
}

.contact-form {
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(94, 53, 22, 0.08);
  border: 1px solid #e8d5c3;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #5e3516;
  font-weight: 500;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d7ccc8;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: #f9f5f0;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #8d6e63;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background-color: #5e3516;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: block;
  margin: 0 auto;
}

.submit-button:hover {
  background-color: #8d6e63;
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0e6d8;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-link:hover {
  background-color: #e8d9c9;
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

@media (min-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr 1.5fr;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.25rem;
  }
}
</style>