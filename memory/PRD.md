# PRD — Yara Global Air (Site vitrine)

## Énoncé original (résumé)
Site web multi-pages en français pour Yara Global Air (climatisation, chauffage, réfrigération — thermopompes). Contact SANS backend : mailto / tel / sms uniquement. Bouton « Contacter » flottant clignotant. Page blogue. Liens Facebook. Couleurs du logo. Animé, original mais professionnel.

- Téléphone : 438-680-4054
- Courriels : info@yara.globalair.ca (principal affiché) + yara.globalair@gmail.com (cible réelle du formulaire mailto)
- Facebook : https://www.facebook.com/profile.php?id=100063757231349
- Adresse : Victoriaville — Centre-du-Québec (dessert aussi la région de Québec). NE PAS mentionner Montréal.

## Révision 2026-09-20 (demandes client appliquées)
- Thème CLAIR (blanc cassé #F5F9FD, bleu marine #123057, bleu #1B76C9, orange #E07F1F) — fini le fond sombre.
- Nouveau logo client utilisé (icône YG découpée + logo complet) : /public/assets/icon.png et logo-full.png.
- Rubriques : Accueil · À propos · Service · Notre vision · Blogue · Contact.
- Page « Secteurs » SUPPRIMÉE ; mot « commercial » retiré partout (le texte À propos fourni par le client mentionne encore les PME — texte verbatim du client).
- Chaque service a sa photo (nettoyage, jauges de diagnostic, réparation, réservoirs de fluides).
- Photos du blogue remplacées par des images fidèles au contenu (thermopompe sous la neige, unité murale, technicien aux jauges, chambre avec unité murale).
- Page Contact redessinée : panneau bleu marine avec coordonnées + adresse Victoriaville + formulaire mailto.

## Architecture
- Frontend uniquement (React 19 + react-router-dom v7), aucun backend.
- framer-motion, lenis, canvas flux d'air maison. Fonts : Outfit / Plus Jakarta Sans / JetBrains Mono.

## Pages livrées
- `/` Accueil : hero cinétique, marquee, encart À propos avec logo complet, aperçu services, aperçu blogue, bande CTA bleu marine.
- `/a-propos` : texte client verbatim + points forts + bande saisons.
- `/services` : 4 chapitres avec photos alternées + calculette d'économies + CTA.
- `/notre-vision` : 4 valeurs (Professionnalisme, Intégrité, Service à la clientèle, Environnement) + image thermopompe.
- `/blogue` + `/blogue/:slug` : 4 articles d'exemple (contenu MOCKÉ à remplacer).
- `/contact` : canaux directs (tel/sms/info@yara.globalair.ca/Facebook), adresse, formulaire mailto vers le Gmail.

## Révision 2026-09-21 (photos client + logo intégral)
- Le logo client COMPLET et NON MODIFIÉ est utilisé partout : menu, pied de page, page À propos, favicon (/public/assets/logo-full.png). L'icône découpée a été supprimée.
- Photos fournies par le client, placées selon les noms de fichiers :
  - /assets/inspection.webp → Service « Inspection & diagnostic »
  - /assets/reparation.jpg → Service « Réparation & dépannage »
  - /assets/fluides.webp → Service « Fluides frigorigènes »
  - /assets/reglementation.webp → Blogue « Fluides frigorigènes : réglementation »
  - /assets/murale-ou-centrale.jpg → Blogue « Thermopompe murale ou centrale »
- Restent en stock : nettoyage (Pexels échafaudage), blogue hiver (pompe sous la neige), blogue signes (unité murale).

## Révision 2026-09-21b (photos blogue)
- Blogue « Comment préparer votre thermopompe pour l'hiver » → /assets/entretien.webp (illustration déneigement envoyée par le client).
- Blogue « Thermopompe murale ou centrale » → affichage object-contain (visuel Daikin non recadré) via champ fit:'contain' (Blogue, Accueil, Article).
- Service « Nettoyage approfondi » : photo client reçue en fichier image direct → /assets/nettoyage.jpg (technicien YG au lavage sous pression d'une unité murale). RÉSOLU.

## Révision 2026-09-22
- Blogue « 5 signes… » → /assets/signes.jpg (unité murale soufflant dans un salon, envoyée par le client).
- Adresse : « Drummondville · Victoriaville — Centre-du-Québec » (+ mention région de Québec). Mise à jour partout : Contact, pied de page, badge Accueil, texte hero.

## Révision 2026-09-22b
- Accueil : encart compact « Notre vision » (citation + 4 valeurs + CTA vers /notre-vision) ajouté entre l'aperçu services et le blogue.
- Trait d'union : « Drummondville-Victoriaville » partout (content.js address/region + badge Accueil).

## Révision 2026-09-22c
- Adresse exacte client : « Drummondville-Victoriaville · Centre-du-Québec » (trait d'union + point médian).
- Encart Vision (accueil) refait en carte claire (fond blanc, texte marine, pastilles bleues, bouton orange pleine largeur sur mobile) pour rester cohérent avec le design du site sur téléphone.

## Révision 2026-09-22d
- Bouton « Découvrir notre vision » (accueil) : bleu #1B76C9 au lieu d'orange, uniforme avec la page.
- Villes : points médians partout — « Drummondville · Victoriaville · Centre-du-Québec » (plus de trait d'union entre les villes ; Centre-du-Québec garde ses traits d'union officiels).

## Révision 2026-09-22e
- « Découvrir notre vision » : transformé en lien texte identique à « En savoir plus » (même taille, même police, même bleu, même flèche), aligné en haut à droite de la carte vision.

## Révision 2026-09-23
- Courriel unique partout : info@yaraglobalair.ca (tout en minuscules). Gmail retiré (pied de page, Contact, formulaire mailto, bouton flottant).
- Logo du menu agrandi (h-14 → sm:h-16).
- Article « 5 signes… » : « climatiseur » → « thermopompe » (titre, extrait, intro).
- « (CVC-R) » rendu insécable (whitespace-nowrap) dans l'encart À propos de l'accueil et la page À propos.

## Backlog
- P0 : Vérifier que la boîte info@yara.globalair.ca existe (le formulaire mailto affiche cette adresse mais envoie via le Gmail ; me dire pour inverser).
- P0 : Remplacer les articles du blogue par du vrai contenu.
- P1 : Photos réelles des interventions du client (le client peut les envoyer).
- P1 : Avis clients / témoignages.
- P2 : SEO (OG tags, sitemap), formulaire avec envoi réel (Resend) si souhaité.
