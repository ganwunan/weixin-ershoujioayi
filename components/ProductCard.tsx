import React from 'react';
import { Product } from '../types';
import { Heart, MapPin, Play } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full active:opacity-90 transition-opacity cursor-pointer">
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
      
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 h-10 leading-snug">
          {product.title}
        </h3>
        
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
          <span className="text-gray-400 text-xs flex items-center">
            {product.likes} <Heart size={12} className="ml-0.5 fill-gray-200" />
          </span>
        </div>

        <div className="mt-2 flex items-center pt-2 border-t border-gray-50">
          <img src={product.sellerAvatar} alt="" className="w-5 h-5 rounded-full mr-2" />
          <div className="flex flex-col w-full overflow-hidden">
             <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500 truncate max-w-[60px]">{product.sellerName}</span>
                <span className="bg-yellow-50 text-yellow-700 text-[9px] px-1 rounded transform scale-90 origin-right">
                    Lv.{product.sellerCreditLevel}
                </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
