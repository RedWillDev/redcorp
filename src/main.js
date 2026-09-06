import './assets/main.css'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 96 }
    return { top: 0 }
  }
})
