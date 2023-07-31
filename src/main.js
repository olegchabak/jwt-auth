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

const firebaseConfig = {
    apiKey: "AIzaSyDj4VJ6_-Ih9F0bs5CgXwRJy5GHPBCvgck",
    authDomain: "jwt-auth-d9325.firebaseapp.com",
    projectId: "jwt-auth-d9325",
    storageBucket: "jwt-auth-d9325.appspot.com",
    messagingSenderId: "118973652560",
    appId: "1:118973652560:web:9fb030b1f02d4cfebbfb55"
};
// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')
