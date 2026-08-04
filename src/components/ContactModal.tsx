import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, whatsappNumber }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const cleanNumForWa = (num: string) => {
    let digits = num.replace(/[^0-9]/g, '');
    if (digits.startsWith('06') || digits.startsWith('07')) {
      digits = '212' + digits.substring(1);
    }
    return digits;
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={handleResetAndClose}></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-slate-900">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0554C5]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0554C5] text-xs font-extrabold border border-blue-200 uppercase tracking-wider">
                Demande De Devis Express
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-['Inter'] text-slate-900">
                Discutons De Votre <span className="text-[#0554C5]">Projet</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Remplissez ces 3 informations pour être recontacté sous 24h avec un devis et un plan d'action personnalisé.
              </p>
            </div>

            {/* Exactly 3 Fields: Nom, Email, Téléphone */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Nom */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Nom & Prénom <span className="text-[#0554C5]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Youssef Benali"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0554C5] transition-colors"
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Adresse Email <span className="text-[#0554C5]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: benali@entreprise.ma"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0554C5] transition-colors"
                />
              </div>

              {/* Field 3: Numéro de téléphone */}
              <div className="space-y-1.5">
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Numéro de téléphone / WhatsApp <span className="text-[#0554C5]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 06 27 72 20 61"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0554C5] transition-colors font-mono"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0554C5]/25 transition-all active:scale-[0.98] mt-2 cursor-pointer"
              >
                {loading ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 fill-white text-white" />
                    <span>Envoyer Ma Demande De Devis</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-slate-500 text-center font-medium">
              🔒 Vos coordonnées restent strictement confidentielles. Aucune sollicitation indésirable.
            </p>
          </div>
        ) : (
          /* Success Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0554C5] mx-auto flex items-center justify-center border border-blue-200 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">Demande Envoyée Avec Succès !</h3>
              <p className="text-sm text-slate-600">
                Merci <span className="font-bold text-slate-900">{formData.name}</span>. Votre demande a bien été reçue par Elmehdi Assil. Je vous contacte au <span className="text-[#0554C5] font-mono font-bold">{formData.phone}</span> sous <span className="text-[#0554C5] font-bold">24 heures ouvrées</span>.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <p className="text-xs text-slate-500 font-bold">Besoin d'une réponse encore plus rapide ?</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/${cleanNumForWa(whatsappNumber)}?text=${encodeURIComponent(
                    `Bonjour Elmehdi, je viens d'envoyer une demande de devis sur le site (Nom: ${formData.name}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>WhatsApp Direct</span>
                </a>
                <a
                  href="https://calendly.com/forzama7/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#0554C5]" />
                  <span>Agenda Calendly</span>
                </a>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-4 text-xs font-bold text-slate-500 hover:text-slate-900 underline transition-colors cursor-pointer"
            >
              Fermer cette fenêtre
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
