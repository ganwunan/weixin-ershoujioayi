import React from 'react';
import { CURRENT_USER } from '../constants';
import { Settings, MessageCircle, Wallet, PackageCheck, RotateCcw, ChevronRight, MapPin, ShieldCheck, FileText, Headphones } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full pb-20">
      {/* Header */}
      <div className="bg-yellow-400 pt-10 pb-16 px-6 rounded-b-[2rem] relative">
        <div className="flex justify-between items-start mb-4 text-gray-800">
           <div className="w-6"></div> {/* Spacer */}
           <h1 className="text-lg font-bold">我的</h1>
           <div className="flex space-x-3">
             <Settings size={20} />
             <MessageCircle size={20} />
           </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md mb-2">
            <img src={CURRENT_USER.avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">{CURRENT_USER.name}</h2>
          
          {/* Credit Score Badge */}
          <div className="bg-black/10 text-gray-800 px-3 py-1 rounded-full mt-2 flex items-center cursor-pointer">
             <ShieldCheck size={14} className="mr-1 text-green-700" />
             <span className="text-xs font-bold mr-1">{CURRENT_USER.creditLevel}</span>
             <span className="text-xs">信用极好 {CURRENT_USER.creditScore}</span>
             <ChevronRight size={12} className="ml-1 opacity-50" />
          </div>
        </div>
      </div>

      {/* Main Content Card Container */}
      <div className="px-4 -mt-10">
        
        {/* Order Status */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
            <h3 className="font-bold text-sm text-gray-800">我的订单</h3>
            <span className="text-xs text-gray-400 flex items-center">全部订单 <ChevronRight size={12}/></span>
          </div>
          <div className="flex justify-between px-2">
             <div className="flex flex-col items-center text-gray-600 relative">
                <Wallet size={24} className="mb-1 text-gray-700" strokeWidth={1.5} />
                <span className="text-xs">待付款</span>
             </div>
             <div className="flex flex-col items-center text-gray-600">
                <PackageCheck size={24} className="mb-1 text-gray-700" strokeWidth={1.5} />
                <span className="text-xs">待收货</span>
             </div>
             <div className="flex flex-col items-center text-gray-600">
                <MessageCircle size={24} className="mb-1 text-gray-700" strokeWidth={1.5} />
                <span className="text-xs">待评价</span>
             </div>
             <div className="flex flex-col items-center text-gray-600">
                <RotateCcw size={24} className="mb-1 text-gray-700" strokeWidth={1.5} />
                <span className="text-xs">退款/售后</span>
             </div>
          </div>
        </div>

        {/* Tools & Services */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
           {[
             { label: '我发布的', count: 5, icon: null },
             { label: '我卖出的', count: 2, icon: null },
             { label: '我买到的', count: 12, icon: null },
           ].map((item, idx) => (
             <div key={idx} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 active:bg-gray-50">
               <span className="text-sm text-gray-700">{item.label}</span>
               <div className="flex items-center">
                 <span className="text-xs text-gray-400 mr-2">{item.count}</span>
                 <ChevronRight size={16} className="text-gray-300" />
               </div>
             </div>
           ))}
        </div>

        {/* Support & Legal */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
            <div className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
               <div className="flex items-center">
                  <Headphones size={16} className="text-blue-500 mr-2" />
                  <span className="text-sm text-gray-700">在线客服/帮助中心</span>
               </div>
               <ChevronRight size={16} className="text-gray-300" />
            </div>
             <div className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
               <div className="flex items-center">
                  <FileText size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">用户条款与隐私政策</span>
               </div>
               <ChevronRight size={16} className="text-gray-300" />
            </div>
        </div>

        {/* Corporate/Official Account Link (Simulated) */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4 flex items-center justify-between">
            <div>
                 <p className="text-sm font-bold text-gray-800">企业对公账户</p>
                 <p className="text-[10px] text-gray-400">平台营收、广告费用结算入口</p>
            </div>
            <button className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">查看</button>
        </div>

        <button className="w-full py-3 bg-white text-gray-500 text-sm font-medium rounded-xl shadow-sm border border-gray-100 mb-6">
          退出当前登录
        </button>

        <p className="text-center text-[10px] text-gray-400 pb-4">
            绿创循享 v1.0.0 | 沧州交通学院
        </p>

      </div>
    </div>
  );
};
