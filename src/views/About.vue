<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-header">
        <h1 class="section-title">About Me</h1>
        <div class="title-divider"></div>
        <p class="section-subtitle">UX/UI Designer from Riau, Indonesia</p>
      </div>
      
      <div class="about-content">
        <div class="about-image">
          <img :src="profileImg" alt="Profile" class="profile-img" />
          <div class="image-frame"></div>
        </div>
        
        <div class="about-text">
          <div class="bio-section">
            <h2 class="bio-title">Biography</h2>
            <p class="bio-text">
              Saya Seorang Mahasiswa Teknik Informatika dari Universitas Islam Riau yang masih dalam pembelajaran vue js dan UI/UX, 
              yang berasal dari Riau, Indonesia.
            </p>
            <p class="bio-text">
              Berbasis di Sumatera, saya mengambil inspirasi dari kekayaan warisan budaya dan keindahan alam Indonesia untuk menginformasikan filosofi desain saya.
               Saya percaya bahwa desain yang baik harus dapat diakses, inklusif, dan menceritakan kisah yang menarik.
            </p>
          </div>
          
          <div class="skills-section">
            <h2 class="skills-title">My Skills</h2>
            <div class="skills-grid">
              <div class="skill-item">
                <div class="skill-icon">✏️</div>
                <h3 class="skill-name">UI Design</h3>
                <p class="skill-desc">Creating visually appealing interfaces</p>
              </div>
              <div class="skill-item">
                <div class="skill-icon">🔍</div>
                <h3 class="skill-name">UX Research</h3>
                <p class="skill-desc">Understanding user needs deeply</p>
              </div>
              <div class="skill-item">
                <div class="skill-icon">💻</div>
                <h3 class="skill-name">Prototyping</h3>
                <p class="skill-desc">Interactive mockups and flows</p>
              </div>
              <div class="skill-item">
                <div class="skill-icon">🎨</div>
                <h3 class="skill-name">Design Systems</h3>
                <p class="skill-desc">Consistent component libraries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImg from '../assets/images/1.jpg';
export default {
  name: 'About',
  data() {
    return {
      profileImg: profileImg
    }
  }
};
</script>

<style scoped>
.about-section {
  background-color: #f5f1ee;
  padding: 4rem 2rem;
  min-height: 100vh;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-header {
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

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(94, 53, 22, 0.08);
  border: 1px solid #e8d5c3;
}

.about-image {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
}

.profile-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  position: relative;
  z-index: 1;
  object-fit: cover;
  aspect-ratio: 1/1; /* Makes the image square, adjust as needed */
}

.image-frame {
  position: absolute;
  top: 15px;
  left: 15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid #d7b899;
  border-radius: 8px;
  z-index: 0;
}

.bio-section {
  margin-bottom: 2.5rem;
}

.bio-title, .skills-title {
  font-size: 1.75rem;
  color: #5e3516;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.bio-title:after, .skills-title:after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #d7b899;
}

.bio-text {
  color: #5f4b41;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  background-color: #f9f5f0;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #d7b899;
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(94, 53, 22, 0.1);
}

.skill-icon {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #8d6e63;
}

.skill-name {
  color: #5e3516;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.skill-desc {
  color: #8d6e63;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (min-width: 992px) {
  .about-content {
    flex-direction: row;
    align-items: flex-start;
    padding: 4rem;
  }
  
  .about-image {
    position: sticky;
    top: 2rem;
    flex: 0 0 40%;
  }
  
  .about-text {
    flex: 1;
  }
}
</style>