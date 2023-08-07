import prisma from '@/app/utils/libs/prismadb';
import getUser from './getUser';

export const getSeenShows = async () => {

    try {
        const user = await getUser();

        if (!user?.id)
            return [];

        const shows = await prisma.show.findMany({
            where: {
                userId: user?.id,
                seen: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        if (!shows)
            return [];

        return shows;

    } catch (error: any) {
        console.log(error, "Get shows error");
        return [];
    }

}

export const getToSeeShows = async () => {
    try {
        const user = await getUser();
        if (!user?.id)
            return [];

        const shows = await prisma.show.findMany({
            where: {
                userId: user?.id,
                seen: false
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        if (!shows)
            return [];

        return shows;

    } catch (error: any) {
        console.log(error, "Get shows error");
        return [];
    }

}