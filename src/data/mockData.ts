import { CaseStudy, PricingPlan, Testimonial, PseoPage } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bougies-artisanales',
    title: 'Boutique de bougies artisanales',
    category: 'E-Commerce',
    badge: 'ROAS 6.1x',
    problem: 'Site avec du trafic mais très peu de ventes, panier moyen bas et coût d\'acquisition non rentable.',
    strategy: 'Refonte des audiences Meta (Facebook/Instagram), création de visuels UGC dynamiques & retargeting produits à fort panier.',
    metrics: {
      roas: '6.1x',
      salesIncrease: '+215%',
      cpaReduction: '-38%'
    },
    tags: ['E-Commerce', 'Meta Ads', 'UGC Ads'],
    imageUrl: 'https://images.pexels.com/photos/6710862/pexels-photo-6710862.jpeg?auto=compress&cs=tinysrgb&w=800',
    adPlatforms: ['Meta']
  },
  {
    id: 'pizzeria-da-marco',
    title: 'Pizzeria de quartier (Pizzeria da Marco)',
    category: 'Restaurant',
    badge: '+212 commandes',
    problem: 'Dépendance excessive aux plateformes de livraison avec commissions élevées (plus de 30%).',
    strategy: 'Campagnes Google Local & Search géolocalisées + retargeting Meta pour les commandes directes sur le site.',
    metrics: {
      orders: '+212',
      roi: '5.4x',
      commissionReduction: '-60%'
    },
    tags: ['Restaurant', 'Google Ads', 'Local SEO'],
    imageUrl: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
    adPlatforms: ['Google', 'Meta']
  },
  {
    id: 'salon-eclat',
    title: 'Salon de coiffure & beauté (Salon Éclat)',
    category: 'Beauté',
    badge: '3x Rendez-vous',
    problem: 'Salon plein de talent mais manquant de visibilité locale et dépendance au bouche-à-oreille.',
    strategy: 'Croissance ciblée Instagram, contenu avant/après en Reels, et campagnes de réservation locales directes.',
    metrics: {
      followers: '12K',
      rdvMultiplier: '3x',
      caAddressed: '€8.5K'
    },
    tags: ['Salon de Beauté', 'Croissance Instagram', 'Local Ads'],
    imageUrl: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800',
    adPlatforms: ['Meta', 'TikTok']
  },
  {
    id: 'dropshipping-fitness',
    title: 'Boutique dropshipping fitness (DropSprint)',
    category: 'Dropshipping',
    badge: 'ROAS 4.3x',
    problem: 'Gagnant identifié mais coûts d\'acquisition trop élevés sur Meta Ads standard.',
    strategy: 'Viraux TikTok + créatifs UGC engageants, scaling des audiences à fort pouvoir d\'achat.',
    metrics: {
      roas: '4.3x',
      caAddressed: '€47K',
      views: '214K'
    },
    tags: ['Dropshipping', 'TikTok Ads', 'UGC Viraux'],
    imageUrl: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    adPlatforms: ['TikTok', 'Meta']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    duration: 'Abonnement 1 mois',
    price: 1499,
    currency: 'DHS',
    period: 'mois',
    features: [
      'Gestion Meta Ads (1 plateforme: FB/IG)',
      'Création de 2 campagnes optimisées',
      'Configuration de l\'audience & Pixel Meta',
      'Rapport mensuel de performance clair',
      'Support réactif par email & WhatsApp'
    ],
    ctaText: 'Commencer l\'offre Essentiel'
  },
  {
    id: 'croissance',
    name: 'Croissance',
    duration: 'Abonnement 2 mois',
    price: 2799,
    currency: 'DHS',
    period: 'mois',
    isPopular: true,
    savingsBadge: 'Économisez 199 DHS/mois',
    features: [
      'Tout du plan Essentiel inclus',
      'Meta Ads + TikTok Ads ou Google Ads',
      'Création de 4 campagnes optimisées',
      'Optimisation bisemestrielle approfondie',
      'Social media management (1 réseau social)',
      'Rapport bimensuel & call de suivi vidéo',
      'Support prioritaire WhatsApp 6j/7'
    ],
    ctaText: 'Réserver l\'offre Croissance'
  },
  {
    id: 'partenaire',
    name: 'Partenaire',
    duration: 'Abonnement 3 mois',
    price: 3900,
    currency: 'DHS',
    period: 'mois',
    savingsBadge: '★ Le plus avantageux — économisez 597 DHS',
    features: [
      'Tout du plan Croissance inclus',
      'Gestion Multi-Canal: Meta + Google + TikTok Ads',
      'Gestion de followers (2 réseaux sociaux)',
      'Stratégie de contenu complète & Copywriting',
      'Landing page ou page produit optimisée conversion',
      'Call mensuel stratégique dédié de 60 min',
      'Canal WhatsApp privé direct avec réponse instantanée'
    ],
    ctaText: 'Devenir Partenaire'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Salma Bennani',
    role: 'Fondatrice',
    business: 'Boutique Artisanale • E-commerce',
    initials: 'SB',
    rating: 5,
    avatarColor: 'bg-emerald-600',
    text: '« En 2 mois, nos ventes en ligne ont doublé au Maroc. Enfin un Media Buyer qui comprend le e-commerce et qui explique la stratégie clairement. Le ROAS de 6.1x a dépassé nos prévisions ! »',
    videoThumbUrl: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoDuration: '1:45'
  },
  {
    id: '2',
    name: 'Youssef Benali',
    role: 'Gérant',
    business: 'Restaurant & Traiteur Casa • Restauration',
    initials: 'YB',
    rating: 5,
    avatarColor: 'bg-[#00FF5F]',
    text: '« On reçoit des réservations et des commandes directes chaque jour au lieu de dépendre des commissions de livraison. Le ciblage local Meta & Google Ads est ultra-efficace. »',
    videoThumbUrl: 'https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoDuration: '2:10'
  },
  {
    id: '3',
    name: 'Fatima Zahra',
    role: 'Propriétaire',
    business: 'Maison de Beauté • Casablanca',
    initials: 'FZ',
    rating: 5,
    avatarColor: 'bg-[#0554C5]',
    text: '« Toujours réactif, des idées créatives captivantes et des résultats impressionnants sur Instagram & TikTok. Le salon a triplé ses rendez-vous en 3 mois. Merci Elmehdi ! »',
    videoThumbUrl: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoDuration: '1:15'
  },
  {
    id: '4',
    name: 'Karim Idrissi',
    role: 'CEO',
    business: 'Fitness Pro Maroc • E-commerce & Leads',
    initials: 'KI',
    rating: 5,
    avatarColor: 'bg-[#0554C5]',
    text: '« Honnête et transparent. Il m\'a dit clairement quel budget était nécessaire pour scaler nos campagnes Meta Ads au Maroc et les résultats ont suivi dès la 2ème semaine. »'
  },
  {
    id: '5',
    name: 'Amine Berrada',
    role: 'Co-fondateur',
    business: 'Berrada Real Estate • Immobilier & Services',
    initials: 'AB',
    rating: 5,
    avatarColor: 'bg-cyan-600',
    text: '« Le seul media buyer freelance qui nous apporte des prospects qualifiés et un coût par lead ultra-compétitif. Les rapports hebdomadaires sont limpides. »'
  },
  {
    id: '6',
    name: 'Houda Tazi',
    role: 'Directrice Marketing',
    business: 'Tazi Studio • Agence Créative & Consulting',
    initials: 'HT',
    rating: 5,
    avatarColor: 'bg-indigo-600',
    text: '« Professionnel et passionné. Les angles publicitaires et créatifs vidéo sont au top. Notre retour sur investissement média est imbattable. »'
  }
];

export const PSEO_PAGES: PseoPage[] = [
  {
    slug: 'e-commerce-bougies',
    title: 'Media Buyer Spécialisé E-Commerce & Bougies Artisanales',
    metaDescription: 'Boostez les ventes de votre boutique de bougies & senteurs maison grâce à nos campagnes Meta Ads ciblées à fort ROAS (Moyenne 6.1x).',
    longTailKeywords: [
      'media buyer e-commerce bougies artisanales',
      'publicité facebook ads bougie parfumée',
      'expert meta ads senteur maison maroc',
      'scaling boutique en ligne bougies roas élevé',
      'agence media buying e commerce artisanat'
    ],
    industry: 'E-Commerce & Artisanat',
    targetPlatform: 'Meta Ads (Facebook & Instagram)',
    location: 'Maroc & International',
    heroHeadline: 'Multipliez par 6 le ROAS de votre boutique de bougies artisanales',
    heroSubtitle: 'Capturez l\'attention des passionnés de décoration et de senteurs grâce à des vidéos UGC captivantes et des reciblages ultra-précis.',
    projectedRoas: '6.1x',
    typicalCpa: '45 DHS - 85 DHS',
    keyStrategies: [
      'Création de visuels lifestyle chaleureux et vidéos de déballage (UGC)',
      'Structure d\'audience par centres d\'intérêt (Décoration, Bien-être, Cadeaux)',
      'Campagnes de retargeting dynamique avec paniers abandonnés',
      'Optimisation des pages produits pour maximiser le taux de conversion'
    ],
    faqs: [
      {
        question: 'Quel budget minimum faut-il pour démarrer des pub de bougies ?',
        answer: 'Un budget ad spend initial de 1 500 à 3 000 DHS par mois est parfait pour tester les créatifs et identifier vos meilleures audiences.'
      },
      {
        question: 'Fournissez-vous les vidéos et images publicitaires ?',
        answer: 'Oui ! Nous vous conseillons sur le format UGC le plus performant et scénarisons les vidéos pour booster le taux de clic.'
      }
    ]
  },
  {
    slug: 'pizzeria-restaurant',
    title: 'Publicité Google Ads & Meta Ads pour Pizzerias et Restaurants',
    metaDescription: 'Générez des commandes directes sans commission tiers pour votre pizzeria ou restaurant avec des campagnes d\'acquisition géolocalisées.',
    longTailKeywords: [
      'publicité google ads pour pizzeria',
      'media buyer restaurant acquisition directe',
      'marketing local pizzeria livraison sans commission',
      'expert google search restaurant commande en ligne',
      'facebook ads livraison pizza marrakech casablanca'
    ],
    industry: 'Restauration & Alimentation',
    targetPlatform: 'Google Ads & Meta Ads',
    location: 'Local & Régional',
    heroHeadline: 'Libérez votre pizzeria des commissions excessives des applications',
    heroSubtitle: 'Acquérez vos propres clients fidèles grâce aux recherches d\'urgence sur Google Search ("Pizzeria près de moi") et aux publicités appétissantes sur Instagram.',
    projectedRoas: '5.4x',
    typicalCpa: '15 DHS - 30 DHS par commande',
    keyStrategies: [
      'Google Search Ads sur les mots-clés d\'intention d\'achat locale immédiate',
      'Campagnes Instagram géolocalisées dans un rayon de 5 km autour de votre restaurant',
      'Offres de bienvenue exclusives pour inciter à la première commande sur votre site',
      'Retargeting automatique aux heures de pointe (Déjeuner & Dîner)'
    ],
    faqs: [
      {
        question: 'Comment détourner les clients des applications comme Glovo / Deliveroo ?',
        answer: 'En leur offrant une réduction directe ou un dessert offert lorsqu\'ils commandent directement sur votre propre plateforme.'
      },
      {
        question: 'À quelle vitesse voit-on les premières commandes ?',
        answer: 'Dès les 24 à 48 heures suivant le lancement des campagnes Google Search.'
      }
    ]
  },
  {
    slug: 'salon-beaute',
    title: 'Acquisition de Clients pour Salons de Coiffure & Beauté',
    metaDescription: 'Remplissez le carnet de rendez-vous de votre salon de beauté ou coiffure grâce à la publicité ciblée et la création de contenu Instagram.',
    longTailKeywords: [
      'media buyer salon de coiffure maroc',
      'publicité instagram salon de beauté rdv',
      'acquisition client institut de beauté facebook ads',
      'expert marketing local coiffure lissage lissage brésilien',
      'développer clientèle centre esthétique publicite'
    ],
    industry: 'Beauté & Esthétique',
    targetPlatform: 'Instagram & TikTok Ads',
    location: 'Maroc & France',
    heroHeadline: 'Remplissez votre carnet de rendez-vous 3x plus vite',
    heroSubtitle: 'Mettez en avant le talent de vos coiffeurs et esthéticiennes avec des vidéos avant/après hypnotisantes et des offres de bienvenue irresistibles.',
    projectedRoas: '4.8x',
    typicalCpa: '35 DHS - 70 DHS par RDV',
    keyStrategies: [
      'Formats Reels et TikTok axés sur la transformation Avant / Après',
      'Campagnes à objectif de messages WhatsApp et réservations en ligne directes',
      'Ciblage géographique ciblé sur les femmes et hommes du quartier / ville',
      'Programmes de parrainage et offres d\'inauguration / saisonnières'
    ],
    faqs: [
      {
        question: 'Est-ce que WhatsApp fonctionne bien pour les réservations ?',
        answer: 'Absolument ! Au Maroc et en Europe, diriger les prospects vers WhatsApp avec un message pré-rempli génère un taux de conversion au RDV supérieur à 35%.'
      }
    ]
  },
  {
    slug: 'dropshipping-scaling',
    title: 'Scaling Media Buying TikTok Ads pour Boutiques Dropshipping',
    metaDescription: 'Passez de 10 à 100+ commandes par jour sur vos produits winning grâce au media buying agile sur TikTok Ads et Meta Ads.',
    longTailKeywords: [
      'media buyer dropshipping tiktok ads maroc',
      'scaling winning product facebook ads',
      'expert tiktok ads e commerce ecom',
      'media buying ecom produit gagnant roas 4x',
      'agence scaling dropshipping france maroc'
    ],
    industry: 'Dropshipping & E-Commerce',
    targetPlatform: 'TikTok Ads & Meta Ads',
    location: 'International / COD / POD',
    heroHeadline: 'Scalez vos Winning Products jusqu\'à 50K€+ de CA Mensuel',
    heroSubtitle: 'Évitez la saturation de vos ad sets grâce à une rotation de créatifs UGC et des structures d\'enchères (Bid Caps / Cost Caps) éprouvées.',
    projectedRoas: '4.3x',
    typicalCpa: '60 DHS - 120 DHS par vente',
    keyStrategies: [
      'Spark Ads et UGC authentiques réalisés par des créateurs de contenu natifs',
      'Structure CBO / ABO hybride pour tester et scaler rapidement sans cramer le budget',
      'Optimisation du funnel de commande (Cash on Delivery / Paiement Carte)',
      'Suivi en temps réel des métriques clés (Hook Rate, Hold Rate, CTR, CPA)'
    ],
    faqs: [
      {
        question: 'Gérez-vous le Cash On Delivery (Paiement à la livraison) ?',
        answer: 'Oui, nous optimisons les campagnes spécifiquement pour maximiser le taux de confirmation de commande et réduire les annulations.'
      }
    ]
  },
  {
    slug: 'google-ads-maroc',
    title: 'Expert Certified Google Ads & Search Marketing au Maroc',
    metaDescription: 'Positionnez votre entreprise au sommet de Google pour capter les prospects à forte intention d\'achat au Maroc et à l\'étranger.',
    longTailKeywords: [
      'expert google ads maroc casablanca rabat',
      'gestionnaire de campagne google search shopping',
      'media buyer certifié google partner',
      'référencement payant sem entreprise marocaine',
      'agence sea publicité sur moteur de recherche'
    ],
    industry: 'Multi-Secteur (B2B / B2C / Services)',
    targetPlatform: 'Google Ads (Search, Shopping, Display, Performance Max)',
    location: 'Maroc, France & Canada',
    heroHeadline: 'Soyez le #1 quand vos futurs clients vous cherchent sur Google',
    heroSubtitle: 'Captez les recherches chaudes et à fort pouvoir d\'achat avant vos concurrents grâce à des campagnes Search et Performance Max hyper optimisées.',
    projectedRoas: '5.8x',
    typicalCpa: 'Variable selon le secteur',
    keyStrategies: [
      'Audit approfondi des mots-clés négatifs pour éliminer le gaspillage de budget',
      'Rédaction d\'annonces à fort taux de clic (CTR) avec extensions dynamiques',
      'Mise en place du suivi de conversion précis (GTM + GA4 + Server-side)',
      'A/B testing continu des landing pages de destination'
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre Google Ads et Facebook Ads ?',
        answer: 'Google Ads capte l\'intention d\'achat active (quand la personne cherche un produit/service), tandis que Facebook Ads suscite le besoin (marketing d\'interruption).'
      }
    ]
  },
  {
    slug: 'meta-ads-roas',
    title: 'Gestion de Campagnes Meta Ads (Facebook & Instagram) à Haut ROAS',
    metaDescription: 'Maximisez votre retour sur investissement publicitaire avec des stratégies Meta Ads de pointe adaptées au marché francophone et international.',
    longTailKeywords: [
      'gestionnaire facebook ads freelance maroc',
      'expert instagram ads conversion e commerce',
      'media buying meta ads roas élevé',
      'optimisation pixel meta cpa bas',
      'campagne publicitaire retargeting instagram'
    ],
    industry: 'E-Commerce & Lead Gen',
    targetPlatform: 'Meta Ads (FB/IG)',
    location: 'Global',
    heroHeadline: 'Transformez chaque Dirham / Euro investi sur Meta en Profit',
    heroSubtitle: 'Bâtissez une machine d\'acquisition prévisible grâce aux audiences Lookalike, au ciblage broad moderne et à une stratégie créative inarrêtable.',
    projectedRoas: '5.2x',
    typicalCpa: 'Sur-mesure',
    keyStrategies: [
      'Stratégie Créative-First (Hook 3s, Offres Irrésistibles, Carrousels)',
      'Déploiement du suivi Conversions API (CAPI) pour contrecarrer iOS 14+',
      'Audience Broad & Machine Learning pour une scalabilité illimitée',
      'Funnel de Retargeting multi-étapes'
    ],
    faqs: [
      {
        question: 'Comment contourner les restrictions iOS 14+ sur Meta ?',
        answer: 'Nous installons la Conversions API (CAPI) côté serveur pour remonter 100% des données d\'achat de manière sécurisée.'
      }
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: 'Boutique Lumière', category: 'E-commerce' },
  { name: 'Pizzeria da Marco', category: 'Restaurant' },
  { name: 'Salon Éclat', category: 'Beauté' },
  { name: 'DropSprint', category: 'Fitness' },
  { name: 'Gym FitZone', category: 'Sport' },
  { name: 'Studio CG', category: 'Photographie' },
  { name: 'Mastering', category: 'EdTech' },
  { name: 'Samcart', category: 'SaaS' },
  { name: 'Grant Cardone', category: 'Events' }
];

export const GENERAL_FAQS = [
  {
    question: 'Combien coûte la publicité en plus de vos honoraires ?',
    answer: 'Le budget publicitaire (Ad Spend) est payé directement par vous aux plateformes (Meta, Google, TikTok). Nous recommandons un budget de départ de 1 500 DHS à 5 000 DHS / mois selon vos objectifs.'
  },
  {
    question: 'Quand vais-je voir des résultats ?',
    answer: 'Pour les campagnes Google Search et retargeting Meta, les premiers résultats (prospects ou ventes) apparaissent généralement dès les 48 premières heures après validation des annonces. Pour le scaling global, une période d\'apprentissage de 7 à 14 jours permet d\'atteindre le ROAS cible.'
  },
  {
    question: 'Quel budget publicitaire minimum recommandez-vous ?',
    answer: 'Nous accompagnons les petites et moyennes entreprises à partir de 1 500 DHS de budget ad spend mensuel. Le plus important est d\'avoir une marge suffisante pour tester et optimiser.'
  },
  {
    question: 'Je n\'y connais rien en publicité en ligne, c\'est un problème ?',
    answer: 'Pas du tout ! Nous gérons l\'intégralité du processus technique : création de compte, installation des pixels, rédaction des textes, paramétrage des campagnes et suivi. Vous recevez simplement un rapport clair en français et les nouveaux clients dans votre entreprise.'
  },
  {
    question: 'Comment se passe le début de la collaboration ?',
    answer: '1. Échange initial rapide sur WhatsApp ou appel pour comprendre vos besoins.\n2. Audit gratuit de vos médias existants.\n3. Validation du plan d\'action et accès aux comptes publicitaires.\n4. Lancement des premières campagnes sous 48 à 72h.'
  },
  {
    question: 'Puis-je résilier en cours de contrat ?',
    answer: 'Nos offres sont conçues sans engagement contraignant à rallonge. Chaque période renouvelable peut être ajustée selon la croissance de votre entreprise.'
  }
];
