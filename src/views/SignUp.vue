<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import {onUnmounted, ref} from "vue";
import { useAuthStore } from "@/stores/auth"
import {storeToRefs} from "pinia";
import VLoader from "@/components/VLoader.vue";

const email = ref('test@test.ru')
const password = ref('123456')
const authStore = useAuthStore()
const { error, loading } = storeToRefs(authStore)
const { auth, clearError } = authStore
const handleClick = async () => {
  const payload = {
    email: email.value,
    password: password.value
  }
  await auth(payload, 'signup')
}
onUnmounted(clearError)
</script>

<template>
  <h1>Sign Up</h1>
  <Message v-if="error" severity="info">{{error}}</Message>
  <form class="flex flex-column gap-3">
    <div class="p-inputgroup flex-1">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
      </span>
      <InputText v-model="email" type="email" placeholder="Your Email" />
    </div>
    <div class="p-inputgroup flex-1">
      <span class="p-inputgroup-addon">
        <i class="pi pi-at"></i>
      </span>
      <InputText v-model="password" type="password" placeholder="Password" />
    </div>
    <div class="flex flex-column gap-3">
      <VLoader v-if="loading"/>
      <Button v-else label="Submit" @click="handleClick"/>
      <span>
        Are you already registered?
        <router-link to="/sign-in">Sign in</router-link>
      </span>
    </div>
  </form>
</template>

<style lang="postcss">
</style>
