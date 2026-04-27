import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Package, FileText, ArrowUpRight, ArrowDownRight, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

const DATA = [
  { name: 'Jan', orders: 400, rfq: 240, volume: 2400 },
  { name: 'Feb', orders: 300, rfq: 139, volume: 2210 },
  { name: 'Mar', orders: 200, rfq: 980, volume: 2290 },
  { name: 'Apr', orders: 278, rfq: 390, volume: 2000 },
  { name: 'May', orders: 189, rfq: 480, volume: 2181 },
  { name: 'Jun', orders: 239, rfq: 380, volume: 2500 },
];

export default function PlatformAnalytics() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-bold text-sidebar-bg uppercase tracking-tight">Platform <span className="text-sporty-green">Intelligence</span></h1>
        <p className="text-xs text-gray-500">Global B2B flow monitoring, transaction volume, and growth metrics.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { label: 'Total GMV', value: '$2.4M', trend: '+14%', up: true },
           { label: 'Active Users', value: '12.8k', trend: '+5.2%', up: true },
           { label: 'RFQ Conversion', value: '18.4%', trend: '-1.2%', up: false },
           { label: 'Retention Rate', value: '94.2%', trend: '+2.1%', up: true }
         ].map((stat, i) => (
           <div key={i} className="card h-24 flex flex-col justify-center">
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-center justify-between">
                 <h3 className="text-2xl font-black text-sidebar-bg">{stat.value}</h3>
                 <span className={cn("text-[10px] font-bold flex items-center", stat.up ? 'text-sporty-green' : 'text-red-400')}>
                    {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.trend}
                 </span>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="card h-80">
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-6">Transaction Growth (USD)</h3>
            <div className="h-60 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DATA}>
                    <defs>
                      <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A0AEC0' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A0AEC0' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A202C', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#39FF14', fontSize: '10px', textTransform: 'uppercase' }}
                    />
                    <Area type="monotone" dataKey="volume" stroke="#4CAF50" fillOpacity={1} fill="url(#colorVolume)" strokeWidth={3} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="card h-80">
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-6">RFQ vs Orders Volume</h3>
            <div className="h-60 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A0AEC0' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#A0AEC0' }} />
                    <Tooltip 
                      cursor={{ fill: '#F4F7F6' }}
                      contentStyle={{ backgroundColor: '#1A202C', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="rfq" fill="#1A202C" radius={[4, 4, 0, 0]} barSize={30} />
                    <Bar dataKey="orders" fill="#39FF14" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="card lg:col-span-2">
            <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Top Performing Sectors</h3>
            <div className="space-y-4">
               {[
                 { name: 'Industrial Electronics', share: 45, color: 'bg-sporty-green' },
                 { name: 'Technical Textiles', share: 22, color: 'bg-blue-green' },
                 { name: 'Precision Machinery', share: 18, color: 'bg-sidebar-bg' },
                 { name: 'Consumer Hardware', share: 15, color: 'bg-gray-300' }
               ].map((sector, i) => (
                 <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold text-gray-600">
                       <span>{sector.name}</span>
                       <span>{sector.share}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${sector.share}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cn("h-full rounded-full", sector.color)}
                       />
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="card bg-sidebar-bg border-none flex flex-col justify-between">
            <div>
               <Globe className="w-10 h-10 text-neon-green mb-4" />
               <h4 className="text-white text-lg font-black uppercase tracking-widest leading-tight">Global Connectivity Report</h4>
               <p className="text-gray-400 text-[10px] mt-2 font-medium leading-relaxed uppercase tracking-widest">Platform now routing traffic through 14 regional nodes for zero-latency RFQ processing.</p>
            </div>
            <button className="w-full py-4 bg-neon-green text-sidebar-bg font-black uppercase text-[10px] tracking-widest mt-8 flex items-center justify-center gap-2">
               Download Full Report <ArrowUpRight className="w-4 h-4" />
            </button>
         </div>
      </div>
    </div>
  );
}
