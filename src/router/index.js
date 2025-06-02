import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Service from '../views/Service.vue';
import Skill from '../views/Skill.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/service', name: 'Service', component: Service },
  { path: '/skill', name: 'Skill', component: Skill },
  { path: '/contacts', name: 'Contacts', component: Contacts }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
