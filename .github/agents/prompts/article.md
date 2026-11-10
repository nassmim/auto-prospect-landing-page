Contexte d'exécution : GitHub Actions, run sans personne devant l'écran. Le dépôt du projet est déjà cloné et le dossier courant est celui du site ; les agents sont installés dans ~/.claude/skills/ (agent-seo-geo, agent-autorite, agent-concurrents, agent-prospects) et la config du projet est déjà en place dans .protocole/. `treg` est authentifié (organisation one-month-ship) et `gh` est authentifié pour ce dépôt. Lance les commandes directement, sans `cd`, et lis les fichiers avec l'outil Read. Tu n'as le droit ni de fusionner une PR ni de pousser sur main.

Projet (site vitrine Auto-Prospect, dépôt GitHub one-month-ship/auto-prospect-landing-page, hébergé sur Vercel en déploiement continu depuis la branche main).

Utilise le skill agent-seo-geo (installé dans agent-seo-geo) en mode cycle du jour selon son SKILL.md, dans ce projet. Le profil GEO existe déjà dans .claude/geo/profile.md, ainsi que .claude/geo/keywords.md, .claude/geo/content-inventory.md et la file .claude/geo/queue/ — les lire avant de produire. Le produit frère AlertDeals (même cible) couvre les sujets marge / rentabilité / rotation du stock : ne pas les dupliquer ici, Auto-Prospect couvre prospection, contact vendeur, CRM et pige.

Règles impératives (déjà validées par l'utilisateur, ne pas redemander) :
- Vérifie le solde treg réel (`treg balance`) avant tout appel payant ; le plafond configuré est dans .protocole/treg.json, mais le solde réel prime toujours.
- Aucune page comparative de marque (ex. "Auto-Prospect vs Prospelia") tant que les noms de marque concurrents n'ont aucun volume de recherche mesuré — vérifier avant de proposer ce type de page.
- INTERDICTION ABSOLUE de tout marqueur de type [À CONFIRMER], [TODO], [FIXME], [FACT-CHECK HUMAIN] dans le contenu de l'article ou dans tout fichier committé/poussé. Les réserves de fact-check vont dans seo/briefs/<date>-<slug>.md. Si une information manque, formule-la proprement dans le texte sans tag technique. Ne PAS bloquer la production pour autant.
- Voix : vouvoiement, ton direct et professionnel, aucun tiret cadratin, pas d'emoji.
- L'auteur des articles est « L'équipe Auto-Prospect » (persona simple choisi par l'utilisateur) : schema author de type Organization, jamais de personne nommée.
- Crée une branche dédiée depuis main à jour (git pull d'abord), écris l'article dans src/pages/blog/<slug>.astro en imitant src/pages/blog/prospection-automobile-methode.astro, ajoute l'entrée dans src/data/articles.ts et dans public/llms.txt, vérifie le build (`pnpm build`) et qu'aucune ligne ne dépasse 500 caractères (CI) avant de committer.
- Nomme cette branche `geo/blog-AAAA-MM-JJ` (date du jour) : un contrôle automatique du lundi s'appuie sur ce préfixe pour savoir si l'article de la semaine existe.
- Liens : tout lien du corps de l'article s'ouvre dans un nouvel onglet (`target="_blank" rel="noopener noreferrer"`), internes comme externes, jamais un lien qui fait quitter la page. Voir la règle « Liens » de la section 9 du profil.
- Si l'item tiré de la file est de skill `refresh` (il porte `page : <chemin>`), ne crée pas de nouvel article : retouche la page existante en suivant la consigne « Item de skill refresh » du SKILL.md, sans changer son URL, avec une branche `geo/retouche-AAAA-MM-JJ` et une PR normale. Un nouvel article n'est produit que pour les autres items. La mesure du lundi alimente ainsi le travail du dimanche.
- Ouvre une Pull Request NORMALE, PAS en brouillon (`gh pr create`, sans --draft). Ne fusionne jamais toi-même : c'est le geste de l'utilisateur.
- Mets à jour .claude/geo/content-inventory.md, coche l'item dans la file et ajoute la ligne au registre (seo/registre.csv via registre.py).
- Si la file (.claude/geo/queue/, items non cochés) est vide, relance keyword-pipeline pour en générer de nouveaux plutôt que de produire un article générique.

- Les sorties de l'agent (seo/ hors seo/briefs/, autorite/, concurrents/) ne se commitent jamais, même si une règle plus haut semble le demander.
- Si `gh pr create` est refusé, écris l'erreur exacte en fin de rapport sans chercher de contournement.

Fin de tâche : donne le lien de la PR créée. N'envoie aucun message, ne publie rien d'autre, n'active aucune nouvelle récurrence.
