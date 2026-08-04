import React from 'react';
import { ArrowRight, MessageCircle, Send } from 'lucide-react';

interface HeroSectionProps {
  whatsappNumber: string;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ whatsappNumber, onOpenContactModal }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Elmehdi, je souhaite discuter d\'un projet publicitaire.'
  )}`;

  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white text-slate-900 border-b border-slate-200">
      
      {/* Radial Glow Gradient Background Effect in Blue #0554C5 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0554C5]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#0554C5] animate-pulse"></span>
          <span>Media Buying & Acquisition Payante</span>
        </div>

        {/* Catchy Main Title - Inspiring, bold, clear typography */}
        <h1 className="font-['Inter',sans-serif] font-black text-4xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-[1.02] uppercase">
          DES CAMPAGNES PUBLICITAIRES QUI{' '}
          <span className="text-[#0554C5] underline decoration-[#0554C5]/30 underline-offset-8">
            RAPPORTENT
          </span>
          , PAS DES PROMESSES.
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
          Media buyer freelance spécialisé pour e-commerce, boutiques en ligne, agences et services au Maroc & International. Je gère vos budgets Meta, Google et TikTok Ads avec un seul objectif : <strong className="font-extrabold text-[#0554C5]">générer un vrai retour sur investissement</strong>.
        </p>

        {/* CTAs - Direct Modal Trigger & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContactModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-base shadow-xl shadow-[#0554C5]/25 transition-all duration-200 transform active:scale-98 cursor-pointer"
          >
            <Send className="w-5 h-5 fill-white text-white" />
            <span>Prendre Contact (Devis Gratuit)</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-white" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

      </div>
    </section>
  );
};
