import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'primeicons/primeicons.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebaseInit'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueFire, { firebaseApp })
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

app.mount('#app')
