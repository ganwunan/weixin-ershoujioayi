import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      {/* Mobile Simulator Container */}
      <div className="w-full max-w-md bg-gray-50 min-h-screen shadow-2xl relative flex flex-col">
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
          <Outlet />
        </div>
        
        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
};