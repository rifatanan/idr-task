import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function POST(req, res) {
    console.log('we are here');
    try {
        const prisma = new PrismaClient();
        const result = await prisma.dua.findMany({});
        return NextResponse.json({
            status: 'success',
            result,
        });
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e });
    }
}
