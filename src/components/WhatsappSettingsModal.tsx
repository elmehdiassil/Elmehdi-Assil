import React, { useState } from 'react';
import { X, Phone, Check } from 'lucide-react';

interface WhatsappSettingsModalProps {
  currentNumber: string;
  onSave: (newNumber: string) => void;
  onClose: () => void;
}

export const WhatsappSettingsModal: React.FC<WhatsappSettingsModalProps> = ({
  currentNumber,
  onSave,
  onClose
}) => {
  const [numInput, setNumInput] = useState(currentNumber);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!numInput.trim()) return;
    onSave(numInput.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl space-y-6 relative text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0554C5] flex items-center justify-center font-bold">
              <Phone className="w-5 h-5 text-[#0554C5]" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg font-['Inter'] uppercase">Configuration WhatsApp</h3>
              <p className="text-xs text-slate-500 font-medium">Personnalisez votre numéro de contact</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Numéro de téléphone WhatsApp (avec indicatif pays) :
            </label>
            <div className="relative">
              <input
                type="text"
                value={numInput}
                onChange={(e) => setNumInput(e.target.value)}
                placeholder="Ex: 212600000000 ou +212 6 00 00 00 00"
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 font-mono font-bold text-slate-900 text-sm focus:outline-none focus:border-[#0554C5]"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              Exemple : <code className="bg-slate-100 px-1.5 py-0.5 rounded text-[#0554C5] font-mono">212600000000</code> pour le Maroc (+212). Tous les boutons WhatsApp du site utiliseront ce numéro.
            </p>
          </div>

          {savedSuccess ? (
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0554C5] text-xs font-extrabold flex items-center justify-center gap-2">
              <Check className="w-4 h-4" />
              <span>Numéro mis à jour avec succès !</span>
            </div>
          ) : (
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setNumInput('212627722061')}
                className="px-4 py-3 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-200 cursor-pointer"
              >
                Réinitialiser
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-5 rounded-xl bg-[#0554C5] hover:bg-[#0444a3] text-white font-extrabold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Enregistrer le numéro</span>
              </button>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};
