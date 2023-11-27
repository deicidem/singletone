<script setup lang="ts">
import useAppPreferences from '@/composables/useAppPreferences';
import AppButtons from './components/AppButtons.vue';

const appPreferences = useAppPreferences();
</script>

<template>
  <div class="content">
    <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <p>Is sidebar open: {{ appPreferences.sidebarOpen }}</p>
      <p>DarkMode: {{ appPreferences.darkMode }}</p>
      <p>Theme: {{ appPreferences.theme }}</p>
      <p>Is login form visible: {{ appPreferences.loginFormVisible }}</p>
    </div>
  </header>
  <main>
    <h2>Buttons</h2>
    <AppButtons></AppButtons>
  </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  display: block;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
