import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import { authErrorParser } from "@/helpers/auth";

const API_KEY_FIREBASE = import.meta.env.VITE_FIREBASE_API_KEY

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: null,
    email: null,
    userId: null,
    refreshToken: null,
    expiresIn: null,
    registered: null
  })
  const error = ref(null)
  const loading = ref(false)
  const isAuthorized = computed(() => !!(userInfo.value.email && userInfo.value.userId))
  const clearError = () => {
    error.value = null
  }
  const auth = async (payload, type) => {
    const strUrl = type === 'signup' ? 'signUp' : 'signInWithPassword'
    error.value = null
    loading.value = true
    try {
      const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:${strUrl}?key=${API_KEY_FIREBASE}`,
          { ...payload, returnSecureToken: true }
      )
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
        registered: response.data.registered || 'xz',
        displayName: response.data.displayName ?? 'xz'
      }
    } catch (err) {
      console.error(err)
      error.value = authErrorParser(err.response.data.error.message)
      throw new Error(error.value)
    } finally {
      loading.value = false
    }
  }
  return { userInfo, error, loading, isAuthorized, auth, clearError }
})
