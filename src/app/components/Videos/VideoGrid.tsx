'use client';
import { get } from "http";
import VideoElement from "./VideoElement";
import { getMovie, getTrendingMovies } from "../../actions/getTrending";

interface VideoGridProps {
    items: any;
    type: "movie" | "show";
}

const VideoGrid: React.FC<VideoGridProps> = ({ items, type }) => {


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {items.map((result: any, key: any) => (
                <VideoElement key={key} id={result.id} title={result.title || result.name} image={result.poster_path} description={result.overview} date={result.first_air_date || result.release_date} voteAverage={result.vote_average} type={type} />
            ))}

        </div>
    )
}

export default VideoGrid;