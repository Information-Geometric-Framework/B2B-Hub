import { Supplier, Product, Order, RFQ } from './types';

export const COLORS = {
  sportyGreen: '#4CAF50',
  neonGreen: '#39FF14',
  grey: '#B0B0B0',
  blueGreen: '#00B3B3',
  dark: '#121212',
  cardDark: '#1E1E1E',
};

export const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: 's1',
    name: 'TechFlow Electronics',
    location: 'Shenzhen, China',
    rating: 4.8,
    reviewCount: 1250,
    verified: true,
    verifiedSince: '2021',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop',
    category: 'Electronics',
    description: 'Leading manufacturer of consumer electronics and industrial sensors.',
    tags: ['ISO 9001', 'Eco-Friendly', 'Fast Shipping'],
    status: 'APPROVED',
    documents: [{ name: 'Business License', url: '#', status: 'VERIFIED' }],
  },
  {
    id: 's2',
    name: 'EcoTextile Solutions',
    location: 'Ho Chi Minh, Vietnam',
    rating: 4.6,
    reviewCount: 840,
    verified: true,
    verifiedSince: '2022',
    logo: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=100&h=100&fit=crop',
    category: 'Textiles',
    description: 'Specializing in organic cotton and recycled polyester fabrics.',
    tags: ['Organic', 'SME Certified'],
    status: 'APPROVED',
    documents: [{ name: 'Tax ID', url: '#', status: 'VERIFIED' }],
  },
  {
    id: 's3',
    name: 'Global Heavy Industries',
    location: 'Düsseldorf, Germany',
    rating: 4.9,
    reviewCount: 2100,
    verified: true,
    verifiedSince: '2019',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
    category: 'Machinery',
    description: 'Precision engineering and heavy machinery for global infrastructure.',
    tags: ['TUV Certified', 'Precision'],
    status: 'APPROVED',
    documents: [{ name: 'Export Permit', url: '#', status: 'VERIFIED' }],
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    supplierId: 's1',
    name: 'Quantum Sensor X1',
    priceRange: '$12.50 - $15.00',
    moq: '100 units',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop',
    category: 'Sensors',
    stock: 1240,
    featured: true,
  },
  {
    id: 'p2',
    supplierId: 's1',
    name: 'OLED Display Module',
    priceRange: '$45.00 - $55.00',
    moq: '50 units',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300&h=300&fit=crop',
    category: 'Displays',
    stock: 850,
  },
  {
    id: 'p3',
    supplierId: 's2',
    name: 'Recycled Poly Blend',
    priceRange: '$5.20 / meter',
    moq: '500 meters',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=300&h=300&fit=crop',
    category: 'Fabrics',
    stock: 5000,
    featured: true,
  },
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-5521',
    buyerId: 'b1',
    supplierId: 's1',
    productId: 'p1',
    quantity: 500,
    totalAmount: 6250,
    status: 'SHIPPED',
    createdAt: '2024-03-15',
    timeline: [
      { status: 'Order Placed', date: '2024-03-15', active: true },
      { status: 'Confirmed', date: '2024-03-16', active: true },
      { status: 'Shipped', date: '2024-03-18', active: true },
      { status: 'Delivered', date: 'Est. 2024-03-22', active: false },
    ],
  },
];

export const MOCK_RFQS: RFQ[] = [
  {
    id: 'RFQ-8802',
    buyerId: 'b1',
    supplierId: 's1',
    productId: 'p2',
    quantity: 200,
    specifications: 'Need custom firmware version 2.1.',
    status: 'PENDING',
    createdAt: '2024-03-20',
    deliveryDate: '2024-04-15',
  },
];
