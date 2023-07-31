<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth"
import {storeToRefs} from "pinia";
import VLoader from "@/components/VLoader.vue";

const email = ref('test@test.ru')
const password = ref('123456')
const authStore = useAuthStore()
const { error, loading } = storeToRefs(authStore)
const { signup } = authStore
const handleClick = () => {
  const payload = {
    email: email.value,
    password: password.value
  }
  signup(payload)
}
// JWT-аутентификация c Firebase #4 - Страница входа
// https://www.youtube.com/watch?v=KBqpc43Ljho&list=PL2hgv2vHkQ7Dg1AA96r8qkaSHQ2_TbKQN&index=4
</script>

<template>
  <h2>Sign Up</h2>
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
      <Button v-else label="SignUp" @click="handleClick"/>
      <span>
        Are you already registered?
        <router-link to="/sign-in">Sign in</router-link>
      </span>
    </div>
  </form>
</template>

<style lang="postcss">
</style>
