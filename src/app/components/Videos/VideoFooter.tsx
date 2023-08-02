import isLoggedIn from "@/app/hooks/isLogged";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../Button";
import { BiCheckCircle, BiPlusCircle, BiTrash, BiUndo } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface VideoFooterProps {
    id: string;
    title: string;
    image?: string;
    description?: string;
    voteAverage?: number;
    date?: string;
    seen?: boolean;
    showComplete?: boolean;
    type: "movie" | "show";
}

const VideoFooter: React.FC<VideoFooterProps> = ({ id, title, image, description, date, voteAverage, type, seen, showComplete }) => {
    const router = useRouter();
    const handleAdd = () => {
        axios.post("/api/addVideo", {
            id, type, title, image, description, date, voteAverage
        }).then(() => {
            toast.success("Added to watchlist");
        }).catch(() => {
            toast.error("Error adding to watchlist");
        })
    }

    const handleSeen = () => {
        axios.post('api/seenMovie', {
            id
        }).then(() => {
            toast.success("Added to watched");
            router.refresh();
        }).catch(() => {
            toast.error("Error adding to watched");
        })
    }

    const handleDelete = () => {
        axios.post("/api/delete", {
            id
        }).then(() => {
            toast.success("Deleted from watchlist");
            router.refresh();
        }).catch(() => {
            toast.error("Error deleting from watchlist");
        })
    }

    return (
        <>
            {showComplete ? (
                seen ? (
                    <div className="flex flex-row justify-end align-bottom">
                        <Button onClick={handleSeen}>
                            <BiCheckCircle className="text-white text-right text-2xl " />
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-row justify-end align-bottom">
                    <Button onClick={handleSeen}>
                        <BiUndo className="text-white text-right text-2xl " />
                    </Button>
                    <Button warning onClick={handleDelete}>
                        <BiTrash className="text-white text-right text-2xl " />
                    </Button>
                </div>
                )

            ) : (
                <div className="flex flex-row justify-end align-bottom">
                    <Button onClick={handleAdd}>
                        <BiPlusCircle className="text-white text-right text-2xl " />
                    </Button>
                </div>
            )}
        </>
    )
}

export default VideoFooter;