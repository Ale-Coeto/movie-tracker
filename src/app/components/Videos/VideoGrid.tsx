'use client';
import VideoElement from "./VideoElement";

interface VideoGridProps {
    items: any;
    type?: "movie" | "show";
    explore?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = ({ items, type, explore }) => {


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {items.map((result: any, key: any) => (
                result.poster_path && (
                    <VideoElement key={key} showComplete={false} rate={result.rate} id={result.id} title={result.title || result.name} image={result.poster_path} description={result.overview} date={result.first_air_date || result.release_date} voteAverage={result.vote_average} type={type? (type) : result.title ? "movie" : "show"} explore={explore}/>
            )
            ))}

        </div>
    )
}

export default VideoGrid;