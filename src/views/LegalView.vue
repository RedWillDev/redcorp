<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { legal } from '../data/legal'

const route = useRoute()
const page = computed(() => legal.pages[route.meta.legalPage])
</script>

<template>
  <main class="legal-page shell section">
    <header class="legal-heading">
      <p class="eyebrow">Informations légales</p>
      <h1>{{ page.title }}</h1>
      <p>Dernière mise à jour : {{ legal.updatedAt }}</p>
    </header>

    <article v-if="route.meta.legalPage === 'legal'" class="legal-content">
      <section><h2>Éditeur du site</h2><p>Le site <strong>redcorp-tech.com</strong> est édité sous le nom commercial <strong>{{ legal.publisher.commercialName }}</strong>.</p><dl><dt>Adresse</dt><dd>{{ legal.publisher.address }}</dd><dt>E-mail</dt><dd><a :href="`mailto:${legal.publisher.email}`">{{ legal.publisher.email }}</a></dd><dt>Statut et identité légale</dt><dd>{{ legal.publisher.legalIdentity }}</dd><dt>Immatriculation</dt><dd>{{ legal.publisher.registration }}</dd><dt>TVA intracommunautaire</dt><dd>{{ legal.publisher.vat }}</dd><dt>Téléphone</dt><dd>{{ legal.publisher.phone }}</dd></dl></section>
      <section><h2>Directeur de la publication</h2><p>À compléter avec l’identité de la personne responsable de la publication.</p></section>
      <section><h2>Hébergement</h2><p>Les informations relatives à l’hébergeur doivent être complétées avant la mise en production : nom ou dénomination sociale, adresse et coordonnées de contact.</p></section>
      <section><h2>Propriété intellectuelle</h2><p>Sauf mention contraire, les textes, éléments graphiques, logos, interfaces, photographies et autres contenus présents sur le site sont protégés par les droits applicables et ne peuvent être reproduits ou réutilisés sans autorisation préalable.</p></section>
      <section><h2>Responsabilité</h2><p>RED s’efforce de maintenir des informations exactes et à jour. Les contenus du site sont fournis à titre informatif et peuvent évoluer. RED ne saurait être tenue responsable d’une indisponibilité temporaire du site ou d’un dommage résultant de l’utilisation d’informations qui n’auraient pas été vérifiées auprès de RED.</p></section>
    </article>

    <article v-else-if="route.meta.legalPage === 'cgv'" class="legal-content">
      <section><h2>1. Objet</h2><p>Les présentes conditions générales encadrent les prestations professionnelles proposées par RED, notamment en matière de digitalisation, création de sites et applications, infrastructure informatique, matériel, maintenance, conseil, audit, automatisation et accompagnement.</p></section>
      <section><h2>2. Champ d’application</h2><p>Elles s’appliquent aux prestations réalisées pour des clients professionnels. Les conditions particulières, devis, cahier des charges ou bon de commande accepté complètent les présentes conditions et prévalent en cas de contradiction sur leur périmètre.</p></section>
      <section><h2>3. Devis et commande</h2><p>Toute prestation fait l’objet d’un périmètre défini et, lorsque nécessaire, d’un devis. La commande devient ferme après acceptation du devis ou du document contractuel prévu entre les parties. Toute demande supplémentaire ou modification du périmètre initial peut faire l’objet d’un chiffrage complémentaire.</p></section>
      <section><h2>4. Prix et paiement</h2><p>Les prix et modalités de règlement sont ceux indiqués dans le devis ou la proposition commerciale. Sauf stipulation contraire, les factures sont payables selon l’échéance indiquée sur celles-ci. Les éventuels acomptes sont précisés au devis.</p></section>
      <section><h2>5. Retard de paiement</h2><p>Tout retard de paiement peut entraîner l’application des pénalités prévues par la réglementation applicable entre professionnels ainsi que de l’indemnité forfaitaire pour frais de recouvrement lorsqu’elle est due. Les conditions particulières peuvent prévoir des modalités complémentaires dans le respect du droit applicable.</p></section>
      <section><h2>6. Délais et livraison</h2><p>Les délais sont déterminés selon le périmètre de la mission, les validations attendues et la disponibilité des éléments nécessaires au projet. Un retard lié à des informations, validations ou accès non fournis par le client peut décaler le calendrier.</p></section>
      <section><h2>7. Obligations du client</h2><p>Le client fournit les informations, contenus, accès, validations et matériels nécessaires à la bonne réalisation de la mission. Il garantit disposer des droits nécessaires sur les contenus et données qu’il transmet.</p></section>
      <section><h2>8. Maintenance et support</h2><p>La maintenance, le support, les mises à jour, l’hébergement, les licences et les interventions récurrentes ne sont inclus que lorsqu’ils sont expressément prévus au devis ou dans un contrat distinct.</p></section>
      <section><h2>9. Propriété intellectuelle</h2><p>Les droits concédés au client sur les livrables, ainsi que les éléments restant la propriété de RED ou de tiers, sont précisés dans le devis ou le contrat applicable. Les composants open source et licences tierces restent soumis à leurs propres conditions.</p></section>
      <section><h2>10. Confidentialité et données</h2><p>Chaque partie s’engage à préserver la confidentialité des informations non publiques auxquelles elle accède dans le cadre de la prestation. Lorsque RED traite des données personnelles pour le compte du client, les rôles et obligations des parties sont définis selon la nature du traitement et, si nécessaire, par un accord spécifique.</p></section>
      <section><h2>11. Responsabilité</h2><p>RED est tenue à une obligation de moyens, sauf engagement légal ou contractuel contraire. Le client reste responsable de ses décisions, de la sauvegarde de ses données lorsqu’elle lui incombe et de l’usage qu’il fait des livrables. Toute limitation de responsabilité prévue contractuellement doit rester conforme aux règles impératives applicables.</p></section>
      <section><h2>12. Résiliation</h2><p>Les modalités de résiliation sont celles prévues au devis ou contrat. En cas de manquement contractuel, la partie lésée peut exercer les droits prévus par le contrat et par le droit applicable.</p></section>
      <section><h2>13. Droit applicable et litiges</h2><p>Les relations contractuelles sont soumises au droit français, sous réserve des règles impératives applicables. Pour les clients professionnels, les parties rechercheront prioritairement une résolution amiable avant toute procédure. La juridiction compétente est déterminée conformément aux règles applicables et, lorsqu’une clause attributive est valablement convenue entre professionnels, par celle-ci.</p></section>
    </article>

    <article v-else-if="route.meta.legalPage === 'privacy'" class="legal-content">
      <section><h2>1. Responsable du traitement</h2><p>Pour les traitements opérés directement via ce site, le responsable du traitement est RED. Contact : <a :href="`mailto:${legal.publisher.email}`">{{ legal.publisher.email }}</a>.</p></section>
      <section><h2>2. Données susceptibles d’être traitées</h2><p>Selon les échanges initiés avec RED, il peut s’agir notamment de données d’identification, coordonnées professionnelles, contenu des demandes et informations nécessaires au suivi d’un projet ou d’une relation commerciale.</p></section>
      <section><h2>3. Finalités</h2><p>Les données sont utilisées pour répondre aux demandes, préparer et suivre des prestations, gérer la relation commerciale, assurer le fonctionnement et la sécurité du site et respecter les obligations légales applicables.</p></section>
      <section><h2>4. Base légale</h2><p>Selon le contexte, les traitements reposent notamment sur l’exécution de mesures précontractuelles ou d’un contrat, le respect d’une obligation légale, le consentement lorsque celui-ci est requis ou l’intérêt légitime de RED.</p></section>
      <section><h2>5. Destinataires et sous-traitants</h2><p>Les données sont accessibles uniquement aux personnes ou prestataires qui en ont besoin pour les finalités concernées. Les prestataires techniques éventuels sont sélectionnés selon les besoins du service et les exigences applicables en matière de protection des données.</p></section>
      <section><h2>6. Durées de conservation</h2><p>Les durées de conservation dépendent de la finalité et des obligations légales applicables. Les données de prospection, de relation commerciale et de facturation ne suivent pas nécessairement les mêmes durées.</p></section>
      <section><h2>7. Vos droits</h2><p>Dans les conditions prévues par la réglementation, vous pouvez demander l’accès, la rectification, l’effacement, la limitation du traitement, vous opposer à certains traitements et exercer votre droit à la portabilité lorsque celui-ci est applicable. Vous pouvez écrire à <a :href="`mailto:${legal.publisher.email}`">{{ legal.publisher.email }}</a>.</p></section>
      <section><h2>8. Réclamation</h2><p>Vous pouvez également introduire une réclamation auprès de la Commission nationale de l’informatique et des libertés (CNIL) si vous estimez que vos droits ne sont pas respectés.</p></section>
      <section><h2>9. Sécurité</h2><p>RED met en œuvre des mesures raisonnables destinées à protéger les données contre les accès, modifications, divulgations ou destructions non autorisés. Aucun système connecté à Internet ne pouvant être garanti comme totalement invulnérable, la sécurité est maintenue selon une approche proportionnée aux risques.</p></section>
    </article>

    <article v-else class="legal-content">
      <section><h2>Cookies et stockage local</h2><p>Le site est conçu pour limiter les traceurs non nécessaires. Le mode jour/nuit utilise le stockage local du navigateur pour mémoriser le choix d’apparence. Ce stockage n’a pas pour finalité de suivre votre activité à des fins publicitaires.</p></section>
      <section><h2>Traceurs tiers</h2><p>Si des outils de mesure d’audience, de contenu externe, de prise de rendez-vous ou d’autres services tiers sont ajoutés ultérieurement, cette page devra être mise à jour et, lorsque nécessaire, un mécanisme de recueil du consentement sera mis en place avant leur activation.</p></section>
      <section><h2>Gérer vos choix</h2><p>Vous pouvez supprimer le stockage local et les cookies depuis les réglages de votre navigateur. La suppression du stockage local peut réinitialiser certaines préférences d’affichage du site.</p></section>
    </article>
  </main>
</template>
