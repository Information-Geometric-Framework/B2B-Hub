/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'BUYER' | 'SUPPLIER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Supplier {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  verifiedSince: string;
  logo: string;
  category: string;
  description: string;
  tags: string[];
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  documents: { name: string; url: string; status: 'PENDING' | 'VERIFIED' }[];
}

export interface Product {
  id: string;
  supplierId: string;
  name: string;
  priceRange: string;
  moq: string; // Minimum Order Quantity
  image: string;
  category: string;
  stock: number;
  featured?: boolean;
}

export interface RFQ {
  id: string;
  buyerId: string;
  supplierId: string;
  productId?: string;
  quantity: number;
  specifications: string;
  status: 'PENDING' | 'REPLIED' | 'ACCEPTED' | 'REJECTED';
  createdAt: string;
  deliveryDate: string;
}

export interface Order {
  id: string;
  buyerId: string;
  supplierId: string;
  productId: string;
  quantity: number;
  totalAmount: number;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED';
  createdAt: string;
  timeline: {
    status: string;
    date: string;
    active: boolean;
  }[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}
