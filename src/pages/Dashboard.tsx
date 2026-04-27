import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Plus, 
  Package, 
  FileText, 
  Users, 
  User as UserIcon,
  Activity,
  Globe,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useGlobal } from '../GlobalContext';
import { MOCK_SUPPLIERS, MOCK_RFQS, MOCK_ORDERS } from '../constants';
import { cn, formatDate } from '../lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function Dashboard() {
  const { user } = useGlobal();

  if (user?.role === 'SUPPLIER') return <SupplierDashboard />;
  if (user?.role === 'ADMIN') return <AdminDashboard />;

  return <BuyerDashboard />;
}

function BuyerDashboard() {
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-sidebar-bg leading-tight">
            Welcome, <span className="text-blue-green">Operator.</span>
          </h1>
          <p className="text-sm text-gray-500 font-lato font-light mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sporty-green animate-pulse"></span>
            System status: nominal • {MOCK_ORDERS.length} active shipments
          </p>
        </div>
        <div className="flex gap-4">
           <div className="card h-16 flex items-center gap-3 px-6 bg-tint-green border-none">
              <div className="text-right">
                 <p className="text-[10px] font-bold text-blue-green uppercase tracking-widest leading-none mb-1">2026 Sourcing Spend</p>
                 <p className="text-xl font-bold text-sidebar-bg leading-none">$12,490.00</p>
              </div>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Pending RFQs', value: MOCK_RFQS.length, icon: FileText, color: 'text-sporty-green' },
          { label: 'Active Shipments', value: MOCK_ORDERS.length, icon: Package, color: 'text-blue-green' },
          { label: 'Saved Factories', value: MOCK_SUPPLIERS.length, icon: ShieldCheck, color: 'text-sidebar-bg' },
          { label: 'Unread Intel', value: 3, icon: MessageSquare, color: 'text-gray-400' }
        ].map((kpi, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="card card-hover group cursor-pointer overflow-hidden relative"
          >
            <div className="absolute top-4 right-4 p-2 bg-gray-50 rounded-lg group-hover:bg-blue-green/10 transition-colors">
               <kpi.icon className={cn("w-6 h-6", kpi.color)} />
            </div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">{kpi.label}</p>
            <h3 className={cn("text-3xl font-bold")}>{kpi.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
           <div className="flex items-center justify-between px-2">
              <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Global Logistics Stream</h2>
              <button className="text-[11px] font-bold text-blue-green uppercase tracking-widest hover:underline">View All Movement</button>
           </div>
           
           <div className="space-y-4">
             {MOCK_ORDERS.map(order => (
               <div key={order.id} className="card card-hover group border-border-gray">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-blue-green bg-tint-green px-2 py-0.5 rounded tracking-widest uppercase">ID: {order.id}</span>
                        <h4 className="text-sm font-bold text-sidebar-bg">Shenzhen ➔ Los Angeles</h4>
                     </div>
                     <span className="status-pill bg-tint-green text-blue-green">In Transit</span>
                  </div>
                  
                  <div className="relative pt-2 pb-6 px-4">
                    <div className="absolute top-[32px] left-8 right-8 h-1 bg-gray-100 rounded-full">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-blue-green rounded-full"
                       />
                    </div>
                    <div className="flex justify-between relative z-10">
                       {['Pickup', 'Customs', 'Transit', 'Final'].map((step, idx) => (
                         <div key={idx} className="flex flex-col items-center gap-2 group/step">
                            <div className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center text-white border-4 border-white transition-all duration-500 shadow-sm",
                              idx <= 2 ? "bg-blue-green" : "bg-gray-100 text-gray-300"
                            )}>
                               {idx === 0 && <Package className="w-4 h-4" />}
                               {idx === 1 && <FileText className="w-4 h-4" />}
                               {idx === 2 && <Globe className="w-4 h-4" />}
                               {idx === 3 && <MapPin className="w-4 h-4" />}
                            </div>
                            <span className={cn("text-[9px] font-bold uppercase tracking-widest", idx <= 2 ? "text-sidebar-bg" : "text-gray-300")}>{step}</span>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
           <div className="card bg-sidebar-bg border-none space-y-6 !p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-green/10 rounded-full blur-3xl"></div>
              <h3 className="text-[11px] font-bold uppercase text-neon-green tracking-widest relative z-10">Marketplace Intelligence</h3>
              <div className="space-y-4 relative z-10">
                 {MOCK_SUPPLIERS.slice(0, 2).map(supplier => (
                   <div key={supplier.id} className="flex items-center gap-3 group cursor-pointer border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="w-10 h-10 bg-white/5 rounded border border-white/10 p-1 flex items-center justify-center">
                         <img src={supplier.logo} className="w-full h-full object-cover rounded opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="flex-1">
                         <p className="text-[11px] font-bold text-white group-hover:text-neon-green transition-colors leading-none mb-1">{supplier.name}</p>
                         <p className="text-[9px] text-gray-500 font-medium uppercase tracking-widest">{supplier.location}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-neon-green group-hover:translate-x-1 transition-all" />
                   </div>
                 ))}
              </div>
              <button className="w-full py-4 bg-blue-green text-white rounded-full font-bold uppercase text-[11px] tracking-widest hover:brightness-110 transition-all relative z-10 font-sans shadow-lg">Browse Factories</button>
           </div>

           <div className="card space-y-4 border-border-gray">
              <h3 className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                 <Activity className="w-4 h-4 text-sporty-green" /> Production Alerts
              </h3>
              <div className="space-y-4">
                 <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1 shrink-0"></div>
                    <div>
                       <p className="text-[10px] text-sidebar-bg font-bold leading-tight">Shenzhen Port Alert</p>
                       <p className="text-[9px] text-gray-500 mt-0.5 uppercase font-bold tracking-tight">48h delay predicted due to maintenance.</p>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sporty-green mt-1 shrink-0"></div>
                    <div>
                       <p className="text-[10px] text-sidebar-bg font-bold leading-tight">Quality Audit OK</p>
                       <p className="text-[9px] text-gray-500 mt-0.5 uppercase font-bold tracking-tight">TechFlow X1 Sensors passed UL certification.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function SupplierDashboard() {
  return (
    <div className="space-y-8 font-sans">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-serif font-bold text-sidebar-bg uppercase tracking-tight">Factory <span className="text-sporty-green">Portal</span></h1>
        <div className="flex gap-3">
           <button className="px-6 py-2 bg-sidebar-bg text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg hover:bg-sidebar-bg/90 transition-all">Add Inventory</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Pending RFQs', value: MOCK_RFQS.length, icon: FileText, color: 'border-l-orange-400', sub: 'Action required' },
           { label: 'Production Units', value: '1.2k', icon: Activity, color: 'border-l-sporty-green', sub: 'On schedule' },
           { label: 'Verified Rating', value: '4.8/5', icon: Star, color: 'border-l-blue-green', sub: 'Top 5% category' }
         ].map((stat, i) => (
           <div key={i} className={cn("card border-l-4 flex flex-col justify-center h-24", stat.color)}>
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1 leading-none">{stat.label}</p>
              <h3 className="text-3xl font-black text-sidebar-bg leading-none">{stat.value}</h3>
              <p className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-tighter">{stat.sub}</p>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 card space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Engagement Overview</h3>
               <div className="flex gap-2">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400"><span className="w-2 h-2 rounded-full bg-sporty-green"></span> Inquiries</span>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400"><span className="w-2 h-2 rounded-full bg-blue-green"></span> Orders</span>
               </div>
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-50 border border-dashed border-gray-200 rounded text-gray-400 font-black uppercase text-[10px]">
               Inquiry Flow Chart Placeholder
            </div>
         </div>
         <div className="flex flex-col gap-6">
            <div className="card space-y-4 flex-1">
               <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Urgent Inquiries</h3>
               <div className="space-y-4">
                  {MOCK_RFQS.map(rfq => (
                    <div key={rfq.id} className="p-3 bg-bg-gray border border-border-gray rounded space-y-2 group cursor-pointer hover:border-sporty-green transition-all">
                       <div className="flex justify-between items-start">
                          <span className="text-[9px] font-black text-sidebar-bg uppercase">ID: {rfq.id}</span>
                          <span className="text-[8px] font-black text-orange-500 uppercase">New</span>
                       </div>
                       <p className="text-[10px] text-gray-600 font-medium line-clamp-2">"Need custom firmware version 2.1 for the OLED display module..."</p>
                    </div>
                  ))}
               </div>
               <button className="w-full py-2.5 bg-sidebar-bg text-white rounded-full text-[10px] font-bold uppercase tracking-widest mt-4 hover:bg-sidebar-bg/90 transition-colors">View CRM Pipeline</button>
            </div>
         </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const data = [
    { name: 'W1', value: 400 },
    { name: 'W2', value: 300 },
    { name: 'W3', value: 600 },
    { name: 'W4', value: 800 },
  ];

  return (
    <div className="space-y-8 font-sans">
      <header>
        <h1 className="text-3xl font-serif font-bold text-sidebar-bg uppercase tracking-tight">Platform <span className="text-sporty-green">Node Alpha</span></h1>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2 font-lato font-light">Overseeing 12,401 verified manufacturing entities.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { label: 'Active Sessions', value: '4.2k', up: true, trend: '8%↑' },
           { label: 'Security Status', value: 'NOMINAL', up: true, trend: 'Live' },
           { label: 'Audit Queue', value: 8, up: false, trend: 'High' },
           { label: 'Revenue Flow', value: '$840k', up: true, trend: '4%↑' }
         ].map((stat, i) => (
           <div key={i} className="card h-24 flex flex-col justify-center border-border-gray">
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                 <h3 className="text-2xl font-black text-sidebar-bg">{stat.value}</h3>
                 <span className={cn("text-[9px] font-bold px-1.5 py-0.5 rounded", stat.up ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')}>{stat.trend}</span>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="card space-y-6">
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Verification Requests</h3>
            <div className="space-y-3">
               {MOCK_SUPPLIERS.map(s => (
                 <div key={s.id} className="p-4 bg-gray-50 border border-border-gray rounded-xl hover:bg-white transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <img src={s.logo} className="w-10 h-10 rounded border border-gray-200 p-1 bg-white" />
                          <div>
                             <h4 className="text-sm font-bold text-sidebar-bg uppercase tracking-tight">{s.name}</h4>
                             <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Audit ID: {s.id.toUpperCase()}-VER</p>
                          </div>
                       </div>
                       <button className="px-4 py-2 bg-sidebar-bg text-white rounded-full text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all hover:bg-sidebar-bg/90 shadow-md">Launch Audit</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="card space-y-6 h-[400px] flex flex-col">
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest">System Load Metrics</h3>
            <div className="flex-1 w-full bg-bg-gray rounded-xl p-4 overflow-hidden">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorAdmin" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#39FF14" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Area type="monotone" dataKey="value" stroke="#39FF14" fillOpacity={1} fill="url(#colorAdmin)" strokeWidth={3} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <div className="flex justify-between items-center px-2">
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Active nodes: 14 regional units</p>
               <button className="text-[9px] font-black text-sporty-green uppercase tracking-widest">Syslog Terminal</button>
            </div>
         </div>
      </div>
    </div>
  );
}
