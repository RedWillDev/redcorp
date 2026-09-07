<script setup>
import { site } from '../data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="shell site-footer-grid">
      <div><a class="footer-logo" href="/">{{ site.name }}</a><p>Digitalisation, infrastructure informatique et accompagnement.</p></div>
      <nav aria-label="Informations légales"><a href="/mentions-legales">Mentions légales</a><a href="/cgv">Conditions générales de vente</a><a href="/confidentialite">Confidentialité</a><a href="/cookies">Cookies</a></nav>
      <div><a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a><p>{{ site.contact.address }}</p></div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { padding: 64px 0 34px; border-top: 1px solid var(--border); background: var(--surface); }
.site-footer-grid { display: grid; grid-template-columns: 1.2fr .9fr .9fr; gap: 48px; }
.footer-logo { color: var(--red); font-family: Quantum, sans-serif; font-size: 28px; }
.site-footer p { max-width: 300px; margin: 14px 0 0; color: var(--muted); font-size: 11px; line-height: 1.7; }
.site-footer nav { display: grid; gap: 12px; align-content: start; font-size: 11px; font-weight: 600; }
.site-footer a { transition: color .2s ease; }
.site-footer a:hover { color: var(--red); }
@media (max-width: 700px) { .site-footer-grid { grid-template-columns: 1fr; gap: 30px; } }
</style>
