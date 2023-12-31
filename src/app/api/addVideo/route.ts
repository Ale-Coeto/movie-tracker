import getUser from '@/app/utils/actions/getUser';
import prisma from '@/app/utils/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const user = await getUser();
        const body = await req.json();

        if (!user || !user?.email)
            return new NextResponse("User not found", { status: 404 });

        if (!body)
            return new NextResponse("Missing information", { status: 400 });


        if (body.type == "movie") {

            const newMovie = await prisma.movie.create({
                data: {
                    dbId: body.id,
                    title: body.title,
                    image: body.image,
                    description: body.description,
                    voteAverage: body.voteAverage,
                    date: body.date,

                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }

            })
            return NextResponse.json(newMovie);

        } else {
            const newShow = await prisma.show.create({
                data: {
                    dbId: body.id,
                    title: body.title,
                    image: body.image,
                    description: body.description,
                    voteAverage: body.voteAverage,
                    date: body.date,

                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            })

            return NextResponse.json(newShow);
        }


    } catch (error: any) {
        console.log(error, "Add error");
        return new NextResponse("Add error", { status: 500 });
    }
}