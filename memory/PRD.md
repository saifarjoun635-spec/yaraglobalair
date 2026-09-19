# PRD — Yara Global Air (Site vitrine)

## Énoncé original (résumé)
Site web multi-pages en français pour Yara Global Air (climatisation, chauffage, réfrigération — thermopompes). Contact SANS backend : redirections mailto / tel / sms uniquement. Bouton « Contacter » flottant clignotant en bas. Page d'accueil légère. Page blogue. Liens vers Facebook. Couleurs du logo (bleu marine, cyan, accent orangé). Animé, original mais professionnel.

- Téléphone : 438-680-4054
- Courriel : yara.globalair@gmail.com
- Facebook : https://www.facebook.com/profile.php?id=100063757231349

## Architecture
- Frontend uniquement (React 19 + react-router-dom v7). Aucun backend utilisé.
- framer-motion (révélations au scroll, révélation masquée ligne par ligne du hero), lenis (défilement fluide), canvas maison (flux d'air/particules).
- Design : thème sombre bleu nuit (#0A121E), cyan #06B6D4, ambre #F59E0B (spirale du logo). Fonts : Outfit (titres), Plus Jakarta Sans (texte), JetBrains Mono (labels).
- Logo découpé depuis l'image fournie : /public/assets/icon.png.

## Pages (toutes livrées — 2026-09-19)
- `/` Accueil : hero cinétique (révélation masquée, parallaxe, canvas flux d'air), marquee éditorial lent, aperçu 4 services (grille bento), aperçu secteurs (cartes photo), aperçu blogue, bande CTA.
- `/services` : 4 chapitres numérotés (nettoyage, inspection/diagnostic, réparation/dépannage, fluides frigorigènes) + calculette d'économies interactive (slider).
- `/secteurs` : panneaux Résidentiel & Commercial PME avec listes d'immeubles.
- `/blogue` : 4 articles d'exemple en français (contenu FICTIF à remplacer par le client).
- `/blogue/:slug` : page article complète.
- `/contact` : 4 canaux directs (tel/sms/courriel/Facebook) + formulaire mailto (aucun envoi serveur).
- Bouton contact flottant pulsant (ambre) partout : menu Appeler / Texto / Courriel / Facebook.

## Personas
- Propriétaire résidentiel (maison, condo, duplex) : cherche entretien/dépannage rapide, appel en 1 clic.
- Gestionnaire PME (bureau, commerce, restaurant) : fiabilité, conformité fluides, service commercial.

## Exigences clés (statiques)
- Aucun backend, aucun formulaire serveur — mailto/tel/sms uniquement.
- Français partout. Homepage non surchargée. Animé mais pro.

## Vérifié
- Toutes les pages chargent sans erreur console bloquante (screenshots Playwright).
- Bouton flottant s'ouvre et expose les 4 actions.
- Calculette réactive (581 $/an affiché pour 220 $/mois, 1-3 ans).

## Backlog priorisé
- P0 : Remplacer les articles du blogue par du vrai contenu (actuellement MOCKÉ).
- P1 : Page « À propos » (équipe, certifications, zone desservie avec carte).
- P1 : Section avis clients / témoignages.
- P2 : Mode clair optionnel, SEO (balises OG, sitemap), formulaire avec envoi réel (Resend) si souhaité plus tard.
