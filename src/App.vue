<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { site } from './data/site'
const route = useRoute()
const canonical = computed(() => site.url + (route.path === '/' ? '/' : route.path))
useHead(() => ({
  title: route.meta.title,
  link: [{ rel: 'canonical', href: canonical.value }],
  meta: [
    { name: 'description', content: route.meta.description },
    { property: 'og:title', content: route.meta.title },
    { property: 'og:description', content: route.meta.description },
    { property: 'og:url', content: canonical.value },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: site.name },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:image', content: site.url + (route.meta.image || '/og-image.png') },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: route.meta.title },
    { name: 'twitter:description', content: route.meta.description },
    { name: 'twitter:image', content: site.url + (route.meta.image || '/og-image.png') }
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({
    '@context': 'https://schema.org', '@type': route.name === 'barber' ? 'CreativeWork' : 'WebPage',
    name: route.meta.title, description: route.meta.description, url: canonical.value,
    inLanguage: 'fr-FR', ...(route.name === 'barber' ? { creator: { '@type': 'Organization', name: site.name, url: site.url }, about: { '@type': 'Organization', name: 'Art du Barber', url: 'https://artdubarber.fr/' } } : {})
  }) }]
}))
</script>

<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
</template>
