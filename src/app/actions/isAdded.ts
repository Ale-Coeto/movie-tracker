import getUser from "@/app/actions/getUser";
import prisma from "@/app/libs/prismadb";

export const isMovieAdded = async(id: string) =>{
    try {
        const user = await getUser();
        console.log(id)

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
        
        console.log(result)

        return result;

    } catch (error:any) {
        console.log(error, "Is movie added error");
        return false;
    }
}   

