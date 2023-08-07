import prisma from "@/app/utils/libs/prismadb";

export const getGeneral = async () => {
    try {

        const general = await prisma.discussion.findUnique({
            where: {
                id: "64cf25790ccd285092b7604a"
            }
        })

        if (!general)
            return null;

        return general;

    } catch (error: any) {
        console.log(error, "Get general error");
        return null;
    }

}