import prisma from '@/app/libs/prismadb';
import getSession from './getSession';

const getUser = async () => {
    try {
         const session = await getSession();
        
        console.log(session?.user?.email)

        if (!session?.user?.email)
            return null;


        const user = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if (!user) 
            return null;

        console.log(user.name, "Get user");
        return user;

    } catch(error: any) {
        console.log(error, "Get user error");
        return null;
    }
}

export default getUser;