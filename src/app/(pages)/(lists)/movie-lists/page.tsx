import Button from "@/app/components/Button";
import Container from "../components/container";
import { getSeenMovies, getToSeeMovies } from "@/app/utils/actions/getMovies";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Logbutton from "../components/loginButton";

const MovieLists = async () => {
    const seenMovies = await getSeenMovies();
    const toSeeMovies = await getToSeeMovies();

    return (
        <>
            <Logbutton />

            <div className="bg-primary">
                <div className="text-white text-xl font-semibold mt-8 p-4">

                    <Container title="To watch" type="movie" movies={toSeeMovies} seen={true} />
                    {toSeeMovies.length === 0 && (
                        <div className="mb-16 p-8 text-center">
                            <p className="text-base font-light mb-4 text-gray-400">No movies added yet </p>
                            <Button redirect href="/explore">
                                Find movies
                            </Button>
                            <Button redirect href="/dashboard">
                                See trending
                            </Button>
                        </div>
                    )}

                    <Container title="Watched" type="movie" movies={seenMovies} />
                    {seenMovies.length === 0 && (
                        <div className="flex flex-col text-center content-center text-base font-light mb-4 text-gray-400">
                            No watched movies yet <br />
                            Click on the
                            <div className="self-center inline-block">
                                <AiOutlineCheckCircle />
                            </div>
                            icon to mark a movie as watched
                        </div>
                    )}

                </div>
            </div>

        </>
    )
}

export default MovieLists;