<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)

</script>

<template>
  <footer>
    <hr>
    <pre>userInfo: {{ userInfo }}</pre>
  </footer>
</template>

<style scoped lang="postcss">

</style>