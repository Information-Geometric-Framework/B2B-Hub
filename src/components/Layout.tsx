import { ReactNode } from 'react';
import { NavLink, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Search, 
  FileText, 
  Package, 
  ShieldCheck, 
  Settings, 
  LogOut,
  Bell,
  User as UserIcon,
  Moon,
  Sun,
  Truck,
  Star,
  Activity,
  UserCheck,
  MessageSquare
} from 'lucide-react';
import { useGlobal } from '../GlobalContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const { user, setUser, setRole } = useGlobal();
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) return null;

  const buyerLinks = [
    { to: '/', icon: LayoutDashboard, label: 'Control Center' },
    { to: '/suppliers', icon: Search, label: 'Live Marketplace' },
    { to: '/saved', icon: Star, label: 'Verified Partners' },
    { to: '/tracking', icon: Truck, label: 'Supply Chain Tracker' },
  ];

  const supplierLinks = [
    { to: '/', icon: LayoutDashboard, label: 'Factory Hub' },
    { to: '/inventory', icon: Package, label: 'Inventory Suite' },
    { to: '/inquiries', icon: MessageSquare, label: 'RFQ Pipeline' },
    { to: '/tracking', icon: Truck, label: 'Shipment Logs' },
  ];

  const adminLinks = [
    { to: '/admin', icon: Activity, label: 'Platform Intel' },
    { to: '/admin/verification', icon: UserCheck, label: 'Supplier Audit' },
    { to: '/suppliers', icon: Search, label: 'Global Directory' },
  ];

  const links = user.role === 'BUYER' ? buyerLinks : user.role === 'SUPPLIER' ? supplierLinks : adminLinks;

  const handleLogout = () => {
    setUser(null);
    navigate('/welcome');
  };

  return (
    <div className="flex h-screen bg-bg-gray text-[#2D3748] font-sans overflow-hidden selection:bg-neon-green/30">
      {/* Sidebar */}
      <aside className="w-[280px] bg-sidebar-bg text-gray-400 flex flex-col shrink-0 py-8 relative z-20">
        <div className="px-8 mb-12 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-sporty-green rounded flex items-center justify-center">
             <ShieldCheck className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold uppercase tracking-tight text-white leading-none">B2B<span className="text-sporty-green"> Hub</span></span>
        </div>

        <div className="text-[10px] uppercase font-bold text-gray-600 mb-4 px-8 tracking-widest">Main Menu</div>
        
        <nav className="flex-1 px-4 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 text-[12px] font-bold transition-all duration-200 rounded-md",
                  isActive 
                    ? "bg-blue-green text-white shadow-lg shadow-blue-green/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )
              }
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-white/5 px-4 space-y-4">
          <div className="p-4 bg-black/20 rounded-lg border border-white/5">
            <p className="text-[10px] text-gray-500 mb-3 uppercase font-bold tracking-widest">Switch Workspace</p>
            <div className="grid grid-cols-1 gap-1.5">
              <button 
                onClick={() => setRole('BUYER')} 
                className={cn("py-2 text-[10px] rounded-md font-bold uppercase transition-all", 
                  user.role === 'BUYER' ? "bg-sporty-green text-white" : "bg-white/5 text-gray-400 hover:bg-white/10")
                }
              >Buyer App</button>
              <button 
                onClick={() => setRole('SUPPLIER')} 
                className={cn("py-2 text-[10px] rounded-md font-bold uppercase transition-all", 
                  user.role === 'SUPPLIER' ? "bg-sporty-green text-white" : "bg-white/5 text-gray-400 hover:bg-white/10")
                }
              >Supplier App</button>
              <button 
                onClick={() => setRole('ADMIN')} 
                className={cn("py-2 text-[10px] rounded-md font-bold uppercase transition-all", 
                  user.role === 'ADMIN' ? "bg-sporty-green text-white" : "bg-white/5 text-gray-400 hover:bg-white/10")
                }
              >System Admin</button>
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-[12px] font-bold text-red-400/80 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-border-gray px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
             <span className="text-sidebar-bg font-bold">Home</span>
             <span className="text-gray-300">/</span>
             <span className="capitalize">{location.pathname === '/' ? 'Dashboard' : location.pathname.substring(1).replace('/', ' / ')}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
               <Bell className="w-5 h-5 text-gray-400 group-hover:text-blue-green cursor-pointer transition-colors" />
               <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </div>

            <div className="h-10 w-px bg-border-gray"></div>

            <div className="flex items-center gap-3 cursor-pointer group">
               <div className="text-right hidden sm:block">
                  <p className="text-[12px] font-bold text-sidebar-bg leading-none mb-1">{user.name}</p>
                  <p className="text-[10px] font-bold uppercase text-sporty-green tracking-widest leading-none">Status: Active</p>
               </div>
               <div className="w-10 h-10 rounded-lg bg-tint-green border border-blue-green/10 flex items-center justify-center text-blue-green font-bold uppercase group-hover:bg-blue-green group-hover:text-white transition-all">
                  {user.name.split(' ').map(n => n[0]).join('')}
               </div>
            </div>
          </div>
        </header>

        {/* View Content Viewport */}
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-bg-gray">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
