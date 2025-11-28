import React, { useState, useEffect } from 'react';
import { Search, Book, Smartphone, Shirt, Footprints, Grid, MapPin, Store } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_ADS, MOCK_MERCHANTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  // Filter active ads only
  const activeAds = MOCK_ADS.filter(ad => ad.expireTime > Date.now());
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Ad rotation logic
  useEffect(() => {
    if (activeAds.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentAdIndex(prev => (prev + 1) % activeAds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeAds.length]);

  return (
    <div className="pb-4">
      {/* Header Search */}
      <div className="bg-yellow-400 p-4 pb-6 rounded-b-[2rem] shadow-sm sticky top-0 z-20">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="font-bold text-lg mr-2 text-gray-900">沧州交通学院</span>
            <MapPin size={14} className="text-gray-700" />
          </div>
          <div className="text-xs font-medium bg-black/10 px-2 py-0.5 rounded text-gray-800">
            官方认证平台
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-inner"
            placeholder="搜索：教材 / 电子产品 / 兼职"
          />
        </div>
      </div>

      {/* Ad Carousel (Monetization) */}
      {activeAds.length > 0 && (
        <div className="px-4 -mt-4 mb-4 relative z-10">
          <div className="bg-white p-1 rounded-xl shadow-md overflow-hidden relative">
            <img 
              src={activeAds[currentAdIndex].imageUrl} 
              alt="Ad" 
              className="w-full h-36 object-cover rounded-lg transition-opacity duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-black/40 text-white text-[10px] px-1.5 rounded backdrop-blur-sm">
              广告 | {activeAds[currentAdIndex].merchantName}
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="grid grid-cols-5 gap-2 px-4 mb-6">
        {[
          { name: '书籍', icon: Book, color: 'bg-blue-100 text-blue-600' },
          { name: '数码', icon: Smartphone, color: 'bg-purple-100 text-purple-600' },
          { name: '衣物', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
          { name: '鞋帽', icon: Footprints, color: 'bg-orange-100 text-orange-600' },
          { name: '更多', icon: Grid, color: 'bg-gray-100 text-gray-600' },
        ].map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center cursor-pointer" onClick={() => navigate('/market')}>
            <div className={`w-10 h-10 ${cat.color} rounded-full flex items-center justify-center mb-1`}>
              <cat.icon size={20} />
            </div>
            <span className="text-xs text-gray-600">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Campus Merchants & Services (New) */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-gray-800 text-sm flex items-center">
            <Store size={16} className="mr-1 text-green-600" /> 校园商家 & 服务
          </h2>
          <span className="text-xs text-gray-400">入驻 ></span>
        </div>
        <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-1">
          {MOCK_MERCHANTS.map((m) => (
            <div key={m.id} className="flex-shrink-0 w-24 flex flex-col items-center bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
              <img src={m.logo} alt={m.name} className="w-10 h-10 rounded-full mb-1 object-cover" />
              <span className="text-[10px] font-bold text-gray-800 truncate w-full text-center">{m.name}</span>
              <span className="text-[9px] text-green-600 bg-green-50 px-1 rounded scale-90">{m.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Special Zones */}
      <div className="px-4 mb-6 flex space-x-3">
        <div className="flex-1 bg-gradient-to-r from-green-100 to-green-50 p-3 rounded-xl flex items-center justify-between shadow-sm cursor-pointer" onClick={() => navigate('/recycling')}>
          <div>
            <h4 className="font-bold text-sm text-green-800">助农专区</h4>
            <p className="text-[10px] text-green-600">黄骅特产直销</p>
          </div>
          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">🌾</div>
        </div>
        <div className="flex-1 bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-xl flex items-center justify-between shadow-sm">
          <div>
            <h4 className="font-bold text-sm text-blue-800">担保交易</h4>
            <p className="text-[10px] text-blue-600">资金安全保障</p>
          </div>
          <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">🛡️</div>
        </div>
      </div>

      {/* Recommendations Feed */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 text-lg relative pl-3">
            <span className="absolute left-0 top-1.5 w-1 h-4 bg-yellow-400 rounded-full"></span>
            好物推荐
          </h2>
          <span className="text-xs text-gray-400" onClick={() => navigate('/market')}>查看全部 &gt;</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {MOCK_PRODUCTS.map(product => (
             <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                <ProductCard product={product} />
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};
