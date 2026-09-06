import HomeView from '../views/HomeView.vue'
import { portfolio, barber, bullrun, mhani } from '../data/projects'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'RED — Digitalisation et infrastructure informatique', description: 'RED accompagne les entreprises dans leur digitalisation, leur infrastructure informatique et la formation de leurs équipes.' }
  },
  { path: '/realisations', name: 'projects', component: () => import('../views/ProjectsView.vue'), meta: portfolio.seo },
  { path: '/realisations/art-du-barber', name: 'barber', component: () => import('../views/BarberView.vue'), meta: { ...barber.seo, image: '/projects/art-du-barber/card-1.webp' } },
  ...[bullrun, mhani].map(project => ({ path: `/realisations/${project.slug}`, name: project.slug, component: () => import('../views/TechnicalProjectView.vue'), meta: { ...project.seo, projectSlug: project.slug } }))
]
