import { Product } from './product';

export type OrderStatus = 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  product: Product;
  quantity: number;
  price_at_purchase: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  shipping?: number;
  total: number;
  status: OrderStatus;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  shipping_address?: string;
  notes?: string;
  created_at: string;
  updated_at?: string;
  paid_at?: string;
}

export interface CartItem extends Product {
  quantity: number;
}