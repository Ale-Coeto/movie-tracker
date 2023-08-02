import prisma from '@/app/libs/prismadb';
import getUser from './getUser';

export const getSeenMovies = async () => {

    try {
        const user = await getUser();

        if (!user?.id)
            return [];

        const movies = await prisma.movie.findMany({
            where: {
                userId: user?.id,
                seen: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        if (!movies)
            return [];

        return movies;

    } catch (error: any) {
        console.log(error, "Get movies error");
        return [];
    }
    
}

export const getToSeeMovies = async () =>  {
    try {
        const user = await getUser();

        if (!user?.id)
            return [];

        const movies = await prisma.movie.findMany({
            where: {
                userId: user?.id,
                seen: false
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        if (!movies)
            return [];

        return movies;

    } catch (error: any) {
        console.log(error, "Get movies error");
        return [];
    }
}
