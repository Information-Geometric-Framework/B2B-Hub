import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown,
  LayoutGrid,
  List,
  Factory,
  Building2,
  BadgeCheck
} from 'lucide-react';
import { MOCK_SUPPLIERS } from '../constants';
import { cn } from '../lib/utils';
import { useGlobal } from '../GlobalContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export function SupplierDirectory() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useGlobal();

  const filteredSuppliers = MOCK_SUPPLIERS.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sporty-green/10 text-sporty-green rounded-full text-[10px] font-black uppercase tracking-widest">
             <Factory className="w-3 h-3" /> Industrial Node Directory
          </div>
          <h1 className="text-5xl font-serif font-black text-sidebar-bg tracking-tighter">Verified <span className="text-blue-green italic">Suppliers.</span></h1>
          <p className="text-sm text-gray-400 font-lato font-light max-w-lg">Advanced calibration matching you with top-tier global manufacturing entities.</p>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100 shadow-inner">
              <button 
                onClick={() => setView('grid')}
                className={cn("p-2.5 rounded-xl transition-all", view === 'grid' ? "bg-white text-sidebar-bg shadow-sm" : "text-gray-400 hover:text-gray-600")}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setView('list')}
                className={cn("p-2.5 rounded-xl transition-all", view === 'list' ? "bg-white text-sidebar-bg shadow-sm" : "text-gray-400 hover:text-gray-600")}
              >
                <List className="w-5 h-5" />
              </button>
           </div>
           <button className="flex items-center gap-3 px-6 py-3.5 bg-sidebar-bg text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-green transition-all shadow-xl">
              <Filter className="w-4 h-4 text-sporty-green" /> Analytics Filters
           </button>
        </div>
      </motion.div>

      {/* High-End Search Interface */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-sporty-green/20 to-blue-green/20 rounded-3xl blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
        <div className="relative flex items-center bg-white border border-gray-100 rounded-3xl shadow-sm group-focus-within:shadow-2xl transition-all group-focus-within:border-sporty-green/30">
          <Search className="ml-8 w-5 h-5 text-gray-300" />
          <input 
            type="text" 
            placeholder="Search by material, protocol, or factory ID..."
            className="w-full py-6 px-6 text-sm font-medium outline-none bg-transparent placeholder:text-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="mr-8 flex items-center gap-4 border-l border-gray-100 pl-8">
             <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest hidden md:block">Region: Global</span>
             <ChevronDown className="w-4 h-4 text-gray-300" />
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "grid gap-8",
          view === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
        )}
      >
        {filteredSuppliers.map((supplier) => (
          <motion.div
            key={supplier.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={cn(
              "bg-white rounded-[40px] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-all cursor-pointer group flex flex-col",
              view === 'list' && "md:flex-row items-center p-6 gap-10"
            )}
            onClick={() => navigate(`/suppliers/${supplier.id}`)}
          >
            {/* Visual Node */}
            <div className={cn(
              "relative bg-gray-50 flex items-center justify-center shrink-0 border-b border-gray-50 group-hover:bg-sporty-green/5 transition-colors overflow-hidden",
              view === 'grid' ? "w-full aspect-[4/3] rounded-t-[40px]" : "w-48 h-36 rounded-[32px] border-b-0"
            )}>
              <img 
                src={supplier.logo} 
                alt={supplier.name} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute top-6 left-6 flex gap-2">
                 <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-2 border border-white">
                    <BadgeCheck className="w-3.5 h-3.5 text-sporty-green" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-sidebar-bg">Verified</span>
                 </div>
              </div>
            </div>

            <div className={cn(
              "flex-1 flex flex-col",
              view === 'grid' ? "p-8" : "p-0"
            )}>
               <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-green/10 rounded-full text-[9px] font-black uppercase text-blue-green tracking-widest">{supplier.category}</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full border border-gray-100">
                     <Star className="w-3 h-3 text-sporty-green fill-current" />
                     <span className="text-[11px] font-black text-gray-600">{supplier.rating}</span>
                  </div>
               </div>
               <h3 className="text-xl font-serif font-black text-sidebar-bg mb-2 group-hover:text-sporty-green transition-colors">{supplier.name}</h3>
               <p className="text-xs text-gray-400 mb-8 flex items-center gap-2 font-lato font-light">
                  <MapPin className="w-3.5 h-3.5 text-gray-300" /> {supplier.location}
               </p>
               
               <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                  <span className="text-[10px] font-black uppercase text-gray-300 tracking-[0.2em]">Node ID: {supplier.id.padStart(4, '0')}</span>
                  <div className="w-10 h-10 rounded-full bg-sidebar-bg text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
                     <ArrowRight className="w-4 h-4" />
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Placeholder */}
      <div className="flex justify-center pt-12">
         <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <button key={i} className={cn(
                "w-12 h-12 rounded-2xl font-black text-xs transition-all",
                i === 1 ? "bg-sidebar-bg text-white shadow-xl" : "bg-white border border-gray-100 text-gray-400 hover:bg-gray-50"
              )}>
                {i.toString().padStart(2, '0')}
              </button>
            ))}
         </div>
      </div>
    </div>
  );
}
