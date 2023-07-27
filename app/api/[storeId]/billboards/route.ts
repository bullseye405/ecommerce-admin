import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { useParams } from 'next/navigation';

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }

    const {
      data: { label, imageUrl },
    } = await req.json();

    if (!label) {
      return new NextResponse('Label is required', { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse('Image Url is required', { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse('Store ID is required', { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const store = await prismadb.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[BILLBOARDS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(
  _req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse('Store ID is required', { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const billboards = await prismadb.billboard.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboards);
  } catch (error) {
    console.log('[BILLBOARDS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
