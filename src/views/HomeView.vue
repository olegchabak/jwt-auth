<script setup>
import Button from 'primevue/button';

</script>

<template>
  <main>
    <p>Hello world!</p>
    <Button label="Жмяк для авторизации" @click="$router.push({ name: 'SignUp' })"/>
  </main>
</template>
