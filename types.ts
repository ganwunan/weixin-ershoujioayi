export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  category: CategoryType;
  image: string;
  videoUrl?: string; // Short video 10-30s
  sellerId: string;
  sellerName: string;
  sellerAvatar: string;
  sellerCreditLevel: number; // 1-5
  likes: number;
  description: string;
  location: string;
  deliveryMethods: DeliveryMethod[];
  status: 'active' | 'sold' | 'audit';
  createTime: number;

  // VIP相关新增字段
  isVIPPromoted?: boolean; // 是否VIP推广
  commissionRate?: number; // 手续费率：5% 或 7%
  vipExpiryTime?: number; // VIP推广到期时间
  promotionLabel?: string; // 推广标签
}

export enum CategoryType {
  BOOKS = '书籍教材',
  DIGITAL = '数码产品',
  CLOTHES = '衣物鞋帽',
  DAILY = '生活用品',
  BEAUTY = '美妆护肤',
  TICKETS = '票务娱乐',
  OTHER = '更多'
}

export enum DeliveryMethod {
  FACE_TO_FACE = '面对面交易',
  EXPRESS = '快递物流',
  CAMPUS_DELIVERY = '校园跑腿'
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  university: string;
  creditScore: number;
  creditLevel: 'Lv1' | 'Lv2' | 'Lv3' | 'Lv4' | 'Lv5';
  isRealNameVerified: boolean;

  // VIP相关新增字段
  isVIP?: boolean; // 是否是VIP会员
  vipLevel?: 'none' | 'month' | 'season' | 'year'; // VIP等级
  vipExpiryDate?: string; // VIP到期时间
  freePickupCoupons?: number; // 免费上门取货券数量
  commissionDiscount?: number; // 手续费折扣率，如0.9表示9折
  promotionPriority?: number; // 推广优先级，1-10
}

export interface AdSlot {
  id: string;
  imageUrl: string;
  linkUrl: string;
  merchantName: string;
  expireTime: number; // Timestamp for auto-removal
  type: 'banner' | 'feed';
}

export interface Merchant {
  id: string;
  name: string;
  logo: string;
  type: 'local_business' | 'farmer' | 'official';
  description: string;
  isVerified: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  icon: any;
}

// VIP相关新增接口
export interface VIPPlan {
  id: string;
  name: string;
  level: 'month' | 'season' | 'year';
  price: number;
  originalPrice?: number;
  description: string[];
  features: string[];
  freePickups: number;
  commissionDiscount: number; // 折扣率，如0.9表示9折
  promotionPriority: number; // 推广优先级
  badgeColor: string; // 徽章颜色
  isPopular?: boolean; // 是否热门推荐
}

export interface ExpressPickupOrder {
  id: string;
  userId: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageSize: 'small' | 'medium' | 'large';
  urgent: boolean;
  note?: string;
  useCoupon: boolean;
  status: 'pending' | 'accepted' | 'picking' | 'delivering' | 'completed' | 'cancelled';
  price: number;
  actualPrice: number; // 实际支付价格（使用优惠券后）
  createdAt: number;
  updatedAt: number;
  riderId?: string; // 骑手ID
  estimatedTime?: string; // 预计送达时间
}

export interface PromotionCoupon {
  id: string;
  userId: string;
  type: 'pickup' | 'commission' | 'shipping'; // 取货券、手续费券、运费券
  value: number; // 面值或折扣率
  description: string;
  expireTime: number;
  status: 'unused' | 'used' | 'expired';
  createdAt: number;
}

export interface CommissionRate {
  normal: number; // 普通费率：5%
  vip: number; // VIP费率：7%
  discount?: number; // VIP折扣率
}