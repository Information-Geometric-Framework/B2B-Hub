import React, { createContext, useContext, useState } from 'react';
import { User, UserRole } from './types';

interface GlobalContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  setRole: (role: UserRole) => void;
  favorites: string[];
  toggleFavorite: (supplierId: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: 'u1',
    name: 'Gisella Engvatana',
    email: 'gisella@example.com',
    role: 'BUYER',
  });

  const [favorites, setFavorites] = useState<string[]>([]);

  const setRole = (role: UserRole) => {
    setUser((prev) => prev ? { ...prev, role } : null);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <GlobalContext.Provider value={{ user, setUser, setRole, favorites, toggleFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobal must be used within GlobalProvider');
  return context;
}
