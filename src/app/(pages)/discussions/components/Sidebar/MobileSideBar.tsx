'use client'
import Button from "@/app/components/Button";
import CreateDiscussionModal from "@/app/components/Modals/CreateDiscussionModal";
import JoinModal from "@/app/components/Modals/JoinModal";
import useLoggedIn from "@/app/utils/hooks/useLogged";
import { Discussion } from "@prisma/client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

interface DesktopSideBarProps {
    general: Discussion | null;
    discussions: Discussion[];
}

const DesktopSideBar: React.FC<DesktopSideBarProps> = ({ general, discussions }) => {
    const router = useRouter();
    const [joinOpen, setJoinOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const [selected, setSelected] = useState(-2);
    const isLogged = useLoggedIn();
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);



    const handleNav = (id: string, title: string, key: number) => {
        setSelected(key);
        router.push(`/discussions/user?id=${id}&title=${title}`);
    }

    return (
        <>
            <div className={clsx(visible && "w-4/5", selected == -1 ? "pb-4 pt-6" : "sm:pb-4 sm:pt-6 pb-7 pt-8", "fixed bg-secondary top-12  left-0 w-10 z-30 flex flex-col justify-center text-center")} onClick={() => setVisible(!visible)}>
                <BsArrowLeft className="text-white self-center z-50" />
            </div>
            <div className="visible md:invisible z-40">
                {visible && (
                    <div>


                        <JoinModal isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
                        <CreateDiscussionModal isOpen={createOpen} onClose={() => setCreateOpen(false)} />

                        {open && (

                            <>
                                <div className="flex flex-col items-center py-4 px-5 bg-custom-dark-gray w-full">

                                </div>
                            </>
                        )}

                        <div className="text-white bg-secondary h-full pt-10 fixed inset-y-0 flex w-4/5 flex-col justify-between z-20">

                            <div className="mt-20 text-lg ">
                                <div className={clsx(selected == -1 && "bg-tertiary", "px-6 py-2 hover:bg-tertiary")} onClick={() => { handleNav("64cf25790ccd285092b7604a", "General", -1); setVisible(false) }}>
                                    {general?.title}
                                </div>

                                {discussions.map((discussion, key) => (
                                    <div key={key} className={clsx(selected == key && "bg-tertiary", "text-lg py-2 px-6 overflow-scroll hover:bg-tertiary w-full")} onClick={() => { handleNav(discussion.id, discussion.title, key); setVisible(false) }}>
                                        {discussion.title}
                                    </div>
                                ))}
                            </div>
                            {isLogged ? (
                                <div className="flex flex-col gap-4 pl-3 pr-7 pb-4">
                                    <Button wfull onClick={() => setJoinOpen(true)}>
                                        Join Discussion
                                    </Button>
                                    <Button wfull onClick={() => setCreateOpen(true)}>
                                        Create Discussion
                                    </Button>
                                </div>
                            ) : (
                                <div className="w-56 p-8 text-gray-400">
                                    Login to join or create discussions
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default DesktopSideBar;