# Brief de relecture : dépôt-vente ou achat-revente (2026-11-10)

Item : `item-009` (premier lot, skill foundational-article).
Livrable : `src/pages/blog/depot-vente-automobile-achat-revente-loi-2026.astro`.
URL : `/blog/depot-vente-automobile-achat-revente-loi-2026/`.
Requêtes visées : « dépôt vente automobile », « agence dépôt vente voiture », « mandat vente
véhicule particulier », « achat revente ou dépôt vente ». Cluster conformité prospection
(hub `/solutions/mandataire-auto`), celui qui répond le mieux : l'article sur la loi du
11 août était en position 5,2 avec 181 impressions sur 28 jours au 2026-11-09.

## Pourquoi cet item et pas le prochain servi par la file

`seo/prochain.json` servait `agent-2026-42-001` (contact des vendeurs Leboncoin). Cet
article existe déjà dans la PR #51 (branche `geo/blog-2026-11-08`), non fusionnée : le
reproduire aurait créé un doublon. La PR #52 (file du 2026-11-09) désigne item-009 comme
le suivant. La coche d'item-005 et d'agent-2026-42-001 reste portée par la PR #51.

## Ce que contient la page

- En bref extractible en 4 puces, H2 en questions, tableau « proposition d'achat vs
  proposition de dépôt-vente » en 6 lignes, méthode en 5 étapes (HowTo), deux modèles
  de message, section sur les vendeurs candidats (données internes), section « est-ce un
  contournement ? », contenu du contrat, suivi CRM, FAQ en 6 questions, sources.
- JSON-LD : BlogPosting (auteur Organization « L'équipe Auto-Prospect »), HowTo,
  FAQPage, BreadcrumbList. Canonical avec barre finale.
- Liens sortants : article loi, article WhatsApp (dans le corps, toujours non indexé),
  analyse-prix-marche, article stats, crm-pipeline-vente, article CRM, article méthode,
  solutions/mandataire-auto.
- Liens entrants : `/blog` (index), article loi (section 7 « Agences de dépôt-vente et
  mandataires », date de mise à jour passée au 2026-11-10 dans la page et dans
  `articles.ts`). Recommandé lors d'une passe de maillage : un lien depuis
  `/solutions/mandataire-auto`.

## Arbitrage juridique retenu

Les notes du 2026-09-28 et du 2026-10-04 divergeaient sur la proposition de service (à
faire trancher par Nassim, jamais tranché à ce jour). L'article retient la lecture déjà
publiée dans l'article sur la loi, la plus prudente :

- l'offre d'achat en réponse à une annonce n'est pas une prospection commerciale ;
- la proposition de dépôt-vente en est une, quel que soit le moment où elle arrive ;
- elle n'intervient donc qu'après un refus du prix et un oui écrit du vendeur à la
  question « souhaitez-vous qu'on vous présente une autre façon de vendre ? » ;
- l'offre de service ne s'automatise jamais.

La thèse de l'item est tenue : l'article dit explicitement que la séquence n'est pas un
contournement et que c'est la nature du contact (intention d'achat réelle) qui fonde le
premier message. Si Nassim préfère la lecture plus souple de la note du 2026-09-28, les
sections 3 (« Après un refus ») et 5 (« contournement ») sont à reprendre.

## À vérifier (fact-check humain avant fusion)

- À vérifier : qualification du message de question elle-même. Le modèle « Nous proposons
  aussi d'accompagner des particuliers dans la vente… Souhaitez-vous que je vous
  explique ? » mentionne le service pour demander l'accord. On peut soutenir qu'il est
  déjà une prospection. Il est écrit à la main, dans une conversation ouverte par le
  vendeur, juste après un échange sur l'achat : risque jugé faible, mais une relecture
  juridique est recommandée.
- À vérifier : contenu du contrat. Repris de L'argus (« Comment établir un contrat de
  dépôt-vente automobile ? »), article ancien (daté de 2000 sur la page) : les articles du
  Code civil cités (1915 et suivants, 1984 et suivants) n'ont pas été relus sur Légifrance
  (anti-robot). L'article ne cite ni taux de commission ni durée type.
- Non repris volontairement : le livre de police (articles 321-7 et R321-1 et suivants du
  Code pénal) et les sanctions associées. Les sources trouvées divergent sur l'article qui
  porte la peine ; à ajouter seulement après vérification sur Légifrance.
- Chiffres internes réutilisés à l'identique de l'article stats : 35 122 annonces, 1er juin
  au 25 septembre 2026, 9,9 % de baisses de prix, 23,9 % pour les véhicules de 2022 et plus.
  « Près d'un vendeur sur quatre » est l'arrondi de 23,9 %.
- Produit : le CTA dit que les vendeurs qui répondent « arrivent dans votre CRM » et que la
  proposition ferme reste à la main de l'utilisateur. Aucune fonction d'envoi de proposition
  de service n'est affirmée. La mention Leboncoin de refus du démarchage n'est pas filtrée
  par l'app (note du 2026-10-04) : l'article n'affirme pas qu'Auto-Prospect la respecte.

## Contrôles faits

- `pnpm build` OK (22 pages), `pnpm check:leaks` OK.
- Aucune ligne de plus de 500 caractères dans les fichiers contrôlés par la CI.
- Aucun tiret cadratin, aucun « temps réel », aucun numéro dédié, aucun nom de fournisseur.
- Recoupement AlertDeals : l'article ne traite ni la marge ni la rentabilité comparée des
  deux modèles (territoire AlertDeals), seulement le contact du vendeur.
