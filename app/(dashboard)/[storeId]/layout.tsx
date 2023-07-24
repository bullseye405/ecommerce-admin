import { auth } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import prismadb from '@/lib/prismadb';

interface DashboardLayoutProps {
  children: ReactNode;
  params: { storeId: string };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { userId } = auth();
  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <div>Navbar</div>
      {children}
    </>
  );
}
