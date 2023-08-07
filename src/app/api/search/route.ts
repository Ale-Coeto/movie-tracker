import getUser from "@/app/actions/getUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
    id: string;
}

export async function GET(req: Request, { params }: { params: IParams }) {
    try {
        const id = params.id;

        const user = await getUser();

        if (!user?.id || !id)
            return null;

        const result = await prisma.movie.findFirstOrThrow({
            where: {
                id: id,
                userId: user.id
            }
        })


        if (!result)
            return null;

        return result;

    } catch (error: any) {
        console.log(error, "Is movie added error");
        return false;
    }

}