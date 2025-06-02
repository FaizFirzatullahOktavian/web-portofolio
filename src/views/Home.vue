<template>
  <section class="home-section">
    <div class="home-container">
      <div class="profile-content">
        <div class="profile-image-wrapper">
          <img :src="profileImg" alt="Profile" class="profile-img" />
          <div class="image-overlay"></div>
        </div>
        <div class="profile-text">
          <h1 class="name">Faiz Firzatullah Oktavian</h1>
          <h2 class="title">Mahasiswa</h2>
          <div class="divider"></div>
          <p class="bio">
            Saya seorang pengembang web yang masih belajar dalam Vue.js.
            Berpengalaman dalam membangun aplikasi web modern yang responsif dan efisien.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/firzatullaho/" class="social-link">
              <span class="icon">ig</span>
              <span>Instagram</span>
            </a>
            <a href="https://github.com/projects" class="social-link">
              <span class="icon">gh</span>
              <span>GitHub</span>
            </a>
            <a href="https://www.youtube.com/@faizfirzatullah8080" class="social-link">
              <span class="icon">yt</span>
              <span>Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Pastikan path ini sesuai dengan lokasi file gambar Anda
import profileImg from '../assets/images/1.jpg'; // atau '../assets/images/profile.jpg'

export default {
  name: 'Home',
  data() {
    return {
      profileImg: profileImg
    }
  }
};
</script>


<style scoped>
.home-section {
  background-color: #f5f1ee; /* Warm light gray */
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: #ffffff;
  padding: 4rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(94, 53, 22, 0.08);
  border: 1px solid #e8d5c3;
}

.profile-image-wrapper {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #d7b899;
  position: relative;
  box-shadow: 0 4px 12px rgba(94, 53, 22, 0.12);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(94, 53, 22, 0.1) 0%, rgba(94, 53, 22, 0.3) 100%);
}

.profile-text {
  text-align: center;
  max-width: 600px;
}

.name {
  font-size: 2.75rem;
  font-weight: 700;
  color: #5e3516; /* Dark brown */
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.title {
  font-size: 1.35rem;
  font-weight: 500;
  color: #8d6e63; /* Medium brown */
  margin-bottom: 1.5rem;
  font-style: italic;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #a78a7f; /* Light brown */
  margin: 1.5rem auto;
  border-radius: 2px;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5f4b41; /* Dark gray-brown */
  margin-bottom: 2.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: #5e3516;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  border: 2px solid #d7b899;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(215, 184, 153, 0.1);
}

.social-link:hover {
  color: #ffffff;
  background-color: #8d6e63;
  border-color: #8d6e63;
  transform: translateY(-2px);
}

.social-link .icon {
  font-weight: 700;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .profile-content {
    flex-direction: row;
    text-align: left;
    padding: 5rem;
  }
  
  .profile-text {
    text-align: left;
  }
  
  .social-links {
    justify-content: flex-start;
  }

  .divider {
    margin: 1.5rem 0;
  }
}

/* Animation effects */
.profile-image-wrapper {
  animation: fadeInUp 0.8s ease-out;
}

.profile-text {
  animation: fadeIn 1s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>