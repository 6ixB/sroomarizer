import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, context:any) {
  try {
    const {params} = context;
    const userId = params.userId.toString();

    if (!userId) {
      console.log("tidak ada userid")
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const token = await prisma.token.findMany({
      where: {
        userId: String(userId),
      },
    });

    return NextResponse.json(token, { status: 200 });
  } catch (error) {
    console.error('Error retrieving token:', error);
    return NextResponse.json({ error: 'Failed to retrieve token' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
    const input = await req.json();
    try {
      const newToken = await prisma.token.create({
        data: {
          userId: input.userId,
          tokenAmount: Number(0)
        },
      });
      return NextResponse.json(newToken, { status: 200 });
    } catch (error) {
      console.error('Error inserting token:', error);
      return NextResponse.json({ error: 'Failed to create token' }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
} 

export async function PUT(req: Request, context: any) {
    try {
      const { params } = context;
      const userId = params.userId.toString();
      const { input } = await req.json();
  
      if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
      }
  
      const updatedToken = await prisma.token.updateMany({
        where: {
          userId: String(userId),
        },
        data: {
          tokenAmount: Number(input.tokenAmount),
        },
      });
  
      return NextResponse.json(updatedToken, { status: 200 });
    } catch (error) {
      console.error('Error updating token:', error);
      return NextResponse.json({ error: 'Failed to update token' }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  }

  
