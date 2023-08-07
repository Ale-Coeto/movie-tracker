import getUser from "@/app/actions/getUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
    console.log("create post");
    try {

        const body = await req.json();
        console.log(body, "body");
        const user = await getUser();
        
        if (!user || !body) {
            return new NextResponse("User not found", { status: 404 });
        }
        
        const newPost = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                rating: body.rating,
                user: {
                    connect: {
                        id: user.id
                    }
                },
                discussion : {
                    connect: {
                        id: body.discussionId
                    }
                }
            }
        })

        return NextResponse.json(newPost);

    } catch(error: any) {
        console.log(error, "Create post error");
        return new NextResponse(error, { status: 500 });
    }
}