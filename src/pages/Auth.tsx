import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  User, 
  Building, 
  Lock, 
  Mail, 
  ArrowRight, 
  Github, 
  Fingerprint,
  Zap,
  Activity,
  Globe
} from 'lucide-react';
import { useGlobal } from '../GlobalContext';
import { UserRole } from '../types';
import { cn } from '../lib/utils';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<UserRole>('BUYER');
  const navigate = useNavigate();
  const { setUser } = useGlobal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: role === 'ADMIN' ? 'admin-1' : role === 'SUPPLIER' ? 's1' : 'b1',
      name: role === 'ADMIN' ? 'Platform Admin' : role === 'SUPPLIER' ? 'John Supplier' : 'Sarah Buyer',
      email: 'user@example.com',
      role: role
    });
    navigate(role === 'ADMIN' ? '/admin' : '/');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 selection:bg-sporty-green/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-green via-transparent to-transparent" />
         <div className="grid grid-cols-12 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-sidebar-bg/10" />
            ))}
         </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10"
      >
        {/* Elite Visual Side */}
        <div className="hidden lg:flex bg-sidebar-bg p-20 flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4ade80_0%,_transparent_60%)]" />
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#2dd4bf_0%,_transparent_60%)]" />
          </div>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative z-10 space-y-12">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/welcome')}>
               <ShieldCheck className="text-sporty-green w-10 h-10" />
               <span className="text-3xl font-serif font-black tracking-tighter">B2B <span className="text-sporty-green">HUB</span></span>
            </div>
            
            <div className="space-y-6">
                <h2 className="text-6xl font-serif font-black leading-[0.9] tracking-tighter">
                  The Protocol <br/><span className="text-sporty-green italic font-medium">Instantiated.</span>
                </h2>
                <p className="text-white/40 text-lg font-lato font-light leading-relaxed max-w-sm">
                  Access the high-performance tier of global trade. Verified, audited, and cryptographically secure nodes at your command.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
               <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sporty-green opacity-50 text-[9px] font-black uppercase tracking-widest">
                     <Globe className="w-3.5 h-3.5" /> Market Access
                  </div>
                  <p className="text-white font-bold">Global Scale</p>
               </div>
               <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-green opacity-50 text-[9px] font-black uppercase tracking-widest">
                     <Zap className="w-3.5 h-3.5" /> Ops Velocity
                  </div>
                  <p className="text-white font-bold">Instant Sync</p>
               </div>
            </div>
          </div>

          <div className="relative z-10 space-y-6 pt-12 border-t border-white/5">
             <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-sidebar-bg bg-white/10 backdrop-blur-md flex items-center justify-center text-[10px] font-black text-white/50">
                        {String.fromCharCode(64 + i)}
                     </div>
                   ))}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Verified Protocol Nodes</p>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-12 lg:p-24 flex flex-col justify-center bg-white space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-serif font-black text-sidebar-bg tracking-tight">
               {isLogin ? 'Initialize' : 'Instantiate'} <span className="text-blue-green italic">{isLogin ? 'Session' : 'ID'}</span>
            </h1>
            <p className="text-gray-400 font-lato font-light text-lg">
               Secure node authentication protocol.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 gap-4 p-2 bg-gray-50 rounded-[32px] border border-gray-100"
                >
                   <button 
                    type="button" 
                    onClick={() => setRole('BUYER')}
                    className={cn("py-3 text-[11px] font-black uppercase rounded-[24px] transition-all tracking-widest", role === 'BUYER' ? 'bg-white text-sidebar-bg shadow-sm' : 'text-gray-400 hover:text-gray-600')}
                   >Buyer Node</button>
                   <button 
                    type="button" 
                    onClick={() => setRole('SUPPLIER')}
                    className={cn("py-3 text-[11px] font-black uppercase rounded-[24px] transition-all tracking-widest", role === 'SUPPLIER' ? 'bg-white text-sidebar-bg shadow-sm' : 'text-gray-400 hover:text-gray-600')}
                   >Supplier Node</button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-gray-300 tracking-[0.3em] block ml-2">Identity Hub (Email)</label>
                 <div className="relative group">
                   <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-sporty-green transition-colors" />
                   <input 
                     type="email" 
                     placeholder="identity@enterprise.com" 
                     className="w-full bg-gray-50 border border-transparent rounded-3xl py-5 pl-14 pr-8 text-sm focus:bg-white focus:border-sporty-green/30 outline-none transition-all shadow-inner placeholder:text-gray-200"
                     required
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-gray-300 tracking-[0.3em] block ml-2">Secure Hash (Password)</label>
                 <div className="relative group">
                   <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-sporty-green transition-colors" />
                   <input 
                     type="password" 
                     placeholder="••••••••" 
                     className="w-full bg-gray-50 border border-transparent rounded-3xl py-5 pl-14 pr-8 text-sm focus:bg-white focus:border-sporty-green/30 outline-none transition-all shadow-inner placeholder:text-gray-200"
                     required
                   />
                 </div>
               </div>
            </div>

            <div className="flex justify-between items-center px-2">
               <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded-lg border-2 border-gray-100 flex items-center justify-center group-hover:border-sporty-green transition-all">
                     <input type="checkbox" className="hidden peer" />
                     <div className="w-2.5 h-2.5 bg-sporty-green rounded-sm opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="text-xs font-black text-gray-300 uppercase tracking-widest">Persist Session</span>
               </label>
               <button type="button" className="text-xs font-black text-blue-green uppercase tracking-widest hover:underline decoration-blue-green/30">Reset ID</button>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-sidebar-bg text-white py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.4em] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] hover:bg-sporty-green transition-all flex items-center justify-center gap-4 group"
            >
              {isLogin ? 'Execute Session' : 'Instantiate Node'} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </form>

          <div className="pt-12 text-center border-t border-gray-50">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] font-black uppercase text-gray-300 hover:text-sidebar-bg tracking-[0.3em] transition-colors"
            >
              {isLogin ? "Terminate Session? Register Interface" : "Already Instantiated? Login Interface"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
