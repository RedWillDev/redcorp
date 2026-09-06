<script setup>
import { portfolio, projects } from '../data/projects'
import FloatingAction from '../components/FloatingAction.vue'
</script>

<template>
  <main class="shell section portfolio-page">
    <p class="eyebrow">{{ portfolio.eyebrow }}</p>
    <h1>{{ portfolio.title }}</h1>
    <p class="lead">{{ portfolio.introduction }}</p>
    <div class="project-list">
      <RouterLink v-for="project in projects" :key="project.slug" :to="`/realisations/${project.slug}`" class="project-preview">
        <div class="project-preview-image"><img :src="project.card.front" :alt="project.card.frontAlt" width="1400" height="800" decoding="async"></div>
        <div><p class="eyebrow">{{ project.category }}</p><h2>{{ project.name }}</h2><p>{{ project.location }}</p><span>{{ portfolio.open }} ↗</span></div>
      </RouterLink>
    </div>
    <FloatingAction href="/#contact" :label="portfolio.contact" />
  </main>
</template>

<style scoped>
.portfolio-page { min-height: 85vh; }
.project-list { margin-top: 70px; }
.project-preview { display: grid; grid-template-columns: 1.3fr 1fr; align-items: center; gap: 48px; border-block: 1px solid var(--border); padding-block: 36px; }
.project-preview-image { background: #e6ddcb; padding: 45px; perspective: 1200px; }
.project-preview img { width: 100%; height: auto; transform: rotateY(-9deg) rotateZ(-3deg); box-shadow: 0 20px 30px #100c0533; }
.project-preview h2 { font-size: 38px; margin: 0 0 15px; }
.project-preview p { color: var(--muted); }
.project-preview span { display: inline-block; margin-top: 25px; color: var(--red); }
@media(max-width: 700px) { .project-preview { grid-template-columns: 1fr; gap: 25px; } .project-preview-image { padding: 25px; } }
</style>
