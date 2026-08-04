import React from 'react';
import { ShoppingBag, Briefcase, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

interface ClientsSectionProps {
  whatsappNumber: string;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ whatsappNumber }) => {
  const CLIENT_TYPES = [
    {
      id: 'boutiques-en-ligne',
      title: 'Boutiques En Ligne',
      subtitle: 'E-Commerce & Brands',
      icon: ShoppingBag,
      description: 'Marques D2C, boutiques e-commerce locales et internationales cherchant à scaler leur chiffre d\'affaires et maximiser leur ROAS.',
      features: ['Scaling Meta & TikTok Ads', 'Optimisation Fiches Produits', 'Retargeting Dynamique']
    },
    {
      id: 'agences-services',
      title: 'Agences De Services',
      subtitle: 'Agences & B2B',
      icon: Briefcase,
      description: 'Agences digitales, cabinets de conseil et prestataires B2B désireux de générer des prospects qualifiés et externaliser leur media buying.',
      features: ['Génération de Leads Qualifiés', 'Funnels de Conversion B2B', 'Acquisition Google Search']
    },
    {
      id: 'entrepreneurs-ecom',
      title: 'Entrepreneurs E-Commerce',
      subtitle: 'Solopreneurs & Fondateurs',
      icon: Rocket,
      description: 'Fondateurs indépendants, créateurs de marques et infopreneurs recherchant un suivi direct, ultra-réactif et sans intermédiaire.',
      features: ['Stratégie Ad Spend Sur-Mesure', 'Canal WhatsApp Dédié', 'Audit & Recommandations']
    }
  ];

  const getWaLinkForType = (title: string) => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour Elmehdi, je suis intéressé par vos services de media buying pour : ${title}`
    )}`;
  };

  return (
    <section id="clients" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0554C5]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider inline-block">
            Accompagnement Sur-Mesure
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Mes <span className="text-[#0554C5]">Clients</span> & Typologies
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Mes services de media buying s'adressent spécifiquement à 3 catégories de professionnels engagés dans leur croissance :
          </p>
        </div>

        {/* 3 Client Types Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_TYPES.map((type) => {
            const Icon = type.icon;

            return (
              <div
                key={type.id}
                className="bg-slate-50 hover:bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-6 group shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#0554C5] flex items-center justify-center group-hover:bg-[#0554C5] group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      {type.subtitle}
                    </span>
                    <h3 className="text-2xl font-black font-['Inter'] text-slate-900 mt-0.5">
                      {type.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5 pt-2">
                    {type.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0554C5] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={getWaLinkForType(type.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-white group-hover:bg-[#0554C5] text-slate-800 group-hover:text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all border border-slate-200 group-hover:border-[#0554C5] shadow-xs"
                  >
                    <span>Discuter pour {type.title}</span>
                    <ArrowRight className="w-4 h-4" />
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
