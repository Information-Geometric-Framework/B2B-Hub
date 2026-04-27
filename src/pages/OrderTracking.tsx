import { motion } from 'motion/react';
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  Timer, 
  MapPin, 
  ArrowRight,
  Download,
  RefreshCw,
  Box,
  ChevronRight
} from 'lucide-react';
import { MOCK_ORDERS } from '../constants';
import { cn, formatDate } from '../lib/utils';

export function OrderTracking() {
  const order = MOCK_ORDERS[0];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-xl font-bold text-sidebar-bg uppercase tracking-tight">Order <span className="text-sporty-green">Tracking</span></h1>
           <p className="text-xs text-gray-500">Global logistics and supply chain flow monitoring.</p>
        </div>
        <div className="flex gap-2 font-sans">
           <button className="px-6 py-2 bg-white border border-border-gray rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all">
              <Download className="w-3.5 h-3.5 inline mr-1" /> Manifest
           </button>
           <button className="px-6 py-2 bg-sidebar-bg text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-sidebar-bg/90 transition-all">
              <RefreshCw className="w-3.5 h-3.5 inline mr-1" /> Sync Status
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="card space-y-8 !p-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-green bg-blue-green/5 px-2 py-0.5 rounded border border-blue-green/10 mb-1 inline-block">ID: {order.id}</span>
                <h2 className="text-lg font-bold text-sidebar-bg">Transit: Shenzhen ➔ Los Angeles</h2>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-0.5">ETA Delivery</p>
                <p className="text-sm font-bold text-sporty-green">MAR 22, 2024</p>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative pt-2 pb-6 px-4">
              <div className="absolute top-[32px] left-8 right-8 h-1 bg-gray-100 rounded-full">
                <div className="h-full bg-gradient-to-r from-sporty-green to-blue-green w-[75%] rounded-full shadow-sm" />
              </div>
              <div className="flex justify-between relative z-10">
                {order.timeline.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-4 border-white shadow-sm",
                      step.active 
                        ? "bg-sporty-green text-white" 
                        : "bg-gray-100 text-gray-300"
                    )}>
                      {idx === 0 ? <Box className="w-4 h-4" /> : 
                       idx === 1 ? <CheckCircle2 className="w-4 h-4" /> :
                       idx === 2 ? <Truck className="w-4 h-4" /> :
                       <MapPin className="w-4 h-4" />}
                    </div>
                    <div className="text-center">
                      <p className={cn("text-[9px] font-black uppercase tracking-tighter", step.active ? "text-sidebar-bg" : "text-gray-300")}>{step.status}</p>
                      <p className="text-[8px] text-gray-400 font-bold">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-50 border border-border-gray rounded-lg space-y-4">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                 <Timer className="w-4 h-4 text-blue-green" /> Detailed Event Log
              </h3>
              <div className="space-y-4 ml-2">
                {[
                  { time: '14:20', date: 'Mar 18', text: 'Cargo departed from Shenzhen Terminal 2', location: 'Shenzhen, CN' },
                  { time: '09:00', date: 'Mar 18', text: 'Customs release confirmed (Export)', location: 'Shenzhen, CN' },
                  { time: '22:15', date: 'Mar 16', text: 'Warehouse pickup completed by ZTO Logistics', location: 'Factory Area B' },
                ].map((log, lidx) => (
                  <div key={lidx} className="flex gap-4 group">
                    <div className="w-px bg-gray-200 relative">
                       <div className="absolute top-1 -left-1 w-2 h-2 rounded-full bg-gray-200 group-first:bg-sporty-green border-2 border-white shadow-sm"></div>
                    </div>
                    <div className="flex-1 pb-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="font-bold text-[11px] text-sidebar-bg">{log.text}</p>
                        <span className="text-[9px] text-gray-400 font-black tracking-tighter">{log.date} @ {log.time}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 flex items-center gap-1">
                         <MapPin className="w-3 h-3 text-gray-300" /> {log.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="card space-y-6">
             <h3 className="font-black uppercase tracking-widest text-[10px] text-gray-400">Consignment Data</h3>
             <div className="space-y-3 pb-4 border-b border-border-gray">
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-[9px] text-gray-400 font-black uppercase">Consolidated Invoice</p>
                      <h4 className="text-xl font-bold text-sidebar-bg">$6,250.00</h4>
                   </div>
                   <button className="text-[10px] font-bold uppercase text-blue-green hover:underline">PDF View</button>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                   <div className="p-2 bg-gray-50 border border-border-gray rounded">
                      <p className="text-[8px] text-gray-400 font-black uppercase mb-0.5">Payload</p>
                      <p className="text-xs font-bold text-sidebar-bg">500 Units</p>
                   </div>
                   <div className="p-2 bg-gray-50 border border-border-gray rounded">
                      <p className="text-[8px] text-gray-400 font-black uppercase mb-0.5">Est. Weight</p>
                      <p className="text-xs font-bold text-sidebar-bg">240kg</p>
                   </div>
                </div>
             </div>

             <div className="p-3 bg-blue-green/5 border border-blue-green/20 rounded flex items-center justify-between group cursor-pointer hover:bg-blue-green/10 transition-all">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white border border-blue-green/30 flex items-center justify-center text-blue-green">
                      <RefreshCw className="w-4 h-4" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-sidebar-bg">Duplicate Order</p>
                      <p className="text-[9px] text-gray-500">Repeat same specifications</p>
                   </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all" />
             </div>

             <button className="w-full py-2.5 text-[10px] font-bold uppercase tracking-widest text-red-500 border border-red-100 rounded-full hover:bg-red-50 transition-all font-sans">
                Escalate / Dispute
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
