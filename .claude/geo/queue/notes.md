# Notes de lot (décisions et conventions découvertes pendant la production)

- 2026-09-26 : le site n'a pas de dossier blog. Convention retenue, identique à AlertDeals : `src/pages/blog/<slug>.astro`, un registre `src/data/articles.ts` alimentant `src/pages/blog/index.astro`, et une règle `/blog/` dans `sectionMeta()` de `astro.config.mjs`.
- Classes Tailwind du site : `text-text`, `text-text-secondary`, `bg-card`, `border-border`, `text-accent`, `bg-accent` (voir `src/styles/global.css`). Ne pas reprendre les classes AlertDeals (`text-ink`, `bg-tint`…).
- Voix : vouvoiement (le site vouvoie), à la différence d'AlertDeals.
- Auteur : à confirmer par Nassim ; en attendant, signer « L'équipe Auto-Prospect » sans schema Person inventé.
- 2026-09-27 (item-002) : les étapes réelles du Kanban de l'app sont Nouveau / Contacté / Relance / Gagné / Perdu (`auto-prospect-app/packages/shared/src/config/lead.config.ts`) ; la page `/fonctionnalites/crm-pipeline-vente` en décrit d'autres. Toujours vérifier une affirmation produit dans le code de l'app avant de l'écrire (rappels masqués par `SHOW_REMINDERS = false`, donc à ne pas citer).
- 2026-09-27 : titre SEO avec le suffixe « | Auto-Prospect » (règle « aucun tiret cadratin »). Les briefs de `seo/briefs/` sont committés : pas de marqueur entre crochets, écrire « À vérifier : ».
- 2026-09-28 (items 008/009, loi du 11 août 2026) : faits vérifiés aux sources primaires, à reprendre tels quels dans les articles.
  - Consentement préalable : art. **L223-1 c. consommation**, en vigueur au 11/08/2026 (décret n° 2026-662 du 23 juillet 2026). Interdit d'appeler « un consommateur qui n'a pas préalablement exprimé son consentement ». Consentement = manifestation « libre, spécifique, éclairée, univoque et révocable » par acte positif clair ; **la preuve incombe au professionnel**.
  - **Périmètre : B2C uniquement.** Le B2B reste sur l'intérêt légitime, avec droit d'opposition simple et gratuit (CNIL). Enjeu pour Auto-Prospect : le vendeur particulier sur Leboncoin **est** un consommateur — la loi touche donc le cœur du métier des clients.
  - **Bloctel disparaît** : ancien art. L223-4 abrogé au 11/08/2026. Logique inversée : opt-out → opt-in, le silence vaut refus.
  - Horaires (consentement recueilli) : lun-ven, 10h-13h et 14h-20h. Un décret fixe jours, horaires et fréquence ; le consommateur peut consentir explicitement à être appelé hors de ces plages.
  - Exception : sollicitation « relative à l'exécution d'un contrat en cours » — **inapplicable à un premier contact**, ne pas s'en servir comme échappatoire dans les articles.
  - Sanction citable sans risque : **nullité du contrat** conclu à la suite d'un démarchage illégal, et responsabilité présumée du professionnel qui en a tiré profit.
  - `À vérifier :` les montants d'amende administrative (personne physique / morale) et si les SMS et messageries électroniques sont visés ou seulement la voix — non confirmés, deux sources (economie.gouv.fr, actu-juridique) renvoient 403. Ne pas avancer de chiffre sans l'avoir.
  - Sources : legifrance.gouv.fr (L223-1 à L223-7, version 11/08/2026), cnil.fr (prospection par téléphone hors automate d'appel), legifrance.gouv.fr (décret n° 2026-662).
  - Angle juridique à tenir dans les deux articles : **répondre à une annonce publiée par un vendeur n'est pas du démarchage au sens de L223-1** — le vendeur sollicite lui-même des contacts en publiant. C'est ce qui rend l'usage d'Auto-Prospect licite, et c'est la nature du contact qui le justifie, pas l'ordre des propositions. Ne jamais présenter la séquence achat-puis-service comme une astuce de contournement. Zone à faire relire : consigner dans le brief (« À vérifier : ») toute affirmation de licéité, sans marqueur dans l'article.
- 2026-10-04 (item-008 produit) : `cycle.py` tire les lots par ordre alphabétique de fichier, sans lire la mention « priorité : HAUTE » ; le lot `agent-*` passe donc avant `lot-*`. Vérifier les priorités à la main avant de suivre `seo/prochain.json`.
  - Légifrance et economie.gouv.fr bloquent la lecture automatique (vérification anti-robot) : passer par les fiches CNIL, lisibles, et consigner dans le brief ce qui n'a pas été relu à la source.
  - Cadre retenu dans l'article, à reprendre pour `agent-2026-40-001` et l'item-009 : l'appel vocal relève de L223-1 c. conso. ; les envois automatisés (vocal sur répondeur, SMS, WhatsApp) relèvent de L34-5 CPCE, antérieur à 2026 ; les deux se déclenchent sur le caractère de prospection (promotion d'un bien ou d'un service). Une offre d'achat en réponse à une annonce n'en est pas une ; une proposition de service (dépôt-vente, mandat) en est une. Cette seconde partie contredit la note du 2026-09-28 sur l'item-009 : à faire trancher par Nassim avant de produire l'item-009.
  - Produit : l'app stocke la mention Leboncoin de refus du démarchage (`ads.accept_salesmen`) sans filtrer les envois. Ne pas écrire qu'Auto-Prospect respecte cette mention tant que ce n'est pas le cas.
- 2026-10-10 (règle permanente, demande de Nassim) : **ne jamais nommer un
  fournisseur, une API ou un service technique qu'Auto-Prospect utilise** dans un
  contenu publié. Trouver ces outils a coûté du temps de recherche, c'est un
  avantage concurrentiel qu'un partenaire ou un concurrent ne doit pas pouvoir
  lire dans un article. Règle complète en § 15 de `profile.md` et dans le
  `CLAUDE.md` du dépôt.
  - Interdits : fournisseur de collecte d'annonces, scraping, proxy,
    enrichissement ; fournisseur de SMS, d'appels, de vocal, de WhatsApp, de
    messagerie marketplace, d'email ; base de données et son hébergeur, ORM, file
    de jobs, cache, hébergeur de l'app, logs, monitoring ; modèles et
    fournisseurs d'IA ; et tout détail d'implémentation (nom de table ou de
    colonne, chemin de fichier du dépôt applicatif, variable d'environnement,
    endpoint, nom de worker ou de webhook).
  - Autorisé car déjà public : les trois marketplaces (Leboncoin, AutoScout24,
    La Centrale) sans jamais dire comment leurs annonces sont récupérées ;
    Stripe sur le paiement uniquement ; les canaux en tant que canaux (WhatsApp,
    messagerie Leboncoin, vocal sur répondeur) sans nommer qui les achemine.
  - Ces notes et les briefs de `seo/briefs/` ne sont pas publiés : ils peuvent
    continuer à citer les chemins de fichiers de l'app, c'est utile pour
    vérifier une affirmation produit. Ce qui change, c'est ce qui sort dans
    `src/`. Ne jamais recopier un passage technique d'un brief vers un article.
  - Attention particulière sur les comparatifs (`comparison-page`, dont
    `agent-2026-41-001`) : comparer Auto-Prospect à un concurrent pousse à
    expliquer comment il fonctionne. Décrire le résultat pour l'utilisateur
    (détection automatique, exclusivité des prospects, zones illimitées), jamais la
    plomberie qui le produit.
  - Un chiffre issu de nos données se cite « données internes Auto-Prospect,
    N annonces, période », sans nommer la base, le schéma ni le rôle de lecture.
  - Vérification avant publication : `pnpm check:leaks` (scan de `src/` et
    `public/`, également en CI via `.github/workflows/no-stack-leaks.yml`).

## 2026-10-10 : méthode de mesure des redirections, et cause de non-indexation

- **Ne jamais lire un code de redirection avec `curl -w "%{http_code}"`.** Cette
  option renvoie le statut du **dernier** saut de la chaîne, pas celui de la
  redirection. C'est ce qui a produit la mention « www redirige en 307 » de
  `profile.md`. La bonne commande : `curl -s -I <url>` et lire la première ligne
  `HTTP/...` (ou `-I -L` pour toute la chaîne).
- **État réel vérifié le 2026-10-10** : `www` vers l'apex en **308 Permanent
  Redirect**, HTTP vers HTTPS en **308**. Permanent dans les deux cas, rien à
  corriger côté Vercel. 301 est « Moved Permanently », 308 « Permanent
  Redirect », 307 « Temporary Redirect » : seul 307 est temporaire.
- **Cause d'une non-indexation, corrigée dans la PR 34** : chaque URL répondait
  200 avec et sans barre finale, les liens internes pointaient vers la version
  sans barre et les canonicals déclaraient celle avec. Google suivait un lien,
  lisait un canonical désignant une autre URL, et laissait la page en
  « détectée, jamais explorée ». `trailingSlash` n'était pas défini dans
  `astro.config.mjs` ; il vaut désormais `"always"`.
- Piège associé : `pageType()` de `src/lib/tracking.ts` comparait `pathname` au
  littéral `"/tarifs"`. Avec `trailingSlash: "always"` la condition n'aurait plus
  jamais été vraie et la segmentation d'audience Meta aurait cessé de classer la
  page tarifs. Toute comparaison de `pathname` à un littéral doit accepter les
  deux formes.
- À retenir pour les mesures : ce site part d'une bien meilleure situation que
  le dépôt AlertDeals (142 requêtes réelles en Search Console, « pige auto » à
  1 077 impressions sur 90 jours, position 7,5). Ne pas transposer le diagnostic
  « rien n'est indexé » d'AlertDeals.

## 2026-10-11 (item `agent-2026-40-001`, WhatsApp et vocal)

- **Écart entre le produit et la copy publique** : l'app implémente **quatre**
  canaux de contact (WhatsApp, SMS, vocal sans sonnerie, messagerie Leboncoin),
  la copy publique du site n'en annonce que **trois** (messagerie Leboncoin,
  WhatsApp, vocal). L'article s'en tient aux trois canaux publics et traite le
  SMS comme un canal du marché à déconseiller en premier contact, sans dire
  qu'Auto-Prospect l'envoie. Aligner la copy publique sur quatre canaux est une
  décision de Nassim, pas de l'agent SEO : à trancher avant le prochain article
  du cluster « contact automatique vendeurs » (item-005).
- **Pas de taux de réponse chiffré par canal** : calculable depuis les données
  de l'app, mais le volume constaté (environ 1 150 messages, dominés par un seul
  canal) rendrait un chiffre publié fragile. Reporté à un article de
  statistiques dédié quand le volume suivra. Réserve consignée dans le brief.
- **Lignes de plus de 500 caractères** : les réponses longues de la FAQ
  dépassaient la limite de la CI `no-long-lines`. Solution retenue, à réutiliser :
  couper la chaîne en littéraux concaténés par `+`, en gardant l'espace de fin
  sur chaque morceau pour ne pas souder deux mots. Le texte du JSON-LD reste
  identique. La CI ne scanne pas `public/llms.txt` (extensions `.txt` hors
  périmètre), mais garder les lignes courtes là aussi.
- **Maillage retour à poser** : les hubs `/fonctionnalites/contact-multicanal`
  et `/fonctionnalites/contact-vocal-automatique` ne pointent pas encore vers
  cet article. À faire dans une passe `internal-linking`, pas dans la PR de
  l'article.

## 2026-10-12 : feature « appels entrants identifiés » (demande de Nassim)

- Feature livré dans l'app (branche `feat/show-ad-information-at-call`, non fusionnée au 2026-10-12) : quand un vendeur rappelle le numéro dédié du compte, l'utilisateur entend l'annonce avant de décrocher (« Appel Auto-Prospect. Peugeot 208 2019, 9900 euros, Lyon. »), l'appel s'affiche dans le CRM avec l'annonce (même manqué) et son issue est notée sur le lead. Nassim le considère comme le feature le plus différenciant : à mettre en avant dans tout contenu qui parle du contact des vendeurs.
- Vocabulaire publié : « appels entrants identifiés », « annonce vocale avant de décrocher », « numéro Auto-Prospect dédié ». **Jamais « whisper »** (mot interdit par `check:leaks`, fournisseur de transcription), ni « transfert d'appel via … », ni le nom de l'opérateur, ni « webhook ».
- Hub créé : `/fonctionnalites/appels-entrants-identifies/`. Article : `/blog/rappel-vendeur-particulier-identifier-annonce/`. Brief : `seo/briefs/2026-10-12-appels-entrants-identifies.md` (réserves : branche app non fusionnée, attribution manuelle du numéro, prix du numéro non tranché, caller id vocal à confirmer).
- L'item `agent-2026-40-001` (WhatsApp / vocal) doit mentionner le feature dans sa section vocal et lier le hub.
- Canonical des articles : le `const canonical` du JSON-LD doit porter la barre finale (`/blog/<slug>/`), comme le `<link rel="canonical">` du Layout et le sitemap. Les quatre articles antérieurs ont été alignés le 2026-10-12.
- 2026-10-12, relecture de Nassim : **ne jamais écrire « numéro Auto-Prospect », « numéro dédié » ou « numéro attribué »** dans un contenu publié. Le client n'a pas à savoir qu'un numéro lui est assigné : dire « quand un vendeur vous rappelle » et « vos messages donnent aux vendeurs votre numéro à rappeler ». Aucune mécanique (numéro d'appelant, variable de modèle) dans le marketing.

## 2026-10-12 : régression de citation sur le prompt Leboncoin (item agent-2026-42-001)

Le prompt « Comment contacter automatiquement les vendeurs de voitures sur Leboncoin ? »
citait Auto-Prospect le 2026-09-28 et le 2026-10-05. Le 2026-10-12, il ne le cite plus,
et ne cite aucun concurrent non plus : la réponse du moteur a changé de forme, ce n'est
pas un concurrent qui a pris la place.

Angle retenu pour la production : une seule réponse extractible en tête d'article, qui
nomme le produit, le canal et le déclencheur. Fusionner avec l'item-005 du premier lot
(`contacter-vendeurs-leboncoin-automatiquement`) plutôt que créer une seconde page :
item-005 reste le livrable, agent-2026-42-001 en fixe l'angle et la priorité.

Réserve de méthode : une seule mesure peut être une variation du moteur. Confirmer la
régression au cycle du 2026-10-19 avant d'engager la production. Si le prompt redevient
cité sans rien changer, l'item se ferme sans article.

## 2026-11-02 (item agent-2026-41-001, refonte du comparatif en listicle nommé)

- La page `/comparatif-outils-pige-automobile` est refondue à la même URL en listicle
  « Les meilleurs logiciels de pige automobile en 2026 » nommant Prospelia, AlertDeals,
  Pistoneo et Inspectoo. Pas de page « vs » de marque : la requête cible reste générique,
  conformément à la règle (aucun volume mesuré sur les noms de marque).
- Prix revérifiés le jour de la production sur les pages publiques : Prospelia
  (79 €/mois TTC annuel, 99 €/mois sans engagement, canaux SMS + vocal confirmés) et
  Pistoneo (79 €/mois TTC ou 799 €/an TTC) à jour du 2026-11-02. Inspectoo :
  inspectoo.fr injoignable le 2026-11-02 (connexion refusée) alors que l'extension
  Firefox a été mise à jour le 2026-10-30 ; le prix publié est daté « constaté en
  septembre 2026 » dans le texte. AlertDeals : les montants ne sont pas dans le HTML
  statique de alertdeals.fr (rendu client ?), la page dit seulement « mensuel ou annuel,
  40 % de réduction en annuel » ; aucun montant publié dans l'article.
- Toute affirmation négative sur un concurrent est formulée « non annoncé sur sa page »
  plutôt que « n'existe pas », et la date de relevé est visible sur la page (phrase sous
  le tableau et note sous la FAQ). Convention à réutiliser pour tout contenu nommé.
- JSON-LD du listicle : `ItemList` de `SoftwareApplication` (sans `offers` pour les
  concurrents, leurs prix bougent), plus `FAQPage` et `BreadcrumbList`. Pas de
  `BlogPosting` : la page n'est pas un article de blog, pas d'entrée dans
  `src/data/articles.ts` ; `llms.txt` a sa ligne sous « Pages principales ».
- Liens sortants vers les concurrents en `rel="nofollow noopener noreferrer"`, sauf
  AlertDeals (produit frère, follow assumé, lien de la suite).

## 2026-11-05 (cycle du lundi, décalé au jeudi)

- File : 7 items ouverts, appels-entrants-002 étant coché (le prompt « appels
  entrants » est bien suivi dans `.protocole/seo.json`). item-005 et agent-2026-42-001
  forment un seul livrable : 6 sujets distincts, plus de deux semaines à la cadence d'un
  article par semaine. Aucun item ajouté : les requêtes qui montent au-dessus du seuil
  ont déjà une page propriétaire ou sont hors cible (détail dans keywords.md).
- item-003 (pige) : « pige auto » appartient à `/solutions/pige-automobile` (position 5,8,
  288 impressions sur la forme d'URL historique). Le comparatif nommé est en ligne depuis
  le 2026-11-05. item-003 ne vise donc ni « pige auto » ni « logiciel pige automobile » en
  title ou en H1 : angle « pige manuelle vs automatisée », lien vers le hub comme page de
  référence. Sinon, trois pages se disputent la même requête.
- item-004 (sourcing VO) passe avant item-006 : « sourcing vo » est passé de 4 à 12
  impressions sur 28 jours.
- item-005 / agent-2026-42-001 (prochain item servi) : la régression du prompt Leboncoin
  n'a pas pu être remesurée cette semaine (solde treg à 0). Produire quand même : la page
  manque de toute façon dans le cluster. Ajouter une section courte sur La Centrale et
  AutoScout24 (nouvelle requête « comment contacter un vendeur sur la centrale »), sans
  jamais dire comment les annonces sont récupérées.
- Toujours relier tout nouvel article contact à
  `/blog/whatsapp-message-vocal-vendeurs-particuliers-voiture/` : cette page est encore
  inconnue de Google à J+25, faute de liens entrants autres que l'index du blog.

## 2026-11-05 : suppression de la page comparatif (décision de Nassim)

- La page `/comparatif-outils-pige-automobile` (existante depuis le 2026-09-01, refondue en listicle nommé le 2026-11-02) est supprimée et redirigée en 301 vers `/solutions/pige-automobile`. Raison : se comparer à des acteurs peu connus leur fait de la publicité sans rien rapporter ; AlertDeals, Pistoneo et Inspectoo ne sont d'ailleurs pas des outils de prospection.
- L'item `agent-2026-41-001` reste coché mais son livrable n'existe plus. Ne pas le rouvrir ni produire de page comparative ou de listicle nommant des concurrents sans demande explicite de Nassim.
- Les liens internes (pied de page, hub pige, page appels entrants), `llms.txt` et la liste des actifs citables de l'agent Autorité ont été nettoyés dans la même PR.

## 2026-11-08 (items agent-2026-42-001 et item-005, même livrable)

- Article `/blog/contacter-vendeurs-leboncoin-automatiquement/`, branche `geo/blog-2026-11-08`.
  Réponse extractible en tête (« La réponse courte ») reprise mot pour mot comme première
  réponse de la FAQ, pour que le `FAQPage` porte la même phrase que le corps.
- Distinction avec l'article WhatsApp : celui-ci part de Leboncoin (47,9 % des annonces
  avec numéro, donc la messagerie Leboncoin est le seul canal pour plus de la moitié des
  vendeurs) et compare les façons d'automatiser ; le droit et la comparaison des canaux
  sont renvoyés vers les articles existants.
- Section La Centrale / AutoScout24 : contact par WhatsApp ou vocal sur le numéro de
  l'annonce, la messagerie Leboncoin ne servant qu'à Leboncoin. Déduit de la copy publique,
  à confirmer côté produit (réserve n° 1 du brief).
- Le modèle de message n'utilise aucune variable (modèle, année) : rien ne dit que le
  produit les insère. Sur Leboncoin, la conversation est rattachée à l'annonce, donc pas
  besoin de nommer le véhicule.
- Liens entrants à poser dans une passe `internal-linking` : hub contact-multicanal et
  article méthode (étape 4, qui capte « comment contacter un vendeur sur la centrale »).
- Une fois en ligne, remesurer le prompt Leboncoin au prochain lundi où le solde treg le
  permet, pour savoir si la citation revient.

## 2026-11-09 (cycle du lundi)

- Aucun article produit depuis le 2026-11-02 : la session du jour n'a rien livré alors
  que la file avait des items. Prochain servi : agent-2026-42-001.
- Inspections du 2026-11-09 : `/blog/whatsapp-message-vocal-vendeurs-particuliers-voiture/`
  « URL is unknown to Google » à J+29 ; `/blog/prospection-automobile-methode/`
  « Crawled - currently not indexed » sur l'URL canonique. Tout nouvel article du cluster
  contact doit relier l'article WhatsApp dans le corps du texte, pas seulement en fin de page.
- Formes d'URL : Google voit encore des impressions sur les formes sans slash et sur
  `www.` (toutes redirigent en 308 vers la forme canonique avec slash). Dans les liens
  internes et dans `llms.txt`, toujours écrire la forme canonique avec slash final pour
  éviter une chaîne de redirections.
- item-003 (pige) : ajouter une section qui distingue un outil de pige d'un logiciel de
  gestion de stock et de multidiffusion, sans nommer d'éditeur. C'est la confusion que fait
  Perplexity sur le prompt « meilleur logiciel de pige ».

