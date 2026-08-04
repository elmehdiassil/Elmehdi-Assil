import React from 'react';
import { Target, Share2, TrendingUp, FileText, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

interface ServicesGridProps {
  whatsappNumber: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ whatsappNumber }) => {
  const getServiceWhatsappUrl = (serviceName: string) => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour Elmehdi, je suis intéressé par votre prestation : ${serviceName}. Pouvons-nous échanger ?`
    )}`;
  };

  const SERVICES = [
    {
      icon: Target,
      title: 'Media Buying & Acquisition Payante',
      subtitle: 'Meta Ads, Google Ads & TikTok Ads',
      tag: 'Le Cœur de Mon Expertise',
      description: 'Création, paramétrage avancé et optimisation en continu de vos campagnes publicitaires payantes pour générer des ventes directes et des leads qualifiés.',
      points: [
        'Configuration du Pixel Meta & Conversions API (CAPI)',
        'Campagnes Google Search (Intention d\'achat) & PMax',
        'Création de visuels UGC & copy-writing persuasif',
        'Structure d\'audience Broad & Retargeting dynamique'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      subtitle: 'Gestion d\'Image & Animation de Communauté',
      tag: 'Fidélisation & Crédibilité',
      description: 'Développez une présence de marque forte et professionnelle sur Instagram, Facebook et TikTok sans y passer toutes vos journées.',
      points: [
        'Planning de publication mensuel régulier',
        'Création de visuels épurés & vidéos courtes (Reels/TikTok)',
        'Réponse aux commentaires et modération',
        'Gestion de l\'image de marque et stories quotidiennes'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Croissance Organique & SEO Local',
      subtitle: 'Visibilité Long-Terme Sans Budget Pub',
      tag: 'Trafic Gratuit Perpétuel',
      description: 'Optimisation de votre présence sur Google Maps, avis clients et stratégies de mots-clés de niche pour attirer des clients naturellement.',
      points: [
        'Fiche Google My Business / Google Maps optimisée #1',
        'Pages d\'atterrissage ciblées mots-clés longue traîne (pSEO)',
        'Stratégie de collecte d\'avis 5 étoiles automatisée',
        'Audit SEO technique de votre site web'
      ]
    },
    {
      icon: FileText,
      title: 'Stratégie de Contenu & Conversion',
      subtitle: 'Copywriting & Opt-in Funnels',
      tag: 'Conversion Maximisée',
      description: 'Transformez vos visiteurs en acheteurs avec des messages clairs, des landing pages optimisées et des offres irrésistibles.',
      points: [
        'Rédaction de textes publicitaires percutants (Copywriting)',
        'Optimisation des pages produits (UX / UI Conversion)',
        'Scripts d\'appels et messages de relance WhatsApp',
        'A/B testing des titres et boutons d\'action'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            Services Spécialisés
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Tout Ce Qu'il Faut Pour <span className="text-[#0554C5]">Vendre Plus</span> En Ligne
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Une approche à 360° centrée sur les résultats financiers de votre entreprise.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((serv, idx) => {
            const Icon = serv.icon;
            const waLink = getServiceWhatsappUrl(serv.title);

            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between group space-y-6 border border-slate-200 hover:border-[#0554C5] hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0554C5] border border-blue-200 flex items-center justify-center shrink-0 group-hover:bg-[#0554C5] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#0554C5] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      {serv.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-['Inter'] text-slate-900">
                      {serv.title}
                    </h3>
                    <p className="text-xs font-bold text-[#0554C5] mt-1">
                      {serv.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {serv.description}
                  </p>

                  {/* Points Checkmarks */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-200">
                    {serv.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0554C5] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#0554C5] text-slate-800 hover:text-white font-extrabold text-sm border border-slate-300 hover:border-[#0554C5] shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0554C5] group-hover:text-white" />
                    <span>Demander cette prestation (WhatsApp)</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
