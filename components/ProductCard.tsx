import React from 'react';
import {DeliveryMethod, Product} from '../types';
import { Heart, MapPin, Play, Crown, BadgePercent, Zap } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    showVIPBadge?: boolean; // 是否显示VIP标识
    compact?: boolean; // 紧凑模式
}

export const ProductCard: React.FC<ProductCardProps> = ({
                                                            product,
                                                            showVIPBadge = true,
                                                            compact = false
                                                        }) => {
    const hasVIPPromotion = product.isVIPPromoted && showVIPBadge;
    const hasCommissionRate = product.commissionRate && showVIPBadge;

    return (
        <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full active:opacity-90 transition-opacity cursor-pointer hover:shadow-md transition-shadow duration-300">

            {/* VIP推广标识 */}
            {hasVIPPromotion && (
                <div className="absolute top-2 left-2 z-10">
                    <div className="flex items-center bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-[10px] px-2 py-1 rounded-full shadow-md animate-pulse">
                        <Crown size={10} className="mr-1" />
                        VIP推荐
                        {product.promotionLabel && (
                            <span className="ml-1 bg-white/20 text-[9px] px-1 rounded">{product.promotionLabel}</span>
                        )}
                    </div>
                </div>
            )}

            {/* 手续费率标识 */}
            {hasCommissionRate && product.commissionRate === 7 && (
                <div className="absolute top-2 right-2 z-10">
                    <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] px-2 py-1 rounded-full shadow-md">
                        <BadgePercent size={10} className="mr-1" />
                        推广费率
                    </div>
                </div>
            )}

            {/* 图片/视频区域 */}
            <div className="relative h-40 bg-gray-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded-full flex items-center backdrop-blur-sm">
                    <MapPin size={9} className="mr-1" />
                    {product.location}
                </div>
                {product.videoUrl && (
                    <div className="absolute top-2 right-2 bg-black/30 w-6 h-6 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play size={10} className="fill-white text-white ml-0.5" />
                    </div>
                )}
            </div>

            {/* 商品信息区域 */}
            <div className={`p-3 flex flex-col flex-1 ${compact ? 'py-2' : ''}`}>
                <h3 className={`font-medium text-gray-800 line-clamp-2 mb-1 leading-snug ${compact ? 'text-sm h-8' : 'text-sm h-10'}`}>
                    {product.title}
                </h3>

                {/* 商品描述 - 仅非紧凑模式显示 */}
                {!compact && (
                    <p className="text-xs text-gray-500 mt-1 mb-2 line-clamp-1">
                        {product.description}
                    </p>
                )}

                <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col">
            <span className="text-red-500 font-bold text-lg">
              <span className="text-xs">¥</span>{product.price}
            </span>
                        {product.originalPrice && (
                            <span className="text-gray-300 text-[10px] line-through decoration-gray-300">
                ¥{product.originalPrice}
              </span>
                        )}
                    </div>

                    {/* 点赞数 */}
                    <span className="text-gray-400 text-xs flex items-center">
            {product.likes} <Heart size={12} className="ml-0.5 fill-gray-200" />
          </span>
                </div>

                {/* 卖家信息区域 */}
                <div className={`mt-2 flex items-center pt-2 border-t border-gray-50 ${compact ? 'mt-1 pt-1' : ''}`}>
                    <img
                        src={product.sellerAvatar}
                        alt={product.sellerName}
                        className={`rounded-full ${compact ? 'w-4 h-4 mr-1' : 'w-5 h-5 mr-2'}`}
                    />
                    <div className="flex flex-col w-full overflow-hidden">
                        <div className="flex items-center justify-between">
              <span className={`text-gray-500 truncate max-w-[60px] ${compact ? 'text-[9px]' : 'text-[10px]'}`}>
                {product.sellerName}
              </span>
                            <span className="bg-yellow-50 text-yellow-700 text-[9px] px-1 rounded transform scale-90 origin-right">
                Lv.{product.sellerCreditLevel}
              </span>
                        </div>

                        {/* VIP卖家标识 */}
                        {product.sellerId === 'vip_seller' && (
                            <div className="flex items-center mt-0.5">
                                <Crown size={8} className="text-yellow-500 mr-0.5" />
                                <span className="text-[8px] text-yellow-600 bg-yellow-50 px-1 rounded">
                  VIP商家
                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* 交易方式标签 - 仅非紧凑模式显示 */}
                {!compact && product.deliveryMethods && product.deliveryMethods.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {product.deliveryMethods.slice(0, 2).map((method, index) => (
                            <span
                                key={index}
                                className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded"
                            >
                {method === DeliveryMethod.FACE_TO_FACE ? '面交' :
                    method === DeliveryMethod.EXPRESS ? '快递' : '跑腿'}
              </span>
                        ))}
                        {product.deliveryMethods.length > 2 && (
                            <span className="text-[9px] bg-gray-50 text-gray-500 px-1.5 py-0.5 rounded">
                +{product.deliveryMethods.length - 2}
              </span>
                        )}
                    </div>
                )}
            </div>

            {/* VIP推广角标 - 右上角 */}
            {hasVIPPromotion && (
                <div className="absolute top-0 right-0 w-0 h-0
          border-t-[40px] border-r-[40px]
          border-t-transparent border-r-yellow-500">
                    <Crown
                        size={12}
                        className="absolute top-[-36px] right-[3px] text-white"
                    />
                </div>
            )}
        </div>
    );
};