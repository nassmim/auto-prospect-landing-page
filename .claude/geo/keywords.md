# Univers de mots-clés : Auto-Prospect

> Produit par `keyword-pipeline`. Un cluster = un hub potentiel (voir `internal-linking`).
> Priorité : intention d'achat et citabilité avant volume brut.
>
> Première liste écrite à l'onboarding (2026-09-26). Volumes mesurés le même jour via treg/Serpstat (base g_fr,
> 40 mots-clés interrogés, 14 trouvés, coût 0,007 $) et impressions Google Search Console sur 90 jours (2026-06-28 → 2026-09-25). Répartition avec
> le produit frère AlertDeals : AlertDeals couvre rentabilité / marge / rotation du stock ;
> Auto-Prospect couvre prospection / contact vendeur / CRM / pige.

## Clusters

| Cluster | Requêtes et prompts IA réels | Intention | Famille → skill | Priorité | Hub (page pilier) | Statut |
|---|---|---|---|---|---|---|
| Conformité prospection (loi du 11 août 2026) | « loi 11 août 2026 démarchage », « demarchage telephonique 2026 consentement », « prospection vendeur particulier legal », « puis-je appeler un particulier leboncoin », « bloctel supprimé », « dépôt vente automobile », « mandat vente véhicule particulier » | informationnel / commercial | foundational-article | **haute** (la loi rebat les cartes de l'écosystème, fenêtre d'opportunité) | `/solutions/pige-automobile` + `/solutions/mandataire-auto` | item-008 publié le 2026-10-10 (`/blog/loi-11-aout-2026-demarchage-prospection-vendeurs-particuliers`, PR #30 fusionnée) et indexé, inspection du 2026-10-12 « Submitted and indexed », dernier crawl le 2026-10-10, aucune impression encore ; item-009 à faire |
| Logiciel de pige automobile | « pige auto » (GSC : 1 077 impressions, position 7,5 ; aucun volume Serpstat retourné), « pige automobile » (77 impressions), « logiciel pige automobile », « quel est le meilleur logiciel de pige automobile pour un marchand VO ? » | commercial | comparison-page (listicle sans marque tant que pas de volume de marque) | **haute** | `/solutions/pige-automobile` + `/comparatif-outils-pige-automobile` | à faire (item-003, puis agent-2026-41-001 : comparatif nommé, proposé le 2026-10-05 car le prompt « meilleur logiciel de pige » reste à zéro citation depuis deux lundis ; « pige auto » : 232 impressions sur 28 jours au 2026-10-02, position 7,1). Au 2026-11-05 : agent-2026-41-001 fait (comparatif refondu en listicle le 2026-11-02, page « Discovered - currently not indexed », jamais explorée) ; « pige auto » monte à 320 impressions sur 28 jours (231 avant), position 5,8, 5 clics, 100 % sur `/solutions/pige-automobile`, page propriétaire ; item-003 à faire, angle méthode, sans « pige auto » dans le title ni le H1 |
| Rappel des vendeurs : appels entrants identifiés | « vendeur rappelle quelle annonce », « identifier appel vendeur leboncoin », « appel manqué vendeur particulier », « numéro dédié prospection automobile », « que dire quand un vendeur rappelle », prompt IA « Existe-t-il un outil qui me dit pour quelle annonce un vendeur me rappelle ? » (aucun volume mesuré, longue traîne ; cluster créé le 2026-10-12 sur le feature le plus différenciant du produit, à mesurer en Search Console) | commercial / how-to | foundational-article | **haute** (demande de Nassim, 2026-10-12) | `/fonctionnalites/appels-entrants-identifies` | page hub et article `/blog/rappel-vendeur-particulier-identifier-annonce` publiés le 2026-10-12 (PR #38 fusionnée), URL publique vérifiée en 200, inconnue de Google à J+0. Prompt IA « Existe-t-il un outil qui me dit pour quelle annonce un vendeur me rappelle ? » ajouté au suivi du lundi dans `.protocole/seo.json` le 2026-10-12, première mesure le 2026-10-19 |
| Contact automatique des vendeurs Leboncoin | « contacter vendeur leboncoin automatiquement », « message automatique leboncoin voiture », « prospection whatsapp automobile », « comment contacter automatiquement les vendeurs de voitures sur Leboncoin ? » | commercial / how-to | foundational-article | **haute** | `/fonctionnalites/contact-multicanal` + `/fonctionnalites/contact-vocal-automatique` | à faire (item-005, angle fixé par agent-2026-42-001) ; `/blog/whatsapp-message-vocal-vendeurs-particuliers-voiture` publié le 2026-10-11 (PR #37 fusionnée), inconnu de Google au 2026-10-12, normal à J+1. Au 2026-10-12, Perplexity cite Auto-Prospect sur le prompt WhatsApp ou vocal mais plus sur le prompt Leboncoin, cité les deux lundis précédents : régression à confirmer au cycle du 2026-10-19 avant production, aucun concurrent n'a pris la place. Au 2026-11-05 : visibilité IA non mesurée (solde treg à 0 $), item-005 à faire sans attendre la confirmation ; l'article WhatsApp est toujours « Discovered - currently not indexed » et aucune page du site ne lui fait de lien hors de l'index du blog |
| Prospection automobile (méthode) | « prospection automobile » (320/mois, difficulté 3, GSC 196 impressions position 19), « prospection automatique » (260/mois, GSC 347 impressions position 44), « prospection auto » (18 impressions position 7,8), « comment prospecter des vendeurs particuliers de voitures » | how-to | foundational-article | **haute** | `/fonctionnalites/recherche-annonces-automatisee` | publié le 2026-09-26 (PR #24) |
| Sourcing VO auprès des particuliers | « sourcing auto » (140/mois), « sourcing vo » (GSC 27 impressions), « sourcing automobile » (25 impressions), « marchand automobile » (210/mois, difficulté 7), « devenir marchand automobile » (30/mois), « achat revente voiture » (590/mois, difficulté 10, déjà visé par AlertDeals) | commercial / how-to | foundational-article | moyenne | `/solutions/marchand-vehicules-occasion` | à faire |
| Mandataire auto : outils et sourcing | « outil mandataire auto », « logiciel mandataire automobile », « comment trouver des véhicules pour ses clients mandataire » | commercial | comparison-page / foundational-article | moyenne | `/solutions/mandataire-auto` | à faire |
| CRM automobile | « crm automobile » (720/mois, difficulté 2, GSC 443 impressions position 51), « crm auto » (720/mois), « logiciel crm automobile » (10/mois), « quel CRM utiliser pour suivre ses achats de véhicules d'occasion ? » | commercial | comparison-page | moyenne | `/fonctionnalites/crm-pipeline-vente` | publié le 2026-09-28 (`/blog/crm-automobile-marchand-vo`, PR #25) ; « crm automobile » : 173 impressions sur 28 jours au 2026-09-25, avant publication ; 122 impressions au 2026-10-02 (position 47,8), l'indexation est obtenue : inspection du 2026-10-12 sur l'URL canonique (avec slash final) « Submitted and indexed », dernier crawl le 2026-10-10. Le « non indexé » du cycle vient d'une inspection sans slash final. 96 impressions sur 28 jours au 2026-10-09, portées par `/fonctionnalites/crm-pipeline-vente`, aucune encore par l'article : laisser mesurer jusqu'au 2026-10-26 (J+28) avant de retravailler. Au 2026-11-05 (28 jours au 2026-11-02) : l'article prend la requête, 181 impressions sur « crm automobile » en position 19,6 contre 97 pour `/fonctionnalites/crm-pipeline-vente` toutes formes d'URL confondues (positions 47 à 69). L'article devient la page propriétaire de « crm automobile », ce qui annule l'orientation du brief du 2026-10-12 (faire de la page fonctionnalité le hub). Article à retravailler pour passer en première page, pas de nouvel item |
| Statistiques marché VO particuliers (data first-party) | « prix moyen voiture occasion leboncoin 2026 », « délai de vente voiture occasion particulier », « taux de réponse vendeurs leboncoin », « quel canal pour joindre un vendeur particulier » | data | statistics-article | haute (accès lecture confirmé le 2026-09-26) | `/blog/statistiques-annonces-voitures-occasion-particuliers-2026` | publié le 2026-09-26 (PR #24), mise à jour trimestrielle à prévoir |
| Outil gratuit : simulateur | « calculateur temps de prospection auto », « simulateur coût pige manuelle vs automatisée » | outil | free-tool | basse | `/fonctionnalites/recherche-annonces-automatisee` | à faire |

## Rejetés (et pourquoi)

| Sujet | Raison (TOFU générique, hors cible, pas de data…) |
|---|---|
| « Qu'est-ce que la pige automobile » (définition seule) | Générique, toute IA le répond sans source ; à traiter seulement comme section d'un article de fond, pas comme page |
| « Comment acheter une voiture d'occasion » (particulier) | Hors cible : Auto-Prospect vise les professionnels de l'achat-revente |
| « voiture occasion », « leboncoin voiture » | Volumes massifs mais difficulté 74-88 mesurée côté AlertDeals, dominés par les marketplaces, intention grand public |
| « mandataire auto » (27 100/mois, difficulté 69) | Requête grand public (particuliers cherchant un mandataire pour acheter moins cher), pas la cible ; la page `/solutions/mandataire-auto` reste pour la longue traîne « outil mandataire » |
| Pages « Auto-Prospect vs <marque> » | Aucun volume de recherche mesuré sur les noms de marque de la niche (constat AlertDeals 2026-09-20) ; à reconsidérer si un volume apparaît |
| Marge / rentabilité / rotation VO | Couvert par AlertDeals (produit frère) : lien contextuel plutôt que doublon |
| « auto prospect », « autoprospect », « prospect autos » (416 impressions cumulées sur 28 jours, 2026-09-28) | Requêtes de marque : la page d'accueil y répond déjà, un article ferait doublon. Au 2026-10-09 : 342 impressions et 24 clics sur 28 jours pour les deux orthographes, le seul trafic cliqué du site. Reste écartée en contenu, mais c'est la preuve que la marque se cherche |
| « recherche auto activée », « recherche auto activé » (195 impressions sur 28 jours, 2026-09-28) | Intention floue, très probablement une notification ou un réglage d'application sans lien avec le métier ; zéro clic. Surveiller seulement. Au 2026-10-02 : 291 impressions cumulées sur 28 jours, toujours zéro clic, et 95 impressions sur les 7 derniers jours contre 121 la semaine d'avant : écartée, aucun article. Au 2026-10-09, 428 impressions cumulées sur 28 jours pour les deux orthographes, toujours zéro clic : l'écart impressions/clics confirme l'intention hors métier, reste écartée. Au 2026-11-05 : 370 impressions sur 28 jours pour les deux orthographes, position 5 à 7, zéro clic, toutes sur `/fonctionnalites/recherche-annonces-automatisee` : même verdict |
| « remarketing automobile » (40 impressions, 2026-09-28) | Hors cible : publicité de reciblage pour concessions, pas le sourcing auprès des particuliers |
| Prompt « Comment trouver des véhicules d'occasion sous-cotés à revendre ? » (zéro citation, 2026-09-28) | Territoire AlertDeals (détection et marge) : à couvrir côté AlertDeals, Auto-Prospect via l'item-010 seulement |
| « marchand vo » (7 impressions), « tracker annonce voiture occasion » (5 impressions), nouvelles sur 28 jours au 2026-10-02 | Dans la cible mais sous le seuil de 30 impressions : pas d'item dédié. « marchand vo » est couvert par les items 004 et 006 ; « tracker annonce » relève du hub `/fonctionnalites/recherche-annonces-automatisee`. À revoir si elles dépassent le seuil |
| « multidiffusion annonce auto », « call center automobile », « gestion lead automobile » (moins de 10 impressions chacune, 2026-10-02) | Hors cible : outils de vente et de relation client pour concessions, pas le sourcing auprès des particuliers |
| « crm concession automobile » (11 impressions), « crm concessionnaire automobile », « service client automobile », « prospection flotte auto » (17 impressions), « devis publiscopies automobile », « fournisseur publiscopies automobile » (28 jours au 2026-11-02) | Hors cible : concessions, flottes d'entreprise et publicité sur véhicule, pas l'achat aux particuliers. « crm concession automobile » atterrit déjà sur l'article CRM, qui suffit |
| « vente a marchand » (16 impressions, nouvelle au 2026-11-02) | Intention vendeur particulier (vendre sa voiture à un marchand), pas la cible acheteuse ; aucun article |
| « prospection automatique » (114 impressions, position 46, sur la page d'accueil, 28 jours au 2026-11-02) | Requête générique, majoritairement de la prospection B2B hors automobile ; déjà travaillée par item-001, pas de nouvel item |
| Questions longues de type assistant IA, côté acheteur particulier (« les acheteurs peuvent-ils identifier des annonces volvo proposées à un prix juste… », « qui fournit des outils de prix aux propriétaires préparant la vente d'une chevrolet ? », une à cinq impressions chacune, 28 jours au 2026-11-06) | Hors cible : particuliers qui achètent ou vendent leur propre voiture. Elles atterrissent sur la page d'accueil et sur `/fonctionnalites/analyse-prix-marche` ; aucun article |

## Sources d'expansion utilisées

- Google Search Console (90 jours) : 142 requêtes, dont « pige auto » 1 077 impressions, « crm automobile » 443, « prospection automatique » 347, « prospection automobile » 196
- Autocomplétion et « autres questions posées » : pas encore fait
- Outil de mots-clés (si connecté) : treg → Serpstat g_fr, appelé le 2026-09-26 (0,007 $) ; « pige auto », « logiciel pige automobile », « sourcing vo », « contacter vendeur leboncoin » n'ont retourné aucune ligne Serpstat malgré des impressions Search Console réelles : se fier à la Search Console pour ces requêtes
- Prompts trackés dans l'outil de visibilité IA (si connecté) : aucun outil connecté à l'onboarding ; depuis le 2026-09-28, les 5 prompts de `.protocole/seo.json` sont posés chaque lundi à Perplexity via treg (1 cité sur 5 le 2026-09-28, 2 sur 5 le 2026-10-05, 1 sur 5 le 2026-10-12 ; un sixième prompt, sur les appels entrants identifiés, est suivi à partir du 2026-10-19)
- Pages concurrentes analysées : aucune à ce stade ; pistoneo.com et inspectoo.fr analysés côté AlertDeals (2026-09-20/21)

## 2026-11-05 : cycle du lundi (Search Console 2026-10-06 → 2026-11-02)

- Site : 2 744 impressions et 129 clics sur 28 jours, contre 1 825 et 65 sur les 28 jours
  d'avant. Les cinq articles indexés totalisent 695 impressions, contre 12 avant.
- Requêtes qui montent sans article dédié : « pige auto », « recherche auto activé »,
  « recherche auto activée ». La première est couverte par le hub et l'item-003, les deux
  autres restent écartées (voir plus haut). Aucun nouvel item créé : la file tient sept
  articles, soit sept semaines à la cadence d'un article par semaine.
- Propriétaires désignés : « crm automobile » → `/blog/crm-automobile-marchand-vo` ;
  « pige auto » et « pige automobile » → `/solutions/pige-automobile` ;
  « prospection automobile » → page d'accueil de fait (position 4,1), l'article méthode
  n'y apparaît pas.
- Visibilité IA non mesurée cette semaine : solde treg à 0 $, aucun prompt posé. Dernier
  état connu : 1 prompt cité sur 5 le 2026-10-12.

## 2026-11-09 : cycle du lundi (Search Console 2026-10-10 → 2026-11-06)

- Site : les cinq articles indexés totalisent 785 impressions sur 28 jours, contre 55 la
  période d'avant. En tête : `/blog/crm-automobile-marchand-vo` (420 impressions, position
  14,4), l'article sur la loi du 11 août (181, position 5,2), l'article de statistiques (102,
  position 5,0), l'article sur le rappel des vendeurs (66, position 7,1).
- Requêtes qui montent sans article dédié : « pige auto » (349, contre 209), « recherche
  auto activé » et « recherche auto activée » (284 cumulées, zéro clic), « prospection
  automatique » (107, position 45,6). Toutes déjà arbitrées plus haut : hub pige
  propriétaire et item-003, écartées, ou écartée. Aucun item créé.
- Prompts IA (Perplexity, 6 posés) : 2 citent Auto-Prospect (contact Leboncoin, CRM d'achat
  VO). À zéro : pige (réponse orientée logiciel de gestion de stock, l'item-003 reçoit une
  section pour distinguer les deux), véhicules sous-cotés (territoire AlertDeals, écarté),
  WhatsApp ou vocal (cité le 2026-10-12, plus aujourd'hui ; l'article dédié n'est toujours
  pas connu de Google, c'est un problème d'indexation avant d'être un problème de contenu),
  rappel des vendeurs (le moteur répond pour l'immobilier : la formulation du prompt ne
  précise pas l'automobile).
- Le prompt Leboncoin est de nouveau cité : la régression du 2026-10-12 n'est pas
  confirmée. agent-2026-42-001 reste ouvert car il porte le livrable de item-005.
- Propriétaires désignés : « crm automobile » → `/blog/crm-automobile-marchand-vo`
  (la page fonctionnalité CRM, en position 64 à 69, doit retirer « CRM automobile » de son
  title et de son H1) ; « pige auto » et « pige automobile » → `/solutions/pige-automobile` ;
  « prospection automobile » → page d'accueil (position 3,4), l'article méthode est
  « Crawled - currently not indexed » sur son URL canonique et doit changer d'angle.
- File : 7 items ouverts, 6 sujets distincts, six semaines à la cadence d'un article par
  semaine. Prochain servi : agent-2026-42-001 (contact des vendeurs Leboncoin), puis
  item-009 (dépôt-vente, cluster conformité, celui qui répond le mieux).
