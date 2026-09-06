export const site = {
  name: 'RED',
  url: 'https://redcorp-tech.com',
  tagline: 'Le prix. La qualité.',
  navbar: [
    { label: 'Réalisations', href: '/realisations', featured: true },
    { label: 'Expertises', href: '#expertises' },
    { label: 'Notre méthode', href: '#methode' }
  ],
  navbarAction: { label: 'Parlons de votre projet', href: '/#contact' },
  hero: {
    eyebrow: 'Partenaire numérique des entreprises',
    title: 'La technologie qui simplifie vraiment votre quotidien.',
    description: 'RED conçoit, déploie et maintient des solutions numériques fiables, adaptées à votre activité et accompagnées de bout en bout.',
    primaryAction: { label: 'Voir nos réalisations', href: '/realisations' },
    secondaryAction: { label: 'Parlons de votre projet', href: '#contact' }
  },
  promises: ['Un interlocuteur unique', 'Des solutions sur mesure', 'Un suivi durable'],
  expertise: [
    {
      id: 'digitalisation',
      number: '01',
      title: 'Digitalisation',
      summary: 'Sites, outils métier et présence en ligne.',
      description: 'Nous transformons vos besoins en expériences rapides, accessibles et simples à administrer.',
      points: ['Site vitrine et e-commerce', 'Outils métier et automatisation', 'Google Business et réseaux sociaux']
    },
    {
      id: 'hardware',
      number: '02',
      title: 'Hardware',
      summary: 'Un environnement prêt à travailler.',
      description: 'Nous sélectionnons, installons et sécurisons le matériel adapté à votre activité et à votre budget.',
      points: ['Ordinateurs, serveurs et réseaux', 'Encaissement et périphériques', 'Maintenance préventive et corrective']
    },
    {
      id: 'accompagnement',
      number: '03',
      title: 'Accompagnement',
      summary: 'Une équipe disponible dans la durée.',
      description: 'Nous expliquons chaque choix, formons vos équipes et restons présents après la mise en service.',
      points: ['Conseil et cahier des charges', 'Formation des équipes', 'Support et évolution']
    }
  ],
  code: [
    'int ft_atoi(const char *str)',
    '{',
    '  int sign = 1;',
    '  int value = 0;',
    '',
    "  while (*str == ' ' || (*str >= 9 && *str <= 13))",
    '    str++;',
    "  if (*str == '-' || *str == '+')",
    "    sign = (*str++ == '-') ? -1 : 1;",
    "  while (*str >= '0' && *str <= '9')",
    "    value = value * 10 + (*str++ - '0');",
    '  return (value * sign);',
    '}'
  ],
  outcomes: [
    { value: '01', title: 'Clarté', text: 'Des choix expliqués et un périmètre précis.' },
    { value: '02', title: 'Fiabilité', text: 'Des solutions éprouvées, sécurisées et maintenues.' },
    { value: '03', title: 'Cohérence', text: 'Le logiciel, le matériel et l’humain réunis.' },
    { value: '04', title: 'Proximité', text: 'Un contact direct avant, pendant et après.' }
  ],
  solutions: [
    {
      type: 'Numérique',
      title: 'Une présence et des outils qui travaillent pour vous.',
      text: 'Du site public à l’outil interne, nous construisons un écosystème cohérent, rapide et mesurable.',
      items: ['Sites et applications', 'Identité et contenus', 'Cloud et outils collaboratifs']
    },
    {
      type: 'Infrastructure',
      title: 'Du matériel fiable, installé et maintenu.',
      text: 'Un parc dimensionné pour vos usages, configuré avec soin et accompagné dans la durée.',
      items: ['Postes, serveurs et réseau', 'Caisses et périphériques', 'Sécurité et maintenance']
    }
  ],
  process: [
    { number: '01', title: 'Comprendre', text: 'Vos besoins, vos contraintes et vos priorités.' },
    { number: '02', title: 'Proposer', text: 'Une solution claire, chiffrée et expliquée.' },
    { number: '03', title: 'Déployer', text: 'Installation, configuration et vérification.' },
    { number: '04', title: 'Accompagner', text: 'Formation, maintenance et évolution.' }
  ],
  contact: {
    email: 'contact@redcorp-tech.com',
    address: '9 rue des Colonnes, 75002 Paris, France',
    hours: 'Du lundi au dimanche, de 8 h à 20 h'
  }
}
