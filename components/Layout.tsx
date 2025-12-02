import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export const Layout: React.FC = () => {
    return (
        <>
            {/* 添加必要的全局样式 */}
            <style>{`
        /* 安全区域适配 */
        .safe-area-inset-bottom {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
        
        /* 隐藏滚动条 */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            <div className="min-h-screen bg-gray-50 flex justify-center">
                {/* Mobile Simulator Container */}
                <div className="w-full max-w-md bg-gray-50 min-h-screen shadow-2xl relative flex flex-col">
                    {/* Content Area - 修改：添加足够的底部内边距给固定导航栏 */}
                    <div className="flex-1 overflow-y-auto pb-16 no-scrollbar">
                        <Outlet />
                    </div>

                    {/* Bottom Navigation - 现在由BottomNav组件自己固定定位 */}
                    <BottomNav />
                </div>
            </div>
        </>
    );
};