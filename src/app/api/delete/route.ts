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
            const deleteMovie = await prisma.movie.delete({
                where: {
                    id: body.id,
                    userId: user.id
                }
            })

            return NextResponse.json(deleteMovie);

        } else {
            const deleteMovie = await prisma.show.delete({
                where: {
                    id: body.id,
                    userId: user.id
                }
            })

            return NextResponse.json(deleteMovie);

        }

    } catch (error: any) {
        console.log(error, "Delete movie error");
        return new NextResponse("Delete movie error", { status: 500 });
    }

}