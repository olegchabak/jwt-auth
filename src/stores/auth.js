import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import {signupErrorParser} from "@/helpers/auth";

const API_KEY = import.meta.env.VITE_API_KEY

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: null,
    email: null,
    userId: null,
    refreshToken: null,
    expiresIn: null
  })
  const error = ref(null)
  const loading = ref(false)
  const isAuthorized = computed(() => !!(userInfo.value.email && userInfo.value.userId))
  const signup = async (payload) => {
    error.value = null
    loading.value = true
    try {
      const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          { ...payload, returnSecureToken: true }
      )
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn
      }
    } catch (err) {
      console.error(err)
      error.value = signupErrorParser(err.response.data.error.message)
    } finally {
      loading.value = false
    }
  }
  return { userInfo, error, loading, isAuthorized, signup }
})
