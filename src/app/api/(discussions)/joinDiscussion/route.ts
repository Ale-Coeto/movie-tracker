import getUser from "@/app/actions/getUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(req:Request) {
    try {
        const user = await getUser();
        const body = await req.json();
        console.log(body)

        if (!user?.id || !body)
            return [];

        const discussion = await prisma.discussion.findUnique({
            where: {
                id: body.code
            }
        })

        if (!discussion)
            return new NextResponse("Discussion not found", { status: 404 });

        const newDiscussion = await prisma.discussion.update({
            where: {
                id: body.code
            },
            data: {
                users: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })

        return NextResponse.json(newDiscussion);

    } catch (error:any) {
        console.log(error, "Join discussion error");
        return NextResponse.json(error);
    }
}