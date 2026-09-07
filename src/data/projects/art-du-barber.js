const assets = '/projects/art-du-barber/'

export const barber = {
  slug: 'art-du-barber',
  previewLogo: { src: assets + 'logo.webp', alt: 'Logo Art du Barber, lettrage blanc et or avec moustache dorée', width: 420, height: 420, background: '#000000' },
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
