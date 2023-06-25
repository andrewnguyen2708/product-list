export interface ProductsType {
  id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
}

export interface ResponseType {
  products: ProductsType[];
}
