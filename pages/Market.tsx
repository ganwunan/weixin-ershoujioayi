import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { CategoryType } from '../types';

export const Market: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryType | 'All'>('All');

  const filteredProducts = activeTab === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeTab);

  return (
    <div className="pt-2">
      {/* Top Bar */}
      <div className="px-4 mb-4 flex items-center space-x-3">
        <div className="flex-1 bg-white rounded-full flex items-center px-3 py-2 shadow-sm border border-gray-100">
          <Search size={16} className="text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="搜索商品..." 
            className="flex-1 bg-transparent text-sm focus:outline-none"
          />
        </div>
        <button className="text-gray-600">
          <Filter size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4 overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 min-w-max">
          <button 
            onClick={() => setActiveTab('All')}
            className={`text-sm font-medium pb-1 border-b-2 transition-colors ${activeTab === 'All' ? 'border-yellow-400 text-gray-900' : 'border-transparent text-gray-400'}`}
          >
            全部
          </button>
          {Object.values(CategoryType).map(cat => (
             <button 
             key={cat}
             onClick={() => setActiveTab(cat)}
             className={`text-sm font-medium pb-1 border-b-2 transition-colors ${activeTab === cat ? 'border-yellow-400 text-gray-900' : 'border-transparent text-gray-400'}`}
           >
             {cat}
           </button>
          ))}
        </div>
      </div>

      {/* Filter Chips */}
      <div className="px-4 mb-4 flex space-x-2">
        <button className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 shadow-sm border border-gray-100 flex items-center">
          价格 <ChevronDown size={12} className="ml-1" />
        </button>
        <button className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 shadow-sm border border-gray-100 flex items-center">
          成色 <ChevronDown size={12} className="ml-1" />
        </button>
        <button className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 shadow-sm border border-gray-100 flex items-center">
          区域 <ChevronDown size={12} className="ml-1" />
        </button>
      </div>

      {/* Grid */}
      <div className="px-4 pb-20">
         <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
           {/* Duplicate for visual fullness */}
           {filteredProducts.map((product) => (
            <ProductCard key={`dup-market-${product.id}`} product={{...product, id: `dup-market-${product.id}`}} />
          ))}
        </div>
      </div>
    </div>
  );
};