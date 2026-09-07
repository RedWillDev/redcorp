<script setup>
import { projects } from '../data/projects'
import { portfolio } from '../data/portfolio'
import FloatingAction from '../components/FloatingAction.vue'

const projectPreviews = projects.map(project => ({ ...project, logo: project.previewLogo || project.logo }))
</script>

<template>
  <main class="shell section portfolio-page">
    <p class="eyebrow">{{ portfolio.eyebrow }}</p>
    <h1>{{ portfolio.title }}</h1>
    <p class="lead">{{ portfolio.introduction }}</p>
    <div class="project-list">
      <RouterLink v-for="project in projectPreviews" :key="project.slug" :to="`/realisations/${project.slug}`" class="project-preview">
        <div v-if="project.logo" class="project-preview-visual project-preview-brand" :style="{ backgroundColor: project.logo.background }">
          <div class="project-brand-lockup">
          <img :src="project.logo.src" :alt="project.logo.alt" :width="project.logo.width" :height="project.logo.height" :class="{ 'brand-symbol': project.logo.wordmark }" loading="lazy" decoding="async">
          <strong v-if="project.logo.wordmark">{{ project.logo.wordmark }}</strong>
          </div>
        </div>
        <div><p class="eyebrow">{{ project.category }}</p><h2>{{ project.name }}</h2><p>{{ project.location }}</p><span>{{ portfolio.open }} ↗</span></div>
      </RouterLink>
    </div>
    <FloatingAction href="/#contact" :label="portfolio.contact" />
  </main>
</template>

<style scoped>
.portfolio-page { min-height: 85vh; }
.project-list { margin-top: 70px; }
.project-preview { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); align-items: center; gap: 48px; border-block: 1px solid var(--border); padding-block: 36px; }
.project-preview > * { min-width: 0; }
.project-preview-visual { position: relative; width: 100%; min-width: 0; aspect-ratio: 8 / 5; overflow: hidden; }
.project-preview h2 { font-size: clamp(28px, 4vw, 38px); margin: 0 0 15px; overflow-wrap: anywhere; }
.project-preview p { color: var(--muted); overflow-wrap: anywhere; }
.project-preview span { display: inline-block; margin-top: 25px; color: var(--red); }
.project-brand-lockup { position: absolute; inset: 15%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; min-width: 0; }
.project-brand-lockup img { display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; }
.project-brand-lockup img.brand-symbol { width: 100%; height: 70%; }
.project-brand-lockup strong { max-width: 100%; color: #292524; font-size: clamp(20px, 4vw, 38px); line-height: 1; font-weight: 800; letter-spacing: -.04em; }
@media(max-width: 700px) { .project-preview { grid-template-columns: minmax(0, 1fr); gap: 25px; } }
</style>
