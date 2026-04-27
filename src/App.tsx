/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider, useGlobal } from './GlobalContext';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import { SupplierDirectory } from './pages/SupplierDirectory';
import { SupplierDetail } from './pages/SupplierDetail';
import { RFQPage } from './pages/RFQPage';
import { OrderTracking } from './pages/OrderTracking';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import About from './pages/About';
import SavedSuppliers from './pages/SavedSuppliers';
import Inventory from './pages/supplier/Inventory';
import RFQManagement from './pages/supplier/RFQManagement';
import SupplierVerification from './pages/admin/SupplierVerification';
import PlatformAnalytics from './pages/admin/PlatformAnalytics';

function AppRoutes() {
  const { user } = useGlobal();

  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/about" element={<About />} />

      {/* Protected App Pages */}
      <Route path="/app" element={user ? <Layout /> : <Navigate to="/auth" replace />}>
        <Route index element={<Dashboard />} />
        <Route path="suppliers" element={<SupplierDirectory />} />
        <Route path="suppliers/:id" element={<SupplierDetail />} />
        <Route path="rfqs/new" element={<RFQPage />} />
        <Route path="tracking" element={<OrderTracking />} />
        <Route path="saved" element={<SavedSuppliers />} />
        
        {/* Supplier Specific */}
        <Route path="inventory" element={<Inventory />} />
        <Route path="inquiries" element={<RFQManagement />} />
        
        {/* Admin Specific */}
        <Route path="admin" element={<PlatformAnalytics />} />
        <Route path="admin/verification" element={<SupplierVerification />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <GlobalProvider>
       <Router>
         <AppRoutes />
       </Router>
    </GlobalProvider>
  );
}
