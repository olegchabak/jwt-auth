import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import './assets/main.css'
import PrimeVue from 'primevue/config'
import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './helpers/api'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};
// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')
