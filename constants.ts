import { CategoryType, Product, UserProfile, AdSlot, Merchant, DeliveryMethod, VIPPlan, CommissionRate, PromotionCoupon } from './types';

// 当前用户信息（添加VIP相关字段）
export const CURRENT_USER: UserProfile = {
  name: "Camellia",
  avatar: "https://picsum.photos/id/64/200/200",
  id: "2301_CJ_Student",
  university: "河北沧州黄骅沧州交通学院",
  creditScore: 750,
  creditLevel: 'Lv4',
  isRealNameVerified: true,

  // VIP相关字段
  isVIP: false, // 默认不是VIP
  vipLevel: 'none',
  freePickupCoupons: 0,
  commissionDiscount: 1, // 默认无折扣
  promotionPriority: 1, // 默认优先级最低
};

export const MOCK_ADS: AdSlot[] = [
  {
    id: 'ad_1',
    imageUrl: 'https://picsum.photos/id/180/800/400',
    linkUrl: '#',
    merchantName: '校园周边眼镜店',
    expireTime: Date.now() + 86400000 * 3, // Expires in 3 days
    type: 'banner'
  },
  {
    id: 'ad_2',
    imageUrl: 'https://picsum.photos/id/119/800/400',
    linkUrl: '#',
    merchantName: '英语四六级培训',
    expireTime: Date.now() + 86400000 * 10,
    type: 'banner'
  },
  // VIP推广广告
  {
    id: 'ad_vip_1',
    imageUrl: 'https://picsum.photos/id/27/800/400',
    linkUrl: '/profile?tab=vip',
    merchantName: '校园二手平台VIP',
    expireTime: Date.now() + 86400000 * 30, // 30天
    type: 'banner'
  }
];

export const MOCK_MERCHANTS: Merchant[] = [
  { id: 'm1', name: '黄骅冬枣直销', logo: 'https://picsum.photos/id/1080/100/100', type: 'farmer', description: '农户直连，今日采摘', isVerified: true },
  { id: 'm2', name: '顺丰校园站', logo: 'https://picsum.photos/id/106/100/100', type: 'official', description: '寄件优惠', isVerified: true },
  { id: 'm3', name: '小张电脑维修', logo: 'https://picsum.photos/id/2/100/100', type: 'local_business', description: '上门清灰', isVerified: true },
  { id: 'm4', name: '校园文创店', logo: 'https://picsum.photos/id/250/100/100', type: 'official', description: '官方周边', isVerified: true },
  // VIP商家
  { id: 'm5', name: 'VIP快递代取', logo: '/images/products/kuaididaiqu.png', type: 'official', description: 'VIP专享服务', isVerified: true },
  { id: 'm6', name: '教材VIP专营', logo: 'https://picsum.photos/id/24/100/100', type: 'local_business', description: 'VIP优先发货', isVerified: true },
];

// VIP套餐配置
export const VIP_PLANS: VIPPlan[] = [
  {
    id: 'vip_month',
    name: '月度VIP',
    level: 'month',
    price: 29.9,
    originalPrice: 39.9,
    description: ['适合短期需求用户'],
    features: [
      '首页优先推荐',
      '1次免费上门取货',
      '发布手续费95折',
      '专属客服通道',
      '推广标签展示'
    ],
    freePickups: 1,
    commissionDiscount: 0.95, // 95折
    promotionPriority: 5,
    badgeColor: 'bg-yellow-500'
  },
  {
    id: 'vip_season',
    name: '季度VIP',
    level: 'season',
    price: 79.9,
    originalPrice: 99.9,
    description: ['性价比最高', '推荐选择'],
    features: [
      '首页优先推荐',
      '3次免费上门取货',
      '发布手续费9折',
      '专属客服通道',
      '推广标签展示',
      '专属商品标识'
    ],
    freePickups: 3,
    commissionDiscount: 0.9, // 9折
    promotionPriority: 7,
    badgeColor: 'bg-orange-500',
    isPopular: true
  },
  {
    id: 'vip_year',
    name: '年度VIP',
    level: 'year',
    price: 299.9,
    originalPrice: 399.9,
    description: ['尊贵体验', '全年无忧'],
    features: [
      '首页优先推荐',
      '12次免费上门取货',
      '发布手续费8折',
      '专属客服通道',
      '推广标签展示',
      '专属商品标识',
      '黄金广告位优惠',
      '优先审核通道'
    ],
    freePickups: 12,
    commissionDiscount: 0.8, // 8折
    promotionPriority: 10,
    badgeColor: 'bg-red-500'
  }
];

// 手续费率配置
export const COMMISSION_RATES: CommissionRate = {
  normal: 0.05, // 普通费率：5%
  vip: 0.07,    // VIP推广费率：7%
  discount: 0.2  // VIP用户手续费优惠：8折
};

// 快递代取价格配置
export const EXPRESS_PICKUP_PRICES = {
  small: { base: 3, urgent: 5, weight: '0-1kg' },
  medium: { base: 5, urgent: 7, weight: '1-3kg' },
  large: { base: 8, urgent: 10, weight: '3-5kg' }
};

// 优惠券数据
export const MOCK_COUPONS: PromotionCoupon[] = [
  {
    id: 'coupon_1',
    userId: '2301_CJ_Student',
    type: 'pickup',
    value: 1, // 1次免费取货
    description: 'VIP免费取货券',
    expireTime: Date.now() + 86400000 * 30, // 30天后过期
    status: 'unused',
    createdAt: Date.now()
  },
  {
    id: 'coupon_2',
    userId: '2301_CJ_Student',
    type: 'commission',
    value: 0.1, // 9折
    description: '发布手续费9折券',
    expireTime: Date.now() + 86400000 * 15,
    status: 'unused',
    createdAt: Date.now()
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: '大学英语精读教材 (带笔记版)',
    price: 15.00,
    category: CategoryType.BOOKS,
    image: '/images/products/xiandaiyingyu.png',
    sellerId: 's1',
    sellerName: '学霸小张',
    sellerAvatar: 'https://picsum.photos/id/101/100/100',
    sellerCreditLevel: 5,
    likes: 12,
    description: '大一上学期英语精读，笔记很全，期末复习必备。支持视频验货。',
    location: '图书馆自提',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.CAMPUS_DELIVERY],
    status: 'active',
    createTime: Date.now(),

    // VIP推广字段
    isVIPPromoted: true,
    commissionRate: 0.07, // 7% VIP推广费率
    vipExpiryTime: Date.now() + 86400000 * 7, // 7天后过期
    promotionLabel: '热推'
  },
  {
    id: '2',
    title: '九成新罗技蓝牙鼠标',
    price: 45.00,
    originalPrice: 99.00,
    category: CategoryType.DIGITAL,
    image: '/images/products/shubiao.png',
    videoUrl: 'mock_video_url',
    sellerId: 's2',
    sellerName: '数码控',
    sellerAvatar: 'https://picsum.photos/id/102/100/100',
    sellerCreditLevel: 4,
    likes: 5,
    description: '买了两个月，用的很少，原包装都在。',
    location: '男生宿舍3号楼',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.EXPRESS],
    status: 'active',
    createTime: Date.now(),

    // VIP推广字段
    isVIPPromoted: true,
    commissionRate: 0.07,
    vipExpiryTime: Date.now() + 86400000 * 30,
    promotionLabel: '新品'
  },
  {
    id: '3',
    title: '闲置台灯，护眼',
    price: 20.00,
    category: CategoryType.DAILY,
    image: '/images/products/taideng.png',
    sellerId: 's3',
    sellerName: '早睡早起',
    sellerAvatar: 'https://picsum.photos/id/103/100/100',
    sellerCreditLevel: 3,
    likes: 22,
    description: '毕业出清，给钱就卖。',
    location: '女生宿舍5号楼',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE],
    status: 'active',
    createTime: Date.now(),
    // 非VIP推广商品
  },
  {
    id: '4',
    title: '考研数学复习全书',
    price: 35.00,
    category: CategoryType.BOOKS,
    image: '/images/products/kaoyanshuxue.png',
    sellerId: 's4',
    sellerName: '上岸学长',
    sellerAvatar: 'https://picsum.photos/id/104/100/100',
    sellerCreditLevel: 5,
    likes: 45,
    description: '祝你也上岸！书保护得很好。',
    location: '二食堂门口',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.CAMPUS_DELIVERY],
    status: 'active',
    createTime: Date.now(),

    // VIP推广字段
    isVIPPromoted: true,
    commissionRate: 0.05, // 普通费率，但因为是VIP卖家
    promotionLabel: '学长推荐'
  },
  {
    id: '5',
    title: '佳能CCD相机 复古风',
    price: 299.00,
    category: CategoryType.DIGITAL,
    image: '/images/products/ccd.png',
    videoUrl: 'mock_video_url',
    sellerId: 'vip_seller', // VIP卖家
    sellerName: '摄影社VIP',
    sellerAvatar: 'https://picsum.photos/id/106/100/100',
    sellerCreditLevel: 5,
    likes: 89,
    description: '出片很有感觉，电池耐用。VIP专享快速发货。',
    location: '操场',
    deliveryMethods: [DeliveryMethod.EXPRESS, DeliveryMethod.FACE_TO_FACE],
    status: 'active',
    createTime: Date.now(),

    // VIP推广字段
    isVIPPromoted: true,
    commissionRate: 0.07,
    vipExpiryTime: Date.now() + 86400000 * 90,
    promotionLabel: 'VIP专享'
  },
  // 更多商品...
  {
    id: '6',
    title: '苹果AirPods Pro 2代',
    price: 1299.00,
    originalPrice: 1999.00,
    category: CategoryType.DIGITAL,
    image: '/images/products/erji.png',
    sellerId: 's6',
    sellerName: '数码达人',
    sellerAvatar: 'https://picsum.photos/id/107/100/100',
    sellerCreditLevel: 4,
    likes: 156,
    description: '国行正品，包装齐全，支持验货。',
    location: '创业园',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.EXPRESS],
    status: 'active',
    createTime: Date.now(),
    isVIPPromoted: false, // 普通商品
  },
  {
    id: '7',
    title: '全新未拆封雅思词汇书',
    price: 58.00,
    category: CategoryType.BOOKS,
    image: '/images/products/yasi.png',
    sellerId: 's7',
    sellerName: '英语学霸',
    sellerAvatar: 'https://picsum.photos/id/108/100/100',
    sellerCreditLevel: 5,
    likes: 34,
    description: '全新正版，备考雅思必备。',
    location: '图书馆',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.CAMPUS_DELIVERY],
    status: 'active',
    createTime: Date.now(),
    isVIPPromoted: true,
    commissionRate: 0.07,
    promotionLabel: '热销'
  },
  {
    id: '8',
    title: '健身环大冒险',
    price: 299.00,
    originalPrice: 499.00,
    category: CategoryType.DAILY,
    image: '/images/products/jianshenhuan.png',
    sellerId: 's8',
    sellerName: '游戏玩家',
    sellerAvatar: 'https://picsum.photos/id/109/100/100',
    sellerCreditLevel: 3,
    likes: 67,
    description: 'Switch健身环，九成新，带游戏卡。',
    location: '体育馆',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.EXPRESS],
    status: 'active',
    createTime: Date.now(),
    isVIPPromoted: true,
    commissionRate: 0.07,
    promotionLabel: '秒杀'
  }
];

// 用户VIP状态模拟数据
export const MOCK_USER_VIP = {
  isVIP: false,
  level: 'none' as const,
  expiresAt: '',
  freePickups: 0,
  commissionDiscount: 1,
  promotionPriority: 1
};

// VIP特权描述
export const VIP_PRIVILEGES = [
  {
    title: '首页优先推荐',
    description: '商品在首页获得优先展示位置',
    icon: '👑'
  },
  {
    title: '手续费优惠',
    description: '享受更低的手续费率',
    icon: '💸'
  },
  {
    title: '免费上门取货',
    description: '每月享免费快递代取服务',
    icon: '🚚'
  },
  {
    title: '专属客服',
    description: '优先处理VIP用户问题',
    icon: '💬'
  },
  {
    title: '快速审核',
    description: '发布商品审核优先处理',
    icon: '⚡'
  },
  {
    title: '专属标识',
    description: '商品显示VIP专属标签',
    icon: '🏷️'
  }
];

// 快递代取服务说明
export const EXPRESS_SERVICE_INFO = {
  serviceHours: '08:00-22:00',
  deliveryTime: '下单后30分钟内接单',
  coverage: '全校范围（含宿舍区、教学楼、图书馆）',
  guarantee: '丢件必赔，全程担保',
  vipDiscount: 'VIP用户享9折优惠'
};