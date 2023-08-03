
<script setup>
import { RouterView } from 'vue-router'
import AppFooter from "@/components/AppFooter.vue"
import { useAuthStore } from "@/stores/auth"

const authStore = useAuthStore()
const checkUser = () => {
  const tokens = localStorage.getItem('userTokens')
  if (tokens) {
    authStore.userInfo.token = JSON.parse(tokens).token
    authStore.userInfo.refreshToken = JSON.parse(tokens).refreshToken
    authStore.userInfo.expiresIn = JSON.parse(tokens).expiresIn
  }
}
checkUser()

const logout = () => authStore.logout()
</script>

<template>
  <header>
    <router-link class="logo" to="/">JWT-auth example</router-link>
    <router-link v-if="!authStore.userInfo.token" class="header-link" to="/sign-in">Login</router-link>
    <router-link v-if="authStore.userInfo.token" class="header-link" to="#" @click="logout">Logout</router-link>
    <router-link v-if="authStore.userInfo.token" class="header-link" to="/cars">Cars</router-link>
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
.header-link {
  float: right;
  display: inline-block;
  padding: 3px 5px;
}
</style>
