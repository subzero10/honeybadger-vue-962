import { createApp } from 'vue'
import {createPinia} from 'pinia'
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue'
import HoneybadgerVue from '@honeybadger-io/vue'

const app = createApp(App)

if (import.meta.env.MODE === "production") {
  app.use(HoneybadgerVue, {
    apiKey: '80ee8156',
  })
  console.log("Using Honeybadger")
}

app.use(createPinia())
app.use(createRouter({history: createWebHistory(), routes: []}))

app.mount('#app')
