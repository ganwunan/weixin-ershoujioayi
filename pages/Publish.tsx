import React, { useState } from 'react';
import { Camera, ChevronRight, Video, AlertCircle, Truck, User } from 'lucide-react';
import { CategoryType, DeliveryMethod } from '../types';

export const Publish: React.FC = () => {
  const [hasVideo, setHasVideo] = useState(false);
  const [deliveryType, setDeliveryType] = useState<DeliveryMethod[]>([]);
  const [agreed, setAgreed] = useState(false);

  const toggleDelivery = (method: DeliveryMethod) => {
    if (deliveryType.includes(method)) {
      setDeliveryType(deliveryType.filter(t => t !== method));
    } else {
      setDeliveryType([...deliveryType, method]);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
        <button className="text-sm text-gray-500">取消</button>
        <h1 className="font-bold text-gray-800">发布闲置</h1>
        <button 
          className={`text-sm font-bold px-3 py-1 rounded-full transition-colors ${agreed ? 'text-green-600 bg-green-50' : 'text-gray-400 bg-gray-100'}`}
          disabled={!agreed}
        >
          发布
        </button>
      </div>

      <div className="p-4">
        {/* Description */}
        <textarea 
          placeholder="描述一下宝贝的品牌型号、入手渠道、转手原因..." 
          className="w-full h-32 text-sm text-gray-800 placeholder-gray-400 focus:outline-none resize-none mb-4"
        ></textarea>

        {/* Media Upload */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="w-24 h-24 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 relative">
            <Camera size={24} className="mb-1" />
            <span className="text-[10px]">添加图片</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">必填</span>
          </div>

          <div 
            onClick={() => setHasVideo(!hasVideo)}
            className={`w-24 h-24 rounded-lg border border-dashed flex flex-col items-center justify-center relative transition-colors ${hasVideo ? 'bg-green-50 border-green-300 text-green-600' : 'bg-gray-50 border-gray-300 text-gray-400'}`}
          >
            <Video size={24} className="mb-1" />
            <span className="text-[10px]">{hasVideo ? '已添加视频' : '添加视频'}</span>
            <span className="text-[9px] mt-0.5 opacity-70">10-30秒</span>
            {hasVideo && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between py-3 border-t border-gray-50">
          <div className="flex items-center">
             <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-500 mr-2">📍</span>
             <span className="text-sm text-gray-800">发货地</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            沧州交通学院
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>

        {/* Categories Grid (Quick Select) */}
        <div className="py-3 border-t border-gray-50">
            <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">选择分类</h3>
            <div className="flex flex-wrap gap-2">
                {Object.values(CategoryType).filter(t => t !== '更多').map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg active:bg-green-100 active:text-green-600 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Delivery Methods */}
        <div className="py-3 border-t border-gray-50">
             <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">交易/配送方式</h3>
             <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                        <User size={16} className="mr-2 text-blue-500" />
                        <span className="text-sm text-gray-700">面对面交易</span>
                    </div>
                    <input type="checkbox" onChange={() => toggleDelivery(DeliveryMethod.FACE_TO_FACE)} className="accent-green-500 w-4 h-4" />
                </label>
                <label className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                        <Truck size={16} className="mr-2 text-orange-500" />
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-700">快递物流 (需填单号)</span>
                        </div>
                    </div>
                    <input type="checkbox" onChange={() => toggleDelivery(DeliveryMethod.EXPRESS)} className="accent-green-500 w-4 h-4" />
                </label>
                <label className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                        <span className="text-base mr-2">🏃</span>
                        <span className="text-sm text-gray-700">校园跑腿配送</span>
                    </div>
                    <input type="checkbox" onChange={() => toggleDelivery(DeliveryMethod.CAMPUS_DELIVERY)} className="accent-green-500 w-4 h-4" />
                </label>
             </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between py-3 border-t border-gray-50 border-b mb-6">
          <div className="flex items-center">
             <span className="text-sm text-gray-800">价格</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-red-500 font-bold mr-1">¥</span>
            <input type="number" placeholder="0.00" className="text-right w-24 text-red-500 font-bold focus:outline-none placeholder-gray-300" />
          </div>
        </div>

        {/* Agreements */}
        <div className="flex items-start mb-6">
            <input 
              type="checkbox" 
              id="terms" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
            />
            <label htmlFor="terms" className="ml-2 text-xs text-gray-500 leading-tight">
                我已阅读并同意 <span className="text-blue-500">《平台用户交易公约》</span>、<span className="text-blue-500">《禁售商品清单》</span>，并承诺发布的商品信息真实有效，非违禁品。
            </label>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 p-3 rounded-lg flex items-start">
            <AlertCircle size={14} className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-[10px] text-yellow-700">
                温馨提示：平台支持第三方担保交易。为了您的资金安全，请勿脱离平台通过微信/支付宝直接转账。
            </p>
        </div>
      </div>
    </div>
  );
};
