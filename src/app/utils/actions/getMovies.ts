import prisma from '@/app/utils/libs/prismadb';
import getUser from './getUser';
import axios from 'axios';

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

export const getToSeeMovies = async () => {
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

// function generatePrompt(movies: any[]) {
//     let list: string = (movies).map(field => field.title).join();
//     return `Recommend me 10 movies if I have watched: ${list}`
// }


// const getAiResponse = async (generatedPrompt: string) => {
//     try {
//         const response = await axios.post(
//             'https://api.openai.com/v1/engines/davinci/completions',
//             {
//                 prompt: generatedPrompt,
//                 max_tokens: 100,
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//                 },
//             }
//         );

//         console.log(response.data.choices[0].text)
//         return (response.data.choices[0].text);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// export const getMovieTitles = async () => {
//     try {
//         const user = await getUser();

//         if (!user?.id)
//             return [];

//         const movies = await prisma.movie.findMany({
//             where: {
//                 userId: user?.id,
//             },
//             orderBy: {
//                 createdAt: "desc"
//             },
//             select: {
//                 title: true
//             }
//         });

//         if (!movies)
//             return [];

//         const prompt = generatePrompt(movies);

//         const response = await getAiResponse(prompt);
//         console.log(response)

//         return movies;

//     } catch (error: any) {
//         console.log(error, "Get movie titles error");
//         return [];
//     }
// }
