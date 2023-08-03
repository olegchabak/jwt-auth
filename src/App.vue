
<script setup>
import { RouterView } from 'vue-router'
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <header>
    <router-link class="logo" to="/">JWT-auth example</router-link>
  </header>
  <main>
    <div class="container">
      <RouterView/>
    </div>
  </main>
  <AppFooter/>
</template>

<style lang="postcss">
.container {
  max-width: 500px;
  margin: auto;
  font-family: sans-serif;
}

.logo {
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  color: darkcyan;
}
</style>
