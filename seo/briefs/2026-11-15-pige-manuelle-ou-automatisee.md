# Brief : pige manuelle ou automatisée (item-003)

- Date : 2026-11-15
- Page : `/blog/pige-manuelle-ou-automatisee/` (`src/pages/blog/pige-manuelle-ou-automatisee.astro`)
- Branche : `geo/blog-2026-11-15`
- Skill : geo-engine `foundational-article`
- Hub : `/solutions/pige-automobile` (propriétaire de « pige auto » et « pige automobile »)

## Requêtes visées

- Principales : « pige manuelle », « comment faire sa pige », « outil de pige », « pige
  automatisée », « logiciel de pige » (forme générique, sans « automobile »).
- Prompt IA : « Quel est le meilleur logiciel de pige automobile pour un marchand VO ? »
  (Perplexity répond par un logiciel de gestion de stock : section d'ouverture dédiée).

## Audit de cannibalisation

- « pige auto » : 351 impressions sur 28 jours au 2026-11-07, 100 % sur
  `/solutions/pige-automobile`, position 5,7. Le hub reste propriétaire.
- L'article ne reprend « pige auto » ni « pige automobile » dans le title, le H1 ou le slug.
  Il renvoie au hub par un lien contextuel (section critères), et le hub renvoie à l'article.
- L'ancien comparatif est redirigé : aucun lien vers lui.

## Structure

1. La réponse courte (extractible).
2. Outil de pige ou logiciel de gestion de stock.
3. Pige manuelle en six étapes (HowTo JSON-LD).
4. Où la pige manuelle casse : tri, baisses de prix, écriture des messages, rappel, suivi.
5. Tableau manuel vs automatisé, étape par étape.
6. CTA.
7. Six critères pour choisir un outil de pige (aucun concurrent nommé), puis réponse
   Auto-Prospect.
8. Quand rester en pige manuelle.
9. FAQ (6 questions, FAQPage JSON-LD), sources.

## Réserves de vérification (à relire avant fusion)

1. Alertes des plateformes : l'article dit que Leboncoin, AutoScout24 et La Centrale
   permettent chacune d'enregistrer une recherche et d'être prévenu des nouvelles annonces.
   Vrai pour Leboncoin (déjà écrit dans l'article Leboncoin du 2026-11-08) ; pour
   AutoScout24 et La Centrale, déduit de leurs fonctions publiques d'alerte, non revérifié
   sur leurs pages le 2026-11-15.
2. Phrase « une alerte de nouvelle annonce ne vous prévient pas de ces baisses » :
   formulation générale ; certaines plateformes peuvent notifier une baisse sur une annonce
   mise en favori. À adoucir si Nassim le juge trop catégorique.
3. Tableau manuel vs automatisé, ligne « Tri » : « annonces hors critères écartées » et
   « pépites signalées » reprennent la copy publique (§ 6 et 5 bis du profil). L'exclusion
   des annonces de professionnels n'est pas affirmée pour Auto-Prospect.
4. « Demi-journée par jour » pour une dizaine de recherches : ordre de grandeur repris de
   l'article méthode (observation d'usage, non statistique), présenté comme tel dans la
   note des sources.
5. Section FAQ loi du 11 août : reprend la position de l'article loi (répondre à une
   annonce pour proposer d'acheter n'est pas du démarchage). Pas de nouvel argument
   juridique.
6. Détection : uniquement « détection automatique » et « chaque jour » (règle du
   2026-11-10). Aucun « temps réel », « en continu » ni démenti.

## Chiffres cités

- AAA Data 2026 : 5,4 millions de transactions VO en 2025, 55 % entre particuliers pour les
  plus de cinq ans (déjà cités dans l'article méthode).
- Données internes Auto-Prospect, 35 122 annonces, 1er juin au 25 septembre 2026 :
  9,9 % de baisses de prix, 23,9 % pour 2022 et plus, 47,9 % d'annonces Leboncoin avec
  numéro (chiffres canoniques de l'article stats, inchangés).
- Prix : 69 € HT/mois annuel, 89 € HT sans engagement (copy du site).

## Liens

- Sortants (tous `target="_blank" rel="noopener noreferrer"`) : article stats, article
  méthode, article WhatsApp, article Leboncoin, article rappel, article CRM, article loi,
  contact-multicanal, analyse-prix-marche, appels-entrants-identifies, crm-pipeline-vente,
  tarifs, solutions/pige-automobile.
- Entrants posés dans la PR : deux cartes dans « Pour aller plus loin » du hub pige (cet
  article et l'article WhatsApp, encore inconnu de Google).
- À poser plus tard : lien depuis l'article méthode (section « manuelle ou automatisée »).

## Confidentialité de la stack

Contrôle `scripts/check-stack-leaks.mjs` passé. Aucun fournisseur, aucune mention de la
façon dont les annonces sont récupérées.
