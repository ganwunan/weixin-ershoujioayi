import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, PlusCircle, User, Store } from 'lucide-react';

export const BottomNav: React.FC = () => {
    const navClass = ({ isActive }: { isActive: boolean }) =>
        `flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-green-600' : 'text-gray-400'}`;

    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center z-50 safe-area-inset-bottom">
            {/* 添加一个容器来限制宽度，与Layout中的max-w-md保持一致 */}
            <div className="w-full max-w-md flex justify-around items-center h-full">
                <NavLink to="/" className={navClass}>
                    <Home size={22} />
                    <span className="text-[10px]">首页</span>
                </NavLink>

                <NavLink to="/market" className={navClass}>
                    <ShoppingBag size={22} />
                    <span className="text-[10px]">集市</span>
                </NavLink>

                <NavLink to="/publish" className="flex flex-col items-center justify-center w-full h-full -mt-6">
                    <div className="bg-green-500 rounded-full p-3 shadow-lg text-white mb-1">
                        <PlusCircle size={28} />
                    </div>
                    <span className="text-[10px] text-gray-500">发布</span>
                </NavLink>

                <NavLink to="/recycling" className={navClass}>
                    <Store size={22} />
                    <span className="text-[10px]">助农/回收</span>
                </NavLink>

                <NavLink to="/profile" className={navClass}>
                    <User size={22} />
                    <span className="text-[10px]">我的</span>
                </NavLink>
            </div>
        </div>
    );
};