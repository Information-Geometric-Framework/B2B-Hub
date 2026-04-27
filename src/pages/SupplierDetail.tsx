import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Star, 
  ShieldCheck, 
  Globe, 
  Calendar, 
  LayoutGrid, 
  MessageSquare,
  ArrowLeft,
  ChevronRight,
  Info,
  Download,
  Activity,
  Award,
  Zap,
  Package,
  Building,
  Factory
} from 'lucide-react';
import { MOCK_SUPPLIERS, MOCK_PRODUCTS } from '../constants';
import { cn } from '../lib/utils';
import { useGlobal } from '../GlobalContext';

export function SupplierDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useGlobal();

  const supplier = MOCK_SUPPLIERS.find(s => s.id === id) || MOCK_SUPPLIERS[0];
  const products = MOCK_PRODUCTS.filter(p => p.supplierId === supplier.id);

  return (
    <div className="space-y-12 pb-24 h-full">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-sidebar-bg font-black text-[10px] uppercase tracking-widest transition-all group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Matrix
      </motion.button>

      {/* Profile Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Identity & Info */}
        <div className="lg:col-span-8 space-y-12">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[60px] border border-gray-100 shadow-[0_15px_60px_-20px_rgba(0,0,0,0.05)] overflow-hidden"
          >
             <div className="h-64 bg-sidebar-bg relative overflow-hidden p-12 flex items-end">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] animate-[pulse_4s_infinite]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-sporty-green/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                   <div className="w-32 h-32 bg-white rounded-[40px] p-1 shadow-2xl relative group overflow-hidden">
                      <img src={supplier.logo} alt={supplier.name} className="w-full h-full object-cover rounded-[36px] grayscale hover:grayscale-0 transition-all duration-700" />
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <h1 className="text-4xl font-serif font-black text-white tracking-tighter">{supplier.name}</h1>
                         <div className="bg-sporty-green text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-[0_0_15px_#4ade80]">Verified</div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs font-medium text-white/50">
                         <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-sporty-green" /> {supplier.location}, China</span>
                         <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-blue-green" /> Established 2012</span>
                         <span className="flex items-center gap-2"><Star className="w-3.5 h-3.5 text-yellow-500 fill-current" /> {supplier.rating} Analytics Score</span>
                      </div>
                   </div>
                </div>
                <div className="absolute top-8 right-8">
                   <button className="bg-white text-sidebar-bg px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-sporty-green hover:text-white transition-all transform active:scale-95">Contact Node</button>
                </div>
             </div>

             <div className="p-16 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {[
                     { label: 'Market Presence', val: 'Global', icon: Globe },
                     { label: 'Quality Audit', val: 'A+ Tier', icon: Award },
                     { label: 'Export Node', val: 'Shanghai', icon: Factory }
                   ].map((item, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase tracking-widest">
                           <item.icon className="w-4 h-4 text-sporty-green" /> {item.label}
                        </div>
                        <p className="text-xl font-serif font-bold text-sidebar-bg">{item.val}</p>
                     </div>
                   ))}
                </div>

                <div className="space-y-6">
                   <h3 className="text-[11px] font-black text-sidebar-bg uppercase tracking-[0.3em] flex items-center gap-3">
                      <Info className="w-4 h-4 text-blue-green" /> Enterprise Profile
                   </h3>
                   <p className="text-gray-500 font-lato font-light text-xl leading-relaxed max-w-3xl italic">
                      "{supplier.description}"
                   </p>
                   <div className="flex flex-wrap gap-3">
                      {supplier.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] text-gray-500 font-black uppercase tracking-tight">#{tag}</span>
                      ))}
                   </div>
                </div>
             </div>
          </motion.section>

          {/* Product Inventory Flow */}
          <section className="space-y-8">
             <div className="flex items-end justify-between px-4">
                <h3 className="text-3xl font-serif font-black text-sidebar-bg">Asset <span className="text-blue-green">Inventory</span></h3>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{products.length} Node Output</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white p-4 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden"
                  >
                    <div className="aspect-square rounded-[32px] overflow-hidden bg-gray-50 mb-6 relative">
                       <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-6 left-6">
                          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-sidebar-bg shadow-sm">Ready to Ship</span>
                       </div>
                    </div>
                    <div className="px-6 pb-6 space-y-4">
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black uppercase text-sporty-green tracking-widest">{product.category}</span>
                          <span className="text-xl font-bold font-serif text-sidebar-bg">{product.priceRange.split(' - ')[0]}</span>
                       </div>
                       <h4 className="text-lg font-black text-sidebar-bg group-hover:text-sporty-green transition-colors">{product.name}</h4>
                       <button 
                         onClick={() => navigate(`/rfqs/new?supplierId=${supplier.id}&productId=${product.id}`)}
                         className="w-full py-4 bg-gray-50 group-hover:bg-sidebar-bg group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                       >
                         Request Formulation
                       </button>
                    </div>
                  </motion.div>
                ))}
             </div>
          </section>
        </div>

        {/* Right Side: Metrics & Analytics */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-sidebar-bg rounded-[60px] p-12 text-white space-y-12 sticky top-8 shadow-2xl"
          >
             <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-sporty-green">Node Telemetry</h3>
                <div className="space-y-8">
                   {[
                     { label: 'Logistics Precision', val: 98, color: 'bg-sporty-green' },
                     { label: 'Quality Consistency', val: 94, color: 'bg-blue-green' },
                     { label: 'R&D Velocity', val: 88, color: 'bg-indigo-500' }
                   ].map((m, i) => (
                     <div key={i} className="space-y-3">
                        <div className="flex justify-between items-end">
                           <span className="text-xs font-black text-white/40 tracking-tight uppercase">{m.label}</span>
                           <span className="text-lg font-black font-serif italic text-white">{m.val}%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${m.val}%` }}
                             viewport={{ once: true }}
                             transition={{ duration: 1, delay: i * 0.2 }}
                             className={cn("h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]", m.color)}
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="pt-12 border-t border-white/5 space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Protocol Access</h4>
                <div className="flex flex-col gap-4">
                   {[
                     { label: 'Download Audit PDF', icon: Download },
                     { label: 'Infrastructure Map', icon: Globe },
                     { label: 'Legal Compliance', icon: ShieldCheck }
                   ].map((link, i) => (
                     <a key={i} href="#" className="flex items-center justify-between group py-2">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-sporty-green group-hover:text-white transition-all">
                              <link.icon className="w-5 h-5" />
                           </div>
                           <span className="text-[11px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{link.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-sporty-green group-hover:translate-x-1 transition-all" />
                     </a>
                   ))}
                </div>
             </div>

             <div className="pt-8 text-center px-4">
                <p className="text-[10px] text-white/20 font-medium font-lato leading-relaxed">
                   Calculated node metrics are refreshed every 24h. Platinum audit data provided by TUV-Digital.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
