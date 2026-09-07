# Direction artistique de RED

Référence du site au 7 septembre 2026. Les valeurs ci-dessous décrivent le code livré. Les variables CSS restent la source de vérité lors d’une évolution.

## Identité et intention

Le nom affiché est **RED**. Le domaine conserve `redcorp-tech.com`. Le logo est le mot RED composé en Quantum : ne pas le remplacer par une police approchante ou ajouter « Corp » à la signature.

La direction « Red / Carbon » associe une base ivoire, une typographie structurée et un rouge signature. Elle exprime une activité technique accessible, avec une lecture claire et des preuves concrètes. La maquette privilégie les surfaces opaques, les séparations fines et l’espace entre les sections. Éviter les damiers décoratifs, les halos lumineux et les dégradés sans fonction. Les ombres existantes servent à distinguer les interfaces et les objets ; elles ne constituent pas le décor principal.

Le rouge guide vers une action ou une information importante. Il ne remplit pas systématiquement chaque section. Les explications, les exemples et la méthode doivent porter la confiance ; ne pas ajouter de chiffres, témoignages ou certifications non fournis.

## Palette RED

Variables définies dans [main.css](../src/assets/main.css).

| Variable | Jour | Nuit | Rôle |
|---|---|---|---|
| `--paper` | `#F4F1EC` | `#101216` | Fond général et navbar opaque |
| `--surface` | `#FBFAF7` | `#171A1F` | Surfaces secondaires |
| `--surface-strong` | `#FFFFFF` | `#1D2026` | Cartes et éléments mis en avant |
| `--text` | `#101216` | `#F4F1EC` | Texte principal |
| `--muted` | `#64676D` | `#A7ABB2` | Descriptions et informations secondaires |
| `--border` | `#D9D5CF` | `#30343B` | Séparations et contours |
| `--red` | `#C04040` | `#C04040` | Signature, logo, liens actifs et boutons |
| `--red-deep` | `#942F34` | `#A63539` | Sections rouges plus denses, contact |
| `--code` | `#13161B` | `#13161B` | Fond du terminal |

Le terminal utilise notamment `#DCE1E8` pour son texte, `#E06A6A` pour un accent rouge clair et `#8DD6AA` pour un état positif. Ces accents ne remplacent pas les couleurs générales de navigation.

Les boutons principaux ont un texte blanc sur rouge. Le bouton clair de la section contact possède explicitement un texte `#101216` sur fond `#FFFFFF`, y compris en mode nuit : conserver ce couple pour éviter le texte blanc sur blanc observé auparavant.

## Typographies et choix

| Police | Usage réel | Pourquoi |
|---|---|---|
| Quantum | Logo RED et quelques signatures | Formes distinctives liées à l’identité historique ; usage bref pour préserver la lisibilité |
| Montserrat Variable | Navigation, titres et textes RED | Construction géométrique cohérente avec l’activité numérique ; gamme de graisses utile pour hiérarchiser sans multiplier les fontes |
| Monospace système | Code, numérotation et détails techniques | Alignement des caractères et lecture du snippet, sans fichier de police supplémentaire |
| Playfair Display 600 | Titres de la page Art du Barber | Empattements et contraste des traits pour une présentation éditoriale chaleureuse |
| Lato 400/700 | Paragraphes et emphases Art du Barber | Lecture simple des explications, en complément des titres plus expressifs |

Quantum est chargée depuis `public/fonts/quantum.woff`, avec `font-display: swap` et préchargement dans `index.html`. Montserrat est servie localement via Fontsource, en WOFF2 variable latin. Les fontes Art du Barber sont importées dans `barber.css` via Fontsource. JetBrains Mono faisait partie des idées initiales mais n’est pas utilisée dans le code actuel. Les fontes choisies pour les explications d’Art du Barber ne remplacent pas les lettres présentes dans les supports imprimés.

Repères actuels : logo RED 29 px ; navigation desktop 15 px ; texte courant 16 px ; grand titre RED `clamp(44px, 5.2vw, 76px)` avec ajustement mobile ; titre principal Art du Barber `clamp(58px, 9vw, 110px)`. Les titres RED ont un interlettrage serré ; éviter de l’appliquer aux longs paragraphes. Garder les fichiers de licence des polices lors de leur redistribution.

## Composition et navigation

Le conteneur principal mesure au maximum 1160 px. Ses marges sont de 24 px de chaque côté, puis 14 px à 600 px et moins. Les grandes sections utilisent un espacement vertical fluide de 84 à 144 px, ajusté sur téléphone. Le rayon principal est de 18 px ; les boutons utilisent généralement 10 px.

La navbar est sticky, opaque et séparée par une bordure fine. Ordre : RED, Réalisations, Expertises, Notre méthode, action « Parlons de votre projet ». Réalisations est souligné en rouge pour rendre les preuves faciles à trouver. « Pourquoi RED » demeure une section de l’accueil.

La home propose « Voir nos réalisations » et « Parlons de votre projet ». Elle présente le snippet `ft_atoi`, des expertises illustrées, une comparaison avec/sans RED, les solutions, la méthode et le contact. Les clients sont présentés dans la liste des réalisations, sans insérer directement Art du Barber dans la home.

## Thèmes jour et nuit

La classe `dark` sur l’élément HTML change les variables. À la première visite, le composant de navigation lit la préférence système ; un choix manuel est enregistré sous la clé `red-theme` dans `localStorage`. Le logo RED reste rouge.

Le HTML initial est clair et le thème est appliqué au montage Vue : une absence totale de flash avant hydratation n’est pas garantie. Le code ne suit pas actuellement un changement de thème système en direct après le montage. Ces comportements sont des limites de l’implémentation, pas des intentions de DA.

## Univers des réalisations

### Art du Barber

| Couleur éditoriale | Valeur | Usage |
|---|---|---|
| Noir profond | `#100C05` | Base sombre et contraste |
| Or lumineux | `#E8B422` | Moustache, détails et bouton mobile |
| Bordeaux terre | `#8B3A2A` | Accent décrit sur le flyer |
| Ivoire | `#F5EDD6` | Respiration et texte clair |

La page utilise `--client-paper: #FAF6EC`, `--client-ink: #100C05`, `--client-muted: #5C5046` et `--client-stage: #EEE5D3` en jour. En nuit : `#100C05`, `#F5EDD6`, `#C4A882` et `#1C1108`. La bordure est `#C4A88266`.

La carte de visite est présentée à gauche avec ses explications à droite ; l’identité et la moustache sont valorisées au centre ; le flyer se présente à droite avec ses explications à gauche sur grand écran. Le mobile empile ces éléments. Les WebP issus des PDF conservent les couleurs et les textes des documents fournis. La 3D est une rotation CSS recto/verso, sans scène WebGL ni objet décoratif supplémentaire.

### Logos de la liste des réalisations

Tous les aperçus utilisent le même cadre au ratio **8/5**, une zone centrale avec 15 % de marge et `object-fit: contain`. Les proportions propres aux marques sont préservées : un logo horizontal n’est pas étiré pour devenir carré. Les grilles utilisent `minmax(0, …)` ; ne pas réintroduire une hauteur minimale fixe combinée au ratio, qui pourrait imposer une largeur excessive sur téléphone.

| Projet | Visuel | Fond |
|---|---|---|
| Art du Barber | Logo original blanc et or avec moustache | `#000000`, assorti au fond du fichier |
| BULLRUN | Taureau original et nom BULLRUN | `#FFF7ED` |
| M’Hani | Logo multicolore et lettrage bleu | `#EEEDF5` |

Les fonds de marque restent identiques dans les deux thèmes. Les pages BULLRUN et M’Hani conservent actuellement la typographie et les surfaces RED ; leurs aperçus colorés ne constituent pas une déclinaison complète de leurs chartes graphiques.

## Ton éditorial

Décrire le besoin, le travail réalisé et les raisons des choix avec des phrases concrètes. BULLRUN est un projet personnel en évolution après l’expérience M’Hani. M’Hani est présenté comme une participation en entreprise, incluant maintenance, audits techniques, organisationnels et de sécurité. Ne pas transformer ces expériences en commandes RED ou en résultats chiffrés sans nouvelles informations.
