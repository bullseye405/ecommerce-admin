import { auth } from '@clerk/nextjs/server';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import prismadb from '@/lib/prismadb';
import Navbar from '@/components/navbar';

interface DashboardLayoutProps {
  children: ReactNode;
  params: Promise<{ storeId: string }>;
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { storeId } = await params;
  const { userId } = await auth();
  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
