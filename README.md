# RED

Landing page de RED construite avec Vue, Vite, Vue Router et Tailwind CSS.

## Développement

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Les contenus éditoriaux, la navigation et les coordonnées sont centralisés dans `src/data/site.js`.

Les textes et visuels des réalisations sont centralisés dans `src/data/projects.js`. Le menu est défini par `site.navbar`.

`FloatingAction.vue` fournit le bouton flottant mobile partagé. `SiteHeader.vue` fournit la navigation sticky et le thème. `PrintObject.vue` présente les supports recto verso en perspective CSS, avec rotation, vue à plat et agrandissement.

Le build pré-rend `/`, `/realisations` et `/realisations/art-du-barber`. L’hébergement doit servir les fichiers HTML correspondants aux URL sans extension. Les fichiers du projet Art du Barber sont des exports WebP des supports fournis ; leurs textes imprimés restent fidèles aux originaux.
