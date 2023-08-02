import VideoElement from "@/app/components/Videos/VideoElement";
import { Movie } from "@prisma/client";

interface ContainerProps {
    title: string;
    movies: Movie[];
    type: "movie" | "show";
    seen?: boolean;

}

const Container: React.FC<ContainerProps> = ({ title, movies, type, seen }) => {
    return (
        <div className="mb-8">
            <h2>
                {title}
            </h2>

            {movies.map((movie) => (
                <VideoElement showComplete={true} type={type} id={movie.id} title={movie.title} image={movie.image!} description={movie.description!} voteAverage={movie.voteAverage!} date={movie.date!} seen={seen}/>
            ))}
        </div>
    );
}

export default Container;