'use client'
import Button from "../Button";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { isMovieAdded } from "@/app/actions/isAdded";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Star from "./Star";
import axios from "axios";
import { useRouter } from "next/navigation";


interface RateModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
    type: "movie" | "show";
}

const RateModal: React.FC<RateModalProps> = ({ isOpen, onClose, id, type }) => {
 
    const [input, setInput] = useState(0);
    const router = useRouter();

    const handleRate = () => {
        axios.post("api/rate", {
            id, input, type
        }).then(() => {
            toast.success("Rated");
            router.refresh();
            onClose()
        }).catch(() => {
            toast.error("Error rating");
        })
    }
    

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col text-white p-3">
                <div className="mb-4 text-">
                    How do you rate this movie?
                </div>
                <div className="flex flex-row p-2 gap-1 justify-center mb-6" >
                    <Star setSelected={() => setInput(1)} fill={input >= 1}/>
                    <Star setSelected={() => setInput(2)} fill={input >= 2}/>
                    <Star setSelected={() => setInput(3)} fill={input >= 3}/>
                    <Star setSelected={() => setInput(4)} fill={input >= 4}/>
                    <Star setSelected={() => setInput(5)} fill={input >= 5}/>
                    
                </div>
                <div className="text-center">
                    <Button onClick={handleRate}>
                        Confirm
                    </Button>
                    <Button secondary onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    )
};

export default RateModal;
