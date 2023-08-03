import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const API_FIREBASE_URL = import.meta.env.VITE_FIREBASE_API_URL
export const useCarsStore = defineStore('cars', () => {
    const loading = ref(false)
    const cars = ref(null)
    const getCars = async () => {
        loading.value = true
        try {
            const response = await axios.get(`${API_FIREBASE_URL}/cars.json`)
            cars.value = response.data
        } catch (err) {
            console.error(new Error(err))
        } finally {
            loading.value = false
        }
    }
    const initCarsStore = () => {
        if (!cars.value) getCars()
    }
    return { loading, cars, initCarsStore }
})