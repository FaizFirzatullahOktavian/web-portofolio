<template>
  <nav class="navbar">
    <div class="profile-container">
  <<img :src="profileImg" alt="Profile" class="profile-img" />
  <div class="logo">Faiz Firzatullah Oktavian</div>
</div>
    
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About Me</router-link></li>
      <li><router-link to="/service">Service</router-link></li>
      <li><router-link to="/skill">Skill</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
    </ul>
    
    <div class="sidebar-toggle" @click="toggleSidebar">
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <div class="sidebar" :class="{ 'active': isSidebarOpen }">
      <div class="sidebar-header">
        <div class="profile-container">
          <img src="" alt="Profile" class="profile-img" />
          <div class="logo">Faiz Firzatullah Oktavian</div>
        </div>
        <button class="close-btn" @click="toggleSidebar">&times;</button>
      </div>
      <ul class="sidebar-links">
        <li><router-link to="/" @click="toggleSidebar">Home</router-link></li>
        <li><router-link to="/about" @click="toggleSidebar">About Me</router-link></li>
        <li><router-link to="/service" @click="toggleSidebar">Service</router-link></li>
        <li><router-link to="/skill" @click="toggleSidebar">Skill</router-link></li>
        <li><router-link to="/contacts" @click="toggleSidebar">Contacts</router-link></li>
      </ul>
    </div>
    <div class="sidebar-overlay" :class="{ 'active': isSidebarOpen }" @click="toggleSidebar"></div>
  </nav>
</template>

<script>
import profileImg from '../assets/images/1.jpg';

export default {
  name: 'Navbar',
  data() {
    return {
       profileImg: profileImg,  
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  color: #5e3516;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-links a:hover {
  color: #000;
  font-weight: 600;
}

.sidebar-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.sidebar-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: all 0.3s ease;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 280px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1000;
  padding: 1.5rem;
}

.sidebar.active {
  right: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-links li {
  margin-bottom: 1.5rem;
}

.sidebar-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .sidebar-toggle {
    display: flex;
  }
  
  .profile-container .logo {
    display: none;
  }
}

@media (min-width: 769px) {
  .sidebar {
    display: none;
  }
  
  .sidebar-overlay {
    display: none;
  }
}
</style>