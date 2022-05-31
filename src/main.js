import { createApp } from 'vue'
import App from './App.vue'
import HoneybadgerVue from '@honeybadger-io/vue'

const app = createApp(App)
app.use(HoneybadgerVue, {
  apiKey: '80ee8156',
  environment: 'vue-962',
})

app.mount('#app')
