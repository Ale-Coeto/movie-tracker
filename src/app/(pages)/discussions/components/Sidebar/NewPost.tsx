'use client'
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import PostModal from "@/app/components/Modals/PostModal";
import useLoggedIn from "@/app/hooks/useLogged";

interface NewPostProps {
    id: string;
}

const NewPost: React.FC<NewPostProps> = ({ id }) => {
    const [open, setOpen] = useState(false);
    const isLogged = useLoggedIn();



    return (
        <>
            {isLogged && (
                <div>
                    <PostModal isOpen={open} onClose={() => setOpen(false)} id={id} />
                    <div onClick={() => setOpen(true)} className="fixed rounded-full bottom-6 right-6 bg-tertiary p-3 text-3xl text-white font-bold drop-shadow-xl">
                        <AiOutlinePlus />
                    </div>
                </div>
            )}
        </>
    )
}

export default NewPost;