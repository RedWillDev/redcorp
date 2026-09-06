<script setup>
import { barber as project, portfolio } from '../data/projects'
import PrintObject from '../components/PrintObject.vue'
import FloatingAction from '../components/FloatingAction.vue'
import '../assets/barber.css'
</script>

<template>
  <main class="barber-page">
    <div class="shell">
      <nav class="project-breadcrumb" :aria-label="portfolio.back"><RouterLink to="/">{{ portfolio.home }}</RouterLink><span>/</span><RouterLink to="/realisations">{{ portfolio.back }}</RouterLink><span>/</span><span>{{ project.name }}</span></nav>
      <header class="barber-intro"><p class="barber-kicker">{{ project.location }} / {{ project.category }}</p><h1>{{ project.name }}</h1><h2>{{ project.title }}</h2><p>{{ project.intro }}</p><a class="barber-link" :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.visit }} ↗</a></header>
      <section class="project-row">
        <PrintObject :item="project.card" :labels="project.controls" />
        <div class="project-copy"><p class="barber-kicker">{{ project.card.number }}</p><h2>{{ project.card.title }}</h2><p>{{ project.card.text }}</p><article v-for="detail in project.card.details" :key="detail.title"><h3>{{ detail.title }}</h3><p>{{ detail.text }}</p></article></div>
      </section>
      <section class="identity-section">
        <p class="barber-kicker">{{ project.identity.number }}</p><h2>{{ project.identity.title }}</h2>
        <div class="logo-display"><img :src="project.logo" :alt="project.logoAlt" width="420" height="420" loading="lazy" decoding="async"></div>
        <p>{{ project.identity.text }}</p>
        <div class="identity-notes"><article><img :src="project.moustache" :alt="project.moustacheAlt" width="420" height="133" loading="lazy" decoding="async"><h3>{{ project.identity.moustacheTitle }}</h3><p>{{ project.identity.moustacheText }}</p></article><article><h3>{{ project.identity.typeTitle }}</h3><p>{{ project.identity.typeText }}</p></article></div>
      </section>
      <section class="palette-section"><h2>{{ project.palette.title }}</h2><div class="palette-grid"><article v-for="color in project.palette.colors" :key="color.hex"><div class="color-swatch" :style="{ background: color.hex }"></div><h3>{{ color.name }}</h3><code>{{ color.hex }}</code><p>{{ color.text }}</p></article></div></section>
      <section class="project-row flyer-row"><div class="project-copy"><p class="barber-kicker">{{ project.flyer.number }}</p><h2>{{ project.flyer.title }}</h2><p>{{ project.flyer.text }}</p><article v-for="detail in project.flyer.details" :key="detail.title"><h3>{{ detail.title }}</h3><p>{{ detail.text }}</p></article></div><PrintObject :item="project.flyer" :labels="project.controls" /></section>
      <section class="project-closing"><h2>{{ project.closing }}</h2><p>{{ project.closingText }}</p><a class="barber-link" :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.visit }} ↗</a></section>
    </div>
    <FloatingAction :href="project.url" :label="project.visit" external />
  </main>
</template>
