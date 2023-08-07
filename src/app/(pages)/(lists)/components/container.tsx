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
        <div className="mb-8 md:px-28">
            <h2>
                {title}
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3">
                {movies.map((movie, key) => (
                    <div >
                        <VideoElement key={key} showComplete={true} type={type} id={movie.id} title={movie.title} rate={movie.rated!} image={movie.image!} description={movie.description!} voteAverage={movie.voteAverage!} date={movie.date!} seen={seen} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Container;