import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';
import SettingsForm from './components/settings-form';

interface SettingsPageProps {
  params: Promise<{
    storeId: string;
  }>;
}
const SettingsPage = async ({ params }: SettingsPageProps) => {
  const { storeId } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: { id: storeId, userId },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <SettingsForm  initialData={store}/>
      </div>
    </div>
  );
};

export default SettingsPage;
