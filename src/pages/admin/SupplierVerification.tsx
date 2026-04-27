import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, FileText, ExternalLink, ShieldCheck, UserCheck, AlertCircle } from 'lucide-react';
import { MOCK_SUPPLIERS } from '../../constants';
import { cn } from '../../lib/utils';

export default function SupplierVerification() {
  const pendingSuppliers = MOCK_SUPPLIERS; // In real app, filter for status === 'PENDING'

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-sidebar-bg uppercase tracking-tight">Supplier <span className="text-sporty-green">Verification Suite</span></h1>
        <p className="text-xs text-gray-500">Audit documentation, verify business identities, and assign trust badges.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { label: 'Pending Audits', value: 3, icon: Clock, color: 'border-l-orange-400' },
           { label: 'Approved Today', value: 8, icon: CheckCircle2, color: 'border-l-sporty-green' },
           { label: 'Total Verified', value: 1240, icon: ShieldCheck, color: 'border-l-blue-green' },
           { label: 'Flagged Activity', value: 1, icon: AlertCircle, color: 'border-l-red-500' }
         ].map((stat, i) => (
           <div key={i} className={cn("card border-l-4 h-20 flex flex-col justify-center", stat.color)}>
              <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-lg font-black text-sidebar-bg leading-none">{stat.value}</h3>
           </div>
         ))}
      </div>

      <div className="card !p-0 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-border-gray flex items-center justify-between">
           <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Verification Queue</h3>
           <div className="flex gap-2">
              <button className="px-2 py-1 bg-white border border-border-gray rounded text-[9px] font-bold uppercase transition-all hover:bg-gray-100">Batch Approve</button>
           </div>
        </div>

        <div className="divide-y divide-border-gray">
          {pendingSuppliers.map((supplier) => (
            <div key={supplier.id} className="p-6 flex items-center justify-between hover:bg-bg-gray/30 transition-colors group">
               <div className="flex items-center gap-6 flex-1">
                  <div className="w-12 h-12 bg-white rounded border border-border-gray p-1 overflow-hidden shrink-0">
                     <img src={supplier.logo} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold text-sidebar-bg uppercase text-sm tracking-tight">{supplier.name}</h4>
                        <span className="text-[9px] font-black uppercase bg-bg-gray px-2 py-0.5 rounded text-gray-500 border border-border-gray">ID: {supplier.id}</span>
                     </div>
                     <p className="text-[10px] text-gray-400 font-bold uppercase mb-3"># {supplier.category} • {supplier.location}</p>
                     
                     <div className="flex gap-4">
                        {supplier.documents.map((doc, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 px-3 py-2 bg-white border border-border-gray rounded-lg group/doc cursor-pointer hover:border-blue-green transition-all">
                             <FileText className="w-4 h-4 text-gray-300 group-hover/doc:text-blue-green" />
                             <div>
                                <p className="text-[9px] font-black text-sidebar-bg leading-none">{doc.name}</p>
                                <p className="text-[8px] text-gray-400 uppercase font-black">Audit Pending</p>
                             </div>
                             <ExternalLink className="w-3 h-3 text-gray-300 ml-2" />
                          </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="flex items-center gap-3 ml-12">
                  <button className="flex flex-col items-center gap-1 group/act">
                     <div className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-gray-300 group-hover/act:bg-sporty-green group-hover/act:text-white group-hover/act:border-sporty-green transition-all">
                        <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <span className="text-[8px] font-black uppercase text-gray-400">Verify</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 group/act">
                     <div className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-gray-300 group-hover/act:bg-red-400 group-hover/act:text-white group-hover/act:border-red-400 transition-all">
                        <XCircle className="w-5 h-5" />
                     </div>
                     <span className="text-[8px] font-black uppercase text-gray-400">Reject</span>
                  </button>
                  <div className="w-px h-10 bg-border-gray mx-3" />
                  <button className="flex flex-col items-center gap-1 group/act">
                     <div className="w-10 h-10 rounded-full border border-border-gray flex items-center justify-center text-gray-300 group-hover/act:bg-sidebar-bg group-hover/act:text-neon-green group-hover/act:border-sidebar-bg transition-all">
                        <UserCheck className="w-5 h-5" />
                     </div>
                     <span className="text-[8px] font-black uppercase text-gray-400">Inspect</span>
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="card space-y-4">
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Automation Logs</h3>
            <div className="space-y-3">
               {[
                 { msg: 'Auto-Badged: Sino-Electronics', date: '2 min ago', type: 'success' },
                 { msg: 'Document Rejected: TechFlow Exp.', date: '15 min ago', type: 'error' },
                 { msg: 'System Audit: Ho Chi Minh Textiles', date: '1h ago', type: 'info' }
               ].map((log, lidx) => (
                 <div key={lidx} className="flex justify-between items-center text-[10px] pb-2 border-b border-border-gray last:border-0">
                    <span className="font-bold text-gray-600 truncate max-w-[200px]">{log.msg}</span>
                    <span className="text-[9px] text-gray-400 font-black">{log.date}</span>
                 </div>
               ))}
            </div>
         </div>
         <div className="card bg-blue-green/5 border-blue-green/20 space-y-3">
            <h3 className="text-[10px] font-black uppercase text-blue-green tracking-widest">Smart Audit Tip</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
               Our AI has flagged 2 documents from <strong>Global Heavy Industries</strong> for having low-resolution security seals. Consider requesting a re-scan before final approval.
            </p>
            <button className="text-[10px] font-black uppercase text-blue-green hover:underline">Launch Deep Audit</button>
         </div>
      </div>
    </div>
  );
}

// Mock missing icon
function Clock(props: any) {
  return <ShieldCheck {...props} />;
}
