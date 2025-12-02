import React, { useState } from 'react';
import { Package, Clock, MapPin, Shield, CreditCard, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ExpressPickup: React.FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        pickupAddress: '',
        deliveryAddress: '',
        packageSize: 'small' as 'small' | 'medium' | 'large',
        urgent: false,
        note: '',
        useCoupon: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 模拟API调用
        try {
            console.log('提交快递代取订单:', form);
            alert('下单成功！快递员将尽快联系您');
            navigate('/profile');
        } catch (error) {
            console.error('下单失败:', error);
            alert('下单失败，请重试');
        }
    };

    const packagePrices = {
        small: { base: 1.5, urgent: 5 },
        medium: { base: 3, urgent: 7 },
        large: { base: '5+', urgent: 10 }
    };

    const calculatePrice = () => {
        const price = packagePrices[form.packageSize];
        let total = form.urgent ? price.urgent : price.base;
        if (form.useCoupon) total = 0;
        return total;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
                <div className="flex items-center mb-2">
                    <ArrowLeft
                        size={20}
                        className="mr-3 cursor-pointer"
                        onClick={() => navigate(-1)}
                    />
                    <div>
                        <h1 className="font-bold text-lg">校园快递代取</h1>
                        <p className="text-sm opacity-90">安全、快捷、送货上门</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
                {/* 取件地址 */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <MapPin size={18} className="text-green-500 mr-2" />
                        <label className="font-medium text-gray-800">取件地址</label>
                    </div>
                    <input
                        type="text"
                        required
                        placeholder="例如：菜鸟驿站12号柜"
                        value={form.pickupAddress}
                        onChange={(e) => setForm({...form, pickupAddress: e.target.value})}
                        className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                </div>

                {/* 收件地址 */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <MapPin size={18} className="text-blue-500 mr-2" />
                        <label className="font-medium text-gray-800">收件地址</label>
                    </div>
                    <input
                        type="text"
                        required
                        placeholder="例如：12号楼304室"
                        value={form.deliveryAddress}
                        onChange={(e) => setForm({...form, deliveryAddress: e.target.value})}
                        className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* 包裹大小 */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                        <Package size={18} className="text-orange-500 mr-2" />
                        <label className="font-medium text-gray-800">包裹大小</label>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {(['small', 'medium', 'large'] as const).map((size) => (
                            <div
                                key={size}
                                className={`p-3 border rounded-lg text-center cursor-pointer transition-colors ${
                                    form.packageSize === size
                                        ? 'border-green-500 bg-green-50'
                                        : 'border-gray-200 hover:border-green-300'
                                }`}
                                onClick={() => setForm({...form, packageSize: size})}
                            >
                                <div className="text-sm font-medium text-gray-800 mb-1">
                                    {size === 'small' ? '小件' : size === 'medium' ? '中件' : '大件'}
                                </div>
                                <div className="text-xs text-gray-600">
                                    ¥{packagePrices[size].base}起
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 加急服务 */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Clock size={18} className="text-red-500 mr-2" />
                            <div>
                                <div className="font-medium text-gray-800">加急服务</div>
                                <div className="text-xs text-gray-600">30分钟内送达</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">+¥{packagePrices[form.packageSize].urgent - packagePrices[form.packageSize].base}</span>
                            <input
                                type="checkbox"
                                checked={form.urgent}
                                onChange={(e) => setForm({...form, urgent: e.target.checked})}
                                className="w-5 h-5 text-green-500 rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* 使用优惠券 */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <CreditCard size={18} className="text-purple-500 mr-2" />
                            <div>
                                <div className="font-medium text-gray-800">免费取货券</div>
                                <div className="text-xs text-gray-600">VIP用户可用</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">剩余 0 张</span>
                            <input
                                type="checkbox"
                                checked={form.useCoupon}
                                onChange={(e) => setForm({...form, useCoupon: e.target.checked})}
                                disabled={true} // 根据实际用户优惠券数量启用
                                className="w-5 h-5 text-green-500 rounded disabled:opacity-50"
                            />
                        </div>
                    </div>
                </div>

                {/* 备注 */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <label className="block text-sm font-medium text-gray-800 mb-2">备注</label>
                    <textarea
                        placeholder="例如：包裹上有卡通贴纸"
                        value={form.note}
                        onChange={(e) => setForm({...form, note: e.target.value})}
                        className="w-full p-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                        rows={2}
                    />
                </div>

                {/* 安全保障 */}
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <Shield size={18} className="text-blue-500 mr-2" />
                        <span className="font-medium text-gray-800">安全保障</span>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span>全程担保，丢件必赔</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span>实名认证配送员</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span>实时定位追踪</span>
                        </div>
                    </div>
                </div>

                {/* 底部下单栏 */}
                <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <div className="text-sm text-gray-600">合计</div>
                            <div className="text-xl font-bold text-green-600">
                                ¥{calculatePrice().toFixed(2)}
                                {form.useCoupon && <span className="text-sm text-gray-400 line-through ml-1">¥{packagePrices[form.packageSize].base}</span>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50"
                            disabled={!form.pickupAddress || !form.deliveryAddress}
                        >
                            确认下单
                        </button>
                    </div>
                    <div className="text-xs text-gray-500 text-center">
                        点击下单即代表同意《代取服务协议》
                    </div>
                </div>
            </form>
        </div>
    );
};