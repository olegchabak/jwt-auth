<script setup>
import VLoader from "@/components/VLoader.vue";
import Card from "primevue/card";
import { useCarsStore } from "@/stores/cars";
import { storeToRefs } from "pinia";

const carsStore = useCarsStore()
const { cars, loading } = storeToRefs(carsStore)
const { initCarsStore } = carsStore

initCarsStore()
</script>

<template>
  <h1>Cars</h1>
  <VLoader v-if="loading"/>
  <div v-else class="flex flex-column gap-3">
    <Card v-for="car in cars" :key="car.name">
      <template #title>{{ car.name }}</template>
      <template #subtitle>{{ car.type }}</template>
    </Card>
  </div>
</template>

<style scoped lang="postcss">

</style>