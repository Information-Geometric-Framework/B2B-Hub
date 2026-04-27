import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Package, 
  Truck, 
  FileText, 
  Info,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { MOCK_SUPPLIERS, MOCK_PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

export function RFQPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const supplierId = searchParams.get('supplierId');
  const productId = searchParams.get('productId');

  const supplier = MOCK_SUPPLIERS.find(s => s.id === supplierId) || MOCK_SUPPLIERS[0];
  const product = MOCK_PRODUCTS.find(p => p.id === productId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 bg-sporty-green/10 rounded-full flex items-center justify-center mx-auto text-sporty-green"
        >
          <CheckCircle2 className="w-8 h-8" />
        </motion.div>
        <h1 className="text-xl font-serif font-bold text-sidebar-bg uppercase tracking-tight">RFQ Forwarded</h1>
        <p className="text-xs text-gray-500 font-lato font-light">Your request has been securely transmitted to <span className="font-bold text-sidebar-bg">{supplier.name}</span>. Response expected 24-48h.</p>
        <div className="flex gap-2 justify-center pt-6 font-sans">
           <button 
            onClick={() => navigate('/suppliers')}
            className="px-6 py-2 border border-border-gray rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all"
           >Continue Sourcing</button>
           <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-sidebar-bg text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-sidebar-bg/90 transition-all shadow-md"
           >Go to Dashboard</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      <header className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-1.5 hover:bg-white rounded-full transition-all border border-border-gray shadow-sm">
           <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-xl font-serif font-bold text-sidebar-bg uppercase tracking-tight">Create <span className="text-blue-green">New RFQ</span></h1>
          <p className="text-xs text-gray-500 font-lato font-light">Formal inquiry for procurement to {supplier.name}</p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {/* Step Indicator */}
          <div className="card flex items-center justify-between px-6 py-2">
             {['Specifics', 'Logistics', 'Review'].map((s, idx) => (
                <div key={s} className="flex items-center gap-2">
                   <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all",
                      step > idx + 1 ? "bg-sporty-green text-white" : step === idx + 1 ? "bg-sidebar-bg text-neon-green ring-2 ring-neon-green/10" : "bg-gray-100 text-gray-400"
                   )}>
                      {step > idx + 1 ? '✓' : idx + 1}
                   </div>
                   <span className={cn("text-[10px] font-black uppercase tracking-tighter", step === idx + 1 ? "text-sidebar-bg" : "text-gray-400")}>{s}</span>
                   {idx < 2 && <div className="w-12 h-px bg-gray-100 ml-2"></div>}
                </div>
             ))}
          </div>

          <form onSubmit={handleSubmit} className="card space-y-6 min-h-[400px] flex flex-col">
            <div className="flex-1 space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Quantity Required</label>
                     <div className="relative">
                        <input type="number" defaultValue={500} className="w-full bg-gray-50 border border-border-gray rounded py-2.5 px-3 text-xs font-bold outline-none focus:ring-1 focus:ring-neon-green" required />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-400 font-black">UNITS</span>
                     </div>
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Target Price (Optional)</label>
                      <div className="relative">
                        <input type="text" placeholder="12.50" className="w-full bg-gray-50 border border-border-gray rounded py-2.5 px-3 text-xs font-bold outline-none focus:ring-1 focus:ring-neon-green" />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-400 font-bold">$</span>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-gray-400 font-black">/UNIT</span>
                     </div>
                  </div>
               </div>

               <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Technical Specifications</label>
                  <textarea 
                    className="w-full bg-gray-50 border border-border-gray rounded p-3 text-xs min-h-[120px] outline-none focus:ring-1 focus:ring-neon-green resize-none leading-relaxed"
                    placeholder="Describe custom sizes, material properties, certifications (UL/CE), or packaging requirements..."
                    required
                  ></textarea>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Expected Delivery</label>
                     <input type="date" className="w-full bg-gray-50 border border-border-gray rounded py-2.5 px-3 text-xs font-bold outline-none focus:ring-1 focus:ring-neon-green" required />
                 </div>
                 <div className="space-y-1">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Shipping Method</label>
                     <select className="w-full bg-gray-50 border border-border-gray rounded py-2.5 px-3 text-xs font-bold outline-none focus:ring-1 focus:ring-neon-green appearance-none">
                        <option>Sea Freight (FOB)</option>
                        <option>Air Freight (DDP)</option>
                        <option>Land Route (EXW)</option>
                     </select>
                 </div>
               </div>
            </div>

            <div className="pt-6 border-t border-border-gray flex items-center justify-between">
               <button 
                  type="button"
                  onClick={() => setStep(s => Math.max(1, s-1))}
                  className={cn("text-[10px] font-bold uppercase text-gray-400 hover:text-sidebar-bg", step === 1 && "invisible")}
               >Previous Step</button>
               <div className="flex gap-3">
                  <button type="button" className="text-[10px] font-bold uppercase text-gray-400 hover:text-red-500">Discard</button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className={cn(
                      "px-8 py-2.5 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all shadow-md",
                      loading ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-sporty-green text-white hover:brightness-110"
                    )}
                  >
                    {loading ? "Transmitting..." : "Send Formal RFQ"}
                  </button>
               </div>
            </div>
          </form>
        </div>

        {/* Summary Card */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
           <div className="card sticky top-20">
              <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Sourcing Recap</h3>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-border-gray mb-6">
                 <div className="w-10 h-10 rounded bg-white border border-border-gray p-1 shrink-0 overflow-hidden">
                    <img src={product?.image || supplier.logo} className="w-full h-full object-cover" />
                 </div>
                 <div className="min-w-0">
                    <p className="text-[8px] text-blue-green font-black uppercase tracking-widest mb-0.5">Target Item</p>
                    <h4 className="text-[10px] font-bold text-sidebar-bg truncate">{product?.name || "Inventory Inquiry"}</h4>
                 </div>
              </div>

              <div className="space-y-3 pb-6 border-b border-border-gray text-[11px] font-medium text-gray-600">
                 <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Truck className="w-3.5 h-3.5 text-gray-400" /> Logistics</span>
                    <span className="text-sidebar-bg">FOB Shenzhen</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><Package className="w-3.5 h-3.5 text-gray-400" /> Inspection</span>
                    <span className="text-sidebar-bg font-bold">Standard QC</span>
                 </div>
              </div>

              <div className="pt-6">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-green/10 flex items-center justify-center text-blue-green">
                       <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-sidebar-bg">Trade Shield Enabled</p>
                       <p className="text-[9px] text-gray-400">Buyer protection up to 100%.</p>
                    </div>
                 </div>
                 <p className="text-[9px] text-gray-400 italic leading-tight">Quotes expire 14 days after issue. Verification steps apply upon acceptance.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
