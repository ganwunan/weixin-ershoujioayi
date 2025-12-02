import React, { useState, useEffect } from 'react';
import { Search, Book, Smartphone, Shirt, Footprints, Grid, MapPin, Store, Crown, Package, Zap, Gift, ShieldCheck, BadgePercent, TrendingUp } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_ADS, MOCK_MERCHANTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  // Filter active ads only
  const activeAds = MOCK_ADS.filter(ad => ad.expireTime > Date.now());
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [userVIP, setUserVIP] = useState({
    isVIP: false,
    level: null as 'month' | 'season' | 'year' | null,
    expiresAt: '',
    freePickups: 0
  });

  // 模拟获取用户VIP状态
  useEffect(() => {
    // 这里应该是API调用，这里用模拟数据
    const mockUserVIP = {
      isVIP: false, // 默认为false，可以改为true测试VIP状态
      level: null,
      expiresAt: '',
      freePickups: 0
    };
    setUserVIP(mockUserVIP);
  }, []);

  // Ad rotation logic
  useEffect(() => {
    if (activeAds.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentAdIndex(prev => (prev + 1) % activeAds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeAds.length]);

  // 模拟VIP商品 - 优先显示
  const featuredProducts = [...MOCK_PRODUCTS].sort((a, b) => {
    // 优先显示VIP推广的商品
    const aVIP = a.isVIPPromoted || false;
    const bVIP = b.isVIPPromoted || false;
    return (bVIP ? 1 : 0) - (aVIP ? 1 : 0);
  });

  const handleUpgradeVIP = (level: 'month' | 'season' | 'year') => {
    const prices = {
      month: 29.9,
      season: 79.9,
      year: 299.9
    };

    if (confirm(`确认升级${level === 'month' ? '月度' : level === 'season' ? '季度' : '年度'}VIP？价格：¥${prices[level]}`)) {
      // 模拟支付成功
      setUserVIP({
        isVIP: true,
        level: level,
        expiresAt: new Date(Date.now() + (level === 'month' ? 30 : level === 'season' ? 90 : 365) * 24 * 60 * 60 * 1000).toISOString(),
        freePickups: level === 'month' ? 1 : level === 'season' ? 3 : 12
      });

      // 这里应该是实际的API调用
      console.log(`用户升级${level}VIP`);
    }
  };

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
            <div className="px-4 mt-4 mb-4 relative z-10">
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

        {/* Categories - 不包含快递代取 */}
        <div className="grid grid-cols-5 gap-2 px-4 mb-6">
          {[
            { name: '书籍', icon: Book, color: 'bg-blue-100 text-blue-600' },
            { name: '数码', icon: Smartphone, color: 'bg-purple-100 text-purple-600' },
            { name: '衣物', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
            { name: '鞋帽', icon: Footprints, color: 'bg-orange-100 text-orange-600' },
            { name: '更多', icon: Grid, color: 'bg-gray-100 text-gray-600' },
          ].map((cat, idx) => (
              <div
                  key={idx}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => navigate('/market')}
              >
                <div className={`w-10 h-10 ${cat.color} rounded-full flex items-center justify-center mb-1 hover:scale-110 transition-transform`}>
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
            <span className="text-xs text-gray-400">入驻 </span>
          </div>

          {/* 添加滚动指示和容器 */}
          <div className="relative">
            {/* 左侧渐变遮罩 - 提示可以向左滚动 */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

            {/* 右侧渐变遮罩 - 提示可以向右滚动 */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-1 pl-1 pr-1">
              {/* 原有的商家卡片 */}
              {MOCK_MERCHANTS.map((m) => (
                  <div
                      key={m.id}
                      className="flex-shrink-0 w-24 flex flex-col items-center bg-white p-2 rounded-lg border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow active:opacity-90 hover:scale-[1.02] transition-transform"
                      onClick={() => {
                        // 商家的点击处理
                        console.log('点击商家:', m.name);
                        // 这里可以跳转到商家详情页
                      }}
                  >
                    <img src={m.logo} alt={m.name} className="w-10 h-10 rounded-full mb-1 object-cover" />
                    <span className="text-[10px] font-bold text-gray-800 truncate w-full text-center">{m.name}</span>
                    <span className="text-[9px] text-green-600 bg-green-50 px-1 rounded scale-90">{m.description}</span>
                  </div>
              ))}

              {/* 快递代取服务卡片 - 新增 */}
              {/* 快递代取服务卡片 - 修复点击事件 */}
              <div
                  key="express_service"
                  className="flex-shrink-0 w-24 flex flex-col items-center bg-white p-2 rounded-lg border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow active:opacity-90 hover:scale-[1.02] transition-transform relative"
                  onClick={() => {

                    navigate('/express-pickup');
                  }}
              >
                {/* 热门标签 */}
                <div className="absolute -top-1 -right-1">
                  <div className="bg-red-500 text-white text-[8px] px-1 py-0.5 rounded-full flex items-center">
                    <span>🔥</span>
                  </div>
                </div>

                {/* 快递图标 */}
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-1 border border-green-200">
                  <Package size={20} className="text-green-600" />
                </div>
                <span className="text-[10px] font-bold text-gray-800 truncate w-full text-center">快递代取</span>
                <span className="text-[9px] text-green-600 bg-green-50 px-1 rounded scale-90">快捷安全</span>
              </div>
            </div>

            {/* 滚动提示文字 */}
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400 flex items-center justify-center">
                <span className="mr-1">←→</span> 左右滑动查看更多
              </span>
            </div>
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


        <div className="px-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-800 text-sm flex items-center">
              <Gift size={16} className="mr-1.5 text-red-500" /> VIP专属特权
            </h2>
            <span
                className="text-xs text-yellow-600 font-medium flex items-center cursor-pointer"
                onClick={() => navigate('/profile?tab=vip')}
            >
              了解详情 <TrendingUp size={12} className="ml-1" />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 rounded-lg border border-yellow-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                  <Crown size={14} className="text-yellow-600" />
                </div>
                <span className="text-xs font-medium text-yellow-800">首页优先推荐</span>
              </div>
              <p className="text-[10px] text-yellow-600/80">发布商品获得优先展示，提高曝光</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <BadgePercent size={14} className="text-blue-600" />
                </div>
                <span className="text-xs font-medium text-blue-800">手续费优惠</span>
              </div>
              <p className="text-[10px] text-blue-600/80">享受更低平台手续费率</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <Package size={14} className="text-green-600" />
                </div>
                <span className="text-xs font-medium text-green-800">免费上门取货</span>
              </div>
              <p className="text-[10px] text-green-600/80">每月享免费快递代取服务</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-3 rounded-lg border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <Zap size={14} className="text-purple-600" />
                </div>
                <span className="text-xs font-medium text-purple-800">专属客服</span>
              </div>
              <p className="text-[10px] text-purple-600/80">优先处理VIP用户问题</p>
            </div>
          </div>
        </div>


        <div
            className="mx-4 mb-6 rounded-xl shadow-md overflow-hidden relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => navigate('/profile?tab=vip')}
        >
          <div className="p-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <Crown size={18} className="text-white mr-2" />
                <h3 className="font-bold text-white text-sm">VIP会员特权</h3>
                {userVIP.isVIP && (
                    <span className="ml-2 text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                      {userVIP.level === 'month' ? '月度' : userVIP.level === 'season' ? '季度' : '年度'}会员
                    </span>
                )}
              </div>
              <p className="text-xs text-white/90 mb-2">
                {userVIP.isVIP
                    ? `享有首页推荐特权，剩余${userVIP.freePickups}次免费取货`
                    : '开通VIP，享首页优先推荐、手续费优惠、免费上门取货'}
              </p>
              <button
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg ${userVIP.isVIP ? 'bg-white/20 text-white' : 'bg-white text-yellow-600'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/profile?tab=vip');
                  }}
              >
                {userVIP.isVIP ? '管理会员' : '立即开通'}
              </button>
            </div>
            <div className="flex flex-col items-center ml-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-1">
                <Zap size={24} className="text-white" />
              </div>
              {userVIP.isVIP ? (
                  <span className="text-[10px] text-white bg-white/20 px-1 rounded">VIP中</span>
              ) : (
                  <span className="text-[10px] text-white bg-red-500 px-1 rounded">限时优惠</span>
              )}
            </div>
          </div>
        </div>

        {/* Recommendations Feed - 添加VIP标识 */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h2 className="font-bold text-gray-800 text-lg relative pl-3 mr-2">
                <span className="absolute left-0 top-1.5 w-1 h-4 bg-yellow-400 rounded-full"></span>
                好物推荐
              </h2>
              <div className="flex items-center text-xs">
                <Crown size={12} className="text-yellow-500 mr-1" />
                <span className="text-yellow-600 font-medium">VIP优先推荐</span>
              </div>
            </div>
            <span
                className="text-xs text-gray-400 cursor-pointer"
                onClick={() => navigate('/market')}
            >
              查看全部 &gt;
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {featuredProducts.map(product => (
                <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                  <ProductCard product={product} />
                  {/* 添加VIP标识 */}
                  {product.isVIPPromoted && (
                      <div className="absolute top-1 left-1 z-10">
                        <div className="flex items-center bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-[10px] px-1.5 py-0.5 rounded-full shadow-sm">
                          <Crown size={8} className="mr-0.5" />
                          VIP推荐
                        </div>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};