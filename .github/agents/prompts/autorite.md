Contexte d'exécution : GitHub Actions, run sans personne devant l'écran. Le dépôt du projet est déjà cloné et le dossier courant est celui du site ; les agents sont installés dans ~/.claude/skills/ (agent-seo-geo, agent-autorite, agent-concurrents, agent-prospects) et la config du projet est déjà en place dans .protocole/. `treg` est authentifié (organisation one-month-ship) et `gh` est authentifié pour ce dépôt. Lance les commandes directement, sans `cd`, et lis les fichiers avec l'outil Read. Tu n'as le droit ni de fusionner une PR ni de pousser sur main.

Utilise agent-autorite (~/.claude/skills/agent-autorite) : lance `python3 ~/.claude/skills/agent-autorite/scripts/cycle.py --project . --dry` (mode --dry : aucune PR externe, aucun ping, mais les données peuvent être payantes).

Règles impératives :
- Vérifie le solde treg réel (`treg balance`) avant l'exécution. Le budget hebdomadaire configuré est 0,50 $ dans .protocole/autorite.json (seuils.budget_treg_usd_par_semaine) — ne pas le dépasser sans le signaler explicitement dans le rapport final.
- La config .protocole/autorite.json existe déjà (domaine auto-prospect.fr, concurrents prospelia.io, inspectoo.fr, pistoneo.com). Ne pas la recréer, seulement la lire.
- Les annuaires proposés sont pour la plupart anglophones : relis le brief et ajoute un copy anglais quand le copy généré est en français. Corrige le texte, jamais les chiffres.
- AUCUN marqueur [À CONFIRMER]/[TODO] dans le brief produit (autorite/brief-<date>.md).
- Ne soumets rien à un tiers, n'envoie aucun email, ne crée aucun compte, ne fusionne aucune PR. Les 10 actions du brief restent des propositions à cliquer par l'utilisateur lui-même.
- Si le script renvoie une alerte (solde insuffisant, fournisseur indisponible, plafond atteint), recopie-la mot pour mot en tête du rapport final.

- Les sorties de l'agent (seo/, autorite/, brief-*.md) ne se commitent pas et ne partent pas en PR : elles sont récupérées par le workflow comme pièces jointes du run. Ne lance pas livrer.py.

Fin de tâche : donne le chemin du brief produit et le coût réel de la semaine.
