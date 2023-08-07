import getUser from "./getUser";
import prisma from "@/app/utils/libs/prismadb";

export async function getDiscussions() {
    try {

        const user = await getUser();
        if (!user?.id)
            return [];

        const discussions = await prisma.discussion.findMany({
            where: {
                userIds: {
                    has: user.id
                }
            }
        })

        if (!discussions)
            return [];

        return discussions;

    } catch (error: any) {
        console.log(error, "Get discussions error");
        return [];
    }
}