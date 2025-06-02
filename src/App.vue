<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: #fff;
  color: #333;
}
</style>
