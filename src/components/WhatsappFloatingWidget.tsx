import React, { useState } from 'react';
import { MessageCircle, X, Send, Sliders, CheckCircle2 } from 'lucide-react';

interface WhatsappFloatingWidgetProps {
  whatsappNumber: string;
  onOpenSettings: () => void;
}

export const WhatsappFloatingWidget: React.FC<WhatsappFloatingWidgetProps> = ({
  whatsappNumber,
  onOpenSettings
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const sendWhatsapp = (text?: string) => {
    const messageToSend = text || customMsg || 'Bonjour Elmehdi, je souhaite discuter de mes campagnes publicitaires.';
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageToSend)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Quick Chat Popup Drawer */}
      {isOpen && (
        <div className="bg-white rounded-3xl p-5 shadow-2xl border border-slate-200 w-80 sm:w-96 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-200 text-slate-900">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Elmehdi Assil"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#0554C5]"
                />
                <span className="w-3 h-3 rounded-full bg-[#0554C5] border-2 border-white absolute bottom-0 right-0"></span>
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1 font-['Inter']">
                  Elmehdi Assil
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0554C5]" />
                </h4>
                <p className="text-[11px] text-[#0554C5] font-bold flex items-center gap-1">
                  En ligne • Réponse en &lt; 15 min
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={onOpenSettings}
                title="Changer le numéro WhatsApp"
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <Sliders className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Intro Text */}
          <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200 text-xs text-slate-700 space-y-1">
            <span className="font-extrabold text-[#0554C5]">👋 Bonjour !</span>
            <p className="font-medium">
              Besoin de booster votre ROAS ou de configurer vos campagnes publicitaires Meta / Google ? Envoyez-moi un message direct.
            </p>
          </div>

          {/* Quick Option Pills */}
          <div className="space-y-2">
            <button
              onClick={() => sendWhatsapp('Bonjour Elmehdi, je souhaite réserver un audit gratuit de mes publicités.')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#0554C5] border border-slate-200 text-xs font-bold transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>📊 Demander un audit publicitaire gratuit</span>
              <Send className="w-3.5 h-3.5 text-[#0554C5]" />
            </button>
            <button
              onClick={() => sendWhatsapp('Bonjour Elmehdi, quel est votre tarif pour gérer mes publicités e-commerce ?')}
              className="w-full text-left px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#0554C5] border border-slate-200 text-xs font-bold transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>💼 Obtenir un devis personnalisé</span>
              <Send className="w-3.5 h-3.5 text-[#0554C5]" />
            </button>
          </div>

          {/* Custom Input */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendWhatsapp()}
              placeholder="Écrivez votre message..."
              className="flex-1 p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#0554C5]"
            />
            <button
              onClick={() => sendWhatsapp()}
              className="p-2.5 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm shadow-xl shadow-[#0554C5]/30 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-white" />
        <span className="hidden sm:inline">WhatsApp Direct</span>
      </button>

    </div>
  );
};
