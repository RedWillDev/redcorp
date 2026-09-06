<script setup>
import { onMounted, ref } from 'vue'
import { site } from '../data/site'
const menuOpen = ref(false)
const darkMode = ref(false)
const applyTheme = (dark) => {
  darkMode.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#101216' : '#f4f1ec')
}

const toggleTheme = () => {
  applyTheme(!darkMode.value)
  localStorage.setItem('red-theme', darkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  const stored = localStorage.getItem('red-theme')
  applyTheme(stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches)
})
</script>
<template>
    <header class="site-header">
      <nav class="shell navbar" aria-label="Navigation principale">
        <a class="logo" href="/#accueil" aria-label="RED, accueil">{{ site.name }}</a>
        <div class="desktop-nav">
          <a v-for="item in site.navbar" :key="item.href" :href="item.href.startsWith('#') ? '/' + item.href : item.href">{{ item.label }}</a>
        </div>
        <div class="nav-actions">
          <button class="icon-button" type="button" :aria-label="darkMode ? 'Activer le mode jour' : 'Activer le mode nuit'" @click="toggleTheme">
            <span aria-hidden="true">{{ darkMode ? '☀' : '☾' }}</span>
          </button>
          <a class="header-cta" href="/#contact">Nous contacter <span aria-hidden="true">↗</span></a>
          <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="mobile-navigation" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
            <span></span><span></span>
          </button>
        </div>
      </nav>
      <div v-if="menuOpen" id="mobile-navigation" class="mobile-nav shell">
        <a v-for="item in site.navbar" :key="item.href" :href="item.href.startsWith('#') ? '/' + item.href : item.href" @click="menuOpen = false">{{ item.label }}</a>
      </div>
    </header>
</template>
