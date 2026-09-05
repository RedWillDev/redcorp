<script setup>
import { computed, onMounted, ref } from 'vue'
import { site } from '../data/site'

const activeExpertise = ref(site.expertise[0].id)
const comparison = ref('with')
const menuOpen = ref(false)
const darkMode = ref(false)
const currentExpertise = computed(() => site.expertise.find((item) => item.id === activeExpertise.value))

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
  <div class="site-frame">
    <header class="site-header">
      <nav class="shell navbar" aria-label="Navigation principale">
        <a class="logo" href="#accueil" aria-label="RED, accueil">{{ site.name }}</a>
        <div class="desktop-nav">
          <a v-for="item in site.navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </div>
        <div class="nav-actions">
          <button class="icon-button" type="button" :aria-label="darkMode ? 'Activer le mode jour' : 'Activer le mode nuit'" @click="toggleTheme">
            <span aria-hidden="true">{{ darkMode ? '☀' : '☾' }}</span>
          </button>
          <a class="header-cta" href="#contact">Nous contacter <span aria-hidden="true">↗</span></a>
          <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-controls="mobile-navigation" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
            <span></span><span></span>
          </button>
        </div>
      </nav>
      <div v-if="menuOpen" id="mobile-navigation" class="mobile-nav shell">
        <a v-for="item in site.navigation" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
      </div>
    </header>

    <main>
      <section id="accueil" class="shell hero section-anchor">
        <div class="hero-copy">
          <p class="eyebrow">{{ site.hero.eyebrow }}</p>
          <h1>{{ site.hero.title }}</h1>
          <p class="lead">{{ site.hero.description }}</p>
          <div class="hero-actions">
            <a class="button button-primary" :href="site.hero.primaryAction.href">{{ site.hero.primaryAction.label }} <span aria-hidden="true">→</span></a>
            <a class="text-link" :href="site.hero.secondaryAction.href">{{ site.hero.secondaryAction.label }}</a>
          </div>
        </div>
        <div class="terminal" aria-label="Extrait de code ft atoi, signature visuelle RED">
          <div class="terminal-bar"><span>● RED</span><span>ft_atoi.c</span><span>01</span></div>
          <pre><code><span v-for="(line, index) in site.code" :key="index" :class="{ active: index === 9 }">{{ String(index + 1).padStart(2, '0') }}  {{ line }}
</span></code></pre>
          <div class="terminal-status"><span>Complexité analysée</span><strong>Solution claire</strong></div>
        </div>
      </section>

      <div class="promise-strip">
        <div class="shell promise-grid">
          <div v-for="(promise, index) in site.promises" :key="promise"><span>0{{ index + 1 }}</span>{{ promise }}</div>
        </div>
      </div>

      <section id="expertises" class="shell section section-anchor">
        <div class="section-heading">
          <div><p class="eyebrow">01 — Nos expertises</p><h2>Trois savoir-faire.<br>Une seule équipe.</h2></div>
          <p>Le code, le matériel et l’accompagnement réunis pour éviter les solutions isolées et les interlocuteurs multiples.</p>
        </div>
        <div class="expertise-stage">
          <div class="expertise-tabs" role="tablist" aria-label="Expertises RED">
            <button v-for="item in site.expertise" :key="item.id" type="button" role="tab" :aria-selected="activeExpertise === item.id" @click="activeExpertise = item.id">
              <span>{{ item.number }}</span><strong>{{ item.title }}</strong><small>{{ item.summary }}</small>
            </button>
          </div>
          <div class="expertise-visual">
            <div class="visual-head"><span>RED / {{ currentExpertise.title }}</span><span>Vue active</span></div>
            <div v-if="activeExpertise === 'digitalisation'" class="digital-scene">
              <div class="browser-card"><span>Votre activité</span><h3>Visible. Claire. Accessible.</h3><div class="ui-line wide"></div><div class="ui-line"></div><button type="button">Action principale</button></div>
              <div class="code-card"><pre><code>{{ site.code.slice(5, 12).join('\n') }}</code></pre><strong>Déployé ✓</strong></div>
            </div>
            <div v-else-if="activeExpertise === 'hardware'" class="network-scene">
              <div class="network-hub">RED<span>Infrastructure</span></div>
              <div v-for="point in currentExpertise.points" :key="point" class="network-node">{{ point }}</div>
            </div>
            <div v-else class="support-scene">
              <div v-for="(point, index) in currentExpertise.points" :key="point" class="support-step"><span>0{{ index + 1 }}</span><strong>{{ point }}</strong><small>{{ index === 2 ? 'Toujours disponible' : 'Validé avec vous' }}</small></div>
            </div>
            <div class="visual-copy"><p>{{ currentExpertise.description }}</p><ul><li v-for="point in currentExpertise.points" :key="point">{{ point }}</li></ul></div>
          </div>
        </div>
      </section>

      <section id="pourquoi-red" class="why-section section-anchor">
        <div class="shell section">
          <div class="section-heading">
            <div><p class="eyebrow">02 — Pourquoi RED</p><h2>Moins de friction.<br>Plus de maîtrise.</h2></div>
            <p>Une approche lisible qui relie vos outils, votre infrastructure et vos équipes.</p>
          </div>
          <div class="comparison">
            <div class="comparison-control">
              <div class="segmented" role="group" aria-label="Comparer avec ou sans RED">
                <button type="button" :aria-pressed="comparison === 'without'" @click="comparison = 'without'">Sans RED</button>
                <button type="button" :aria-pressed="comparison === 'with'" @click="comparison = 'with'">Avec RED</button>
              </div>
              <p class="eyebrow">{{ comparison === 'with' ? 'Système unifié' : 'Environnement dispersé' }}</p>
              <h3>{{ comparison === 'with' ? 'Une vision claire et un partenaire responsable.' : 'Trop d’outils et personne pour les relier.' }}</h3>
              <p>{{ comparison === 'with' ? 'Chaque élément communique, chaque décision est documentée et vous savez toujours qui contacter.' : 'Les outils s’accumulent, les responsabilités se diluent et les problèmes prennent du temps à résoudre.' }}</p>
            </div>
            <div class="comparison-canvas" :class="comparison">
              <template v-if="comparison === 'with'">
                <div class="system-hub"><strong>RED</strong><span>Système central</span></div>
                <div class="system-grid"><div v-for="item in ['Web', 'Cloud', 'Matériel', 'Support']" :key="item"><span>✓</span><strong>{{ item }}</strong><small>Connecté</small></div></div>
              </template>
              <template v-else>
                <div v-for="(item, index) in ['Site lent', 'Cloud isolé', 'Matériel ancien', 'Support multiple']" :key="item" class="chaos-node" :class="`node-${index + 1}`"><span>!</span><strong>{{ item }}</strong><small>Non synchronisé</small></div>
              </template>
            </div>
          </div>
          <div class="outcome-grid"><article v-for="item in site.outcomes" :key="item.value"><span>{{ item.value }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div>
        </div>
      </section>

      <section id="solutions" class="shell section section-anchor">
        <div class="section-heading">
          <div><p class="eyebrow">03 — Concrètement</p><h2>Des solutions utiles,<br>pas des outils en plus.</h2></div>
          <p>RED couvre les deux côtés de votre environnement numérique pour construire un ensemble cohérent.</p>
        </div>
        <div class="solution-grid"><article v-for="(solution, index) in site.solutions" :key="solution.type" :class="{ featured: index === 1 }"><span class="solution-index">0{{ index + 1 }} / {{ solution.type }}</span><h3>{{ solution.title }}</h3><p>{{ solution.text }}</p><ul><li v-for="item in solution.items" :key="item">{{ item }}</li></ul></article></div>
      </section>

      <section id="methode" class="shell section section-anchor">
        <div class="section-heading">
          <div><p class="eyebrow">04 — Notre méthode</p><h2>Un projet clair,<br>de bout en bout.</h2></div>
          <p>Une méthode simple pour avancer sans perdre de temps et construire une solution réellement adaptée.</p>
        </div>
        <div class="process-grid"><article v-for="item in site.process" :key="item.number"><span>{{ item.number }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div>
      </section>

      <section id="contact" class="shell contact-section section-anchor">
        <div class="contact-card"><div><p class="eyebrow">Votre prochain projet</p><h2>Expliquez-nous votre besoin.<br>Nous nous occupons du reste.</h2></div><a class="button contact-button" :href="`mailto:${site.contact.email}`">Nous contacter <span aria-hidden="true">↗</span></a></div>
        <footer>
          <div class="footer-grid"><div><div class="logo">{{ site.name }}</div><p>Digitalisation, infrastructure et accompagnement pour des entreprises qui veulent avancer simplement.</p></div><div><strong>Navigation</strong><a v-for="item in site.navigation" :key="item.href" :href="item.href">{{ item.label }}</a></div><div><strong>Contact</strong><a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a><span>{{ site.contact.address }}</span><span>{{ site.contact.hours }}</span></div></div>
          <div class="legal"><span>© {{ new Date().getFullYear() }} {{ site.name }}</span><span>{{ site.tagline }}</span></div>
        </footer>
      </section>
    </main>

    <a class="mobile-contact" href="#contact"><span>Nous contacter</span><span aria-hidden="true">↗</span></a>
  </div>
</template>
