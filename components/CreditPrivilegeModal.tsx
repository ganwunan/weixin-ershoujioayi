// CreditPrivilegeModal.tsx
import React, { useEffect } from 'react';
import { X, ShieldCheck, GraduationCap, BookOpen, Package, TrendingUp, CheckCircle } from 'lucide-react';

interface CreditPrivilegeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreditPrivilegeModal: React.FC<CreditPrivilegeModalProps> = ({ isOpen, onClose }) => {
    // 按ESC键关闭
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            return () => document.removeEventListener('keydown', handleEsc);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-xl animate-fadeIn">
                {/* 头部 */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-5 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <ShieldCheck size={24} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">高信誉分特权</h2>
                            <p className="text-white/90 text-sm">校园垂直化平台专属权益</p>
                        </div>
                    </div>
                </div>

                {/* 内容 */}
                <div className="p-5 overflow-y-auto max-h-[calc(90vh-80px)]">
                    <div className="space-y-4">
                        {/* 1. 校内身份系统 */}
                        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <GraduationCap size={16} className="text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-green-800 text-sm mb-1">
                                        （1）整合校内身份系统
                                    </h3>
                                    <p className="text-green-700 text-xs leading-relaxed">
                                        通过学籍验证系统，深度绑定校园身份信息，从源头解决买卖家信任痛点。
                                        只有在校学生/教职工可注册，确保交易环境纯净安全。
                                    </p>
                                    <div className="mt-2 flex items-center text-green-600 text-xs">
                                        <CheckCircle size={12} className="mr-1" />
                                        <span>学籍验证 · 真实身份 · 安全可信</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. 深度适配校园场景 */}
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <BookOpen size={16} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800 text-sm mb-1">
                                        （2）深度适配校园场景
                                    </h3>
                                    <ul className="space-y-2 text-blue-700 text-xs leading-relaxed">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>支持教材、电子设备、实验器材等校园高频品类专属分类</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>提供校内自提点物流服务（图书馆、食堂、宿舍楼下）</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>校内上门回收与再配送服务，环保便捷</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3. 信用体系优势 */}
                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={16} className="text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-amber-800 text-sm mb-1">
                                        （3）信用体系优势
                                    </h3>
                                    <p className="text-amber-700 text-xs leading-relaxed mb-2">
                                        结合用户履约记录、校内奖惩数据、同学评价等多维度信息，
                                        科学生成个人信用分。
                                    </p>
                                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-2 rounded-lg">
                                        <div className="flex items-center justify-center">
                                            <Package size={14} className="mr-2" />
                                            <span className="font-bold text-sm">高信用用户享首页优先推荐权</span>
                                        </div>
                                        <p className="text-xs text-center mt-1 text-white/90">
                                            更快卖出闲置，获得更多曝光机会
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 当前信用状态 */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-600">您的当前信用分</p>
                                    <p className="text-xl font-bold text-green-600">750</p>
                                    <p className="text-xs text-green-500 mt-1">Lv4 信用极好</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-600">平台排名</p>
                                    <p className="text-lg font-bold text-gray-800">前 15%</p>
                                    <p className="text-xs text-gray-500 mt-1">继续保持良好记录</p>
                                </div>
                            </div>
                            <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                                    style={{ width: '85%' }}
                                />
                            </div>
                            <p className="text-xs text-center text-gray-500 mt-2">
                                再获50分即可晋升Lv5信用等级
                            </p>
                        </div>
                    </div>

                    {/* 提示信息 */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <p className="text-xs text-gray-600 text-center">
                            💡 信用分基于真实交易记录计算，请保持良好交易习惯
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};