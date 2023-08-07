import getUser from "@/app/actions/getUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const user = await getUser();
        const body = await req.json();

        if (!user?.id || !body)
            return [];

        const newDiscussion = await prisma.discussion.create({
            data: {
                title: body.name,
                users: {
                    connect: {
                        id: user.id
                    }
                }

            }
        })

        return NextResponse.json(newDiscussion);
    } catch (error: any) {
        console.log(error, "Create discussion error");
        return NextResponse.json(error);
    }
}