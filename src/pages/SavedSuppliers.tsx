import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { MOCK_SUPPLIERS } from '../constants';
import { useNavigate } from 'react-router-dom';

export default function SavedSuppliers() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-sidebar-bg uppercase tracking-tight">Saved <span className="text-sporty-green">Suppliers</span></h1>
        <p className="text-xs text-gray-500">Your curated network of verified global manufacturing partners.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SUPPLIERS.map((supplier, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            key={supplier.id} 
            className="card group relative"
          >
            <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-gray-300 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 z-10">
               <X className="w-4 h-4" />
            </button>

            <div className="flex gap-4 mb-6">
               <div className="w-16 h-16 bg-gray-50 border border-border-gray rounded-xl overflow-hidden p-1 shrink-0">
                  <img src={supplier.logo} className="w-full h-full object-cover rounded" />
               </div>
               <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                     <h3 className="text-sm font-bold text-sidebar-bg uppercase truncate">{supplier.name}</h3>
                     <ShieldCheck className="w-4 h-4 text-sporty-green shrink-0" />
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter truncate">{supplier.location}</p>
                  <div className="flex items-center gap-1 mt-1 text-orange-400">
                     <Star className="w-3 h-3 fill-current" />
                     <span className="text-[10px] font-bold text-gray-600">{supplier.rating}</span>
                  </div>
               </div>
            </div>

            <div className="space-y-2 mb-6">
               <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Recent Activity</p>
               <div className="p-2 bg-bg-gray rounded border border-border-gray">
                  <p className="text-[9px] text-gray-600 font-medium">Updated pricing catalog for 2026 Q1 yesterday.</p>
               </div>
            </div>

            <div className="flex gap-2">
               <button 
                onClick={() => navigate(`/suppliers/${supplier.id}`)}
                className="flex-1 bg-white border border-border-gray text-[10px] font-bold uppercase py-2 rounded hover:bg-gray-50 transition-all"
               >View Factory</button>
               <button 
                onClick={() => navigate(`/rfqs/new?supplierId=${supplier.id}`)}
                className="flex-1 bg-sidebar-bg text-neon-green text-[10px] font-bold uppercase py-2 rounded hover:shadow-lg transition-all"
               >Request RFQ</button>
            </div>
          </motion.div>
        ))}
      </div>

      {MOCK_SUPPLIERS.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-border-gray">
           <Star className="w-12 h-12 text-gray-200 mx-auto mb-4" />
           <p className="text-sm text-gray-400 font-bold uppercase">No partners saved yet.</p>
           <button onClick={() => navigate('/suppliers')} className="mt-4 text-xs font-black text-sporty-green underline uppercase">Explore Directory</button>
        </div>
      )}
    </div>
  );
}
