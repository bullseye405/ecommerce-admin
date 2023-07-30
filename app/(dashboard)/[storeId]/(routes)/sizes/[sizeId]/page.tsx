import prismadb from '@/lib/prismadb';
import { FC } from 'react';
import SizeForm from './components/size-form';

interface SizePageProps {
  params: { sizeId: string };
}

const SizePage: FC<SizePageProps> = async ({ params }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
