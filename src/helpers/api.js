import axios from "axios"
import { useAuthStore } from "@/stores/auth";

axios.interceptors.request.use((config) => {
    // config = { adapter, data, env, headers, AxiosHeaders, Accept, maxBodyLength, maxContentLength, method, params, timeout, transformRequest, transformResponse, transitional, url, validateStatus, validateStatus, xsrfCookieName, xsrfHeaderName }
    const authStore = useAuthStore()
    let params = new URLSearchParams()
    params.append('auth', authStore.userInfo.token)
    config.params = params
    // можно токен отправлять и в headers запроса, см. доку axios
    return config
})