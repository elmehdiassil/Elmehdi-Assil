import React, { useState } from 'react';
import { PSEO_PAGES } from '../data/mockData';
import { PseoPage } from '../types';
import { Search, Tag, CheckCircle2, MessageCircle, Globe, ChevronRight, X } from 'lucide-react';

interface PseoDirectoryProps {
  whatsappNumber: string;
}

export const PseoDirectory: React.FC<PseoDirectoryProps> = ({ whatsappNumber }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Tous');
  const [activePageModal, setActivePageModal] = useState<PseoPage | null>(null);

  const platforms = ['Tous', 'Meta Ads', 'Google Ads', 'TikTok Ads'];

  const filteredPages = PSEO_PAGES.filter((page) => {
    const matchesSearch =
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.longTailKeywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase())) ||
      page.industry.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPlatform =
      selectedPlatform === 'Tous' || page.targetPlatform.toLowerCase().includes(selectedPlatform.toLowerCase());

    return matchesSearch && matchesPlatform;
  });

  const getPseoWhatsappUrl = (pageTitle: string, keyword: string) => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour Elmehdi, je suis tombé sur votre page "${pageTitle}" (Mot-clé: "${keyword}") et j'aimerais lancer une campagne dans cette niche.`
    )}`;
  };

  return (
    <section id="pseo" className="py-24 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            Répertoire pSEO (Programmatic SEO)
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Pages Spécialisées Mots-Clés <span className="text-[#0554C5]">Longue Traîne</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Consultez nos stratégies d'acquisition ciblées par niche d'activité et plateforme publicitaire.
          </p>
        </div>

        {/* Search & Platform Filter Bar */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xs">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une niche (ex: Bougies, Pizzeria, TikTok)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0554C5]"
            />
          </div>

          {/* Platform Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {platforms.map((plat) => (
              <button
                key={plat}
                onClick={() => setSelectedPlatform(plat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedPlatform === plat
                    ? 'bg-[#0554C5] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>

        </div>

        {/* pSEO Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => (
            <div
              key={page.slug}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#0554C5] flex flex-col justify-between group space-y-4 shadow-xs hover:shadow-xl transition-all"
            >
              <div className="space-y-3">
                
                {/* Simulated URL Path */}
                <div className="flex items-center justify-between text-[11px] font-extrabold font-mono">
                  <span className="flex items-center gap-1 text-[#0554C5]">
                    <Globe className="w-3.5 h-3.5" />
                    elmehdiassil.com/pseo/{page.slug}
                  </span>
                  <span className="bg-blue-50 text-[#0554C5] px-2.5 py-0.5 rounded-full border border-blue-200 font-sans font-bold">
                    ROAS {page.projectedRoas}
                  </span>
                </div>

                <h3 className="text-lg font-black font-['Inter'] text-slate-900 group-hover:text-[#0554C5] transition-colors leading-snug">
                  {page.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {page.metaDescription}
                </p>

                {/* Long-tail tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {page.longTailKeywords.slice(0, 3).map((kw, kwIdx) => (
                    <span
                      key={kwIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-bold bg-white text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200"
                    >
                      <Tag className="w-3 h-3 text-[#0554C5]" />
                      {kw}
                    </span>
                  ))}
                  {page.longTailKeywords.length > 3 && (
                    <span className="text-[11px] text-slate-500 font-bold self-center">
                      +{page.longTailKeywords.length - 3} clés
                    </span>
                  )}
                </div>

              </div>

              {/* Bottom Trigger Action */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => setActivePageModal(page)}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white group-hover:bg-[#0554C5] text-slate-800 group-hover:text-white font-extrabold text-xs transition-all cursor-pointer border border-slate-300 group-hover:border-[#0554C5]"
                >
                  <span>Explorer cette page pSEO</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Viewer for Selected pSEO Page */}
        {activePageModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 overflow-hidden shadow-2xl my-8 relative max-h-[90vh] flex flex-col text-slate-900">
              
              {/* Modal Header */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0554C5]">
                    <Globe className="w-3.5 h-3.5" />
                    https://elmehdiassil.com/pseo/{activePageModal.slug}
                  </div>
                  <h3 className="text-xl font-black font-['Inter'] text-slate-900">
                    {activePageModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActivePageModal(null)}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body Scrollable */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                
                {/* Hero Headline Box */}
                <div className="bg-blue-50/90 border border-blue-200 p-6 rounded-2xl space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0554C5]">
                    Secteur : {activePageModal.industry} • Plateforme : {activePageModal.targetPlatform}
                  </span>
                  <h4 className="text-2xl font-black font-['Inter'] text-slate-900">
                    {activePageModal.heroHeadline}
                  </h4>
                  <p className="text-slate-700 text-sm">
                    {activePageModal.heroSubtitle}
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-500">ROAS Ciblé</div>
                    <div className="text-2xl font-black text-[#0554C5] font-['Inter']">
                      {activePageModal.projectedRoas}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-500">CPA Moyen</div>
                    <div className="text-2xl font-black text-slate-900 font-['Inter']">
                      {activePageModal.typicalCpa}
                    </div>
                  </div>
                </div>

                {/* Strategies List */}
                <div className="space-y-3">
                  <h5 className="font-extrabold text-slate-900 text-base">Stratégies Clés Déployées :</h5>
                  <ul className="space-y-2">
                    {activePageModal.keyStrategies.map((strat, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0554C5] shrink-0 mt-0.5" />
                        <span>{strat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Long Tail Keywords Tag Cloud */}
                <div className="space-y-2">
                  <h5 className="font-extrabold text-slate-900 text-sm">Mots-clés Longue Traîne Ciblés :</h5>
                  <div className="flex flex-wrap gap-2">
                    {activePageModal.longTailKeywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-[#0554C5] font-extrabold px-3 py-1 rounded-lg border border-blue-200"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Custom FAQs */}
                {activePageModal.faqs && activePageModal.faqs.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <h5 className="font-extrabold text-slate-900 text-base">FAQ Spécifique Niche :</h5>
                    {activePageModal.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                        <div className="font-extrabold text-slate-900 text-xs sm:text-sm">Q: {faq.question}</div>
                        <div className="text-slate-600 text-xs leading-relaxed">R: {faq.answer}</div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Modal Footer CTA */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={() => setActivePageModal(null)}
                  className="py-3 px-5 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 cursor-pointer"
                >
                  Fermer
                </button>
                <a
                  href={getPseoWhatsappUrl(activePageModal.title, activePageModal.longTailKeywords[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-white" />
                  <span>Réserver une stratégie sur-mesure pour cette niche</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
