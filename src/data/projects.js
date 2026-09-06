const assets = '/projects/art-du-barber/'

export const portfolio = {
  title: 'Des projets, du code au terrain.',
  eyebrow: 'Réalisations / RED',
  introduction: 'Identité visuelle, développement logiciel et interventions terrain : découvrez des réalisations clients, une expérience en entreprise et un projet personnel, avec leurs contextes et leurs approches.',
  open: 'Découvrir le projet',
  back: 'Toutes les réalisations',
  home: 'Accueil',
  contact: 'Nous contacter',
  footer: 'Une identité à construire ? Parlons de votre projet.',
  seo: { title: 'Réalisations, développement et projets terrain — RED', description: 'Découvrez Art du Barber, la plateforme personnelle BULLRUN de veille BTP et une expérience de maintenance et audit chez M’Hani.' }
}

export const barber = {
  slug: 'art-du-barber',
  name: 'Art du Barber',
  category: 'Identité visuelle · Carte de visite · Flyer',
  location: 'Le Havre · Bléville',
  title: 'Le sens du détail. Du salon au papier.',
  intro: 'Un univers chaleureux et soigné pour un barber shop de quartier ouvert à toute la famille. Noir profond, accents dorés et typographie éditoriale se répondent sur chaque support.',
  url: 'https://artdubarber.fr/',
  visit: 'Voir le site Art du Barber',
  logo: assets + 'logo.webp',
  logoAlt: 'Logo original Art du Barber',
  moustache: assets + 'moustache.webp',
  moustacheAlt: 'Moustache dorée, signature graphique Art du Barber',
  controls: { flip: 'Recto / verso', flat: 'Vue à plat', zoom: 'Agrandir le visuel', rotate: 'Faire pivoter' },
  seo: { title: 'Art du Barber : carte de visite et flyer 3D — RED', description: 'Découvrez le projet Art du Barber par RED : carte de visite recto verso et flyer en 3D, palette noir et or, logo et moustache expliqués.' },
  card: {
    number: '01 / La carte', title: 'Un premier contact. Une raison de revenir.',
    text: 'Le recto réunit la signature du salon, la réservation et les coordonnées. Le verso prolonge le lien avec une grille de fidélité. Deux usages, une même identité.',
    details: [
      { title: 'Une hiérarchie immédiate', text: 'Le nom en grand et la moustache dorée installent la marque. Le QR code possède son espace dédié ; les coordonnées et les réseaux sont regroupés en pied de carte.' },
      { title: 'Une fidélité rendue visible', text: 'Au verso, les cases ordonnent les passages. Les repères dorés relient le parcours à la récompense annoncée sur le support.' },
      { title: 'Un fond qui raconte le métier', text: 'Ciseaux, peigne et outils restent discrets derrière les informations. Leur présence situe le salon sans concurrencer le nom.' }
    ],
    front: assets + 'card-1.webp', back: assets + 'card-2.webp', width: 1400, height: 800, aspect: '7 / 4',
    frontAlt: 'Recto de la carte Art du Barber : nom, moustache dorée, QR code et coordonnées',
    backAlt: 'Verso de la carte Art du Barber : grille de fidélité et récompense',
    frontLabel: 'Recto · Identité et contact', backLabel: 'Verso · Carte de fidélité'
  },
  identity: {
    number: '02 / La signature', title: 'Un signe qui reste en tête.',
    text: 'Le logo original conserve ses proportions et ses couleurs, avec de l’espace autour pour lui laisser toute sa présence.',
    moustacheTitle: 'La moustache, un repère de métier.',
    moustacheText: 'Ses courbes évoquent immédiatement le barbier et donnent une personnalité au système graphique. Utilisée comme signe secondaire, elle relie la carte au flyer sans remplacer le logo ni devenir une texture omniprésente.',
    typeTitle: 'Une voix éditoriale, une lecture simple.',
    typeText: 'La charte associe Playfair Display pour les titres à Lato pour les informations pratiques. Les empattements apportent du caractère ; les textes sans empattements facilitent la lecture des tarifs et des coordonnées.'
  },
  palette: {
    title: 'Des couleurs qui ont chacune leur rôle.',
    colors: [
      { name: 'Noir profond', hex: '#100C05', text: 'Le socle de l’identité : il installe le contraste et fait ressortir les détails.' },
      { name: 'Or lumineux', hex: '#E8B422', text: 'La signature : moustache, filets et repères attirent le regard avec chaleur.' },
      { name: 'Bordeaux terre', hex: '#8B3A2A', text: 'L’accent utile : il isole les prix et les informations à retenir sur le flyer.' },
      { name: 'Ivoire', hex: '#F5EDD6', text: 'La respiration : un ton doux pour les surfaces et la lecture autour des supports.' }
    ]
  },
  flyer: {
    number: '03 / Le flyer', title: 'L’offre du salon, lisible d’un regard.',
    text: 'Le format vertical accompagne une lecture du haut vers le bas : la marque, les prestations, les attentions du salon, puis les moyens de le retrouver.',
    details: [
      { title: 'Des tarifs faciles à comparer', text: 'Les prestations sont regroupées par catégorie. Les prix alignés dans des cartouches bordeaux créent une colonne de lecture constante.' },
      { title: 'Un cadre commun', text: 'Les filets dorés et les ornements encadrent les rubriques. Ils reprennent le langage de la moustache et donnent une cohérence à l’ensemble.' },
      { title: 'Un verso consacré à la signature', text: 'La grande moustache et le cadre doré occupent seuls le verso. Cette composition plus calme équilibre la densité d’information du recto.' }
    ],
    front: assets + 'flyer-1.webp', back: assets + 'flyer-2.webp', width: 1400, height: 2973, aspect: '280.5 / 595.5', portrait: true,
    frontAlt: 'Recto du flyer Art du Barber : coupes, barbe, prix et coordonnées sur fond noir',
    backAlt: 'Verso du flyer Art du Barber : moustache dorée et cadre ornemental',
    frontLabel: 'Recto · Prestations et tarifs du support fourni', backLabel: 'Verso · Signature graphique'
  },
  closing: 'Du papier à l’expérience en ligne.',
  closingText: 'Retrouvez le salon dans son univers numérique et découvrez ses informations actuelles.'
}

export const bullrun = {
  slug: 'bullrun',
  logo: { src: '/projects/bullrun/logo.svg', alt: 'Logo BULLRUN : taureau aux cornes orange', width: 100, height: 100, wordmark: 'BULLRUN', background: '#fff7ed' },
  name: 'BULLRUN',
  category: 'Développement logiciel · Veille BTP',
  location: 'Projet personnel · En évolution',
  kind: 'software',
  eyebrow: 'Du besoin métier au logiciel',
  title: 'Les opportunités BTP, réunies au même endroit.',
  intro: 'BULLRUN est un projet personnel de veille et de suivi des appels d’offres dans le bâtiment et les travaux publics. Son objectif : centraliser les opportunités et faciliter leur sélection, sans multiplier les recherches manuelles.',
  seo: { title: 'BULLRUN : projet de veille automatisée BTP — RED', description: 'Découvrez BULLRUN, un projet personnel de plateforme de veille et de suivi des appels d’offres BTP : collecte automatisée, centralisation et sélection.' },
  preview: { label: 'Veille automatisée', title: 'Repérer. Centraliser. Sélectionner.', tags: ['Appels d’offres', 'Collecte', 'Suivi'], symbol: '01 / SOFTWARE' },
  facts: [{ label: 'Cadre', value: 'Projet personnel' }, { label: 'Secteur', value: 'Bâtiment et travaux publics' }, { label: 'Statut', value: 'Expérimentation et itérations' }],
  context: { title: 'Une expérience métier comme point de départ.', text: 'Après mon passage chez M’Hani, j’ai poursuivi mes expérimentations autour de besoins concrets du BTP. BULLRUN s’inscrit dans cette continuité : un projet personnel pour tester des approches techniques et apprendre en construisant.' },
  diagram: { label: 'Principe de fonctionnement', title: 'De la veille à la sélection.', note: 'Schéma du parcours fonctionnel.', steps: [
    { title: 'Surveiller', text: 'Suivre les appels d’offres et opportunités publiés dans le secteur du BTP.' },
    { title: 'Centraliser', text: 'Rassembler les informations collectées dans un espace de suivi commun.' },
    { title: 'Sélectionner', text: 'Repérer les projets intéressants pour une entreprise, un artisan ou un bureau d’études.' }
  ] },
  sections: [
    { title: 'Automatiser la collecte', text: 'La veille automatique vise à réduire les recherches répétitives sur plusieurs plateformes et à faciliter la détection de nouvelles opportunités.' },
    { title: 'Organiser l’information', text: 'La centralisation permet de retrouver les opportunités au même endroit et de faciliter leur suivi commercial.' },
    { title: 'Construire par itérations', text: 'Le projet reste en évolution. Il sert à expérimenter, confronter les idées à un usage concret et faire progresser la solution grâce aux retours.' }
  ],
  conclusion: { title: 'Un projet ouvert aux retours.', text: 'BULLRUN illustre mon intérêt pour les outils qui répondent à un besoin métier. Les retours, idées d’amélioration et contributions participent à la suite de son développement.' },
  action: { label: 'Découvrir BULLRUN', href: 'https://bullrun.redcorp-tech.com/', external: true }
}

export const mhani = {
  slug: 'mhani-terrain',
  logo: { src: '/projects/mhani/logo.svg', alt: 'Logo M’Hani : fleur multicolore et nom bleu', width: 467, height: 150, background: '#eeedf5' },
  name: 'M’Hani — sur le terrain',
  category: 'Maintenance informatique · Audits · Sécurité',
  location: 'Expérience en entreprise · Secteur BTP',
  kind: 'field',
  eyebrow: 'Le numérique au contact des équipes',
  title: 'Comprendre les usages. Faire fonctionner les outils.',
  intro: 'Chez M’Hani, j’ai participé à un projet transversal mêlant support technique, développement logiciel, audit opérationnel et audit de sécurité. Ce volet présente le travail de terrain : diagnostic, réparation, maintenance préventive et analyse des processus.',
  seo: { title: 'M’Hani : maintenance informatique et audit terrain — RED', description: 'Retour sur une expérience chez M’Hani dans le BTP : diagnostic et réparation du matériel, maintenance préventive, audits techniques, organisationnels et de sécurité.' },
  preview: { label: 'Intervention terrain', title: 'Diagnostiquer. Réparer. Accompagner.', tags: ['Hardware', 'Maintenance', 'Audit de sécurité'], symbol: '02 / TERRAIN' },
  facts: [{ label: 'Cadre', value: 'Participation en entreprise' }, { label: 'Secteur', value: 'Bâtiment et travaux publics' }, { label: 'Domaines', value: 'Support technique et audit' }],
  context: { title: 'Un projet transversal chez M’Hani.', text: 'L’expérience associait des interventions sur les équipements informatiques, des audits techniques, organisationnels et de sécurité, ainsi que la participation au développement d’une plateforme de veille BTP. Le matériel et les usages ont été abordés ensemble pour comprendre les besoins opérationnels.' },
  diagram: { label: 'Approche terrain', title: 'Observer, intervenir, améliorer.', note: 'Les trois dimensions de l’intervention.', steps: [
    { title: 'Diagnostiquer', text: 'Identifier les problèmes techniques et comprendre leurs effets sur les usages quotidiens.' },
    { title: 'Intervenir', text: 'Réparer les équipements et réaliser des opérations de maintenance préventive.' },
    { title: 'Analyser', text: 'Examiner les processus et identifier des axes d’amélioration techniques et organisationnels.' }
  ] },
  sections: [
    { title: 'Réparation et maintenance hardware', text: 'Diagnostic, réparation et maintenance préventive des équipements informatiques, avec pour objectif de soutenir la continuité des activités et le bon fonctionnement du parc.' },
    { title: 'Audit technique et organisationnel', text: 'Analyse des outils et des processus internes pour repérer les axes d’amélioration et contribuer à une organisation opérationnelle plus efficace.' },
    { title: 'Audit de sécurité', text: 'Participation à un audit de sécurité chez M’Hani, en complément des audits techniques et organisationnels.' },
    { title: 'Une lecture globale du besoin', text: 'Le travail de terrain s’inscrivait dans une expérience combinant support, logiciel et audit. Cette complémentarité relie les choix techniques aux contraintes des équipes.' }
  ],
  conclusion: { title: 'Une expérience qui nourrit la pratique.', text: 'Ce projet a renforcé mes compétences en analyse technique, gestion de projet et accompagnement opérationnel. Il rappelle qu’une solution informatique doit aussi être adaptée aux personnes qui l’utilisent.' },
  action: { label: 'Parlons de votre infrastructure', href: '/#contact', external: false }
}

export const projects = [barber, bullrun, mhani]
