import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { MessageCircle } from 'lucide-react';

interface ResultsShowcaseProps {
  whatsappNumber: string;
}

export const ResultsShowcase: React.FC<ResultsShowcaseProps> = ({ whatsappNumber }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'E-Commerce', 'Restaurant', 'Beauté', 'Dropshipping'];

  const filteredStudies = activeCategory === 'Tous'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === activeCategory);

  const getCaseWhatsappUrl = (caseTitle: string) => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour Elmehdi, j'ai vu votre étude de cas "${caseTitle}" et j'aimerais obtenir des résultats similaires pour mon entreprise.`
    )}`;
  };

  return (
    <section id="resultats" className="py-24 bg-slate-50 relative border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            Preuve de Performance
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Des Résultats <span className="text-[#0554C5]">Concrets</span>, Pas Des Slides
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Découvrez comment nous avons transformé les budgets publicitaires de nos clients en chiffre d'affaires mesurable.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0554C5] text-white shadow-md shadow-[#0554C5]/25 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#0554C5] hover:text-[#0554C5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => {
            const waLink = getCaseWhatsappUrl(study.title);

            return (
              <div
                key={study.id}
                className="bg-white rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200 hover:border-[#0554C5] shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image Header with Badge */}
                <div className="relative h-60 sm:h-68 overflow-hidden bg-slate-900">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0554C5] text-white font-extrabold text-xs shadow-md">
                      {study.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 font-bold text-xs border border-white">
                      {study.category}
                    </span>
                  </div>

                  {/* Platforms Icons */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-black font-['Inter'] text-white drop-shadow-md">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  
                  {/* Problem & Strategy Breakdown */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600">Défi Initial :</span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0554C5]">Stratégie Déployée :</span>
                      <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                        {study.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics Badge Bar */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200">
                    {study.metrics.roas && (
                      <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-center">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">ROAS Meta</div>
                        <div className="text-base sm:text-xl font-black text-[#0554C5] font-['Inter']">
                          {study.metrics.roas}
                        </div>
                      </div>
                    )}
                    {study.metrics.salesIncrease && (
                      <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-center">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Ventes</div>
                        <div className="text-base sm:text-xl font-black text-[#0554C5] font-['Inter']">
                          {study.metrics.salesIncrease}
                        </div>
                      </div>
                    )}
                    {study.metrics.orders && (
                      <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-center">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Commandes</div>
                        <div className="text-base sm:text-xl font-black text-slate-900 font-['Inter']">
                          {study.metrics.orders}
                        </div>
                      </div>
                    )}
                    {study.metrics.rdvMultiplier && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Rendez-Vous</div>
                        <div className="text-base sm:text-xl font-black text-amber-700 font-['Inter']">
                          {study.metrics.rdvMultiplier}
                        </div>
                      </div>
                    )}
                    {study.metrics.caAddressed && (
                      <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-center">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Chiffre d'Affaires</div>
                        <div className="text-base sm:text-xl font-black text-[#0554C5] font-['Inter']">
                          {study.metrics.caAddressed}
                        </div>
                      </div>
                    )}
                    {study.metrics.cpaReduction && (
                      <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-center">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Réduction CPA</div>
                        <div className="text-base sm:text-xl font-black text-blue-700 font-['Inter']">
                          {study.metrics.cpaReduction}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-white" />
                      <span>Visez les mêmes résultats pour votre entreprise</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
