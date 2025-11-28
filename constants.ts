import { CategoryType, Product, UserProfile, AdSlot, Merchant, DeliveryMethod } from './types';

export const CURRENT_USER: UserProfile = {
  name: "Camellia",
  avatar: "https://picsum.photos/id/64/200/200",
  id: "2301_CJ_Student",
  university: "河北沧州黄骅沧州交通学院",
  creditScore: 750,
  creditLevel: 'Lv4',
  isRealNameVerified: true
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
  }
];

export const MOCK_MERCHANTS: Merchant[] = [
  { id: 'm1', name: '黄骅冬枣直销', logo: 'https://picsum.photos/id/1080/100/100', type: 'farmer', description: '农户直连，今日采摘', isVerified: true },
  { id: 'm2', name: '顺丰校园站', logo: 'https://picsum.photos/id/106/100/100', type: 'official', description: '寄件优惠', isVerified: true },
  { id: 'm3', name: '小张电脑维修', logo: 'https://picsum.photos/id/2/100/100', type: 'local_business', description: '上门清灰', isVerified: true },
  { id: 'm4', name: '校园文创店', logo: 'https://picsum.photos/id/250/100/100', type: 'official', description: '官方周边', isVerified: true },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: '大学英语精读教材 (带笔记版)',
    price: 15.00,
    category: CategoryType.BOOKS,
    image: 'https://picsum.photos/id/24/400/400',
    sellerId: 's1',
    sellerName: '学霸小张',
    sellerAvatar: 'https://picsum.photos/id/101/100/100',
    sellerCreditLevel: 5,
    likes: 12,
    description: '大一上学期英语精读，笔记很全，期末复习必备。支持视频验货。',
    location: '图书馆自提',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.CAMPUS_DELIVERY],
    status: 'active',
    createTime: Date.now()
  },
  {
    id: '2',
    title: '九成新罗技蓝牙鼠标',
    price: 45.00,
    originalPrice: 99.00,
    category: CategoryType.DIGITAL,
    image: 'https://picsum.photos/id/2/400/400',
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
    createTime: Date.now()
  },
  {
    id: '3',
    title: '闲置台灯，护眼',
    price: 20.00,
    category: CategoryType.DAILY,
    image: 'https://picsum.photos/id/367/400/400',
    sellerId: 's3',
    sellerName: '早睡早起',
    sellerAvatar: 'https://picsum.photos/id/103/100/100',
    sellerCreditLevel: 3,
    likes: 22,
    description: '毕业出清，给钱就卖。',
    location: '女生宿舍5号楼',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE],
    status: 'active',
    createTime: Date.now()
  },
  {
    id: '4',
    title: '考研数学复习全书',
    price: 35.00,
    category: CategoryType.BOOKS,
    image: 'https://picsum.photos/id/119/400/400',
    sellerId: 's4',
    sellerName: '上岸学长',
    sellerAvatar: 'https://picsum.photos/id/104/100/100',
    sellerCreditLevel: 5,
    likes: 45,
    description: '祝你也上岸！书保护得很好。',
    location: '二食堂门口',
    deliveryMethods: [DeliveryMethod.FACE_TO_FACE, DeliveryMethod.CAMPUS_DELIVERY],
    status: 'active',
    createTime: Date.now()
  },
  {
    id: '5',
    title: '佳能CCD相机 复古风',
    price: 299.00,
    category: CategoryType.DIGITAL,
    image: 'https://picsum.photos/id/250/400/400',
    videoUrl: 'mock_video_url',
    sellerId: 's5',
    sellerName: '摄影社',
    sellerAvatar: 'https://picsum.photos/id/106/100/100',
    sellerCreditLevel: 4,
    likes: 89,
    description: '出片很有感觉，电池耐用。',
    location: '操场',
    deliveryMethods: [DeliveryMethod.EXPRESS, DeliveryMethod.FACE_TO_FACE],
    status: 'active',
    createTime: Date.now()
  }
];
