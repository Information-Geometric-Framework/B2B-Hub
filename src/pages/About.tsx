import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Zap, Users, Trophy, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-neon-green/30">
      <section className="py-24 px-8 border-b border-border-gray">
         <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-serif font-bold text-sidebar-bg leading-tight">
               We Engineer the <span className="text-sporty-green">Nerves</span> of Global Commerce.
            </h1>
            <p className="text-lg text-gray-500 font-lato font-light leading-relaxed italic">
               B2B Hub is not just a marketplace. It is a high-performance infrastructure built to solve the trust deficit in global B2B procurement.
            </p>
         </div>
      </section>

      <section className="py-24 px-8 bg-bg-gray">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: 'Borders Are Optional', text: 'Connecting 120+ countries through a unified procurement protocol.' },
              { icon: ShieldCheck, title: 'Absolute Verification', text: 'Every factory undergoes a multi-layer physical and digital audit.' },
              { icon: Zap, title: 'Instant Execution', text: 'From RFQ to PO in minutes, not weeks. Automation at the core.' }
            ].map((v, i) => (
              <div key={i} className="card space-y-6 bg-white">
                 <div className="w-12 h-12 bg-bg-gray rounded-xl flex items-center justify-center text-sidebar-bg">
                    <v.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-serif font-bold text-sidebar-bg uppercase tracking-widest">{v.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed font-lato font-light">{v.text}</p>
              </div>
            ))}
         </div>
      </section>

      <section className="py-24 px-8">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl font-serif font-bold text-sidebar-bg uppercase tracking-tight">Our Mission</h2>
               <p className="text-gray-600 text-lg leading-relaxed font-lato font-light">
                  To eliminate the "Update Gap" in supply chains. We believe procurement should be as transparent as a code commit. Every movement, every verification, every quality check is recorded on the B2B Hub ledger.
               </p>
               <div className="grid grid-cols-2 gap-8 font-sans">
                  <div>
                    <h4 className="text-3xl font-bold text-sporty-green">12K+</h4>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Factories</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-blue-green">$2.4B</h4>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Flowing Through</p>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400" className="w-full h-full object-cover grayscale" /></div>
               <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-xl translate-y-8"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400" className="w-full h-full object-cover grayscale" /></div>
            </div>
         </div>
      </section>

      <section className="py-24 px-8 bg-sidebar-bg text-center space-y-8 font-sans">
         <h2 className="text-4xl font-serif font-bold text-white leading-tight">Ready to Scale?</h2>
         <p className="text-gray-400 max-w-sm mx-auto text-sm font-lato font-light">Join the enterprise tier and unlock professional audit reports for over 5,000 manufacturers.</p>
         <button onClick={() => navigate('/auth')} className="bg-sporty-green text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:shadow-2xl transition-all shadow-lg hover:bg-sporty-green/90">Start Your Audit</button>
      </section>
    </div>
  );
}
