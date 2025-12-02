import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Market } from './pages/Market';
import { Profile } from './pages/Profile';
import { Publish } from './pages/Publish';
import { Recycling } from './pages/Recycling';
import { ProductDetail } from './pages/ProductDetail';
import {ExpressPickup} from "@/pages/ExpressPickup.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="market" element={<Market />} />
          <Route path="profile" element={<Profile />} />
          <Route path="publish" element={<Publish />} />
          <Route path="recycling" element={<Recycling />} />
          <Route path="/express-pickup" element={<ExpressPickup />} />
          {/* Product Detail isn't part of the bottom nav layout technically in native apps, 
              but for web simplified nav, we can keep it here or move it out. 
              Let's keep inside layout for simplicity but hide bottom nav if needed via CSS or context. 
          */}
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};
// 添加新路由
<Route path="/express-pickup" element={<ExpressPickup />} />
export default App;
