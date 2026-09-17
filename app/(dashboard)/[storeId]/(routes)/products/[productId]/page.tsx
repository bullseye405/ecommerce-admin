import prismadb from '@/lib/prismadb';
import { FC } from 'react';

import ProductForm from './components/product-form';

interface ProductPageProps {
  params: Promise<{ productId: string; storeId: string }>;
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const { productId, storeId } = await params;
  const product = await prismadb.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      category: true,
      size: true,
      color: true,
      images: true,
    },
  });

  const categories = await prismadb.category.findMany({
    where: {
      storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          initialData={product}
          categories={categories}
          sizes={sizes}
          colors={colors}
        />
      </div>
    </div>
  );
};

export default ProductPage;
