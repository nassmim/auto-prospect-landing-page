# Brief de relecture : refonte du comparatif en listicle nommé (2026-11-02)

Item : `agent-2026-41-001` (lot agent-2026-41, skill comparison-page).
Livrable : `src/pages/comparatif-outils-pige-automobile.astro` (refonte à URL constante,
pas de nouvelle page). Requête cible : « logiciel pige automobile », « pige auto »
(232 impressions GSC sur 28 jours, position 7,1) et le prompt IA à zéro citation
« Quel est le meilleur logiciel de pige automobile pour un marchand VO ? ».

## Ce qui a changé

- H1 : « Les meilleurs logiciels de pige automobile en 2026 » (listicle, 5 outils).
- Concurrents nommés pour la première fois : Prospelia, AlertDeals, Pistoneo, Inspectoo.
- Verdict extractible en tête, tableau 5 lignes, section par outil, section honnête
  « Pour qui Auto-Prospect n'est pas le bon choix », FAQ 6 questions, date de relevé
  des prix visible deux fois sur la page.
- JSON-LD : ItemList (SoftwareApplication), FAQPage, BreadcrumbList.
- `llms.txt` : ligne ajoutée sous « Pages principales ».
- Pas d'entrée dans `articles.ts` : ce n'est pas un article de blog.

## Vérifications faites le 2026-11-02 (sources publiques)

- Prospelia (prospelia.io) : 79 €/mois TTC avec engagement annuel (948 €/an),
  99 €/mois sans engagement ; sources Leboncoin, La Centrale, ParuVendu, AutoScout24 ;
  contact par SMS et messages vocaux personnalisés, relances automatiques, pipeline ;
  démo personnalisée, pas d'essai gratuit affiché ; exclusivité des prospects non
  mentionnée sur la page.
- Pistoneo (pistoneo.com) : plan Pro 79 €/mois TTC ou 799 €/an TTC ; 9 marketplaces
  européennes listées ; transport + malus + marge ; contact « en un clic », pas d'envoi
  automatique ; essai gratuit annoncé, durée non précisée.
- AlertDeals (alertdeals.fr) : alertes email/WhatsApp/push, analyse tarifaire, marge,
  temps de revente ; pas de contact automatique ni de CRM.

## À vérifier (fact-check humain avant fusion)

- À vérifier : Inspectoo. inspectoo.fr refusait la connexion le 2026-11-02 (testé en
  direct et via www), alors que l'extension Firefox (version 4.10.437) a été mise à
  jour le 2026-10-30. Le prix publié dans l'article est volontairement daté « constaté
  en septembre 2026 » (19,90 €/mois, essai 7 jours, relevé du 2026-09-21 côté
  AlertDeals). Si le site réapparaît avec d'autres tarifs ou si l'outil a pivoté
  (l'extension met en avant les enchères B2B : Auto1, Alcopa, Openlane, BCAuto…),
  ajuster la section 5 et le tableau.
- À vérifier : AlertDeals, produit frère. Les montants ne sont pas dans le HTML statique
  de alertdeals.fr ; l'article dit seulement « mensuel ou annuel, 40 % de réduction en
  annuel, essai gratuit sans engagement ». Nassim peut compléter un montant exact s'il
  veut l'afficher, ou laisser tel quel.
- À vérifier : la phrase « le seul des cinq à combiner messagerie Leboncoin, WhatsApp
  et vocal » est bornée aux outils comparés (formulation défendable). L'ancienne page
  disait « le seul du marché » : cette version plus large n'a pas été conservée dans
  le corps de page, elle survit seulement dans la FAQ 1 sous la forme « le choix le
  plus complet ». Confirmer que c'est le positionnement voulu.
- À vérifier : affirmations négatives sur Prospelia (ni messagerie Leboncoin ni
  WhatsApp, pas d'exclusivité annoncée, pas d'essai gratuit). Elles sont formulées
  « non annoncé sur la page » et datées, mais une relecture avant fusion reste
  prudente : c'est la zone à risque juridique du listicle.
- À vérifier : la règle « aucune page comparative de marque sans volume de marque
  mesuré » est respectée (requête cible générique), mais le profil § 7 et
  competitors.md ont été mis à jour pour acter le passage au listicle nommé. Relire
  ces deux diffs.

## Suites

- Cannibalisation à surveiller au prochain lundi : « pige auto » se partage entre
  `/solutions/pige-automobile` (hub) et le comparatif ; le hub reste propriétaire de
  la requête, le comparatif vise « meilleur logiciel / comparatif ». Si GSC montre les
  deux pages dans le top 20 sur la même requête avec clics partagés, arbitrer.
- item-003 (guide « pige manuelle vs automatisée ») reste distinct : angle méthode,
  pas listicle. Ne pas fusionner.
- Passe `internal-linking` à prévoir : le hub `/solutions/pige-automobile` pointe déjà
  vers le comparatif ; vérifier l'ancre (elle dit encore « comparatif » générique).
