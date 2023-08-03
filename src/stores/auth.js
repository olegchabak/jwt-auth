import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import { authErrorParser } from "@/helpers/auth";
import router from "@/router";

const API_KEY_FIREBASE = import.meta.env.VITE_FIREBASE_API_KEY
const initialUserInfo = {
  token: null,
  email: null,
  userId: null,
  refreshToken: null,
  expiresIn: null,
  registered: null
}

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref(initialUserInfo)
  const error = ref(null)
  const loading = ref(false)
  const token = computed(() => userInfo.value.token)
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
      const userTokens = JSON.stringify({
        token: userInfo.value.token,
        refreshToken: userInfo.value.refreshToken,
        expiresIn: userInfo.value.expiresIn
      })
      localStorage.setItem('userTokens', userTokens)
    } catch (err) {
      console.error(err)
      error.value = authErrorParser(err.response.data.error.message)
      throw new Error(error.value)
    } finally {
      loading.value = false
    }
  }
  const logout = () => {
    userInfo.value = initialUserInfo
    localStorage.removeItem('userTokens')
    router.push('/')
  }
  return { userInfo, error, loading, token, auth, clearError, logout }
})
