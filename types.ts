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
