import prismadb from '@/lib/prismadb';
import { FC } from 'react';
import ProductForm from './components/product-form';

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
