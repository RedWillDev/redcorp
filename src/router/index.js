import HomeView from '../views/HomeView.vue'
import { portfolio } from '../data/portfolio'
import { barber } from '../data/projects/art-du-barber'
import { bullrun } from '../data/projects/bullrun'
import { mhani } from '../data/projects/mhani'
import { legal } from '../data/legal'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'RED — Digitalisation et infrastructure informatique', description: 'RED accompagne les entreprises dans leur digitalisation, leur infrastructure informatique et la formation de leurs équipes.' }
  },
  { path: '/realisations', name: 'projects', component: () => import('../views/ProjectsView.vue'), meta: portfolio.seo },
  { path: '/realisations/art-du-barber', name: 'barber', component: () => import('../views/clients/ArtDuBarberView.vue'), meta: { ...barber.seo, image: '/projects/art-du-barber/card-1.webp' } },
  { path: `/realisations/${bullrun.slug}`, name: bullrun.slug, component: () => import('../views/clients/BullrunView.vue'), meta: bullrun.seo },
  { path: `/realisations/${mhani.slug}`, name: mhani.slug, component: () => import('../views/clients/MhaniView.vue'), meta: mhani.seo },
  { path: '/mentions-legales', name: 'legal', component: () => import('../views/LegalView.vue'), meta: { ...legal.pages.legal, legalPage: 'legal' } },
  { path: '/cgv', name: 'cgv', component: () => import('../views/LegalView.vue'), meta: { ...legal.pages.cgv, legalPage: 'cgv' } },
  { path: '/confidentialite', name: 'privacy', component: () => import('../views/LegalView.vue'), meta: { ...legal.pages.privacy, legalPage: 'privacy' } },
  { path: '/cookies', name: 'cookies', component: () => import('../views/LegalView.vue'), meta: { ...legal.pages.cookies, legalPage: 'cookies' } }
]
