import React, { useState } from 'react';
import { Target, Share2, TrendingUp, FileText, CheckCircle2, ArrowRight, MessageCircle, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface ServicesPricingSectionProps {
  whatsappNumber: string;
}

export const ServicesPricingSection: React.FC<ServicesPricingSectionProps> = ({ whatsappNumber }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'services' | 'tarifs'>('all');

  const getServiceWhatsappUrl = (serviceName: string) => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour Elmehdi, je suis intéressé par la prestation : ${serviceName}. Pouvons-nous en discuter ?`
    )}`;
  };

  const getPlanWhatsappUrl = (planName: string, price: number) => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour Elmehdi, je souhaite souscrire au plan "${planName}" à ${price.toLocaleString()} DHS.`
    )}`;
  };

  const SERVICES = [
    {
      id: 'media-buying',
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
      ],
      includedIn: 'Inclus dans tous les abonnements'
    },
    {
      id: 'social-media',
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
      ],
      includedIn: 'Option & Formule Croissance/Partenaire'
    },
    {
      id: 'croissance-organique',
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
      ],
      includedIn: 'Formule Partenaire 3 Mois'
    },
    {
      id: 'strategie-contenu',
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
      ],
      includedIn: 'Inclus dans tous les abonnements'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
      
      {/* Scroll Anchor for Tarifs */}
      <div id="tarifs" className="absolute -top-12 left-0"></div>

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0554C5]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0554C5]" />
            Offres & Abonnements Sur-Mesure
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Services & <span className="text-[#0554C5]">Tarifs</span> Regroupés
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Découvrez mes 4 prestations principales de croissance digitale et choisissez l'abonnement mensuel adapté à vos objectifs d'acquisition.
          </p>

          {/* Quick Filter Controls */}
          <div className="flex justify-center items-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0554C5] text-white border-[#0554C5] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              Vue d'ensemble Tout-en-Un
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-[#0554C5] text-white border-[#0554C5] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              Les 4 Services
            </button>
            <button
              onClick={() => setActiveTab('tarifs')}
              className={`px-5 py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                activeTab === 'tarifs'
                  ? 'bg-[#0554C5] text-white border-[#0554C5] shadow-md'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              Formules d'Abonnement
            </button>
          </div>
        </div>

        {/* SECTION PART 1: 4 SERVICES */}
        {(activeTab === 'all' || activeTab === 'services') && (
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <h3 className="text-2xl font-black font-['Inter'] text-slate-900 uppercase">
                1. Les <span className="text-[#0554C5]">4 Prestations</span> Principales
              </h3>
              <span className="text-xs font-extrabold text-[#0554C5] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Media Buying • Social Media • SEO • Copywriting
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((serv) => {
                const Icon = serv.icon;
                const waLink = getServiceWhatsappUrl(serv.title);

                return (
                  <div
                    key={serv.id}
                    className="bg-slate-50/80 hover:bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between group space-y-6 border border-slate-200 hover:border-[#0554C5] hover:shadow-xl transition-all"
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
                        <h4 className="text-xl sm:text-2xl font-black font-['Inter'] text-slate-900">
                          {serv.title}
                        </h4>
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

                    {/* Bottom CTA & Plan Badge */}
                    <div className="pt-4 border-t border-slate-200 space-y-3">
                      <span className="text-[11px] font-bold text-slate-500 block text-center">
                        📌 {serv.includedIn}
                      </span>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#0554C5] text-slate-800 hover:text-white font-extrabold text-xs border border-slate-300 hover:border-[#0554C5] shadow-xs hover:shadow-md transition-all duration-200"
                      >
                        <MessageCircle className="w-4 h-4 text-[#0554C5] group-hover:text-white" />
                        <span>Demander ce service (WhatsApp)</span>
                        <ArrowRight className="w-4 h-4 stroke-[3]" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION PART 2: TARIFS / ABONNEMENTS */}
        {(activeTab === 'all' || activeTab === 'tarifs') && (
          <div className="space-y-8 pt-8">
            <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
              <h3 className="text-2xl font-black font-['Inter'] text-slate-900 uppercase">
                2. Formules d'<span className="text-[#0554C5]">Abonnement Mensuel</span>
              </h3>
              <span className="text-xs font-extrabold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Fixes, Transparents & Sans Engagements Cachés
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {PRICING_PLANS.map((plan) => {
                const waLink = getPlanWhatsappUrl(plan.name, plan.price);

                return (
                  <div
                    key={plan.id}
                    className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                      plan.isPopular
                        ? 'border-2 border-[#0554C5] shadow-2xl md:-translate-y-2'
                        : 'border border-slate-200 hover:border-slate-300 shadow-md'
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0554C5] text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 fill-white text-white" />
                        Offre la Plus Demandée
                      </div>
                    )}

                    <div className="space-y-6">
                      {/* Title & Savings */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="text-2xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">{plan.name}</h4>
                          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0554C5]">
                            {plan.duration}
                          </span>
                        </div>

                        {plan.savingsBadge && (
                          <p className="text-xs font-extrabold text-[#0554C5]">
                            {plan.savingsBadge}
                          </p>
                        )}
                      </div>

                      {/* Price Header */}
                      <div className="flex items-baseline gap-1 pt-4 border-t border-slate-200">
                        <span className="text-4xl sm:text-5xl font-black font-['Inter'] text-slate-900 tracking-tight">
                          {plan.price.toLocaleString()}
                        </span>
                        <span className="text-sm font-extrabold text-slate-500">{plan.currency} / {plan.period}</span>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3 pt-4 border-t border-slate-200 text-sm">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#0554C5]" />
                            <span className="text-slate-700 font-medium">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-extrabold text-sm transition-all duration-150 cursor-pointer ${
                          plan.isPopular
                            ? 'bg-[#0554C5] hover:bg-[#0444a3] text-white shadow-lg shadow-[#0554C5]/25'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        <span>Souscrire ({plan.name})</span>
                        <ArrowRight className="w-4 h-4 stroke-[3]" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
