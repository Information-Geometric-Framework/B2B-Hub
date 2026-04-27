import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Clock, ArrowRight, User, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { MOCK_RFQS } from '../../constants';
import { useGlobal } from '../../GlobalContext';
import { formatDate, cn } from '../../lib/utils';

export default function RFQManagement() {
  const { user } = useGlobal();
  const rfqs = MOCK_RFQS.filter(r => r.supplierId === user.id);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-sidebar-bg uppercase tracking-tight">Inquiry <span className="text-sporty-green">Management</span></h1>
        <p className="text-xs text-gray-500">Respond to global buyers and manage formal manufacturing requests.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
           {rfqs.map((rfq, idx) => (
             <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={rfq.id} 
              className="card group hover:border-sporty-green/30 transition-all cursor-pointer relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-3 flex gap-2">
                  <span className={cn(
                    "status-pill",
                    rfq.status === 'PENDING' ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"
                  )}>{rfq.status}</span>
               </div>

               <div className="flex gap-6">
                  <div className="flex-1 space-y-4">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sidebar-bg font-bold border border-border-gray">
                           {rfq.id.split('-')[1].substring(0, 2)}
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none mb-1">Inquiry ID: {rfq.id}</p>
                           <h3 className="text-sm font-bold text-sidebar-bg">Buyer Profile Verified • US Enterprise</h3>
                        </div>
                     </div>

                     <div className="p-3 bg-bg-gray rounded border border-border-gray">
                        <p className="text-[10px] font-bold text-gray-600 line-clamp-2 leading-relaxed">"{rfq.specifications}"</p>
                     </div>

                     <div className="grid grid-cols-3 gap-4 text-[10px] font-black uppercase text-gray-400 tracking-tighter">
                        <div>
                           <p>Quantity</p>
                           <p className="text-sidebar-bg text-xs font-bold mt-0.5">{rfq.quantity} Units</p>
                        </div>
                        <div>
                           <p>Target Date</p>
                           <p className="text-sidebar-bg text-xs font-bold mt-0.5">{formatDate(rfq.deliveryDate)}</p>
                        </div>
                        <div>
                           <p>Received</p>
                           <p className="text-sidebar-bg text-xs font-bold mt-0.5">{formatDate(rfq.createdAt)}</p>
                        </div>
                     </div>
                  </div>

                  <div className="w-px bg-border-gray" />

                  <div className="w-48 space-y-2 flex flex-col justify-center">
                     <button className="w-full py-2 bg-sidebar-bg text-neon-green rounded text-[10px] font-bold uppercase tracking-widest hover:shadow-lg transition-all">Submit Quote</button>
                     <button className="w-full py-2 bg-white border border-border-gray text-gray-500 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">Reject Inquiry</button>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>

        <div className="space-y-4">
           <div className="card space-y-4">
              <h3 className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Inquiry Performance</h3>
              <div className="space-y-4">
                 <div>
                    <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-1">
                       <span>Response Time</span>
                       <span className="text-sporty-green">Avg 2.4h</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full"><div className="h-full bg-sporty-green w-[85%] rounded-full"></div></div>
                 </div>
                 <div>
                    <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-1">
                       <span>Conversion Rate</span>
                       <span className="text-blue-green">14.2%</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full"><div className="h-full bg-blue-green w-[60%] rounded-full"></div></div>
                 </div>
              </div>
              <div className="pt-4 border-t border-border-gray">
                 <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-sporty-green" />
                    <div>
                       <p className="text-[10px] font-bold text-sidebar-bg">Factory Verified Status</p>
                       <p className="text-[9px] text-gray-400">Valid until Oct 2026</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="card bg-sidebar-bg border-none !p-4 flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon-green">
                 <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">Expiring Soon</h4>
              <p className="text-[10px] text-gray-400">3 RFQs reaching the 48-hour response deadline. Action required to maintain performance rating.</p>
              <button className="w-full py-2 bg-neon-green text-sidebar-bg rounded font-black uppercase text-[10px] tracking-widest mt-2">Prioritize Now</button>
           </div>
        </div>
      </div>
    </div>
  );
}
