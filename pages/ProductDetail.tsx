import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, ShieldCheck, Truck, User, Play, AlertTriangle } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Nav */}
      <div className="fixed top-0 w-full z-50 flex justify-between items-center p-4 bg-transparent pointer-events-none">
        <button onClick={() => navigate(-1)} className="w-8 h-8 bg-black/30 backdrop-blur rounded-full flex items-center justify-center text-white pointer-events-auto">
          <ArrowLeft size={18} />
        </button>
        <button className="w-8 h-8 bg-black/30 backdrop-blur rounded-full flex items-center justify-center text-white pointer-events-auto">
          <Share2 size={16} />
        </button>
      </div>

      {/* Media Gallery */}
      <div className="relative w-full h-80 bg-gray-200">
        <img src={product.image} className="w-full h-full object-cover" alt={product.title} />
        {product.videoUrl && (
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs flex items-center backdrop-blur-sm">
                <Play size={10} className="mr-1 fill-white" />
                30s 视频展示
            </div>
        )}
      </div>

      <div className="p-4">
        {/* Price & Title */}
        <div className="flex justify-between items-start mb-2">
            <div className="text-red-500 font-bold text-2xl">
                <span className="text-sm">¥</span>{product.price}
                {product.originalPrice && <span className="text-gray-300 text-sm line-through ml-2 font-normal">¥{product.originalPrice}</span>}
            </div>
            <div className="flex flex-col items-center text-gray-400">
                <Heart size={20} />
                <span className="text-[10px]">{product.likes}</span>
            </div>
        </div>
        <h1 className="text-lg font-bold text-gray-900 mb-3">{product.title}</h1>

        {/* Security & Logistics Banner */}
        <div className="bg-green-50 p-3 rounded-lg mb-4 flex flex-col gap-2">
            <div className="flex items-center text-xs text-green-800">
                <ShieldCheck size={14} className="mr-2 text-green-600" />
                <span className="font-bold">平台担保交易</span>
                <span className="mx-1">·</span>
                <span>确认收货后卖家才能收到钱</span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
                <Truck size={14} className="mr-2 text-gray-500" />
                <span>支持: {product.deliveryMethods.join(' / ')}</span>
            </div>
        </div>

        {/* Description */}
        <div className="mb-6">
            <h3 className="font-bold text-sm mb-2">商品详情</h3>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                {product.description}
            </p>
        </div>

        {/* Seller Info */}
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src={product.sellerAvatar} className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <div className="font-bold text-sm text-gray-900">{product.sellerName}</div>
                    <div className="flex items-center mt-1">
                         <span className="text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded mr-1">
                            信用 Lv.{product.sellerCreditLevel}
                         </span>
                         <span className="text-[10px] text-gray-400">实名认证</span>
                    </div>
                </div>
            </div>
            <button className="px-4 py-1.5 border border-green-500 text-green-600 rounded-full text-xs font-medium">
                私信
            </button>
        </div>
      </div>

      {/* Safety Warning */}
      <div className="p-4 bg-gray-50 text-[10px] text-gray-400 flex items-start mx-4 rounded-lg mb-4">
         <AlertTriangle size={12} className="mr-2 mt-0.5 flex-shrink-0" />
         如遇商品质量问题，请在“我的-售后”中发起退换货申请。平台支持7天内争议处理。
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-4 py-3 flex items-center justify-between z-50">
          <div className="flex space-x-6 mr-4">
              <div className="flex flex-col items-center text-gray-500">
                  <User size={18} />
                  <span className="text-[10px]">卖家</span>
              </div>
              <div className="flex flex-col items-center text-gray-500">
                   <div className="relative">
                     <span className="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1"></span>
                     <Truck size={18} />
                   </div>
                  <span className="text-[10px]">物流</span>
              </div>
          </div>
          <button className="flex-1 bg-yellow-400 text-black font-bold py-2.5 rounded-full shadow-sm text-sm active:scale-95 transition-transform">
              立即购买
          </button>
      </div>
    </div>
  );
};
