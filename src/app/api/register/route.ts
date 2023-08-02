import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        //Get body and destructure
        const body = await req.json();
        const { name, email, password } = body;


        //Check if all info is provided
        if (!email || !name || !password)
            return new NextResponse("Missing information", { status: 400 });


        //Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        //Create user
        const user = await prisma.user.create({
            data: {
                name, email, hashedPassword
            }
        });

        return NextResponse.json(user);

    } catch (error: any) {
        console.log(error, "Registration error");
        return new NextResponse("Registration error", { status: 500 });
    }
}