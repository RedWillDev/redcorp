# Architecture et gestion des contenus

## Stack du dépôt

Application Vue avec composants Single File Components et Composition API en JavaScript. Vite construit les fichiers ; Vue Router définit les pages ; Vite SSG génère le HTML ; Unhead gère les métadonnées. Tailwind CSS est installé avec son plugin Vite, mais une grande partie du rendu est écrite en CSS de composants et en CSS global.

Les versions déclarées sont Vue `^3.5.42`, Vue Router `^5.3.1`, Vite `^8.2.2`, Tailwind CSS `^4.3.3`, Vite SSG `^28.3.0` et Unhead Vue `^2.1.17`. `package-lock.json` fixe les versions effectivement installées. Node 24 est utilisé en intégration continue ; `package.json` déclare `>=20.19.0`.

## Où intervenir

| Fichier ou dossier | Responsabilité |
|---|---|
| `src/main.js` | Entrée Vite SSG, routes et restauration du défilement |
| `src/App.vue` | Navbar partagée, RouterView, métadonnées et JSON-LD |
| `src/router/index.js` | URL, composants et métadonnées des routes |
| `src/views/HomeView.vue` | Assemblage de l’accueil et interactions des sections |
| `src/views/ProjectsView.vue` | Liste des projets et aperçus de logos |
| `src/views/clients/ArtDuBarberView.vue` | Mise en scène propre à Art du Barber |
| `src/views/clients/BullrunView.vue` | Page BULLRUN utilisant le composant de cas technique |
| `src/views/clients/MhaniView.vue` | Page M’Hani utilisant le même composant |
| `src/components/SiteHeader.vue` | Navigation, menu mobile et thème |
| `src/components/FloatingAction.vue` | Action mobile commune |
| `src/components/projects/ProjectCaseStudy.vue` | Présentation réutilisable des cas techniques |
| `src/components/projects/PrintObject.vue` | Rotation des supports recto/verso |
| `src/data/site.js` | Marque, navigation et principaux contenus de la home |
| `src/data/portfolio.js` | Textes et SEO de la liste des réalisations |
| `src/data/projects/` | Un fichier par projet ; `index.js` donne l’ordre de la liste |
| `src/assets/main.css` | Variables RED, styles globaux, responsive |
| `src/assets/barber.css` | Styles et fontes propres à Art du Barber |
| `public/projects/` | Fichiers visuels regroupés par projet |
| `public/` | Polices, favicon, image sociale, manifeste et fichiers SEO |

Les chemins ci-dessus partent de la racine du dépôt. Les données ne sont pas un CMS : toute modification nécessite un build et une publication. Quelques libellés d’interface restent dans les composants et les textes SEO de la home restent dans le routeur ; tout le site n’est donc pas encore piloté exclusivement par les fichiers de données.

## Pages et navigation

| URL | Vue | Données |
|---|---|---|
| `/` | `HomeView.vue` | `site.js` |
| `/realisations` | `ProjectsView.vue` | `portfolio.js` et `projects/index.js` |
| `/realisations/art-du-barber` | `clients/ArtDuBarberView.vue` | `projects/art-du-barber.js` |
| `/realisations/bullrun` | `clients/BullrunView.vue` | `projects/bullrun.js` |
| `/realisations/mhani-terrain` | `clients/MhaniView.vue` | `projects/mhani.js` |

L’accueil est importé directement. Les autres vues utilisent des imports dynamiques. Les liens de la liste utilisent RouterLink. La navigation globale utilise des ancres HTML et transforme `#expertises` en `/#expertises`, pour revenir sur la bonne section depuis un projet. Le défilement des ancres réserve 96 px en haut.

Pour modifier le menu, éditer `site.navbar` : chaque objet comprend `label`, `href` et éventuellement `featured`. Le CTA principal se configure dans `site.navbarAction`. Ajouter une entrée de navigation ne crée pas automatiquement sa route.

## Modifier un projet

BULLRUN et M’Hani utilisent des objets avec les champs suivants :

| Groupe | Champs |
|---|---|
| Identification | `slug`, `name`, `category`, `location`, `kind` |
| Introduction | `eyebrow`, `title`, `intro` |
| Recherche | `seo.title`, `seo.description` |
| Aperçu de marque | `logo.src`, `alt`, `width`, `height`, `background`, `wordmark` facultatif |
| Informations | `facts`, tableau de `{ label, value }` |
| Contexte | `context.title`, `context.text` |
| Parcours | `diagram.label`, `title`, `note`, `steps` avec `title` et `text` |
| Développement | `sections`, tableau de `{ title, text }` |
| Conclusion | `conclusion.title`, `conclusion.text` |
| Action | `action.label`, `action.href`, `action.external` |

`ProjectCaseStudy.vue` reçoit cet objet via la prop obligatoire `project`. Les deux vues restent séparées pour permettre une mise en page spécifique plus tard, tout en partageant le rendu actuel. Les objets `preview` historiques ne pilotent plus les aperçus de la liste.

Art du Barber conserve un schéma spécifique : `card`, `flyer`, `identity`, `palette`, `controls`, `logo`, `moustache` et leurs descriptions. Son `logo` est un chemin de fichier pour la page détaillée ; `previewLogo` est l’objet utilisé par la liste. Dans `ProjectsView.vue`, `previewLogo` est prioritaire sur `logo`. Ne pas remplacer la chaîne `barber.logo` par un objet sans adapter la vue détaillée.

## Composants interactifs

`FloatingAction.vue` accepte `href` et `label` obligatoires ainsi que `external`. Une action externe ouvre un onglet avec `noopener noreferrer`. L’apparence est dans `main.css`, avec une surcharge dorée dans `barber.css`. BULLRUN pointe vers `https://bullrun.redcorp-tech.com/`, M’Hani vers le contact RED et Art du Barber vers `https://artdubarber.fr/`.

`PrintObject.vue` reçoit `item` et `labels`. Le support fournit `front`, `back`, les textes alternatifs et libellés des faces, `width`, `height`, `aspect`, et éventuellement `portrait`. Les Pointer Events permettent une rotation sur les axes X et Y, avec capture du pointeur et arrêt lors d’une annulation. Les flèches tournent de 15 degrés ; la touche Home réinitialise la vue. La légende et les faces masquées aux lecteurs d’écran suivent l’orientation. Le geste tactile est capté uniquement dans la zone de rotation ; le défilement doit rester possible autour.

## Ajouter une réalisation

1. Créer `src/data/projects/nom-du-projet.js` en reprenant le schéma approprié, avec un slug stable et des textes confirmés.
2. Placer les visuels dans `public/projects/nom-du-projet/`. Renseigner leurs dimensions, textes alternatifs et couleur de fond.
3. Importer l’objet dans `src/data/projects/index.js` et l’ajouter au tableau dans l’ordre souhaité.
4. Créer `src/views/clients/NomDuProjetView.vue`. Réutiliser `ProjectCaseStudy.vue` ou composer une page adaptée au livrable.
5. Ajouter la route avec un import dynamique et les métadonnées de l’objet. Ajouter une image sociale dédiée si disponible.
6. Mettre à jour `public/sitemap.xml` et `public/llms.txt`.
7. Vérifier le build, le lien dans la liste, l’accès direct à l’URL et le rendu mobile dans les deux thèmes.

La home n’a pas besoin d’une nouvelle section client pour chaque réalisation. La liste suffit à rendre le nouveau projet accessible.

## Fichiers visuels et provenance

Les images Art du Barber proviennent des PDF et du kit fournis. Le logo M’Hani vient de son site [mhanipeinture.fr](https://mhanipeinture.fr/) ; son SVG local contient l’image PNG originale intégrée, ce n’est pas une vectorisation. Le taureau BULLRUN est le SVG extrait de l’application [BULLRUN](https://bullrun.redcorp-tech.com/). Ces fichiers sont servis localement, sans chargement des logos depuis les sites tiers.

Conserver les proportions, éviter les espaces inutiles dans les fichiers et vérifier les nouveaux SVG avant intégration. Un renommage de fichier public impose une mise à jour de toutes ses références. Ne pas recopier une bibliothèque de composants pour une variation purement éditoriale.
