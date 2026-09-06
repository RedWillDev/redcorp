<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects, portfolio } from '../data/projects'
import FloatingAction from '../components/FloatingAction.vue'
const route = useRoute()
const project = computed(() => projects.find(item => item.slug === route.meta.projectSlug))
</script>

<template>
  <main class="shell technical-project">
    <nav class="case-breadcrumb" :aria-label="portfolio.back"><RouterLink to="/">{{ portfolio.home }}</RouterLink><span>/</span><RouterLink to="/realisations">{{ portfolio.back }}</RouterLink></nav>
    <header class="case-intro"><p class="eyebrow">{{ project.eyebrow }}</p><p class="case-name">{{ project.name }}</p><h1>{{ project.title }}</h1><p class="lead">{{ project.intro }}</p></header>
    <dl class="case-facts"><div v-for="fact in project.facts" :key="fact.label"><dt>{{ fact.label }}</dt><dd>{{ fact.value }}</dd></div></dl>
    <section class="case-context"><h2>{{ project.context.title }}</h2><p>{{ project.context.text }}</p></section>
    <section class="case-process"><p class="eyebrow">{{ project.diagram.label }}</p><h2>{{ project.diagram.title }}</h2><ol><li v-for="(step,index) in project.diagram.steps" :key="step.title"><span class="case-number">{{ String(index + 1).padStart(2,'0') }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></li></ol><p class="case-caption">{{ project.diagram.note }}</p></section>
    <section class="case-details"><article v-for="(section,index) in project.sections" :key="section.title"><span class="case-number">{{ String(index + 1).padStart(2,'0') }}</span><h2>{{ section.title }}</h2><p>{{ section.text }}</p></article></section>
    <section class="case-closing"><h2>{{ project.conclusion.title }}</h2><p>{{ project.conclusion.text }}</p><a class="button button-primary" :href="project.action.href" :target="project.action.external ? '_blank' : undefined" :rel="project.action.external ? 'noopener noreferrer' : undefined">{{ project.action.label }} ↗</a><RouterLink class="case-back" to="/realisations">{{ portfolio.back }} →</RouterLink></section>
    <FloatingAction :href="project.action.href" :label="project.action.label" :external="project.action.external" />
  </main>
</template>

<style scoped>
.technical-project { padding-bottom: 70px; }
.case-breadcrumb { display: flex; flex-wrap: wrap; gap: 15px; padding: 30px 0; font-size: 14px; color: var(--muted); }
.case-intro { padding-block: 55px 60px; max-width: 900px; }
.case-name { font-weight: 700; margin-bottom: 25px; font-size: 23px; }
.case-intro h1 { max-width: 900px; }
.case-intro .lead { max-width: 740px; }
.case-facts { display: grid; grid-template-columns: repeat(3,1fr); border-block: 1px solid var(--border); padding-block: 30px; gap: 25px; }
.case-facts dt { font-size: 12px; color: var(--muted); margin-bottom: 12px; }
.case-facts dd { margin: 0; font-size: 16px; font-weight: 600; }
h2 { font-size: clamp(28px,3.5vw,42px); line-height: 1.15; letter-spacing: -.03em; margin: 0; }
h3 { font-size: 23px; margin: 25px 0 15px; }
p { color: var(--muted); line-height: 1.8; text-wrap: pretty; }
.case-context { display: grid; grid-template-columns: 1fr 1fr; align-items: start; gap: 60px; padding-block: 85px; }
.case-context p { margin-top: 0; }
.case-process { background: var(--surface); border: 1px solid var(--border); padding: 45px; border-radius: 14px; }
.case-process ol { display: grid; grid-template-columns: repeat(3,1fr); gap: 35px; padding: 0; margin: 45px 0 20px; list-style: none; }
.case-process li { border-top: 2px solid var(--red); padding-top: 25px; }
.case-number { color: var(--red); font: 12px ui-monospace,monospace; }
.case-caption { font-size: 12px; }
.case-details { padding-block: 65px; }
.case-details article { display: grid; grid-template-columns: 40px 1fr 1fr; gap: 30px; padding-block: 35px; border-bottom: 1px solid var(--border); }
.case-details h2 { font-size: 27px; }
.case-details p { margin: 0; }
.case-closing { max-width: 760px; margin-inline: auto; padding-block: 40px; text-align: center; }
.case-closing p { margin-block: 25px; }
.case-back { display: block; margin-top: 30px; font-size: 14px; text-decoration: underline; text-underline-offset: 5px; }
@media(max-width: 700px) { .case-facts,.case-context,.case-process ol,.case-details article { grid-template-columns: 1fr; } .case-context { gap: 25px; padding-block: 50px; } .case-process { padding: 25px; } .case-details article { gap: 15px; } .case-intro { padding-top: 30px; } }
</style>
