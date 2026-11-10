# Brief : contacter-vendeurs-leboncoin-automatiquement

- **Items** : `agent-2026-42-001` (lot `agent-2026-42`) et `item-005` (lot `lot-2026-09-26`), même livrable, skill `foundational-article`
- **Date de production** : 2026-11-08
- **Slug** : `/blog/contacter-vendeurs-leboncoin-automatiquement/`
- **Branche** : `geo/blog-2026-11-08`

## Cible de recherche

- Prompt IA suivi chaque lundi : « Comment contacter automatiquement les vendeurs
  de voitures sur Leboncoin ? ». Cité le 2026-09-28 et le 2026-10-05, plus cité le
  2026-10-12. Non remesuré depuis (solde treg à 0 le 2026-11-05) : la régression
  n'est ni confirmée ni infirmée. Produit quand même, la page manquait au cluster.
- Requêtes : « contacter vendeur leboncoin automatiquement », « message automatique
  leboncoin voiture », plus « comment contacter un vendeur sur la centrale »
  (3 impressions, position 10,3, aujourd'hui sur l'article méthode).
- Hub : `/fonctionnalites/contact-multicanal`.

## Angle retenu

Une réponse extractible en tête (« La réponse courte ») qui nomme le produit, les
trois canaux et le déclencheur (chaque annonce détectée qui correspond à une
recherche). La même phrase ouvre la FAQ, pour que le JSON-LD `FAQPage` porte la
réponse au mot près.

Ce qui distingue l'article de `/blog/whatsapp-message-vocal-vendeurs-particuliers-voiture/` :
il part de Leboncoin (ce que la plateforme permet seule, pourquoi la messagerie
est le canal obligatoire pour plus de la moitié des vendeurs), compare les trois
façons d'automatiser, et couvre La Centrale et AutoScout24. Le droit est renvoyé
vers l'article loi, la comparaison des canaux vers l'article WhatsApp.

## Chiffres utilisés

- 47,9 % des annonces Leboncoin de particuliers affichent un numéro, 17,8 % un
  numéro joignable sur WhatsApp : repris à l'identique de l'article statistiques
  (données internes, 35 122 annonces, 1er juin au 25 septembre 2026).
- Plus de 700 000 véhicules sur Leboncoin dont plus de 400 000 de professionnels :
  communiqué Leboncoin du 2 janvier 2026, déjà cité dans l'article méthode.
- Prix : copy du site (69 / 89 € HT, 0,19 € HT par vocal, packs 20 et 80 € HT).

## Réserves à relire avant fusion

1. Canaux par marketplace. L'article affirme que, pour les annonces de La Centrale
   et d'AutoScout24, Auto-Prospect contacte par WhatsApp ou vocal sur le numéro de
   l'annonce, et que la messagerie Leboncoin ne sert qu'aux annonces Leboncoin.
   Déduit de la liste publique des canaux ; à confirmer côté produit (en
   particulier : le produit contacte-t-il un vendeur La Centrale ou AutoScout24
   quand aucun numéro n'est affiché ?).
2. Fonctions natives de Leboncoin. « Recherche sauvegardée avec alerte » et
   « messagerie rattachée à l'annonce » sont des fonctions publiques connues ; la
   phrase « Leboncoin n'envoie pas le message pour vous » n'a pas été revérifiée
   sur une offre pro de Leboncoin. Si une offre pro propose un envoi automatique,
   nuancer la réponse courte et la première FAQ.
3. Formulaire de contact La Centrale et AutoScout24 : décrit de façon générique
   (« formulaire de contact de l'annonce », « numéro quand le vendeur l'affiche »).
   Non revérifié sur les sites le jour de la production.
4. Script maison : la phrase sur le risque de restriction d'un compte qui envoie
   en rafale est formulée comme un risque, pas comme une règle de Leboncoin. Aucune
   citation des conditions d'utilisation de Leboncoin, volontairement.
5. Modèle de message : l'article ne dit pas que le produit insère automatiquement
   le modèle, l'année ou le prix dans le message (non vérifié). Le modèle proposé
   est donc rédigé pour fonctionner sans variable, en s'appuyant sur le fait que la
   conversation Leboncoin est rattachée à l'annonce.
6. Stack : aucun fournisseur nommé ; `pnpm check:leaks` vert. Pas de « numéro
   dédié », pas de « temps réel » ni de fréquence de détection.

## Maillage

- Sortants : hub contact-multicanal, article WhatsApp (demandé par les notes du
  2026-11-05, la page n'a toujours que l'index du blog comme lien entrant), appels
  entrants identifiés, CRM (hub et article), article loi, article méthode, article
  statistiques, solutions/pige-automobile.
- Entrants à poser dans une passe `internal-linking` séparée : depuis
  `/fonctionnalites/contact-multicanal` (spoke manquant du hub) et depuis l'article
  méthode (étape 4), qui capte aujourd'hui « comment contacter un vendeur sur la
  centrale ».
