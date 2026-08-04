import React from 'react';
import { Search, Code2, Rocket, ArrowRight, MessageCircle } from 'lucide-react';

interface ProcessStepsProps {
  whatsappNumber: string;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ whatsappNumber }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Elmehdi, je souhaite démarrer l\'étape 1 (Audit gratuit de mes campagnes).'
  )}`;

  const STEPS = [
    {
      number: '01',
      icon: Search,
      title: 'Audit & Stratégie Sur-Mesure',
      description: 'Analyse approfondie de vos comptes publicitaires existants, étude de vos concurrents et définition exacte de l\'offre à mettre en avant.'
    },
    {
      number: '02',
      icon: Code2,
      title: 'Tracking & Créatifs Haute Conversion',
      description: 'Installation du Pixel Meta, Google Tag Manager & Conversions API. Rédaction des textes (copywriting) et préparation des visuels UGC.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Lancement, A/B Test & Scaling ROAS',
      description: 'Déploiement des campagnes, optimisation quotidienne des enchères et scaling des audiences rentables pour maximiser votre chiffre d\'affaires.'
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            Processus Éprouvé
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Comment Fonctionne Mon <span className="text-[#0554C5]">Accompagnement</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            3 étapes simples pour transformer vos dépenses publicitaires en un levier de croissance prévisible.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-sm hover:shadow-xl"
              >
                {/* Big Step Number in Background */}
                <span className="absolute -top-6 -right-2 text-8xl font-black font-['Inter'] text-slate-200 select-none group-hover:text-[#0554C5]/10 transition-colors">
                  {step.number}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#0554C5] flex items-center justify-center group-hover:bg-[#0554C5] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-base shadow-lg shadow-[#0554C5]/25 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span>Démarrer l'Étape 1 : Demander un audit gratuit</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
};
