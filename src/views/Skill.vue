<template>
  <section class="skills-section">
    <div class="skills-container">
      <div class="skills-header">
        <h1 class="section-title">My Skills</h1>
        <div class="title-divider"></div>
        <p class="section-subtitle">Technologies I work with</p>
      </div>

      <div class="skills-categories">
        <!-- Frontend Development -->
        <div class="category-card">
          <div class="category-header">
            <div class="category-icon" style="background-color: #f0e6d8;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h2 class="category-title">Frontend Development</h2>
          </div>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js">
              </div>
              <span class="skill-name">Vue.js</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 90%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript">
              </div>
              <span class="skill-name">JavaScript</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 85%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5">
              </div>
              <span class="skill-name">HTML5</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 95%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3">
              </div>
              <span class="skill-name">CSS3</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 90%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS">
              </div>
              <span class="skill-name">Tailwind CSS</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 85%;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Design Tools -->
        <div class="category-card">
          <div class="category-header">
            <div class="category-icon" style="background-color: #e8d9c9;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h2 class="category-title">Design Tools</h2>
          </div>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma">
              </div>
              <span class="skill-name">Figma</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 95%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD">
              </div>
              <span class="skill-name">Adobe XD</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 80%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop">
              </div>
              <span class="skill-name">Photoshop</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 75%;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Skills -->
        <div class="category-card">
          <div class="category-header">
            <div class="category-icon" style="background-color: #e0cdba;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5e3516" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="category-title">Other Skills</h2>
          </div>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
              </div>
              <span class="skill-name">Git</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 85%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm">
              </div>
              <span class="skill-name">npm</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 80%;"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-logo">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code">
              </div>
              <span class="skill-name">VS Code</span>
              <div class="skill-level">
                <div class="level-bar" style="width: 90%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill'
};
</script>

<style scoped>
.skills-section {
  background-color: #f5f1ee;
  padding: 4rem 2rem;
  min-height: 100vh;
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
}

.skills-header {
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

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.category-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(94, 53, 22, 0.08);
  border: 1px solid #e8d5c3;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.category-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-title {
  font-size: 1.5rem;
  color: #5e3516;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: #f9f5f0;
}

.skill-logo {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-name {
  flex: 1;
  color: #5f4b41;
  font-weight: 500;
}

.skill-level {
  width: 100px;
  height: 6px;
  background-color: #e8d5c3;
  border-radius: 3px;
  overflow: hidden;
}

.level-bar {
  height: 100%;
  background-color: #8d6e63;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
  
  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>