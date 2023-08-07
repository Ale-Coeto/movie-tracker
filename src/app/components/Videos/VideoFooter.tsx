import isLoggedIn from "@/app/hooks/isLogged";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../Button";
import { BiCheckCircle, BiPlusCircle, BiStar, BiTrash, BiUndo } from "react-icons/bi";
import { useRouter } from "next/navigation";
import ActionModal from "../Modals/ActionModal";
import { useState } from "react";
import { isMovieAdded } from "@/app/actions/isAdded";
import RateModal from "../Modals/RateModal";
import SeenModal from "../Modals/SeenModals";

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
    const [add, setAdd] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [rate, setRate] = useState(false);
    const [seenM, setSeen] = useState(false);
    const [undo, setUndo] = useState(false);

    const handleAdd = () => {
        axios.post("/api/addVideo", {
            id, type, title, image, description, date, voteAverage
        }).then(() => {
            toast.success("Added to watchlist");
            router.refresh();

        }).catch((e) => {
            toast.error("Already in watchlist");
        })
    }

    const handleSeen = () => {
        axios.post('api/seenMovie', {
            id, type
        }).then(() => {
            toast.success("Added to watched");
            router.refresh();
        }).catch(() => {
            toast.error("Error adding to watched");
        })
    }

    const handleDelete = () => {
        axios.post("/api/delete", {
            id, type
        }).then(() => {
            toast.success("Deleted from watchlist");
            router.refresh();
        }).catch(() => {
            toast.error("Error deleting from watchlist");
        })
    }


    return (
        <>
            <ActionModal id={id} action="Add" isOpen={add} onClose={() => setAdd(false)} handleAdd={handleAdd} />
            <ActionModal id={id} action="Delete" isOpen={deleted} onClose={() => setDeleted(false)} handleAdd={handleDelete} />
            <SeenModal action="watched" isOpen={seenM} onClose={() => setSeen(false)} handleAdd={handleSeen} />
            <SeenModal action="not watched" isOpen={undo} onClose={() => setUndo(false)} handleAdd={handleSeen} />
            <RateModal id={id} type={type} isOpen={rate} onClose={() => setRate(false)} />

            {/* <ActionModal id={id} action="Update" isOpen={deleted} onClose={() => setDeleted(false)} handleAdd={handleDelete}/> */}
            <div className="flex flex-row justify-end align-bottom">


                {showComplete ? (
                    <>
                        <Button warning onClick={() => setDeleted(true)}>
                            <BiTrash className="text-white text-right text-2xl " />
                        </Button>
                        <Button star onClick={() => setRate(!deleted)}>
                            <BiStar className="text-white text-right text-2xl " />
                        </Button>


                        {seen ? (

                            <Button onClick={() => setSeen(true)}>
                                <BiCheckCircle className="text-white text-right text-2xl " />
                            </Button>
                        ) : (
                            <div className="flex flex-row justify-end align-bottom">
                                <Button onClick={() => setUndo(true)}>
                                    <BiUndo className="text-white text-right text-2xl " />
                                </Button>

                            </div>
                        )}
                    </>

                ) : (
                    <div className="flex flex-row justify-end align-bottom z-40">
                        <Button onClick={() => setAdd(!add)}>
                            <BiPlusCircle className="text-white text-right text-2xl " />
                        </Button>
                    </div>
                )}

            </div>
        </>
    )
}

export default VideoFooter;