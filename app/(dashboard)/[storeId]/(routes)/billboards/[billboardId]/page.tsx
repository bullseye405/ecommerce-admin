import prismadb from '@/lib/prismadb';
import { FC } from 'react';
import BillboardForm from './components/billboard-form';

interface BillboardPageProps {
  params: Promise<{ billboardId: string }>;
}

const BillboardPage: FC<BillboardPageProps> = async ({ params }) => {
  const { billboardId } = await params;
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
