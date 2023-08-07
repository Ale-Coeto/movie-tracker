import getUser from '@/app/utils/actions/getUser';
import prisma from '@/app/utils/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    try {
        const user = await getUser();
        const body = await req.json();

        if (!user?.id || !body)
            return new NextResponse("Missing information", { status: 400 });

        if (body.type == "movie") {
            const update = await prisma.movie.update({
                where: {
                    id: body.id,
                    userId: user.id
                },
                data: {
                    rated: body.input
                }
            })

            return NextResponse.json(update);
        } else {
            const update = await prisma.show.update({
                where: {
                    id: body.id,
                    userId: user.id
                },
                data: {
                    rated: body.input
                }
            })

            return NextResponse.json(update);
        }
    } catch (error: any) {
        console.log(error, "Rate error");
        return new NextResponse("Rate error", { status: 500 });
    }

}