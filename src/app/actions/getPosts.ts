import prisma from "@/app/libs/prismadb";

export async function getPosts(id: string) {
    try {

        if (!id)
            return [];

        const posts = await prisma.post.findMany({
            where: {
                discussionId: id
            },
            include: {
                user: true
            }
        })

        if (!posts)
            return [];

        return posts;

    } catch (error: any) {
        console.log(error, "Get posts error");
        return [];
    }
}