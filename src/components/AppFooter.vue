<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore()
const { isAuthorized, userInfo } = storeToRefs(authStore)

</script>

<template>
  <footer>
    <hr>
    <pre>isAuthorized: {{ isAuthorized }}</pre>
    <pre>userInfo: {{ userInfo }}</pre>
  </footer>
</template>

<style scoped lang="postcss">

</style>