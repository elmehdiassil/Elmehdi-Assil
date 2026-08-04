import React, { useState } from 'react';
import { GENERAL_FAQS } from '../data/mockData';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  whatsappNumber: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ whatsappNumber }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Elmehdi, j\'ai une question complémentaire qui n\'est pas dans la FAQ.'
  )}`;

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
            Questions Fréquentes
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Foire Aux <span className="text-[#0554C5]">Questions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Toutes les réponses pour démarrer votre collaboration publicitaire en toute confiance.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {GENERAL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-extrabold font-['Inter'] text-slate-900 text-base sm:text-lg hover:text-[#0554C5] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#0554C5]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-700 text-sm leading-relaxed whitespace-pre-line border-t border-slate-200 pt-4 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-white rounded-3xl p-8 text-center space-y-4 shadow-xl border-2 border-[#0554C5]/30">
          <h3 className="text-2xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">Vous avez une autre question ?</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Posez-moi vos questions directement sur WhatsApp. Je vous réponds personnellement sous quelques minutes.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Poser ma question sur WhatsApp</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
