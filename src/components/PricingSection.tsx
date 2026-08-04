import React from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  whatsappNumber: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ whatsappNumber }) => {
  const getPlanWhatsappUrl = (planName: string, price: number) => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour Elmehdi, je souhaite souscrire au plan "${planName}" à ${price.toLocaleString()} DHS.`
    )}`;
  };

  return (
    <section id="tarifs" className="py-24 bg-slate-50 relative border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            Tarifs Transparents
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Des Formules Adaptées À <span className="text-[#0554C5]">Votre Échelle</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Aucun frais caché. Vous payez des honoraires fixes et clairs pour une gestion professionnelle.
          </p>
        </div>

        {/* Pricing Cards Grid */}
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
                      <h3 className="text-2xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">{plan.name}</h3>
                      <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
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
                    <span>{plan.ctaText}</span>
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
