import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle, Send, ArrowRight, Check, Copy, Calendar } from 'lucide-react';

interface ContactSectionProps {
  whatsappNumber: string;
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ whatsappNumber, onOpenContactModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [quickMsg, setQuickMsg] = useState('');

  const cleanNumForWa = (num: string) => {
    let digits = num.replace(/[^0-9]/g, '');
    if (digits.startsWith('06') || digits.startsWith('07')) {
      digits = '212' + digits.substring(1);
    }
    return digits;
  };

  const waNumClean = cleanNumForWa(whatsappNumber);
  const formattedWaUrl = `https://wa.me/${waNumClean}?text=${encodeURIComponent(
    quickMsg || 'Bonjour Elmehdi, je souhaite discuter de mes campagnes publicitaires.'
  )}`;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background Glow in Blue #0554C5 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0554C5]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0554C5] border border-blue-200 text-xs font-extrabold uppercase tracking-wider inline-block">
            Formulaire & Contact Direct
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Inter'] text-slate-900 uppercase tracking-tight">
            Envoyez Votre <span className="text-[#0554C5]">Demande De Devis</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Remplissez ce court formulaire (3 champs) ou contactez-moi directement via mes canaux officiels. Réponse garantie sous quelques minutes.
          </p>
        </div>

        {/* 3-Field Inline Contact Form Card */}
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-[#0554C5]/30 shadow-xl space-y-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onOpenContactModal();
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nom Complet <span className="text-[#0554C5]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Youssef Benali"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0554C5] focus:ring-2 focus:ring-[#0554C5]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Pro <span className="text-[#0554C5]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="votre@entreprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0554C5] focus:ring-2 focus:ring-[#0554C5]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Téléphone / WhatsApp <span className="text-[#0554C5]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="06 27 72 20 61"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0554C5] focus:ring-2 focus:ring-[#0554C5]/20"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-4 px-6 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-[#0554C5]/25 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 fill-white text-white" />
                <span>Envoyer Ma Demande De Devis</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
              <a
                href="https://calendly.com/forzama7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Prendre RDV Calendly</span>
              </a>
            </div>
          </form>

          <p className="text-[11px] text-slate-500 text-center font-medium">
            🔒 Vos informations sont 100% confidentielles. Réponses directes par Elmehdi Assil.
          </p>
        </div>

        {/* 6 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Calendly Audit Gratuit */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-white rounded-2xl p-6 border-2 border-[#0554C5]/40 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden shadow-lg">
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#0554C5] text-white flex items-center justify-center font-bold shadow-md shadow-[#0554C5]/20">
                <Calendar className="w-6 h-6 text-white stroke-[2.5]" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0554C5] text-[10px] font-extrabold uppercase tracking-wider border border-blue-200">
                  Recommandé
                </span>
                <h3 className="text-xl font-black text-slate-900 font-['Inter'] mt-1">Audit Gratuit (30 min)</h3>
                <p className="text-xs text-slate-600 mt-1">Choisissez votre créneau horaire en direct sur mon agenda Calendly.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 relative z-10">
              <a
                href="https://calendly.com/forzama7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Réserver sur Calendly</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </a>
            </div>
          </div>

          {/* Card 2: Téléphone / WhatsApp */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-4 group shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#0554C5] flex items-center justify-center font-bold">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Téléphone / WhatsApp</span>
                <h3 className="text-xl font-extrabold text-slate-900 font-mono mt-0.5">06 27 72 20 61</h3>
                <p className="text-xs text-slate-500 mt-1">Appel direct ou message WhatsApp instantané.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              <a
                href={`https://wa.me/${waNumClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => handleCopy('0627722061', 'phone')}
                className="py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                title="Copier le numéro"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#0554C5]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-4 group shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#0554C5] flex items-center justify-center font-bold">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Adresse Email Pro</span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-mono mt-0.5 break-all">forzama7@gmail.com</h3>
                <p className="text-xs text-slate-500 mt-1">Pour vos demandes de devis et briefs de projets.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              <a
                href="mailto:forzama7@gmail.com"
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Envoyer un Email</span>
              </a>
              <button
                onClick={() => handleCopy('forzama7@gmail.com', 'email')}
                className="py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                title="Copier l'email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-[#0554C5]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 4: Instagram */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-4 group shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 flex items-center justify-center font-bold">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Instagram Official</span>
                <h3 className="text-lg font-extrabold text-slate-900 font-mono mt-0.5">@elmehdiassil</h3>
                <p className="text-xs text-slate-500 mt-1">Conseils Media Buying, coulisses & résultats.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <a
                href="https://instagram.com/elmehdiassil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>Voir le compte Instagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 5: Facebook */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-4 group shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#0554C5] flex items-center justify-center font-bold">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Page Facebook</span>
                <h3 className="text-lg font-extrabold text-slate-900 font-['Inter'] mt-0.5">Elmehdi Assil</h3>
                <p className="text-xs text-slate-500 mt-1">Publicité Meta & actualités marketing.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <a
                href="https://facebook.com/Elmehdi.Assil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Facebook className="w-4 h-4" />
                <span>Page Facebook</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 6: LinkedIn */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#0554C5] transition-all flex flex-col justify-between space-y-4 group sm:col-span-2 lg:col-span-1 shadow-xs hover:shadow-md">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center font-bold">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Profil LinkedIn</span>
                <h3 className="text-lg font-extrabold text-slate-900 font-['Inter'] mt-0.5">/in/elmehdiassil</h3>
                <p className="text-xs text-slate-500 mt-1">Réseau professionnel & études de cas.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <a
                href="https://linkedin.com/in/elmehdiassil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>Profil LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Quick WhatsApp Interactive Box */}
        <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto border-2 border-[#0554C5]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0554C5]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            <div className="md:col-span-7 space-y-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0554C5] text-xs font-extrabold border border-blue-200">
                💬 Envoyez un message en 1 clic
              </span>
              <h3 className="text-2xl font-black font-['Inter'] text-slate-900">
                Prêt à lancer vos campagnes haut rendement ?
              </h3>
              <p className="text-slate-600 text-sm">
                Saisissez votre question ou projet ci-dessous pour être redirigé vers mon WhatsApp privé.
              </p>
            </div>

            <div className="md:col-span-5 space-y-3">
              <input
                type="text"
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                placeholder="Ex: Bonjour, je souhaite scaler mes Meta Ads e-commerce..."
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#0554C5]"
              />
              <div className="flex flex-col gap-2">
                <button
                  onClick={onOpenContactModal}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-white text-white" />
                  <span>Demander un Devis (Formulaire 3 champs)</span>
                </button>
                <a
                  href={formattedWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>Discuter sur WhatsApp (06 27 72 20 61)</span>
                </a>
                <a
                  href="https://calendly.com/forzama7/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-extrabold text-xs flex items-center justify-center gap-2 border border-slate-300 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#0554C5]" />
                  <span>Ou réserver un Audit Gratuit sur Calendly</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
