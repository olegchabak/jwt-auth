
<script setup>
import { RouterView } from 'vue-router'
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <header></header>
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
</style>
