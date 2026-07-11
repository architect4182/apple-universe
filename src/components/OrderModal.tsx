import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, Sparkles, CreditCard, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedConfig?: any;
  selectedPrice?: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, selectedConfig, selectedPrice }) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [paymentType, setPaymentType] = useState<'financing' | 'upfront'>('financing');
  const [tradeInOption, setTradeInOption] = useState<boolean>(true);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studioName: '',
    address: '',
    notes: ''
  });

  if (!isOpen) return null;

  const baseAmount = selectedPrice || 6499;
  const tradeInCredit = tradeInOption ? 1400 : 0;
  const finalAmount = Math.max(0, baseAmount - tradeInCredit);
  const monthlyPayment = Math.round(finalAmount / 24);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    try {
      confetti({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#0071E3', '#2997FF', '#BF5AF2', '#64D2FF', '#FFFFFF']
      });
    } catch (err) {
      // safe fallback if confetti script context blocked
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-apple rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 bg-black/60 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#2997FF]" />
            <div>
              <h3 className="font-bold text-white text-base">
                {step === 'details' ? 'Configure & Reserve ProMotion Workstation' : 'Reservation Confirmed'}
              </h3>
              <span className="text-xs text-zinc-400 font-mono">
                {step === 'details' ? 'Apple Studio Direct Allocation' : 'Priority Order #APL-M4X-8820'}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              setStep('details');
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {step === 'details' ? (
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Order Summary Strip */}
              <div className="bg-zinc-900/80 p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-white text-sm block">
                      MacBook Pro 16" M4 Max + Pro Display XDR 2 Studio Package
                    </span>
                    <span className="text-xs text-zinc-400 block mt-0.5">
                      {selectedConfig ? `Custom Build (${selectedConfig.memory || 64}GB Unified Memory, ${selectedConfig.storage || 2}TB SSD)` : 'Flagship 120Hz ProMotion Workstation Setup'}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-white text-right">
                    ${baseAmount.toLocaleString()}
                  </span>
                </div>

                {/* Trade In toggle */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="tradein"
                      checked={tradeInOption}
                      onChange={(e) => setTradeInOption(e.target.checked)}
                      className="rounded accent-[#2997FF] w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="tradein" className="text-zinc-300 cursor-pointer font-medium">
                      Apply Apple Studio Trade-In Credit (Est. M1/M2 Max)
                    </label>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">
                    {tradeInOption ? `-$${tradeInCredit.toLocaleString()}` : '$0'}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-baseline justify-between font-mono">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-sans">Final Studio Investment</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-white block">
                      ${finalAmount.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#2997FF]">
                      Or ${monthlyPayment}/mo (24-Month 0% APR)
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Type Tabs */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentType('financing')}
                    className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      paymentType === 'financing'
                        ? 'bg-[#0071E3]/20 border-[#2997FF] text-white shadow'
                        : 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:border-white/30'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#2997FF]" />
                    <div>
                      <span className="font-bold text-xs block">0% Studio Financing</span>
                      <span className="text-[10px] text-zinc-400">${monthlyPayment}/mo for 24 months</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentType('upfront')}
                    className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      paymentType === 'upfront'
                        ? 'bg-[#0071E3]/20 border-[#2997FF] text-white shadow'
                        : 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:border-white/30'
                    }`}
                  >
                    <Award className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="font-bold text-xs block">Pay Upfront</span>
                      <span className="text-[10px] text-zinc-400">Full invoice setup</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Contact / Studio Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Lead Creative Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-[#2997FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Studio Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@vancefx.studio"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-[#2997FF]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Studio / Agency Name</label>
                  <input
                    type="text"
                    placeholder="Vance FX / ex-Framestore Collective"
                    value={formData.studioName}
                    onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-[#2997FF]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Shipping & Installation Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="784 Creative Park Way, Suite 400, San Francisco, CA"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full p-3 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0071E3] hover:bg-[#2997FF] text-white font-bold text-sm tracking-tight transition-all shadow-xl shadow-[#0071E3]/40"
                >
                  Confirm Studio Allocation & Reserve Setup →
                </button>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1 font-mono">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> AppleCare+ Priority Included</span>
                  <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-[#2997FF]" /> Next-Day White-Glove Ship</span>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
                <CheckCircle className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#2997FF] uppercase tracking-wider">Allocation Guaranteed</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
                  Welcome to the ProMotion Studio Ecosystem.
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  We have reserved your high-velocity M4 Max workstation and Pro Display XDR 2 setup. A Dedicated Apple Creative Engineer will contact <span className="text-white font-bold">{formData.email || 'your email'}</span> within 2 hours with shipment tracking and custom calibration notes.
                </p>
              </div>

              <div className="bg-zinc-900/80 p-6 rounded-2xl border border-white/10 text-left font-mono text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-zinc-400">
                  <span>Reservation Reference:</span>
                  <span className="text-white font-bold">#APL-M4X-8820</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Studio Client:</span>
                  <span className="text-white font-bold">{formData.fullName || 'Lead Designer'} ({formData.studioName || 'Studio'})</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Display Refresh Rate:</span>
                  <span className="text-[#2997FF] font-bold">120Hz ProMotion Factory Locked</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Investment Total:</span>
                  <span className="text-emerald-400 font-bold">${finalAmount.toLocaleString()} ({paymentType === 'financing' ? '$' + monthlyPayment + '/mo' : 'Upfront'})</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setStep('details');
                  onClose();
                }}
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-[#2997FF] hover:text-white transition-all shadow-xl"
              >
                Back to Studio Homepage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
