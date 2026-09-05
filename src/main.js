import './assets/main.css'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

export const createApp = ViteSSG(App, { routes }, ({ router, isClient }) => {
  router.afterEach((to) => {
    if (isClient && to.meta.title) document.title = to.meta.title
  })
})
