import React from 'react';
import { motion } from 'motion/react';
import { Plus, Search, Filter, MoreHorizontal, AlertCircle, Package } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../constants';
import { useGlobal } from '../../GlobalContext';
import { cn } from '../../lib/utils';

export default function Inventory() {
  const { user } = useGlobal();
  const products = MOCK_PRODUCTS.filter(p => p.supplierId === user.id);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
           <h1 className="text-xl font-bold text-sidebar-bg uppercase tracking-tight">Factory <span className="text-sporty-green">Inventory</span></h1>
           <p className="text-xs text-gray-500">Manage your product catalog, pricing, and live stock levels.</p>
        </div>
        <button className="bg-sidebar-bg text-neon-green px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
           <Plus className="w-4 h-4" /> Add Product
        </button>
      </header>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {[
           { label: 'Live Catalog', value: products.length, icon: Package, color: 'border-l-blue-green' },
           { label: 'Low Stock Alerts', value: 2, icon: AlertCircle, color: 'border-l-red-400' },
           { label: 'Total Stock Units', value: products.reduce((acc, p) => acc + p.stock, 0), icon: Package, color: 'border-l-sporty-green' }
         ].map((stat, i) => (
           <div key={i} className={cn("card border-l-4 h-24 flex flex-col justify-center", stat.color)}>
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-sidebar-bg">{stat.value}</h3>
           </div>
         ))}
      </div>

      {/* Main Table */}
      <div className="card !p-0 overflow-hidden">
        <div className="p-4 border-b border-border-gray flex items-center justify-between gap-4">
           <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="text" 
                placeholder="Search inventory by ID, name, or category..." 
                className="w-full bg-bg-gray border border-border-gray rounded py-2 px-10 text-[11px] font-bold outline-none focus:ring-1 focus:ring-neon-green"
              />
           </div>
           <button className="px-3 py-2 bg-white border border-border-gray rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-gray-400" /> Filters
           </button>
        </div>

        <table className="w-full text-xs text-left">
          <thead className="bg-gray-50 text-[10px] font-black uppercase text-gray-400 tracking-tighter border-b border-border-gray">
            <tr>
              <th className="px-6 py-3">Product Info</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3 text-right">Price Range</th>
              <th className="px-6 py-3 text-right">Live Stock</th>
              <th className="px-6 py-3 text-right">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-gray">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-bg-gray/50 transition-colors group">
                <td className="px-6 py-4 flex items-center gap-4">
                   <div className="w-10 h-10 rounded bg-gray-50 border border-border-gray p-0.5 overflow-hidden">
                      <img src={product.image} className="w-full h-full object-cover rounded shadow-sm" />
                   </div>
                   <div className="min-w-0">
                      <p className="font-bold text-sidebar-bg truncate">{product.name}</p>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">SKU-{product.id.toUpperCase()}</p>
                   </div>
                </td>
                <td className="px-6 py-4">
                   <span className="text-[10px] font-bold text-blue-green uppercase tracking-widest bg-blue-green/5 px-2 py-0.5 rounded">{product.category}</span>
                </td>
                <td className="px-6 py-4 text-right font-bold text-sidebar-bg">
                   {product.priceRange}
                </td>
                <td className="px-6 py-4 text-right">
                   <div className="flex flex-col items-end">
                      <span className={cn("font-bold text-sm", product.stock < 1000 ? 'text-red-500' : 'text-sidebar-bg')}>{product.stock.toLocaleString()}</span>
                      <div className="w-16 h-1 bg-gray-100 rounded-full mt-1"><div className={cn("h-full rounded-full", product.stock < 1000 ? 'bg-red-400' : 'bg-sporty-green')} style={{ width: `${(product.stock/5000)*100}%` }}></div></div>
                   </div>
                </td>
                <td className="px-6 py-4 text-right">
                   <span className="status-pill bg-green-100 text-green-700">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                   <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><MoreHorizontal className="w-4 h-4 text-gray-400" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
