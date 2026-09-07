# RED

Site vitrine avec Vue, Vite, Vue Router, Tailwind CSS et pré-rendu Vite SSG.

## Documentation complète

- [Direction artistique](docs/direction-artistique.md) : identité RED, palettes jour/nuit, typographies et leurs choix, composition, univers clients et règles des logos.
- [Architecture et contenus](docs/architecture-et-contenus.md) : responsabilités des fichiers, routes, données par projet, composants partagés et ajout d’une réalisation.
- [Exploitation et qualité](docs/exploitation-et-qualite.md) : installation, publication, SEO, performances, responsive, vérifications et dépannage.

Ces guides décrivent l’implémentation au 7 septembre 2026 et précisent les fonctionnalités présentes ainsi que leurs limites.

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

## Organisation

- `src/views/` : accueil et liste des réalisations.
- `src/views/clients/` : `ArtDuBarberView.vue`, `BullrunView.vue` et `MhaniView.vue`, une page par projet.
- `src/components/` : navigation sticky avec thème et bouton flottant mobile partagés.
- `src/components/projects/` : `PrintObject.vue` pour la rotation des supports à la souris ou au doigt, et `ProjectCaseStudy.vue` pour la présentation commune des cas techniques.
- `src/data/site.js` : contenus de la home, coordonnées et navigation configurable avec `site.navbar`.
- `src/data/portfolio.js` : textes et métadonnées de la liste des réalisations.
- `src/data/projects/` : un fichier par projet pour ses textes, visuels, métadonnées et boutons ; `index.js` définit la liste et son ordre.
- `src/router/index.js` : URL et chargement différé des pages projets.
- `src/assets/` : styles globaux et styles Art du Barber.
- `public/projects/` : visuels locaux regroupés par projet.
- `public/` : polices, favicon et fichiers SEO.

## Ajouter une réalisation

1. Créer ses données dans `src/data/projects/` et ses visuels dans `public/projects/`.
2. Ajouter le projet à la liste de `src/data/projects/index.js`.
3. Créer sa page dans `src/views/clients/`. Réutiliser `ProjectCaseStudy.vue` si sa structure convient, ou composer une page spécifique comme Art du Barber.
4. Ajouter sa route avec ses métadonnées dans `src/router/index.js`.
5. Mettre à jour `public/sitemap.xml` et `public/llms.txt`, puis lancer le build.

Le build pré-rend les cinq pages : accueil, réalisations, Art du Barber, BULLRUN et M’Hani. L’hébergement doit servir les fichiers HTML correspondant aux URL sans extension.
