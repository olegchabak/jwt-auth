<script setup>
import ProgressSpinner from 'primevue/progressspinner';

</script>

<template>
  <ProgressSpinner
      class="v-loader"
      strokeWidth="8"
      fill="var(--surface-ground)"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
  />
</template>

<style lang="postcss">
.v-loader {
  width: 50px;
  height: 50px
}
</style>