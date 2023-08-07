import useLoggedIn from "@/app/utils/hooks/useLogged";
import StarGroup from "../Videos/StarGroup";
import VideoFooter from "../Videos/VideoFooter";
import Modal from "./Modal";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    voteAverage: number;
    rate?: number;
    type: "movie" | "show";
    seen?: boolean;
    showComplete?: boolean;

}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, id, title, image, description, date, voteAverage, rate, type, seen, showComplete }) => {
    const useLogged = useLoggedIn();

    return (
        <Modal isOpen={isOpen} onClose={onClose} video>
            <div className="p-4 text-white text-lg flex flex-col my-4">
                <div className="flex flex-row justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold mb-5">
                            {title}
                        </h1>
                        <p className="text-gray-300">
                            Released: {date}
                            <br />
                            Rating: {voteAverage.toFixed(1)}
                            <br />
                            Type: {type}
                        </p>
                    </div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original${image}`} alt="video thumbnail" className="h-full w-28 rounded-md object-cover" />
                    </div>
                </div>
                <p className="mt-8">
                    {description}
                </p>
                {rate && (
                    <div className="bottom-0 flex flex-row content-center font-normal gap-2 mt-8 items-center">
                        My Rate:
                        <StarGroup rate={rate} />
                    </div>
                )}
            </div>
            {useLogged &&
                <VideoFooter showComplete={showComplete} id={id} title={title} image={image} description={description} date={date} voteAverage={voteAverage} type={type} seen={seen} />
            }
            {/* <Test id="64ca1b82a5fd33988b56c3b7" /> */}
        </Modal>
    )
}

export default VideoModal;