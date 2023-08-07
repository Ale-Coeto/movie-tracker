import getUser from "@/app/utils/actions/getUser";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/libs/prismadb";

export async function POST(req: Request) {
    try {
        const user = await getUser();
        const body = await req.json();

        if (!user || !user?.id)
            return new NextResponse("User not found", { status: 404 });

        if (!body)
            return new NextResponse("Missing information", { status: 400 });

        if (body.type == "movie") {
            const seenVal = await prisma.movie.findUnique({
                where: {
                    id: body.id,
                    userId: user.id
                }
            })

            if (!seenVal)
                return new NextResponse("Movie not found", { status: 404 });

            const updateMovie = await prisma.movie.update({
                where: {
                    id: body.id,
                    userId: user.id
                },
                data: {
                    seen: !seenVal?.seen
                }
            })

            return NextResponse.json(updateMovie);

        } else {
            const seenVal = await prisma.show.findUnique({
                where: {
                    id: body.id,
                    userId: user.id
                }
            })

            if (!seenVal)
                return new NextResponse("Show not found", { status: 404 });

            const updateShow = await prisma.show.update({
                where: {
                    id: body.id,
                    userId: user.id
                },
                data: {
                    seen: !seenVal?.seen
                }
            })

            return NextResponse.json(updateShow);
        }


    } catch (error: any) {
        console.log(error, "Add movie error");
        return new NextResponse("Add movie error", { status: 500 });
    }
};
