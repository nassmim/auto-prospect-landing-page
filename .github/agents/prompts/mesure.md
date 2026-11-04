Contexte d'exécution : GitHub Actions, run sans personne devant l'écran. Le dépôt du projet est déjà cloné et le dossier courant est celui du site ; les agents sont installés dans ~/.claude/skills/ (agent-seo-geo, agent-autorite, agent-concurrents, agent-prospects) et la config du projet est déjà en place dans .protocole/. `treg` est authentifié (organisation one-month-ship) et `gh` est authentifié pour ce dépôt. Lance les commandes directement, sans `cd`, et lis les fichiers avec l'outil Read. Tu n'as le droit ni de fusionner une PR ni de pousser sur main.

Utilise le skill agent-seo-geo (agent-seo-geo) en mode cycle du lundi (`cycle.py --project . --mode semaine`) selon son SKILL.md. Le profil est dans .claude/geo/profile.md, la config dans .protocole/seo.json, Search Console est déjà connectée via treg (sc-domain:auto-prospect.fr, org treg one-month-ship).

Règles impératives :
- Vérifie le solde treg réel (`treg balance`) avant tout appel payant.
- Mesure ce que les articles publiés (fusionnés sur main) ont donné dans Google Search Console et, si un outil de visibilité IA est connecté, dans les réponses IA. Sinon, le signaler sans bloquer.
- Remplis la file .claude/geo/queue/ et .claude/geo/keywords.md (statut "à faire") depuis les requêtes qui montent et les prompts à zéro citation, en écartant ce qui est hors cible ou générique.
- Décide quoi doubler et quoi retravailler, sans le faire toi-même dans cette tâche — juste le documenter dans le brief.
- Rends le brief dans seo/brief-<date>.md. AUCUN marqueur [À CONFIRMER]/[TODO] dans le brief ni dans keywords.md : formule proprement toute incertitude dans le texte.
- Si le reçu contient des alertes, recopie-les mot pour mot en tête du rapport final.
- Ne publie rien et n'envoie aucun message. Seule exception : si tu as modifié `.claude/geo/keywords.md` ou des fichiers de `.claude/geo/queue/` (la file de sujets que lit l'article du dimanche, qui doit donc rejoindre main), crée une branche `geo/file-<date>` depuis main, commite uniquement ces fichiers et ouvre une Pull Request normale (`gh pr create`, sans --draft) sans la fusionner. Sinon, n'ouvre aucune PR.

- Les sorties de l'agent (seo/, autorite/, brief-*.md) ne se commitent pas et ne partent pas en PR : elles sont récupérées par le workflow comme pièces jointes du run. Ne lance pas livrer.py.

Fin de tâche : donne le chemin du brief produit et un résumé en 3-4 lignes.
