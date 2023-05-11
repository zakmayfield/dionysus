import { ProductsPage } from '@/features/products/ProductsPage';
import { sharedMetadata } from '@/shared/metadata';

export const metadata = {
  ...sharedMetadata,
  title: 'Chasers Fresh Juice | Products',
};

export default function Products() {
  return <ProductsPage />;
}
