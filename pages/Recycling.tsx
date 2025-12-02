import React from 'react';
import { Sprout, Truck, Recycle, Wheat } from 'lucide-react';

export const Recycling: React.FC = () => {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-green-600 p-6 text-white rounded-b-[2rem] shadow-md">
        <h1 className="text-xl font-bold mb-1">绿创循享</h1>
        <p className="text-sm opacity-90">助农助学，绿色循环</p>
      </div>

      <div className="p-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
            <h2 className="font-bold text-gray-800 mb-4 flex items-center">
                <Recycle className="text-green-500 mr-2" />
                校园回收
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <button className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center border border-green-100">
                    <span className="text-2xl mb-1">📚</span>
                    <span className="font-bold text-sm text-green-800">旧书回收</span>
                    <span className="text-[10px] text-green-600 mt-1">上门估价</span>
                </button>
                <button className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center border border-green-100">
                    <span className="text-2xl mb-1">👕</span>
                    <span className="font-bold text-sm text-green-800">衣物捐赠</span>
                    <span className="text-[10px] text-green-600 mt-1">公益积分</span>
                </button>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold text-gray-800 mb-4 flex items-center">
                <Wheat className="text-yellow-500 mr-2" />
                助农专区
            </h2>
            <p className="text-xs text-gray-500 mb-4">黄骅本地特色农产品，直连农户</p>
            
            <div className="space-y-3">
                <div className="flex bg-gray-50 p-2 rounded-lg">
                    <img src="/images/products/dongzao.png" className="w-16 h-16 rounded-md object-cover mr-3" />
                    <div className="flex-1">
                        <h3 className="text-sm font-bold">黄骅冬枣</h3>
                        <p className="text-[10px] text-gray-500 line-clamp-1">脆甜多汁，产地直发，支持校园配送。</p>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-red-500 font-bold text-xs">¥15.0/斤</span>
                            <button className="bg-yellow-400 text-xs px-2 py-1 rounded-full font-medium">购买</button>
                        </div>
                    </div>
                </div>
                 <div className="flex bg-gray-50 p-2 rounded-lg">
                    <img src="https://picsum.photos/id/292/100/100" className="w-16 h-16 rounded-md object-cover mr-3" />
                    <div className="flex-1">
                        <h3 className="text-sm font-bold">农家自制面酱</h3>
                        <p className="text-[10px] text-gray-500 line-clamp-1">传统工艺，无添加，食堂特供同款。</p>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-red-500 font-bold text-xs">¥12.0/瓶</span>
                            <button className="bg-yellow-400 text-xs px-2 py-1 rounded-full font-medium">购买</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};