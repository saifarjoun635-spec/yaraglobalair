export const COMPANY = {
    name: 'Yara Global Air',
    tagline: 'Climatisation · Chauffage · Réfrigération',
    phoneDisplay: '438-680-4054',
    phoneHref: 'tel:+14386804054',
    smsHref: 'sms:+14386804054',
    email: 'yara.globalair@gmail.com',
    emailHref: 'mailto:yara.globalair@gmail.com',
    emailPro: 'info@yara.globalair.ca',
    emailProHref: 'mailto:info@yara.globalair.ca',
    facebook: 'https://www.facebook.com/profile.php?id=100063757231349&locale=gl_ES#',
    address: 'Victoriaville — Centre-du-Québec',
    region: 'Victoriaville, le Centre-du-Québec et la région de Québec',
};

export const SERVICES = [
    {
        id: 'nettoyage',
        num: '01',
        title: 'Nettoyage approfondi & entretien préventif',
        tagline: 'Performance et air sain, saison après saison',
        description:
            'Nettoyage spécialisé des thermopompes et des systèmes de climatisation pour éliminer les contaminants, optimiser le rendement énergétique, préserver la performance de votre système et protéger votre santé.',
        points: [
            'Élimination des contaminants, poussières et moisissures',
            'Rendement énergétique optimisé — des factures allégées',
            'Durée de vie prolongée de vos équipements',
            'Un air intérieur plus sain pour toute la famille',
        ],
        icon: 'sparkles',
        image: 'https://images.pexels.com/photos/27681472/pexels-photo-27681472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 'inspection',
        num: '02',
        title: 'Inspection & diagnostic technique',
        tagline: "L'œil méthodique de l'expert certifié",
        description:
            "Évaluation méthodique de l'état de vos installations, analyse des pressions, lecture des codes d'erreur et recherche précise de pannes.",
        points: [
            'Évaluation méthodique complète de vos installations',
            'Analyse des pressions et des performances',
            "Lecture des codes d'erreur du fabricant",
            'Recherche précise de pannes — aucune devinette',
        ],
        icon: 'gauge',
        image: '/assets/inspection.webp',
    },
    {
        id: 'reparation',
        num: '03',
        title: 'Réparation & dépannage',
        tagline: 'Intervention rapide, réparation durable',
        description:
            "Service d'intervention rapide et ciblé pour rétablir le bon fonctionnement de vos équipements résidentiels.",
        points: [
            'Intervention rapide, directement chez vous',
            'Réparations ciblées, pensées pour durer',
            'Thermopompes, climatiseurs et systèmes CVC-R',
            'Un seul appel suffit : 438-680-4054',
        ],
        icon: 'wrench',
        image: '/assets/reparation.jpg',
    },
    {
        id: 'fluides',
        num: '04',
        title: 'Gestion écoresponsable des fluides frigorigènes',
        tagline: "Certifié, conforme et respectueux de l'environnement",
        description:
            "Interventions techniques certifiées pour la manipulation sécuritaire des fluides, dans le strict respect de l'environnement.",
        points: [
            'Techniciens certifiés en manipulation des halocarbures',
            'Récupération et recyclage conformes aux normes',
            'Strict respect de la réglementation environnementale',
            'Traçabilité complète de chaque intervention',
        ],
        icon: 'leaf',
        image: '/assets/fluides.webp',
    },
];

export const ARTICLES = [
    {
        slug: 'preparer-thermopompe-hiver',
        title: "Comment préparer votre thermopompe pour l'hiver québécois",
        tag: 'Entretien',
        date: '12 juin 2026',
        readTime: '5 min',
        excerpt:
            "Glace sur l'unité extérieure, cycles de dégivrage, dégagement à prévoir : voici comment arriver en novembre l'esprit tranquille.",
        image: '/assets/entretien.webp',
        body: [
            "Au Québec, une thermopompe travaille fort. Entre les nuits à -25 °C et les redoux de mars, votre système enchaîne les cycles de chauffage et de dégivrage. Un peu de préparation à l'automne fait toute la différence entre un hiver confortable et une panne au pire moment.",
            "Commencez par l'essentiel : dégagez l'unité extérieure. Laissez au moins 50 cm d'espace tout autour, coupez la végétation qui s'approche et assurez-vous que l'unité est surélevée pour éviter qu'elle ne s'ensable dans la neige et la glace.",
            "Côté intérieur, nettoyez ou remplacez les filtres. Des filtres obstrués forcent le compresseur, réduisent le rendement et peuvent faire grimper votre facture d'électricité de 15 à 25 %. C'est le geste le plus simple et le plus rentable de la saison.",
            "Surveillez ensuite les signes faibles : un bruit inhabituel, un cycle de dégivrage trop fréquent, de la glace qui s'accumule sur les serpentins ou une air soufflée tiède plutôt que chaude. Ces symptômes indiquent souvent un problème de fluide frigorigène ou un capteur fatigué.",
            "Enfin, rien ne remplace un entretien professionnel annuel. Une inspection complète — pressions, codes d'erreur, état des serpentins — permet de corriger les petits problèmes avant qu'ils ne deviennent des réparations coûteuses en pleine vague de froid.",
        ],
    },
    {
        slug: 'signes-climatiseur-entretien',
        title: "5 signes que votre climatiseur a besoin d'un entretien",
        tag: 'Conseils',
        date: '28 mai 2026',
        readTime: '4 min',
        excerpt:
            'Bruit, odeurs, facture qui grimpe : votre climatiseur vous parle. Apprenez à reconnaître les signaux avant la panne estivale.',
        image: 'https://images.pexels.com/photos/38788452/pexels-photo-38788452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        body: [
            'Un climatiseur ou une thermopompe en mode froid ne tombe presque jamais en panne sans avertissement. Voici les cinq signaux que nos techniciens observent le plus souvent avant un bris complet.',
            "1. L'air est moins froid qu'avant. Si le système tourne plus longtemps pour atteindre la même température, les serpentins sont probablement encrassés ou le niveau de fluide frigorigène est insuffisant.",
            "2. Des odeurs d'humidité ou de moisi. Elles trahissent une accumulation de contaminants dans l'unité murale — un problème de confort, mais aussi de qualité de l'air pour votre famille.",
            '3. Des bruits nouveaux : cliquetis, sifflement, vibration. Chaque son a sa cause — ventilateur désaxé, compresseur fatigué, débris dans l\'unité — et chacune se règle plus facilement tôt que tard.',
            "4. La facture d'électricité grimpe sans explication. Un système sale peut consommer jusqu'à 30 % de plus pour le même confort.",
            "5. De l'eau qui coule de l'unité intérieure. Le drain de condensats est probablement bloqué — une intervention rapide évite les dégâts d'eau sur vos murs. Si vous reconnaissez l'un de ces signes, un nettoyage approfondi redonnera à votre système son rendement d'origine.",
        ],
    },
    {
        slug: 'fluides-frigorigenes-reglementation',
        title: 'Fluides frigorigènes : ce que dit la réglementation au Québec',
        tag: 'Environnement',
        date: '9 mai 2026',
        readTime: '6 min',
        excerpt:
            'Manipulation certifiée, récupération obligatoire, nouvelles générations de gaz : ce que tout propriétaire devrait savoir.',
        image: '/assets/reglementation.webp',
        body: [
            'Les fluides frigorigènes sont le cœur de votre système de climatisation ou de chauffage — et aussi sa composante la plus réglementée. Au Canada, leur manipulation est encadrée par le Code de pratique environnementale et exige une certification spécifique.',
            "Concrètement, seul un technicien titulaire d'un certificat en manipulation des halocarbures peut légalement ajouter, retirer ou récupérer du fluide frigorigène. Le fameux « rajout de gaz » improvisé est non seulement illégal, mais dommageable : une fuite non colmatée rejette un gaz à fort potentiel de réchauffement global.",
            'La bonne approche est toujours la même : localiser la fuite, la réparer, puis recharger le système selon les spécifications exactes du fabricant. Une simple recharge sans réparation, c\'est traiter le symptôme et garantir la rechute.',
            "L'industrie évolue aussi rapidement : les anciens fluides comme le R-22 sont éliminés, le R-410A est graduellement remplacé par des alternatives à plus faible impact comme le R-454B et le R-32. Lors d'un remplacement d'équipement, ces choix ont un vrai impact environnemental et sur vos coûts à long terme.",
            "Chez Yara Global Air, chaque intervention sur un circuit frigorifique est certifiée, documentée et effectuée dans le strict respect de l'environnement : récupération complète des fluides, traçabilité et recyclage conforme.",
        ],
    },
    {
        slug: 'thermopompe-murale-ou-centrale',
        title: 'Thermopompe murale ou centrale : laquelle choisir ?',
        tag: 'Guide',
        date: '21 avril 2026',
        readTime: '5 min',
        excerpt:
            'Deux technologies, deux philosophies de confort. Les vrais critères pour choisir selon votre bâtiment et votre budget.',
        image: '/assets/murale-ou-centrale.jpg',
        fit: 'contain',
        body: [
            "C'est LA question qu'on nous pose le plus souvent. La réponse dépend d'abord de votre bâtiment, pas de la technologie.",
            'La thermopompe murale (mini-split) brille dans les maisons sans conduits de ventilation : duplex, triplex, condos et maisons plus anciennes. Installation rapide, excellent rendement énergétique, contrôle par zone — vous ne climatisez que les pièces que vous utilisez.',
            "La thermopompe centrale s'intègre à un réseau de conduits existant. Elle distribue l'air uniformément dans toute la maison, reste discrète et convient particulièrement aux grandes surfaces et aux constructions récentes déjà équipées d'un système central.",
            "Côté budget, la murale coûte généralement moins cher à installer si vous n'avez pas de conduits. La centrale devient avantageuse quand les conduits existent déjà. Dans les deux cas, les subventions disponibles au Québec (LogisVert d'Hydro-Québec) peuvent réduire sensiblement la facture — nous vous guidons dans les démarches.",
            "Le meilleur choix reste celui fait sur place : une visite d'évaluation permet de mesurer la charge thermique réelle de votre bâtiment et de dimensionner l'équipement correctement. Ni trop puissant, ni trop juste — exactement ce qu'il faut.",
        ],
    },
];

export const MARQUEE_ITEMS = [
    'Entretien préventif',
    'Thermopompes murales & centrales',
    'Diagnostic écoénergétique',
    'Climatisation & réfrigération',
    'Fluides frigorigènes certifiés',
    'Service de proximité',
    'Dépannage rapide — 438-680-4054',
];

export const ABOUT_TEXT = {
    title: 'À propos de Yara Global Air',
    tagline: "L'expert de votre confort thermique et écoresponsable dans le Centre-du-Québec.",
    paragraphs: [
        "Fondée avec la volonté d'offrir un service irréprochable, Yara Global Air est une entreprise spécialisée dans les solutions de confort pour le secteur résidentiel. Nous intervenons au quotidien auprès des particuliers (propriétaires de maisons, duplex, triplex et condos) ainsi que des PME (bureaux, commerces de détail et restaurants) pour leur offrir des prestations de haute qualité en climatisation, réfrigération, ventilation et chauffage (CVC-R).",
    ],
};

export const VISION_TEXT = {
    title: 'Notre vision',
    lead: "Nous aspirons à être la référence incontournable de notre région grâce à un savoir-faire technique rigoureux et un service de proximité incomparable. Notre travail repose sur des valeurs fortes :",
    values: [
        {
            title: 'Professionnalisme et Qualité',
            text: "Une maîtrise technique approfondie et l'utilisation d'équipements de pointe pour des installations durables.",
            icon: 'award',
        },
        {
            title: 'Intégrité et Transparence',
            text: 'Des conseils honnêtes et axés uniquement sur vos besoins réels.',
            icon: 'handshake',
        },
        {
            title: 'Service à la clientèle',
            text: 'Une approche humaine, une écoute active et un suivi rigoureux.',
            icon: 'heart',
        },
        {
            title: "Protection de l'environnement",
            text: "Un engagement écoresponsable concret à travers l'optimisation énergétique de vos systèmes et une manipulation sécuritaire et rigoureuse des fluides frigorigènes, conformément aux normes les plus strictes.",
            icon: 'leaf',
        },
    ],
};
