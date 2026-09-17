import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ colorId: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }

    const color = await prismadb.color.findUnique({
      where: {
        id: (await params).colorId,
      },
    });

    return NextResponse.json(color);
  } catch (error) {
    console.log('[COLOR_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ storeId: string; colorId: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }
    const {
      data: { name, value },
    } = await req.json();

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    if (!value) {
      return new NextResponse('Value is required', { status: 400 });
    }

    if (!(await params).colorId) {
      return new NextResponse('Color id is required', { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: (await params).storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const color = await prismadb.color.updateMany({
      where: {
        id: (await params).colorId,
      },
      data: {
        name,
        value,
      },
    });

    return NextResponse.json(color);
  } catch (error) {
    console.log('[COLOR_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ storeId: string; colorId: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }

    if (!(await params).colorId) {
      return new NextResponse('color id is required', { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: (await params).storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const color = await prismadb.color.deleteMany({
      where: {
        id: (await params).colorId,
      },
    });

    return NextResponse.json(color);
  } catch (error) {
    console.log('[COLOR_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
