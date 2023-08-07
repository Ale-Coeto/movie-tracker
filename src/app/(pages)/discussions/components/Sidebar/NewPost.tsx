'use client'
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import PostModal from "@/app/components/Modals/PostModal";
import isLoggedIn from "@/app/hooks/isLogged";

interface NewPostProps {
    id: string;
    isLogged?: boolean;
}

const NewPost:React.FC<NewPostProps> = ({id}) => {
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);
    const isLogged = isLoggedIn();

    

    return (
        <>
            {isLogged && (
                <div>
                    <PostModal isOpen={open} onClose={() => setOpen(false)} id={id}/>  
                    <div onClick={() => setOpen(true)} className="fixed rounded-full bottom-6 right-6 bg-tertiary p-3 text-3xl text-white font-bold drop-shadow-xl">
                        <AiOutlinePlus />
                    </div>
                </div>
            )}
        </>
    )
}

export default NewPost;