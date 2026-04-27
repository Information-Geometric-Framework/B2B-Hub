import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Search, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Award, 
  MapPin, 
  Star, 
  ArrowRight, 
  Mail, 
  MessageSquare, 
  Phone, 
  Menu,
  ChevronDown,
  LayoutGrid,
  Factory,
  Truck,
  FileText,
  User,
  ShoppingBag,
  Activity,
  Box,
  Fingerprint,
  ChevronRight,
  HardHat,
  Cpu,
  Monitor,
  Package,
  Wrench,
  Smartphone,
  Github
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Landing() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

  const categories = [
    { name: 'Heavy Machinery', icon: Factory, color: 'bg-sporty-green/10' },
    { name: 'Precision Electronics', icon: Cpu, color: 'bg-blue-green/10' },
    { name: 'Raw Textiles', icon: ShoppingBag, color: 'bg-emerald-500/10' },
    { name: 'Industrial Tools', icon: Wrench, color: 'bg-sidebar-bg/10' },
    { name: 'Logistics Sys', icon: Truck, color: 'bg-sporty-green/10' },
    { name: 'Medical Grade', icon: Activity, color: 'bg-blue-green/10' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-sporty-green/30 selection:text-white overflow-x-hidden">
      
      {/* SECTION 1: IMMERSIVE HERO WITH LOGISTICAL MAP & PIPELINE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-sidebar-bg">
        {/* Global Logistical Map & Fleet Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-30">
          <motion.div 
            style={{ scale: heroScale }}
            className="w-full h-full relative"
          >
            {/* Stylized Map Background (SVG Pattern) */}
            <svg className="absolute inset-0 w-full h-full text-white/5 opacity-50" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <path d="M150,300 Q200,250 300,280 T500,220 T700,280 T850,200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <path d="M100,500 Q300,450 400,550 T700,500 T900,600" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <path d="M200,800 Q400,750 500,850 T800,800" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              {/* Regional Hubs */}
              <circle cx="150" cy="300" r="4" fill="#4ade80" className="animate-pulse" />
              <circle cx="850" cy="200" r="4" fill="#2dd4bf" className="animate-pulse" />
              <circle cx="100" cy="500" r="4" fill="#4ade80" className="animate-pulse" />
              <circle cx="900" cy="600" r="4" fill="#2dd4bf" className="animate-pulse" />
            </svg>

            {/* Animated Delivery Fleet (Trucks) */}
            {[
              { d: "M150,300 Q200,250 300,280 T500,220 T700,280 T850,200", delay: 0 },
              { d: "M100,500 Q300,450 400,550 T700,500 T900,600", delay: 5 },
              { d: "M900,600 Q700,500 400,550 T100,500", delay: 2 }
            ].map((route, i) => (
              <svg key={i} className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.circle 
                  r="6"
                  fill="none"
                >
                  <motion.path 
                    id={`route-${i}`}
                    d={route.d}
                    fill="none"
                  />
                </motion.circle>
                <motion.g>
                  <Truck className="w-6 h-6 text-sporty-green/40" />
                  <animateMotion 
                    dur={`${15 + i * 5}s`}
                    repeatCount="indefinite"
                    path={route.d}
                    begin={`${route.delay}s`}
                  />
                </motion.g>
              </svg>
            ))}

            {/* Main Pipeline Conduit */}
            <div className="absolute top-[65%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
            
            {/* Global Pipeline Cargo Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ left: '-5%', opacity: 0 }}
                animate={{ 
                  left: '105%', 
                  opacity: [0, 1, 1, 0],
                  y: [0, -20, 20, 0]
                }}
                transition={{ 
                  duration: 12 + i * 2, 
                  repeat: Infinity, 
                  ease: "linear", 
                  delay: i * 3 
                }}
                className="absolute top-[65%] -translate-y-1/2 flex flex-col items-center"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl">
                   {i % 2 === 0 ? <Box className="w-5 h-5 text-sporty-green" /> : <Package className="w-5 h-5 text-blue-green" />}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-green/20 via-transparent to-transparent" />
          <div className="grid grid-cols-12 h-full opacity-[0.03]">
            {[...Array(96)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/50" />
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sporty-green animate-pulse shadow-[0_0_10px_#4ade80]" />
            <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Next-Gen Sourcing Network</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-7xl md:text-9xl font-serif font-black text-white leading-[0.9] tracking-tighter"
          >
            Sourcing <br />
            <span className="text-sporty-green italic font-medium">Re-Engineered.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="max-w-2xl mx-auto text-xl text-white/40 font-lato font-light leading-relaxed tracking-wide"
          >
            An elite B2B infrastructure connecting global buyers with 
            platinum-verified manufacturing nodes. Secure, audited, and limitless.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="relative w-full max-w-xl group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sporty-green to-blue-green rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <input 
                  type="text" 
                  placeholder="Enter equipment keyword..." 
                  className="w-full h-18 px-8 text-white outline-none bg-transparent placeholder:text-white/20"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="h-18 px-10 bg-sporty-green text-white font-black uppercase text-[11px] tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
                  <Search className="w-4 h-4" /> Search
                </button>
              </div>
            </div>
            <button 
              onClick={() => navigate('/auth')}
              className="px-12 py-6 bg-transparent border-2 border-white/10 text-white rounded-2xl font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white/5 hover:border-white/20 transition-all active:scale-95"
            >
              Enterprise Directory
            </button>
          </motion.div>
        </div>

        {/* Decorative Shapes */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-64 -left-64 w-[600px] h-[600px] border-[0.5px] border-white/5 rounded-full opacity-30"
        />
        <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute -top-64 -right-64 w-[800px] h-[800px] border-[0.5px] border-white/5 rounded-full opacity-20"
        />
      </section>

      {/* SECTION 2: GLOBAL RHYTHM (STATS) */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24"
          >
            {[
              { label: 'Factories Audited', val: '12,480', icon: Factory },
              { label: 'Trade VolumeFlow', val: '$2.84B', icon: Activity },
              { label: 'Logistics Nodes', val: '185+', icon: Globe },
              { label: 'Precision Score', val: '99.99%', icon: ShieldCheck }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-sporty-green">
                   <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-5xl font-black text-sidebar-bg font-serif tracking-tight">{stat.val}</h4>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.25em] pt-2">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: ENGINEERED CATEGORIES */}
      <section className="py-32 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-6xl font-serif font-black text-sidebar-bg leading-none">High-Density <br /><span className="text-blue-green italic font-medium">Verticals.</span></h2>
              <p className="text-gray-500 font-lato font-light max-w-md text-lg leading-relaxed">Precision-matched supplier nodes across mission-critical industrial sectors.</p>
            </motion.div>
            <motion.button 
              whileHover={{ x: 10 }}
              className="text-sidebar-bg font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3 group bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100"
            >
              View Taxonomy <ArrowRight className="w-4 h-4 text-sporty-green group-hover:translate-x-1 transition-all" />
            </motion.button>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -20, scale: 1.05 }}
                className="bg-white p-10 rounded-[48px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all cursor-pointer text-center space-y-6 group border border-transparent hover:border-sporty-green/20"
              >
                <div className={cn("w-20 h-20 mx-auto rounded-[32px] flex items-center justify-center transition-all group-hover:rotate-[15deg]", cat.color)}>
                  <cat.icon className="w-10 h-10 text-sidebar-bg" />
                </div>
                <h4 className="text-[14px] font-black text-sidebar-bg leading-tight tracking-tight uppercase">{cat.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE INFRASTRUCTURE (HOW IT WORKS) */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block bg-sidebar-bg text-sporty-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">Core Protocol</div>
              <h2 className="text-6xl font-serif font-black text-sidebar-bg leading-[0.95]">Zero-Trust <br />Procurement <br /><span className="text-blue-green italic font-medium">Engine.</span></h2>
            </motion.div>
            
            <div className="space-y-12">
              {[
                { step: '01', title: 'Node Discovery', text: 'AI-assisted calibration matching you with factories maintaining optimized capacity/quality ratios.', icon: Search },
                { step: '02', title: 'Audit Verification', text: 'Transparent assessment of heavy-industrial capability prior to fiscal commitment.', icon: ShieldCheck },
                { step: '03', title: 'Real-time Telemetry', text: 'Proprietary monitoring of your supply chain from factory line to port of entry.', icon: Activity }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3, duration: 0.8 }}
                  className="flex gap-10 group"
                >
                  <div className="shrink-0 space-y-2">
                    <span className="text-6xl font-serif font-bold text-gray-100 group-hover:text-sporty-green transition-colors leading-none block">{item.step}</span>
                  </div>
                  <div className="space-y-3 pt-2">
                    <h4 className="text-2xl font-black text-sidebar-bg flex items-center gap-3">
                       <item.icon className="w-5 h-5 text-sporty-green" /> {item.title}
                    </h4>
                    <p className="text-gray-500 font-lato font-light leading-relaxed text-lg">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="bg-sidebar-bg rounded-[80px] p-20 aspect-square flex items-center justify-center relative z-10 shadow-2xl overflow-hidden"
            >
              <div className="relative flex flex-col items-center">
                <Box className="w-48 h-48 text-sporty-green drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 border-dashed rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                <span className="mt-8 text-white/20 font-black uppercase tracking-[0.5em] text-[10px]">Secure Shipment Path</span>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-blue-green/30 blur-[150px] rounded-full group-hover:bg-sporty-green/30 transition-all duration-1000 opacity-50" />
          </div>
        </div>
      </section>

      {/* SECTION 5: CURATED NETWORK (SUPPLIERS) */}
      <section className="py-40 bg-sidebar-bg text-white relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center space-y-6 mb-32">
            <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-[10px] font-black uppercase tracking-[0.5em] text-sporty-green"
            >
              The Platinum Corridor
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-7xl font-serif font-black tracking-tight"
            >
              Industry-Leading <span className="text-sporty-green italic font-medium">Nodes.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Delta Optix Systems', tag: 'Optical Engineering', loc: 'Zhejiang', rating: '4.98', count: '1.2K' },
              { name: 'Heavy Metal Kraft', tag: 'Core Fabrication', loc: 'Shanghai', rating: '4.95', count: '850' },
              { name: 'Quantum Textiles', tag: 'Advanced Polymer', loc: 'Ningbo', rating: '4.99', count: '2.4K' }
            ].map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -20 }}
                className="group bg-white/5 backdrop-blur-xl p-3 rounded-[60px] border border-white/10 hover:border-sporty-green/30 transition-all h-full"
              >
                <div className="aspect-[5/4] rounded-[52px] mb-8 bg-white/5 overflow-hidden flex items-center justify-center p-16 relative">
                   <ShieldCheck className="w-32 h-32 text-sporty-green opacity-10 group-hover:opacity-40 transition-all group-hover:scale-125" />
                   <div className="absolute top-8 left-8 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sporty-green animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Verified Facility</span>
                   </div>
                </div>
                <div className="px-10 pb-12 space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase text-white/30 tracking-[0.25em]">{node.tag}</span>
                      <div className="px-3 py-1 bg-white/5 rounded-full flex items-center gap-1.5 border border-white/5">
                         <Star className="w-3 h-3 text-sporty-green fill-current" />
                         <span className="text-[11px] font-black text-white">{node.rating}</span>
                      </div>
                   </div>
                   <h3 className="text-3xl font-serif font-black text-white leading-tight">{node.name}</h3>
                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-white/30 text-xs">
                         <MapPin className="w-3 h-3" /> {node.loc}, CN
                      </div>
                      <button onClick={() => navigate('/suppliers')} className="flex items-center gap-2 text-sporty-green font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                         Profile <ArrowRight className="w-3 h-3" />
                      </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-green/10 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* SECTION 6: TRUST ARCHITECTURE (SECURITY) */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-4 space-y-10">
                 <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                 >
                    <h2 className="text-5xl font-serif font-black text-sidebar-bg leading-none">Security <br /><span className="text-sporty-green italic font-medium">Immutable.</span></h2>
                    <p className="text-gray-500 font-lato font-light text-lg">Beyond standard trade, we deploy enterprise-grade risk mitigation protocols at every node.</p>
                 </motion.div>
                 <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="bg-sidebar-bg text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:bg-blue-green transition-all"
                 >
                    Read Security Report
                 </motion.button>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { title: 'Bi-Annual Audits', text: 'On-site facility inspections including equipment capacity and labor ethics.', icon: Fingerprint, color: 'text-sporty-green' },
                   { title: 'Smart Contract Escrow', text: 'Payment flow is cryptographically tied to shipment milestones.', icon: Zap, color: 'text-blue-green' },
                   { title: 'Advanced Sourcing AI', text: 'Predictive analytics to mitigate supply chain disruption risks.', icon: Cpu, color: 'text-sidebar-bg' },
                   { title: 'Global Compliance', text: 'Full alignment with ISO-27001 and GDPR data sovereignty standards.', icon: Globe, color: 'text-emerald-500' }
                 ].map((feat, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.2 }}
                     className="bg-gray-50 p-10 rounded-[48px] border border-transparent hover:border-gray-100 hover:bg-white transition-all group"
                   >
                     <div className={cn("w-16 h-16 mb-8 flex items-center justify-center rounded-3xl bg-white shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-all", feat.color)}>
                        <feat.icon className="w-8 h-8" />
                     </div>
                     <h4 className="text-xl font-black text-sidebar-bg mb-4 tracking-tight">{feat.title}</h4>
                     <p className="text-sm text-gray-500 font-lato font-light leading-relaxed">{feat.text}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

        {/* SECTION 7: ENTERPRISE CTA & FOOTER */}
        <section className="py-40 px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[1440px] mx-auto bg-sidebar-bg rounded-[100px] p-24 lg:p-40 text-center space-y-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#4ade80_0%,_transparent_50%)]" />
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#2dd4bf_0%,_transparent_50%)]" />
            </div>

            <div className="relative z-10 space-y-8">
              <motion.h2 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="text-7xl lg:text-9xl font-serif font-black text-white tracking-tighter leading-tight"
              >
                Ready to <br /><span className="text-sporty-green italic font-medium underline decoration-white/10 underline-offset-8">Synchronize?</span>
              </motion.h2>
              <p className="text-xl text-white/30 font-lato font-light max-w-2xl mx-auto tracking-wide">Join the platinum-tier network and instantiate your global supply chain today.</p>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
              <button 
                onClick={() => navigate('/auth')}
                className="px-16 py-8 bg-sporty-green text-white rounded-[40px] font-black uppercase text-[12px] tracking-[0.4em] shadow-[0_20px_50px_-10px_rgba(74,222,128,0.4)] hover:brightness-110 active:scale-95 transition-all"
              >
                Initialize Profile
              </button>
              <div className="flex flex-col items-start gap-3">
                 <div className="flex gap-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border border-white/20 bg-white/5" />)}
                 </div>
                 <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Join 14,000+ Enterprise Buyers</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* REFINED ENTERPRISE FOOTER */}
        <div className="bg-white pt-20">
          {/* Top Categories Strip */}
          <div className="max-w-7xl mx-auto px-8 mb-20">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-300 mb-10 pb-4 border-b border-gray-100">Hot Strategic Sectors</h4>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                {[
                  { title: 'Industrial Node', items: ['Machinery', 'Electrical', 'Construction', 'Mining'] },
                  { title: 'Consumer Core', items: ['Electronics', 'Apparel', 'Furniture', 'Luggage'] },
                  { title: 'Mobility Node', items: ['Auto Parts', 'EV Solutions', 'Logistics', 'Maritime'] },
                  { title: 'Advanced Mat', items: ['Polymers', 'Rare Earth', 'Chemicals', 'Textiles'] },
                  { title: 'Tech Interface', items: ['Computers', 'Sensors', 'Robotics', 'IoT Hubs'] }
                ].map((sec, i) => (
                  <div key={i} className="space-y-4">
                    <h5 className="text-[11px] font-black text-sidebar-bg uppercase tracking-widest">{sec.title}</h5>
                    <ul className="space-y-2">
                      {sec.items.map((item, j) => (
                        <li key={j} className="text-[11px] text-gray-400 font-medium hover:text-sporty-green transition-colors cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
             </div>
          </div>

          {/* Main Footer Architecture */}
          <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
             <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-gray-200/50">
                   {/* Col 1 */}
                   <div className="lg:col-span-2 space-y-8">
                      <h4 className="text-[11px] font-black uppercase text-sidebar-bg tracking-[0.2em]">Discover Matrix</h4>
                      <ul className="space-y-4">
                        {['Industry Sites', 'Regional Nodes', 'Custom Protocol', 'Video Matrix', 'Secured Trade'].map(item => (
                          <li key={item} className="text-xs text-gray-400 hover:text-sidebar-bg transition-colors cursor-pointer">{item}</li>
                        ))}
                      </ul>
                   </div>
                   {/* Col 2 */}
                   <div className="lg:col-span-2 space-y-8">
                      <h4 className="text-[11px] font-black uppercase text-sidebar-bg tracking-[0.2em]">About Protocol</h4>
                      <ul className="space-y-4">
                        {['Enterprise Story', 'Global Nodes', 'Trademarks', 'Friendly Links', 'Network Map'].map(item => (
                          <li key={item} className="text-xs text-gray-400 hover:text-sidebar-bg transition-colors cursor-pointer">{item}</li>
                        ))}
                      </ul>
                   </div>
                   {/* Col 3 */}
                   <div className="lg:col-span-2 space-y-8">
                      <h4 className="text-[11px] font-black uppercase text-sidebar-bg tracking-[0.2em]">Support Desk</h4>
                      <ul className="space-y-4">
                        {['FAQ Ledger', 'Contact Ops', 'Join Elite', 'Submit Report'].map(item => (
                          <li key={item} className="text-xs text-gray-400 hover:text-sidebar-bg transition-colors cursor-pointer">{item}</li>
                        ))}
                      </ul>
                   </div>
                   {/* Col 4: Languages */}
                   <div className="lg:col-span-3 space-y-8">
                      <h4 className="text-[11px] font-black uppercase text-sidebar-bg tracking-[0.2em]">Protocol Locales</h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        {['Español', 'Português', 'Français', 'Русский', 'Italiano', 'Deutsch', 'Nederlands', 'العربية', '한국어', '日本語'].map(lang => (
                          <span key={lang} className="text-xs text-gray-400 hover:text-sporty-green transition-colors cursor-pointer">{lang}</span>
                        ))}
                      </div>
                   </div>
                   {/* Right Side: Alerts & Co-brands */}
                   <div className="lg:col-span-3 space-y-10">
                      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4 group cursor-pointer hover:shadow-xl transition-all">
                         <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase text-gray-300 tracking-widest">Asset Alert</span>
                            <Mail className="w-4 h-4 text-sporty-green" />
                         </div>
                         <p className="text-[11px] text-sidebar-bg font-bold leading-tight">Instant notifications for node updates & protocol changes.</p>
                      </div>
                      <div className="space-y-6">
                         <span className="text-[9px] font-black uppercase text-gray-300 tracking-[0.4em]">Strategic Nodes</span>
                         <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center filter grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                                 <ShieldCheck className="w-5 h-5 text-sidebar-bg" />
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Bottom Strip: Mobile & Social */}
                <div className="py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                   <div className="flex items-center gap-8">
                      <span className="text-[10px] font-black uppercase text-gray-300 tracking-widest">Interface:</span>
                      <div className="flex gap-4">
                         <button className="bg-sidebar-bg text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-sporty-green transition-all">
                            <Smartphone className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">App Store</span>
                         </button>
                         <button className="bg-sidebar-bg text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-sporty-green transition-all">
                            <Smartphone className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Play Store</span>
                         </button>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-12">
                      <div className="flex items-center gap-4 text-sidebar-bg">
                         <span className="text-[10px] font-black uppercase tracking-widest">Protocol Sync:</span>
                         <div className="flex gap-4">
                            {[Globe, Phone, Github, MessageSquare].map((Icon, i) => (
                              <Icon key={i} className="w-4 h-4 text-gray-300 hover:text-sporty-green cursor-pointer transition-colors" />
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Legal & Copyright */}
                <div className="pt-12 border-t border-gray-200/50 flex flex-col lg:flex-row items-center justify-between gap-8">
                   <div className="flex flex-wrap justify-center gap-6 text-[9px] font-black text-gray-300 uppercase tracking-widest">
                      {['Hot Nodes', 'Global Products', 'Wholesale Matrix', 'Trade Indices', 'Insights'].map(link => (
                        <span key={link} className="hover:text-sidebar-bg cursor-pointer transition-colors">{link}</span>
                      ))}
                   </div>
                   <div className="text-[9px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-2">
                      <span>© 1998-2026 FOCUS TECHNOLOGY PROTOCOL.</span>
                      <span className="text-gray-200">|</span>
                      {['User Agreement', 'Declaration', 'Privacy'].map(l => (
                        <span key={l} className="hover:text-sidebar-bg cursor-pointer transition-colors">{l}</span>
                      ))}
                   </div>
                </div>
             </div>
          </footer>
        </div>
    </div>
  );
}
