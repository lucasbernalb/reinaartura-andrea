export type ProductCategory = 'classical' | 'modern';
export type ProductMedium = 'oil' | 'acrylic' | 'watercolor' | 'mixed' | 'digital' | 'print';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  category: ProductCategory;
  medium?: ProductMedium;
  dimensions?: string;
  year?: number;
  artist?: string;
  featured?: boolean;
  in_stock?: boolean;
  stock_quantity?: number;
}

export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  medium?: ProductMedium;
}

export type ProductsResponse = {
  products: Product[];
  total: number;
};